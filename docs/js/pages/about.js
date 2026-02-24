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
                    <span class="t-en">About Chenghe</span>
                    <span class="t-zh">关于成和</span>
                </h2>
                <div class="t-en">
                    <p>Chenghe Group is an international financial company operating through its subsidiaries established around the world. Our businesses cover financial advisory, private equity financing advisory, M&A and restructuring, asset management, securities underwriting, and more. We are committed to identifying, advising and partnering with outstanding companies in their growth, helping them access international capital markets and participating in building their long-term value on the global stage.</p>
                </div>
                <div class="t-zh">
                    <p>成和集团是一家国际性金融公司，由其旗下在全球各地设立的分支机构开展业务。我们的业务覆盖财务顾问、私募股权融资顾问、并购重组、资产管理、证券承销等，致力于发掘、协助并陪伴行业内优秀企业共同成长，助力其成功登陆国际资本市场，并积极参与公司未来在国际资本市场舞台的构建与价值实现。</p>
                </div>
                <div class="about-subsidiary-links">
                    <a href="javascript:void(0)" onclick="switchFaTab('HK')" class="about-subsidiary-link"><span class="t-en">HK Subsidiary – Chenghe Capital</span><span class="t-zh">香港子公司 – 成和资本</span></a>
                    <a href="javascript:void(0)" onclick="switchFaTab('US')" class="about-subsidiary-link"><span class="t-en">US Subsidiary – CBC Securities</span><span class="t-zh">美国子公司 – CBC证券</span></a>
                    <a href="javascript:void(0)" onclick="switchSpacMainTab('Overview')" class="about-subsidiary-link"><span class="t-en">Cayman Subsidiary (SPAC)</span><span class="t-zh">开曼子公司(SPAC)</span></a>
                </div>
            </div>
        </div>
    </div>

    <div class="track-record-section">
        <div class="record-container">
            <h2 class="record-title">
                <span class="t-en">Track Recor</span>
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

