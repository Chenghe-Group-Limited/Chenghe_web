/**
 * About Us 页面内容模块
 * 管理"关于成和"页面的所有HTML内容
 * 修改此文件即可更新About Us页面内容
 */

function getAboutPageHTML() {
    return `
    <div class="about-hero-bg">
        <div class="about-floating-container">
            <div class="about-float-img">
                About Image
            </div>
            <div class="about-float-text">
                <h2>
                    <span class="t-en">Who We Are</span>
                    <span class="t-zh">我们是谁</span>
                </h2>
                <div class="t-en">
                    <p>Chenghe Capital is a premier asset management firm based in Hong Kong. We are dedicated to creating long-term value through disciplined investment strategies and deep industry insights.</p>
                    <br>
                    <p>Our philosophy is rooted in integrity, innovation, and a global perspective. We bridge the gap between Asian innovation and global capital markets.</p>
                </div>
                <div class="t-zh">
                    <p>成和资本是一家总部位于香港的一流资产管理公司。我们致力于通过严谨的投资策略和深刻的行业洞察创造长期价值。</p>
                    <br>
                    <p>我们的理念植根于诚信、创新和全球视野。我们连接着亚洲创新与全球资本市场。</p>
                </div>
            </div>
        </div>
    </div>

    <div class="track-record-section">
        <div class="record-container">
            <h2 class="record-title">
                <span class="t-en">Track Record</span>
                <span class="t-zh">过往业绩</span>
            </h2>
            <div class="news-item-horizontal" style="cursor: default;">
                <div class="news-img" style="width:250px; height:160px;"></div>
                <div class="news-text" style="flex:1;">
                    <h3 style="margin-bottom:10px; color:var(--color-dark-blue);">Project Alpha Merger</h3>
                    <p style="color:var(--color-gold); font-size:13px; font-weight:bold; margin-bottom:10px;">NASDAQ IPO | 2023</p>
                    <p>
                        <span class="t-en">Successfully completed business combination with XYZ Tech, valuing the combined entity at $1.5B.</span>
                        <span class="t-zh">成功完成与 XYZ Tech 的业务合并，合并后实体估值达15亿美元。</span>
                    </p>
                </div>
            </div>
            <div class="news-item-horizontal" style="cursor: default;">
                <div class="news-img" style="width:250px; height:160px;"></div>
                <div class="news-text" style="flex:1;">
                    <h3 style="margin-bottom:10px; color:var(--color-dark-blue);">Beta Tech Advisory</h3>
                    <p style="color:var(--color-gold); font-size:13px; font-weight:bold; margin-bottom:10px;">Private Placement | 2024</p>
                    <p>
                        <span class="t-en">Served as exclusive financial advisor to Beta Tech for their pre-IPO fundraising round of $200M.</span>
                        <span class="t-zh">担任 Beta Tech 的独家财务顾问，协助其完成2亿美元的 Pre-IPO 融资。</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
    `;
}
