/**
 * FA (Financial Advisory) 页面逻辑模块
 * 管理财务顾问页面的所有逻辑和内容
 * 修改此文件即可更新FA页面功能和内容
 */

function switchFaTab(region, updateUrl = true) {
    // 先切换页面（但不更新URL，因为后面会统一更新）
    switchPage('fa', false);
    const tabs = document.querySelectorAll('#fa-tabs .tab-btn');
    tabs.forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.fa-subpage').forEach(el => el.classList.remove('active'));
    if(region === 'HK') {
        document.getElementById('fa-hk').classList.add('active');
        tabs[0].classList.add('active');
    } else {
        document.getElementById('fa-us').classList.add('active');
        tabs[1].classList.add('active');
    }
    
    // 更新URL为 fa-[区域]，保持当前语言状态
    if (updateUrl) {
        const currentLang = document.body.className.includes('lang-zh') ? 'zh' : 'en';
        window.history.pushState({page: 'fa', region: region, lang: currentLang}, '', window.location.pathname + '#fa-' + region + '?lang=' + currentLang);
    }
}

function getFaPageHTML() {
    return `
    <div class="tab-container">
        <div class="tab-list" id="fa-tabs">
            <div class="tab-btn active" onclick="switchFaTab('HK')"><span class="t-en">HK - Chenghe Capital</span><span class="t-zh">香港 - 成和资本</span></div>
            <div class="tab-btn" onclick="switchFaTab('US')"><span class="t-en">US - CBC Securities</span><span class="t-zh">美国 - CBC 证券</span></div>
        </div>
    </div>

    <div id="fa-hk" class="fa-subpage active">
        <div class="fa-banner" id="fa-hk-banner">
            <img src="images/Hong Kong.jpg" alt="Chenghe Capital Hong Kong" style="width:100%; height:100%; object-fit:cover; display:none;"
                 onload="if(this.src && !this.src.endsWith('/'))this.style.display='block'">
            <span class="fa-banner-placeholder" style="display:flex; align-items:center; justify-content:center; height:100%; color:#aaa; font-size:16px;">
        </div>
        <div class="fa-content-container">
            <h1 style="margin-bottom:30px; color:var(--color-dark-blue); border-left: 5px solid var(--color-gold); padding-left: 20px;">
                <span class="t-en">HK - Chenghe Capital Management</span>
                <span class="t-zh">香港 - 成和资本</span>
            </h1>
            <div class="hk-grid-wrap">
                <div class="hk-left-img"><img src="images/FA_HK_Licence.png" alt="HK SFC Licence"></div>
                <div class="hk-right-text">
                    <h3 style="color:var(--color-dark-blue); margin-bottom:15px;">
                        <span class="t-en">Regulatory Information</span>
                        <span class="t-zh">合规信息</span>
                    </h3>
                    <p class="t-en" style="margin-bottom:14px;">Chenghe Capital is a subsidiary of Chenghe Group and holds Type 1 (Dealing in Securities), Type 4 (Advising on Securities), and Type 9 (Asset Management) licences issued by the Hong Kong Securities and Futures Commission (SFC). The company has built an extensive network of strategic partnerships globally and maintains close strategic cooperation with a number of top-tier US investment banks.</p>
                    <p class="t-zh" style="margin-bottom:14px;">成和资本是成和集团的子公司，持有香港证监会（SFC）颁发的 1 号（证券交易）、4 号（就证券提供意见）及 9 号（资产管理）牌照。公司在全球建立了广泛的战略合作网络，并与美国多家顶级投资银行形成了紧密的战略合作关系。</p>
                    <p class="t-en" style="margin-bottom:20px;">Chenghe Capital provides a range of financial services to clients, including marketing, underwriting and placement of securities, as well as investment advisory and discretionary portfolio management services. With comprehensive solutions, Chenghe Capital is committed to being a trusted partner for corporate financing needs.</p>
                    <p class="t-zh" style="margin-bottom:20px;">成和资本为客户提供一系列的金融服务，包括证券的营销、承销与配售，以及投资顾问和全权委托投资组合管理服务。成和资本凭借全面的解决方案，致力于成为企业融资需求可信赖的合作伙伴。</p>
                </div>
                <div class="hk-license-block">
                <p class="t-en" style="margin-bottom:12px; font-size:15px;">SFC-issued financial licences are key enablers for business expansion. Type 1, Type 4 and Type 9 are three core licences, each corresponding to different business functions:</p>
                <p class="t-zh" style="margin-bottom:12px; font-size:15px;">香港证监会（SFC）颁发的金融牌照是拓展业务的关键通行证，其中 1 号、4 号和 9 号牌照是三大核心金融牌照，分别对应不同的业务功能：</p>
                <ul class="license-points" style="list-style:none; padding-left:0; margin:0;">
                    <li class="t-en" style="margin-bottom:10px; font-size:14px; padding-left:16px; position:relative;"><span class="license-point-dot">·</span> <strong>Type 1 (Dealing in Securities):</strong> Enables the firm to provide clients with buying and selling of securities such as stocks and bonds, brokerage services, and to participate in placement and underwriting of securities.</li>
                    <li class="t-zh" style="margin-bottom:10px; font-size:14px; padding-left:16px; position:relative;"><span class="license-point-dot">·</span> <strong>1 号牌照（证券交易）：</strong>允许机构为客户提供股票、债券等证券的买卖与经纪服务，参与证券配售和包销业务。</li>
                    <li class="t-en" style="margin-bottom:10px; font-size:14px; padding-left:16px; position:relative;"><span class="license-point-dot">·</span> <strong>Type 4 (Advising on Securities):</strong> Also known as the &quot;Hong Kong FA licence&quot;, it allows the firm to provide investment advice on securities and publish research reports to clients.</li>
                    <li class="t-zh" style="margin-bottom:10px; font-size:14px; padding-left:16px; position:relative;"><span class="license-point-dot">·</span> <strong>4 号牌照（就证券提供意见）：</strong>又称为「香港 FA 牌照」，允许机构向客户提供证券投资建议和发布研究报告。</li>
                    <li class="t-en" style="margin-bottom:0; font-size:14px; padding-left:16px; position:relative;"><span class="license-point-dot">·</span> <strong>Type 9 (Asset Management):</strong> Allows the firm to manage client portfolios of securities or futures and funds on a discretionary basis.</li>
                    <li class="t-zh" style="margin-bottom:0; font-size:14px; padding-left:16px; position:relative;"><span class="license-point-dot">·</span> <strong>9 号牌照（资产管理）：</strong>允许以全权委托形式管理客户证券或期货投资组合及基金。</li>
                </ul>
                </div>
            </div>
        </div>
    </div>

    <div id="fa-us" class="fa-subpage">
        <div class="fa-banner" style="background-color:var(--color-teal-muted);" id="fa-us-banner">
            <img src="images/New York.jpg" alt="CBC Securities US" style="width:100%; height:100%; object-fit:cover; display:none;"
                 onload="if(this.src && !this.src.endsWith('/'))this.style.display='block'">
            <span class="fa-banner-placeholder" style="display:flex; align-items:center; justify-content:center; height:100%; color:#aaa; font-size:16px;">
        </div>
        <div class="fa-content-container">
            <h1 style="margin-bottom:30px; color:var(--color-dark-blue); border-left: 5px solid var(--color-red); padding-left: 20px;"><span class="t-en">US - CBC Securities</span><span class="t-zh">美国 - CBC 证券</span></h1>
            <div class="us-text-block">
                <h3 style="color:var(--color-dark-blue); margin-bottom:15px;">Overview</h3>
                <p class="t-en" style="font-size:16px; line-height:1.8;">CBC Securities is a registered broker-dealer with the U.S. Securities and Exchange Commission and a member of FINRA. </p>
                <p class="t-zh" style="font-size:16px; line-height:1.8;">CBC 证券有限公司是在美国证券交易委员会（SEC）及美国金融业监管局（FINRA）注册的经纪交易商</p>
                <a href="https://brokercheck.finra.org/firm/summary/46153" target="_blank" class="broker-check-btn">
                    <span class="t-en">Find us on BrokerCheck &rarr;</span>
                    <span class="t-zh">在 BrokerCheck 上查找我们 &rarr;</span>
                </a>
            </div>
        </div>
    </div>
    `;
}
