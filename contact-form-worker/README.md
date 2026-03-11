# 联系表单 Worker（Cloudflare + R2 + Resend）

表单提交到本 Worker → 附件存 R2 → 通过 Resend 发邮件到指定邮箱，邮件中含附件下载链接。

## 一、在 Cloudflare 里创建并配置 Worker

### 1. 创建 Worker

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. 左侧 **Workers & Pages** → **Create** → **Create Worker**
3. 名称填：`chenghe-contact-form`，**Deploy** 先发布一次

### 2. 绑定 R2

1. 进入该 Worker → **Settings** → **Bindings**
2. **R2 bucket bindings** → **Add binding**
   - Variable name: `R2_BUCKET`
   - R2 bucket: 选 `chenghe-contact-files`（你已创建的桶）
3. 保存

### 3. 配置变量与密钥

**Settings** → **Variables and Secrets** → **Add**：

| 变量名 | 类型 | 说明 |
|--------|------|------|
| `RESEND_API_KEY` | **Secret** | Resend 的 API Key（在 Resend 后台新建并复制） |
| `NOTIFY_EMAIL` | Text | 接收咨询的邮箱，如 `chenghe@chenghecap.com` |
| `DOWNLOAD_TOKEN` | **Secret** | 任意一长串随机字符（如用密码生成器生成），用于保护附件下载链接 |

可选（发件人显示）：

| 变量名 | 类型 | 说明 |
|--------|------|------|
| `FROM_EMAIL` | Text | 发件人邮箱。未在 Resend 验证域名时留空，会使用 `onboarding@resend.dev` |
| `FROM_NAME` | Text | 发件人显示名，如 `Chenghe Website` |

### 4. 粘贴代码并部署

1. **Edit Code**（或 **Quick Edit**）
2. 用本仓库 `src/index.js` 的全部内容替换默认代码
3. **Save and Deploy**

### 5. 记下 Worker 地址

部署成功后，在 Worker 页面顶部会看到地址，形如：

`https://chenghe-contact-form.你的子域名.workers.dev`

或如果你绑定了自定义域名，用自定义域名，例如：`https://api.chenghecap.com/contact`

---

## 二、在网站里改用 Worker

在项目的 `docs/js/pages/contact.js` 中：

1. 将 `CONTACT_FORM_WORKER_URL` 设为你的 Worker 地址（见上）。
2. 确保 `formAction` 使用该 URL（当前若仍为 Formspree，改为 Worker URL 即可）。

表单已通过 `fetch` 提交并会根据返回的 JSON 显示成功/失败，无需改 `main.js` 的提交逻辑，只要 Worker 返回 `200` 且 `r.ok` 为真即可。

---

## 三、安全说明

- **RESEND_API_KEY**、**DOWNLOAD_TOKEN** 务必只放在 Cloudflare 的 **Secret** 里，不要写进代码或提交到 Git。
- 若之前把 API Key 发到过别处，请在 Resend 后台撤销旧 Key 并新建一把，再更新 Worker 的 Secret。
- **DOWNLOAD_TOKEN** 只用于生成带 token 的下载链接；链接泄露后任何人可下载该附件，因此不要分享邮件内容。

---

## 四、本地用 Wrangler 部署（可选）

若已安装 [Wrangler](https://developers.cloudflare.com/workers/wrangler/install-and-update/)：

```bash
cd contact-form-worker
npx wrangler deploy
```

R2 绑定和变量仍需在 Dashboard 里按上面步骤配置好。
