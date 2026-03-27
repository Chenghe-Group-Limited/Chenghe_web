/**
 * About Us 页面内容模块
 * 管理"关于成和"页面的所有HTML内容
 * 修改此文件即可更新About Us页面内容
 */

// 过往业绩每条记录的完整弹窗内容（点击区块时展示）
var ABOUT_TRACK_RECORDS = [
    {
        titleEn: "Polibeli Group Ltd",
        titleZh: "Polibeli Group Ltd",
        subtitleEn: "Nasdaq De-SPAC | Closed on August 2025 · Cross-Border E-commerce",
        subtitleZh: "纳斯达克 De-SPAC | 完成于 2025 年 8 月 · 跨境电商",
        bodyEn: "Polibeli is a cross-border B2B e-commerce platform headquartered in Indonesia, with its parent company and team based in mainland China.\n\nIts business currently focuses on Japan and Indonesia, and has expanded to Singapore, South Korea, the United States, France, Italy and other countries and regions.\n\nProduct categories cover seven core areas including consumer electronics accessories, home appliances, skincare, oral care, cosmetics, toys and games, and health care products.\n\nChenghe raised over US$30 million in equity investment for the company.",
        bodyZh: "Polibeli 是一家总部位于印度尼西亚的跨境 B2B 电商平台，母公司及团队来自中国大陆。\n\n目前业务重点集中在日本和印尼，并已扩展至新加坡、韩国、美国、法国、意大利等多个国家和地区。\n\n产品品类涵盖七大核心领域，包括消费电子配件、家用电器、护肤品、口腔护理、化妆品、玩具与游戏产品以及健康护理用品。\n\n成和为 Polibeli 募集超过 3 千万美元股权投资。",
        logo: "images/About us/Track Record/Polibeli/polibeli_logo.jpg",
        images: ["images/About us/Track Record/Polibeli/polibeli_showcase.jpg"]
    },
    {
        titleEn: "Femco Steel Technology (FST)",
        titleZh: "启坤科技（FST）",
        subtitleEn: "Nasdaq De-SPAC | Closed on January 2025 · Golf Equipment Manufacturing",
        subtitleZh: "纳斯达克 De-SPAC | 完成于 2025 年 1 月 · 高尔夫设备制造",
        bodyEn: "FST is a Taiwanese company founded in 2003 that specializes in the design, manufacture, distribution and delivery of steel golf club shafts for major golf club brand manufacturers and distributors.\n\nFST is committed to developing its own brand KBS and is one of the largest suppliers of premium steel shafts for golf club brand manufacturers and distributors. Major customers include TaylorMade, Titleist, Ping, Nike, Callaway, Mizuno, Cleveland and other world-renowned brands.\n\nFST is currently the world's second-largest golf club shaft manufacturer by volume and has opened branded experience stores in the United States, Taiwan and Japan.\n\nChenghe raised over US$20 million in equity investment for the company.",
        bodyZh: "FST 是一家成立于 2003 年的台湾公司，主营业务为设计、制造、运销和配送高尔夫球杆铁制杆身给各大高尔夫球杆品牌制造商与经销商。\n\nFST 致力于开发自有品牌 KBS，是高尔夫球杆品牌制造商与经销商在高价型铁制杆身方面最大的供应商之一。主要客户包括 TaylorMade、Titleist、Ping、Nike、Callaway、Mizuno、Cleveland 等世界知名品牌。\n\nFST 目前为世界第二大产量的高尔夫球杆杆身制造商，并在美国、台湾及日本已有开品牌体验店。\n\n成和为 FST 募集超过 2 千万美元股权投资。",
        logo: "images/About us/Track Record/FST/fst_logo.jpg",
        images: ["images/About us/Track Record/FST/FST_showcase.jpg"]
    },
    {
        titleEn: "Taiwan Color Optics (TCO / SemiLux)",
        titleZh: "台湾彩光技术（TCO / SemiLux）",
        subtitleEn: "Nasdaq De-SPAC | Closed on February 2024 · Optics & 3D Sensing Technology",
        subtitleZh: "纳斯达克 De-SPAC | 完成于 2024 年 2 月 · 光学与 3D 传感技术",
        bodyEn: "TCO was founded in 2009 and is a Taiwanese company specializing in optical and 3D sensing technology. It primarily serves autonomous driving, smart lighting, drones and other industry-specific applications, designing and supplying optical components and integrated chips.\n\nTCO works closely with its partner Hon Hai (Foxconn) Group, positioning itself at the forefront of electric vehicle development.\n\nTCO has strategic offices in the Central Taiwan Science Park and Hsinchu Science Park, planning to leverage Taiwan's mature semiconductor vertical supply chain to advance the production of LiDAR and ADB chipsets.\n\nChenghe raised over US$40 million in equity investment from funds for the company.",
        bodyZh: "TCO 成立于 2009 年，是一家专注于光学和三维传感技术的台湾公司，主要为自动驾驶、智能照明和无人机等各行各业定制、设计和供应光学元件和集成芯片。\n\nTCO 与鸿海及其合作伙伴莱孚集团紧密合作，将于电动汽车开发的前沿。\n\nTCO 在台湾中部科学园区和新竹科学园区设有战略性办公室，计划利用台湾成熟的半导体垂直供应链，促进公司用于 LiDAR 和 ADB 芯片组的生产。\n\n成和为公司从基金募集超过 4 千万美元股权投资。",
        logo: "images/About us/Track Record/TCO/TCO_logo.jpg",
        images: ["images/About us/Track Record/TCO/TCO_showcase.jpg"]
    }
];

