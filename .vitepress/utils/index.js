/**
 * 单词首字母大写
 * @param str
 * @returns {string}
 */
export const capitalize = str => {
  if (typeof str === 'string' && str.length) {
    return str[0].toUpperCase() + str.slice(1);
  } else {
    return '';
  }
};

/**
 * 转换文件 (夹) 名称
 * @param fileName
 * @param allCapitalize 是否全大写, 默认仅首字母大写
 * @returns {string}
 * @example
 * ```js
 * transformFileName('abc-def'); // Abc Def
 * transformFileName('abc-def', true); // ABC DEF
 * ```
 */
export const transformFileName = (fileName, allCapitalize = false) => {
  if (typeof fileName === 'string' && fileName.length) {
    const index = fileName.indexOf('-');
    if (~fileName.indexOf('-')) {
      const arr = fileName.split('-');
      return arr.map(item => (allCapitalize ? item.toUpperCase() : capitalize(item))).join(' ');
    } else if (~fileName.indexOf(' ')) {
      const arr = fileName.split(' ');
      return arr.map(item => (allCapitalize ? item.toUpperCase() : capitalize(item))).join(' ');
    } else {
      return allCapitalize ? fileName.toUpperCase() : capitalize(fileName);
    }
  } else {
    return '';
  }
};
