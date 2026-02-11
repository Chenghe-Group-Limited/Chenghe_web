# 成和资本网站 - 模块化架构说明

## 📁 项目结构

```
项目根目录/
├── index.html              # 原始单文件版本（保留作为备份）
├── index-modular.html      # 新的模块化版本（推荐使用）
├── css/
│   └── styles.css          # 所有样式文件
├── js/
│   ├── main.js             # 核心逻辑（路由、语言切换、页面管理）
│   └── pages/               # 页面内容模块
│       ├── home.js         # 首页内容
│       ├── about.js        # About Us 页面内容
│       ├── team.js         # Team 页面内容
│       ├── spac.js         # SPAC 页面逻辑和内容
│       ├── fa.js           # FA 页面逻辑和内容
│       └── contact.js      # Contact 页面内容
├── images/                 # 图片资源
└── README.md               # 本文件
```

## 🎯 模块化架构的优势

1. **易于维护**：每个页面的内容都在独立的文件中，修改时不会影响其他页面
2. **团队协作**：不同同事可以同时编辑不同页面的文件，减少冲突
3. **代码清晰**：CSS、JavaScript、HTML内容分离，结构清晰
4. **易于理解**：新同事可以快速找到需要修改的文件

## 📝 如何修改页面内容

### 修改首页内容
编辑 `js/pages/home.js` 文件中的 `getHomePageHTML()` 函数

### 修改 About Us 页面
编辑 `js/pages/about.js` 文件中的 `getAboutPageHTML()` 函数

### 修改 Team 页面
编辑 `js/pages/team.js` 文件中的 `getTeamPageHTML()` 函数

### 修改 SPAC 页面
编辑 `js/pages/spac.js` 文件：
- 修改 `getSpacPageHTML()` 函数来更改页面结构
- 修改 `renderSpacContent()` 函数来更改动态内容

### 修改 FA 页面
编辑 `js/pages/fa.js` 文件：
- 修改 `getFaPageHTML()` 函数来更改页面内容
- 修改 `switchFaTab()` 函数来更改切换逻辑

### 修改 Contact 页面
编辑 `js/pages/contact.js` 文件中的 `getContactPageHTML()` 函数

### 修改样式
编辑 `css/styles.css` 文件

### 修改核心功能（路由、语言切换等）
编辑 `js/main.js` 文件

## 🚀 使用方法

1. **开发环境**：
   - 使用 `index-modular.html` 作为主入口文件
   - 在浏览器中打开即可查看效果

2. **部署到 GitHub Pages**：
   - 将 `index-modular.html` 重命名为 `index.html`（或直接替换原文件）
   - 确保所有 `css/`、`js/`、`images/` 文件夹都上传到仓库
   - 推送到 GitHub，GitHub Pages 会自动部署

## ⚠️ 注意事项

1. **文件路径**：确保所有文件路径正确，特别是：
   - CSS 文件路径：`css/styles.css`
   - JavaScript 文件路径：`js/main.js`、`js/pages/*.js`
   - 图片路径：`images/logo.jpg`、`images/Home_HK.jpg`

2. **脚本加载顺序**：
   - `main.js` 必须先加载（包含核心路由逻辑）
   - `spac.js` 和 `fa.js` 需要在页面模块之前加载（包含特殊逻辑）
   - 页面内容模块（`home.js`、`about.js` 等）最后加载

3. **函数命名**：
   - 每个页面模块必须导出对应的 `get[PageName]PageHTML()` 函数
   - SPAC 和 FA 页面还需要导出相应的逻辑函数

## 🔄 从单文件版本迁移

如果你之前使用的是 `index.html`（单文件版本），现在想切换到模块化版本：

1. 备份原 `index.html` 文件
2. 将 `index-modular.html` 重命名为 `index.html`
3. 确保所有 `css/` 和 `js/` 文件夹都已创建并包含相应文件
4. 测试所有功能是否正常

## 📞 需要帮助？

如果遇到问题，请检查：
1. 浏览器控制台是否有错误信息
2. 文件路径是否正确
3. 所有必要的 JavaScript 文件是否都已加载
