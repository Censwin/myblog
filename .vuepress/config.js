const sidebar = require('./siderbar.js');
module.exports = {
  "title": "CENSWIN'S BLOG",
  "description": "KNOWLEDGE PILL",
  "base": '/myblog/',
  "dest": "docs",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/egg.png"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/Censwin",
            "icon": "reco-github"
          }
        ]
      }
    ],
    sidebar,
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "目录索引"
      },
      "tag": {
        "location": 3,
        "text": "标签索引"
      }
    },
    "friendLink": [
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/egg.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "CENSWIN",
    "authorAvatar": "/avatar.png",
    // "record": "xxxx",
    "startYear": "2020"
  },
  "markdown": {
    "lineNumbers": true
  }
}