function openAboutRecordByIndex(index) {
    var rec = ABOUT_TRACK_RECORDS[index];
    if (rec && typeof openAboutDetailModal === "function") {
        openAboutDetailModal(rec.titleEn, rec.titleZh, rec.subtitleEn, rec.subtitleZh, rec.bodyEn, rec.bodyZh, rec.images, rec.logo);
    }
}

function getAboutPageHTML() {
    return `
    <div class="about-hero-bg">
    <div class="about-floating-container">
        <div class="about-float-img">
            <img src="images/About us/Track Record/About_HK.jpg" alt="About Chenghe">
            
            </div>
            <div class="about-float-text">
                <h2>
                    <span class="t-en">About Chenghe</span>
                    <span class="t-zh">关于成和</span>
                </h2>
                <div class="t-en">
                    <p>Chenghe Group is dedicated to connecting global capital markets with high-growth Asian enterprises. We integrate principal investing, capital markets advisory, and special purpose acquisition companies (SPACs) to provide comprehensive, end-to-end solutions for every stage of cross-border growth.</p>
                </div>
                <div class="t-zh">
                    <p>成和集团致力于连接全球资本市场与高成长亚洲企业。我们整合私募股权投资、资本市场顾问及特殊目的收购公司（SPAC）业务，为企业跨境成长的每一阶段提供全面、端到端的综合解决方案。</p>
                </div>
            </div>
        </div>
    </div>

    <div class="about-structure-section">
        <div class="about-structure-inner">
            <h2 class="about-structure-title">
                <span class="t-en">Our Diversified Business</span>
                <span class="t-zh">我们的多元化业务布局</span>
            </h2>
            <div class="about-structure-chart">
                <div class="about-structure-center">
                    <span class="t-en">Chenghe Group</span>
                    <span class="t-zh">成和集团</span>
                </div>
                <div class="about-structure-connector" aria-hidden="true"></div>
                <div class="about-structure-nodes">
                    <div class="about-structure-node">
                        <span class="about-structure-node-name"><span class="t-en">Chenghe Investment</span><span class="t-zh">成和投资</span></span>
                        <span class="about-structure-node-desc t-en">Investment advisory, global presence</span>
                        <span class="about-structure-node-desc t-zh">投资顾问，全球布局</span>
                    </div>
                    <a href="javascript:void(0)" onclick="switchPage('fa'); setTimeout(function(){ switchFaTab('HK'); }, 100);" class="about-structure-node about-structure-node--link">
                        <span class="about-structure-node-name"><span class="t-en">Chenghe Capital Management</span><span class="t-zh">成和资本</span></span>
                        <span class="about-structure-node-desc t-en">HK SFC licensed (Type 1, 4, 9)</span>
                        <span class="about-structure-node-desc t-zh">香港证监会持牌（1、4、9号）</span>
                    </a>
                    <a href="javascript:void(0)" onclick="switchPage('spac'); setTimeout(function(){ switchSpacMainTab('Overview'); }, 100);" class="about-structure-node about-structure-node--link">
                        <span class="about-structure-node-name"><span class="t-en">SPAC Business</span><span class="t-zh">SPAC 业务</span></span>
                        <span class="about-structure-node-desc t-en">US-listed SPACs</span>
                        <span class="about-structure-node-desc t-zh">美国上市 SPAC</span>
                    </a>
                    <a href="javascript:void(0)" onclick="switchPage('fa'); setTimeout(function(){ switchFaTab('US'); }, 100);" class="about-structure-node about-structure-node--link">
                        <span class="about-structure-node-name"><span class="t-en">CBC Securities</span><span class="t-zh">CBC 证券</span></span>
                        <span class="about-structure-node-desc t-en">US SEC registered broker-dealer</span>
                        <span class="about-structure-node-desc t-zh">美国证监会注册经纪商</span>
                    </a>
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
            <div class="news-item-horizontal about-record-item" style="cursor: pointer;" onclick="openAboutRecordByIndex(0)">
                <div class="news-text" style="flex:1;">
                    <h3 style="margin-bottom:10px; color:var(--color-dark-blue);">
                        <span class="t-en">Polibeli Group Ltd</span>
                        <span class="t-zh">Polibeli Group Ltd</span>
                    </h3>
                    <p style="color:var(--color-gold); font-size:13px; font-weight:bold; margin-bottom:10px;">
                        <span class="t-en">Nasdaq De-SPAC | Closed on August 2025 · Cross-Border E-commerce</span>
                        <span class="t-zh">纳斯达克 De-SPAC | 完成于 2025 年 8 月 · 跨境电商</span>
                    </p>
                    <p>
                        <span class="t-en">Cross-border B2B e-commerce platform headquartered in Indonesia. Chenghe raised over US$30 million in equity investment.</span>
                        <span class="t-zh">总部位于印度尼西亚的跨境 B2B 电商平台。成和为其募集超过 3 千万美元股权投资。</span>
                    </p>
                    <p class="about-view-more"><span class="t-en">View details &rarr;</span><span class="t-zh">查看详情 &rarr;</span></p>
                </div>
                <div class="record-logo-box"><img src="images/About us/Track Record/Polibeli/polibeli_logo.jpg" alt="Polibeli"></div>
            </div>
            <div class="news-item-horizontal about-record-item" style="cursor: pointer;" onclick="openAboutRecordByIndex(1)">
                <div class="news-text" style="flex:1;">
                    <h3 style="margin-bottom:10px; color:var(--color-dark-blue);">
                        <span class="t-en">Femco Steel Technology (FST)</span>
                        <span class="t-zh">启坤科技（FST）</span>
                    </h3>
                    <p style="color:var(--color-gold); font-size:13px; font-weight:bold; margin-bottom:10px;">
                        <span class="t-en">Nasdaq De-SPAC | Closed on January 2025 · Golf Equipment Manufacturing</span>
                        <span class="t-zh">纳斯达克 De-SPAC | 完成于 2025 年 1 月 · 高尔夫设备制造</span>
                    </p>
                    <p>
                        <span class="t-en">World's second-largest golf club shaft manufacturer. Chenghe raised over US$20 million in equity investment.</span>
                        <span class="t-zh">世界第二大产量的高尔夫球杆杆身制造商。成和为其募集超过 2 千万美元股权投资。</span>
                    </p>
                    <p class="about-view-more"><span class="t-en">View details &rarr;</span><span class="t-zh">查看详情 &rarr;</span></p>
                </div>
                <div class="record-logo-box"><img src="images/About us/Track Record/FST/fst_logo.jpg" alt="FST"></div>
            </div>
            <div class="news-item-horizontal about-record-item" style="cursor: pointer;" onclick="openAboutRecordByIndex(2)">
                <div class="news-text" style="flex:1;">
                    <h3 style="margin-bottom:10px; color:var(--color-dark-blue);">
                        <span class="t-en">Taiwan Color Optics (TCO / SemiLux)</span>
                        <span class="t-zh">台湾彩光技术（TCO / SemiLux）</span>
                    </h3>
                    <p style="color:var(--color-gold); font-size:13px; font-weight:bold; margin-bottom:10px;">
                        <span class="t-en">Nasdaq De-SPAC | Closed on February 2024 · Optics & 3D Sensing Technology</span>
                        <span class="t-zh">纳斯达克 De-SPAC | 完成于 2024 年 2 月 · 光学与 3D 传感技术</span>
                    </p>
                    <p>
                        <span class="t-en">Taiwanese optical and 3D sensing technology company. Chenghe raised over US$40 million from funds.</span>
                        <span class="t-zh">专注于光学和三维传感技术的台湾公司。成和为公司从基金募集超过 4 千万美元股权投资。</span>
                    </p>
                    <p class="about-view-more"><span class="t-en">View details &rarr;</span><span class="t-zh">查看详情 &rarr;</span></p>
                </div>
                <div class="record-logo-box"><img src="images/About us/Track Record/TCO/TCO_logo.jpg" alt="TCO SemiLux"></div>
            </div>
        </div>
    </div>
    `;
}
