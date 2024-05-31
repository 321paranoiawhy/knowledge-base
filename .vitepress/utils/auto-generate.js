import fs from 'fs';
import {generateInlineIcon} from '../../constant.js';
import {transformFileName} from './index.js';

/**
 * 须全大写的技术栈
 * @type {string[]}
 */
const ALL_CAPITALIZE_STACK = ['php'];

const READ_DIR_OPTIONS = {withFileTypes: false, encoding: 'utf-8', recursive: false};

// 假定最深层级为 ./docs/a/b/
// 其下 md 文件为 .docs/a/b/index.md .docs/a/b/example.md
const DOCS_ROOT_PATH = './docs';

const generatedNavbar = [];
const generatedSidebar = {};
// TODO 错误处理
fs.readdirSync(DOCS_ROOT_PATH, READ_DIR_OPTIONS).forEach(name => {
  // 跳过归档 archive.md
  if (name.endsWith('.md')) {
    return;
  }

  const status = fs.lstatSync(`${DOCS_ROOT_PATH}/${name}`);

  if (status.isDirectory()) {
    const firstLevelFolder = `${DOCS_ROOT_PATH}/${name}`;
    const currentNav = {
      text: generateInlineIcon(name) + transformFileName(name),
      items: [],
      activeMatch: `^/${name}/`
    };
    generatedNavbar.push(currentNav);

    fs.readdirSync(firstLevelFolder, READ_DIR_OPTIONS).forEach(folder => {
      // 这里即最深层级
      const secondLevelFolder = `${firstLevelFolder}/${folder}`;
      const transformedFolder = transformFileName(folder, ALL_CAPITALIZE_STACK.includes(folder));

      const currentSidebar = [];
      const currentSidebarItems = [];
      currentSidebar.push({
        text: generateInlineIcon(transformedFolder) + transformedFolder,
        items: currentSidebarItems
      });

      // 键示例: /docs/backend/c-sharp/
      generatedSidebar[`/docs/${name}/${folder}/`] = currentSidebar;

      // TODO 面包屑 breadcrumb 更多内容和样式
      let indexMdContent = `# ${transformedFolder}\n`;

      const archivedMd = fs.readdirSync(secondLevelFolder, READ_DIR_OPTIONS);

      if (
        (!archivedMd.includes('index.md') && archivedMd.length > 0) ||
        (archivedMd.includes('index.md') && archivedMd.length > 1)
      ) {
        indexMdContent += '\n';
      }

      archivedMd.forEach(file => {
        const fileNameWithoutExtension = file.replace('.md', '');

        // 跳过非 md 文件
        if (!file.endsWith('.md')) {
          return;
        } else if (file === 'index.md') {
          // 处理归档 index.md
          currentNav.items.push({
            // ! nav 下拉框似乎不是使用的 v-html, 这里不能直接使用图标字符表示元素
            // text: generateInlineIcon(transformedFolder) + transformedFolder,
            text: transformedFolder,
            // items: currentItems
            // 不加尾随斜杠, 则无法高亮
            // 等价于 `/docs/${name}/${folder}/index.md`, 但悬停显示的链接过于丑陋, 不够 clean
            link: `/docs/${name}/${folder}/`
            // link: `${secondLevelFolder}`
          });
          return;
        }
        const transformFileNameWithoutExtension = transformFileName(fileNameWithoutExtension);
        currentSidebarItems.push({
          text: transformFileNameWithoutExtension,
          link: `/docs/${name}/${folder}/${fileNameWithoutExtension}`
        });

        indexMdContent += `- [${transformFileNameWithoutExtension}](./${encodeURI(file)})\n`;
      });

      // flag w (也可使用 w+) 表示文件不存在则创建文件, 否则覆盖写入源文件
      // 如须追加可指定 flag 为 a (a+) 或使用 fs.appendFileSync
      fs.writeFileSync(`${secondLevelFolder}/index.md`, indexMdContent, {encoding: 'utf8', flag: 'w'});
    });
  }
});

// TODO 去除空白
// const allIndexes = generatedDocs
//   .filter((doc, index) => {
//     if (Array.isArray(doc.items) && !doc.items.length) {
//       return index;
//     }
//   })
//   .forEach(index => generatedDocs.splice(index, 1));

!fs.existsSync('.generated') && fs.mkdirSync('.generated');
fs.writeFileSync('.generated/navbar.json', JSON.stringify(generatedNavbar, null, 2));
fs.writeFileSync('.generated/sidebar.json', JSON.stringify(generatedSidebar, null, 2));

export {generatedNavbar, generatedSidebar};
