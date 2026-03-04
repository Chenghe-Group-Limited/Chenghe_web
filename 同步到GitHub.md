# 本地更改同步到 GitHub 步骤

你的本地仓库已正确关联到：`https://github.com/Chenghe-Group-Limited/Chenghe_web`

## 一、在本地终端中操作（推荐用 Git Bash 或 VS Code 终端）

在项目根目录打开终端（路径：`C:\Users\Chloe\OneDrive\桌面\wwwwork\Chenghe\Chenghe_web`），按顺序执行：

### 1. 查看当前修改

```bash
git status
```

### 2. 添加要提交的文件

**提交所有已修改文件：**
```bash
git add .
```

**或只提交指定文件：**
```bash
git add docs/js/main.js
git add docs/js/pages/contact.js
```

### 3. 提交到本地仓库

```bash
git commit -m "描述你的修改内容，例如：更新联系页和主逻辑"
```

### 4. 推送到 GitHub（main 分支）

```bash
git push origin main
```

首次推送时，如提示输入账号密码：
- **用户名**：你的 GitHub 用户名  
- **密码**：使用 **Personal Access Token（个人访问令牌）**，不再支持账号密码。  
  创建方式：GitHub → Settings → Developer settings → Personal access tokens → Generate new token，勾选 `repo` 权限。

---

## 二、用 VS Code / Cursor 图形界面同步

1. 左侧点击 **源代码管理（Source Control）** 图标  
2. 在「更改」列表中勾选要提交的文件，或点「+」暂存全部  
3. 在上方输入框写提交说明，点击 **✓ 提交**  
4. 点击 **同步更改** 或 **推送**，将提交推送到 GitHub  

---

## 三、以后每次改完代码的快速流程

```bash
cd "C:\Users\Chloe\OneDrive\桌面\wwwwork\Chenghe\Chenghe_web"
git add .
git commit -m "简短描述本次修改"
git push origin main
```

执行完 `git push` 后，更改会出现在：  
https://github.com/Chenghe-Group-Limited/Chenghe_web
