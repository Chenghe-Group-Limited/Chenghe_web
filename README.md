# Chenghe Group Website

成和集团官方网站，部署在 Vercel 上。

- 线上地址：https://chenghe-web.vercel.app（或绑定的自定义域名）
- GitHub 仓库：https://github.com/Chenghe-Group-Limited/Chenghe_web

---

## 项目结构

```
Chenghe_web/
├── vercel.json              # Vercel 部署配置
├── package.json             # 依赖管理（仅 @vercel/blob）
│
├── api/                     # Vercel Serverless Functions（后端）
│   ├── contact.js           #   联系表单 → 发邮件（Resend）
│   └── contact-upload.js    #   大文件上传 → Vercel Blob 存储
│
└── docs/                    # 前端静态站点（Vercel outputDirectory）
    ├── index.html           #   单页应用入口
    ├── css/
    │   └── styles.css       #   全局样式
    ├── js/
    │   ├── main.js          #   核心逻辑（路由、语言切换、弹窗）
    │   └── pages/
    │       ├── home.js      #   首页
    │       ├── about.js     #   关于我们（含过往业绩案例）
    │       ├── team.js      #   团队（成员数据 + 页面渲染）
    │       ├── spac.js      #   SPAC（项目数据 + 子标签渲染）
    │       ├── fa.js        #   Financial Advisory
    │       └── contact.js   #   联系我们（表单 HTML）
    └── images/              #   图片资源
        ├── logo.jpg         #     网站 logo
        ├── FA_HK_Licence.png#     香港牌照图片
        ├── Team/            #     团队成员照片
        └── About us/        #     案例展示图片
            └── Track Record/
                ├── FST/
                ├── TCO/
                └── Polibeli/
```

---

## 各文件功能说明

### 根目录配置

| 文件 | 作用 |
|---|---|
| `vercel.json` | 告诉 Vercel 用 `docs/` 目录作为静态站点输出 |
| `package.json` | 声明依赖 `@vercel/blob`（大文件上传功能需要） |

### `api/` — 后端 Serverless Functions

| 文件 | 作用 |
|---|---|
| `contact.js` | 接收联系表单提交，通过 Resend API 发送邮件。支持小文件附件（<4.5MB 以 base64 直接附在邮件中）和大文件链接。收件邮箱通过 Vercel 环境变量 `NOTIFY_EMAIL` 配置，多个邮箱用逗号分隔。 |
| `contact-upload.js` | 大文件（4.5MB–50MB）上传接口。为浏览器生成 Vercel Blob 的 client token，文件由浏览器直传 Blob 存储，邮件中附带下载链接。 |

### `docs/js/main.js` — 核心逻辑

管理整个单页应用的运行：
- **路由**：通过 URL hash 切换页面（如 `#home`、`#spac-HHL`）
- **语言切换**：中英文切换，通过 `body.lang-en` / `body.lang-zh` 类名控制显隐
- **团队弹窗**：`openTeamModal()` 函数渲染团队成员详情（履历 + 过往公司 logo）
- **联系表单提交**：`submitContactForm()` 处理表单数据和文件上传
- **新闻滚动条**：首页新闻区块的自定义滚动

### `docs/js/pages/` — 各页面模块

每个页面文件导出一个 `get[PageName]PageHTML()` 函数，返回该页面的 HTML 字符串。

| 文件 | 关键数据/函数 | 修改场景 |
|---|---|---|
| `home.js` | `getHomePageHTML()` | 修改首页横幅文案、新闻卡片内容 |
| `about.js` | `getAboutPageHTML()` + 案例弹窗数据 | 修改公司介绍、增减过往业绩案例 |
| `team.js` | `TEAM_MEMBERS` 数组 + `getTeamPageHTML()` | 增删改团队成员、修改履历、添加公司 logo 路径 |
| `spac.js` | `SPAC_NEWS`、`SPAC_SEC_FILINGS` + `renderSpacContent()` | 修改各 SPAC 的概览/团队/新闻/SEC 文件/管理 |
| `fa.js` | `getFaPageHTML()` | 修改香港/美国两个 FA 板块的内容和 banner 图片 |
| `contact.js` | `getContactPageHTML()` | 修改联系表单的字段和布局 |

