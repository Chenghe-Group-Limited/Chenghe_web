/**
 * Contact Us 页面内容模块
 * 管理"联系我们"页面的所有HTML内容
 * 修改此文件即可更新Contact页面内容
 *
 * 表单发信（Formspree）：
 * 1. 打开 https://formspree.io 注册并登录
 * 2. 点击 "New Form"，填写表单名称，接收邮箱填成和要收咨询的邮箱（如 chenghe@chenghecap.com）
 * 3. 创建后得到 Form ID（形如 xyzabcde），把下面 CONTACT_FORMSPREE_ID 改成你的 Form ID
 * 4. 提交后咨询会发到你在 Formspree 里设置的邮箱
 */
var contactDisplayEmail = "chenghe@chenghecap.com";  // 页面「办公地点」里展示的邮箱（group email，多人接收）
var CONTACT_FORMSPREE_ID = "mojngdba";  // 改成你在 Formspree 创建表单后得到的 Form ID

function getContactPageHTML() {
    var formAction = "https://formspree.io/f/" + CONTACT_FORMSPREE_ID;
    return `
    <div class="contact-wrapper">
        <form id="contact-inquiry-form" class="contact-form" action="${formAction}" method="POST">
            <h2 style="margin-bottom:40px; color:var(--color-dark-blue); font-size:32px;">
                <span class="t-en">Inquiry Form</span>
                <span class="t-zh">在线咨询</span>
            </h2>
            <div id="contact-form-msg" class="contact-form-msg" style="display:none;"></div>
            <div class="form-row"><label><span class="t-en">Name</span><span class="t-zh">姓名</span></label><input type="text" name="name" required></div>
            <div class="form-row"><label><span class="t-en">Email</span><span class="t-zh">邮箱</span></label><input type="email" name="email" required></div>
            <div class="form-row"><label><span class="t-en">Company</span><span class="t-zh">公司</span></label><input type="text" name="company"></div>
            <div class="form-row"><label><span class="t-en">Message</span><span class="t-zh">留言</span></label><textarea name="message" placeholder="Please write your detailed message here..." required></textarea></div>
            <button type="submit" class="submit-btn"><span class="t-en">Submit Inquiry</span><span class="t-zh">提交咨询</span></button>
        </form>
        <div class="contact-info">
            <h2 style="margin-bottom:40px; color:var(--color-dark-blue); font-size:32px;">
                <span class="t-en">Our Office</span>
                <span class="t-zh">办公地点</span>
            </h2>
            <div class="contact-item">
                <h4><span class="t-en">Hong Kong Headquarters</span><span class="t-zh">香港总部</span></h4>
                <p>Unit 2307, Tower One, Lippo Centre, 89 Queensway, Hong Kong<br>Central, Hong Kong</p>
            </div>
            <div class="contact-item">
                <h4>Contact</h4>
                <p>Email: ${contactDisplayEmail}</p>
                <p>Phone: +852 1234 5678</p>
            </div>
        </div>
    </div>
    `;
}
