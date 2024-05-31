import fs from 'fs';
import grayMatter from 'gray-matter';

export default {
  // ! 无法 watch md frontmatter 内容变动, 须重启方生效
  watch: ['docs/**/*.md'],
  load(files) {
    const json = files
      .filter(file => !file.endsWith('index.md'))
      .map(file => {
        const content = fs.readFileSync(file, 'utf-8');

        const {data} = grayMatter(content);

        console.log(file);

        // title path description tags author
        // TODO created date
        // TODO last updated date
        return {
          // ...data,
          title: data.title,
          // TODO default author
          author: data.author || 'why',
          description: data.description || '',
          tags: data.tags || [],
          path: file.replace('.md', '')
        };
      });

    !fs.existsSync('.generated') && fs.mkdirSync('.generated');
    fs.writeFileSync('.generated/tags.json', JSON.stringify(json, null, 2));

    return json;
  }
};