### `docs/css/styles.css` — 全局样式

所有页面的样式都在这一个文件中，按区块注释分隔（导航栏、首页、SPAC 页、团队页等）。

---

## 中英文双语机制

页面内容使用 `<span class="t-en">` 和 `<span class="t-zh">` 包裹中英文：

```html
<span class="t-en">About Us</span>
<span class="t-zh">关于我们</span>
```

CSS 根据 `body` 的类名自动显隐：
- `body.lang-en` → 显示 `.t-en`，隐藏 `.t-zh`
- `body.lang-zh` → 显示 `.t-zh`，隐藏 `.t-en`

---

## 内容更新指南

### 常见更新操作

#### 修改首页新闻

编辑 `docs/js/pages/home.js`，找到 `<div class="news-card t-zh">` 或 `t-en` 的区块，修改标题、日期、摘要和链接。

#### 增减团队成员

编辑 `docs/js/pages/team.js` 中的 `TEAM_MEMBERS` 数组。每个成员格式：

```javascript
{
    nameEn: "English Name",
    nameZh: "中文名",
    roleEn: "Title, Company",
    roleZh: "职位，公司",
    photo: "images/Team/photo.jpg",
    logos: [
        { nameEn: "Company", nameZh: "公司", src: "images/logos/company.png" }
    ],
    bioEn: "· English bio line 1\n· Line 2",
    bioZh: "· 中文履历第一行\n· 第二行"
}
```

- `logos` 中的 `src` 留空 `""` 则显示公司名文字，填入图片路径则显示 logo 图片
- 添加成员后，还需在 `getTeamPageHTML()` 函数中添加对应的 team-card HTML

#### 更新 SPAC 新闻

编辑 `docs/js/pages/spac.js` 中的 `SPAC_NEWS` 对象，按 SPAC 名分组：

```javascript
{ titleEn: '...', urlEn: '...', summaryEn: '...', titleZh: '...', urlZh: '...', summaryZh: '...' }
```

#### 更新 SEC Filings

编辑 `docs/js/pages/spac.js` 中的 `SPAC_SEC_FILINGS` 对象：

```javascript
{ date: '05/13/2024', form: 'S-1', url: 'https://www.sec.gov/...' }
```

`url` 留空则显示短横线，填入链接则第三列显示可点击的网址。

#### 替换图片占位符

多个位置有 `src=""` 的图片占位，放入图片后填写路径即可：
- About 页顶部图片 → `about.js` 第 53 行
- FA 页 HK banner → `fa.js` 第 39 行
- FA 页 US banner → `fa.js` 第 76 行

#### 修改联系表单收件邮箱

在 Vercel Dashboard > Settings > Environment Variables 中修改 `NOTIFY_EMAIL`，多个邮箱用逗号分隔，如：`a@example.com,b@example.com`。无需改代码。

---

## 部署流程

本项目通过 Vercel 自动部署，推送到 `main` 分支即自动上线。

```bash
# 1. 修改文件后暂存
git add .

# 2. 提交（描述改了什么）
git commit -m "更新首页新闻内容"

# 3. 推送到 GitHub，Vercel 自动部署
git push origin main
```

部署通常在 30 秒 ~ 1 分钟内完成。可在 Vercel Dashboard 查看部署状态。

### 本地预览

直接在浏览器中打开 `docs/index.html` 即可预览。联系表单提交功能仅在 Vercel 线上环境可用（依赖 Serverless Functions）。

---

## Vercel 环境变量

在 Vercel Dashboard > Project Settings > Environment Variables 中配置：

| 变量名 | 说明 | 示例 |
|---|---|---|
| `RESEND_API_KEY` | Resend 邮件服务 API 密钥 | `re_xxxxxxxxx` |
| `NOTIFY_EMAIL` | 收件邮箱（多个用逗号分隔） | `a@company.com,b@company.com` |
| `FROM_EMAIL` | 发件人邮箱（需在 Resend 验证域名） | `noreply@company.com` |
| `FROM_NAME` | 发件人名称 | `Chenghe Website` |
| `BLOB_READ_WRITE_TOKEN` | Vercel Blob 存储 token（大文件上传） | 在 Vercel Blob Store 中创建后获取 |
