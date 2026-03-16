/**
 * Contact Us 页面内容模块
 * 管理"联系我们"页面的所有HTML内容
 * 修改此文件即可更新Contact页面内容
 *
 * 表单提交方式二选一：
 * 【推荐】自建 Worker（支持附件 + 邮件带下载链接）：
 * 1. 填写下面 CONTACT_FORM_WORKER_URL 为你的 Cloudflare Worker 地址（如 https://chenghe-contact-form.xxx.workers.dev）
 * 2. 留空则使用 Formspree（见 CONTACT_FORMSPREE_ID）
 *
 * Formspree（仅文本，无附件）：
 * 1. 打开 https://formspree.io 注册并登录，创建 Form 得到 Form ID
 * 2. 把 CONTACT_FORMSPREE_ID 改成你的 Form ID
 */


var contactDisplayEmail = "chenghe@chenghecap.com";  // 页面「办公地点」里展示的邮箱
const CONTACT_FORM_WORKER_URL = 'https://chenghe-web.vercel.app/api/contact';
var CONTACT_FORMSPREE_ID = "mojngdba";  // Worker 未配置时使用的 Formspree Form ID

function getContactPageHTML() {
    var formAction = CONTACT_FORM_WORKER_URL || ("https://formspree.io/f/" + CONTACT_FORMSPREE_ID);
    return `
    <div class="contact-wrapper">
        <form id="contact-inquiry-form" class="contact-form" action="${formAction}" method="POST" enctype="multipart/form-data">
            <div id="contact-form-msg" class="contact-form-msg" style="display:none;"></div>
            <div class="form-row">
                <label><span class="t-en">Company Name <span style="color:var(--color-red);">*</span></span><span class="t-zh">公司名称 <span style="color:var(--color-red);">*</span></span></label>
                <input type="text" name="company" required>
            </div>
            <div class="form-row">
                <label><span class="t-en">Contact Person <span style="color:var(--color-red);">*</span></span><span class="t-zh">联系人姓名 <span style="color:var(--color-red);">*</span></span></label>
                <input type="text" name="name" required>
            </div>
            <div class="form-row">
                <label><span class="t-en">Title / Position <span style="color:var(--color-red);">*</span></span><span class="t-zh">联系人职位 <span style="color:var(--color-red);">*</span></span></label>
                <input type="text" name="title" required>
            </div>
            <div class="form-row">
                <label><span class="t-en">Email <span style="color:var(--color-red);">*</span></span><span class="t-zh">邮箱 <span style="color:var(--color-red);">*</span></span></label>
                <input type="email" name="email" id="contact-email">
            </div>
            <div class="form-row">
                <label><span class="t-en">WeChat ID</span><span class="t-zh">微信号</span></label>
                <input type="text" name="wechat" id="contact-wechat">
            </div>
            <p style="font-size:12px; color:var(--color-grey); margin-top:-15px; margin-bottom:20px;">
                <span class="t-en">* Please fill in at least one: Email or WeChat ID</span>
                <span class="t-zh">* 邮箱和微信至少填写一项</span>
            </p>
            <div class="form-row">
                <label><span class="t-en">Message</span><span class="t-zh">留言</span></label>
                <textarea name="message" placeholder="" style="height:120px;"></textarea>
            </div>
            <div class="form-row">
                <label><span class="t-en">Supporting Materials (PDF only)</span><span class="t-zh">辅助材料（仅限 PDF 格式）</span></label>
                <input type="file" name="attachment" accept=".pdf" style="padding:10px; background:#fcfcfc; border:1px solid #ddd; border-radius:2px; width:100%; font-size:14px;">
            </div>
            <button type="submit" class="submit-btn"><span class="t-en">Submit</span><span class="t-zh">提交咨询</span></button>
        </form>
        <div class="contact-info">
            <h2 style="margin-bottom:20px; color:var(--color-dark-blue); font-size:32px;">
                <span class="t-en">Office Address</span>
                <span class="t-zh">办公地址</span>
            </h2>
            <div class="contact-item">
                <h4><span class="t-en">Hong Kong Office</span><span class="t-zh">香港办公室</span></h4>
                <p class="t-en">Unit 2307, Tower One, Lippo Centre,<br>89 Queensway, Admiralty, Hong Kong</p>
                <p class="t-zh">香港港岛金钟道 89 号<br>力宝中心一座 2307 室</p>
            </div>
            <h2 style="margin-bottom:20px; color:var(--color-dark-blue); font-size:32px;">
                <span class="t-en">Contact Information</span>
                <span class="t-zh">联系方式</span>
            </h2>
            <div class="contact-item">
                <h4><span class="t-en">Email: </span><span class="t-zh">邮箱: </span></h4>
                <p><span class="t-en">${contactDisplayEmail}</span><span class="t-zh">${contactDisplayEmail}</span></p>
                <h4><span class="t-en">Tel: </span><span class="t-zh">座机: </span></h4>
                <p><span class="t-en">+852 2777 3998</span><span class="t-zh">+852 2777 3998</span></p>
                <h4><span class="t-en">Fax: </span><span class="t-zh">传真: </span></h4>
                <p><span class="t-en">+852 2777 3733</span><span class="t-zh">+852 2777 3733</span></p>
            </div>
        </div>
    </div>
    `;
}
