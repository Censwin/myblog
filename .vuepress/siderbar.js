const fs = require('fs');
const path = require('path');
const JAVASCRIPT_PATH = '/blogs/javascript'
const CSS_PATH = '/blogs/css'
// const NET_PATH = '/blogs/net'
// const PERFORM_PATH = '/blogs/perform'
// const INTERVIEW_PATH = '/blogs/interview'
const BROWSER_PATH = '/blogs/browser'
const getFile = (prefixPath) => {
  return fs.readdirSync(path.join(process.cwd(), prefixPath))
           .map(item => `${prefixPath}/${item.replace('.md', '')}`)
}
const createSideBarConfig = (title, prefixPath, collapsable = true) => {
  return  {
    title,
    collapsable,
    children: getFile(prefixPath)
  }
}
module.exports = {
  [JAVASCRIPT_PATH]: [
    // createSideBarConfig('JS-基础', JAVASCRIPT_PATH + '/js-base'),
    // createSideBarConfig('JS-异步编程', JAVASCRIPT_PATH + '/js-async'),
    createSideBarConfig('红宝书', JAVASCRIPT_PATH + '/red-book'),
  ],
  [CSS_PATH]: [createSideBarConfig('CSS 技巧', CSS_PATH)],
  [BROWSER_PATH]: [
    createSideBarConfig('浏览器原理', BROWSER_PATH + '/browser-base'),
    createSideBarConfig('页面循环系统', BROWSER_PATH + '/browser-eventloop'),
    createSideBarConfig('浏览器页面及工具', BROWSER_PATH + '/browser-page'),
    // createSideBarConfig('浏览器安全', BROWSER_PATH + '/browser-security'),
  ],
}
