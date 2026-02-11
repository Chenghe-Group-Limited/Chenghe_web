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
            <div class="tab-btn" onclick="switchFaTab('US')"><span class="t-en">US - CBC Securities</span><span class="t-zh">美国 - CBC Securities</span></div>
        </div>
    </div>

    <div id="fa-hk" class="fa-subpage active">
        <div class="fa-banner">
            Office / Team Photo (Hong Kong)
        </div>
        <div class="fa-content-container">
            <h1 style="margin-bottom:30px; color:var(--color-dark-blue); border-left: 5px solid var(--color-gold); padding-left: 20px;">
                <span class="t-en">HK - Chenghe Capital</span>
                <span class="t-zh">香港 - 成和资本</span>
            </h1>
            <div class="hk-split-block">
                <div class="hk-left-img">Vertical Image</div>
                <div class="hk-right-text">
                    <h3 style="color:var(--color-dark-blue); margin-bottom:15px;">
                        <span class="t-en">Regulatory Information</span>
                        <span class="t-zh">合规信息</span>
                    </h3>
                    <p class="t-en">Chenghe Capital Management Limited provides professional asset management and advisory services in Hong Kong.</p>
                    <p class="t-zh">成和资本管理有限公司在香港提供专业的资产管理和顾问服务。</p>
                    <br>
                    <div class="license-box">
                        <p><strong><span class="t-en">Licensed by SFC Hong Kong:</span><span class="t-zh">香港证监会持牌机构：</span></strong></p>
                        <ul style="margin-top:10px; list-style:none; padding-left:0;">
                            <li style="margin-bottom:5px;"> · <span class="t-en">Type 1: Dealing in Securities</span><span class="t-zh">第一类：证券交易</span></li>
                            <li style="margin-bottom:5px;"> · <span class="t-en">Type 4: Advising on Securities</span><span class="t-zh">第四类：就证券提供意见</span></li>
                            <li style="margin-bottom:5px;"> · <span class="t-en">Type 9: Asset Management</span><span class="t-zh">第九类：资产管理</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="fa-us" class="fa-subpage">
        <div class="fa-banner" style="background-color:var(--color-teal-muted);">
            US Market / NYSE Photo
        </div>
        <div class="fa-content-container">
            <h1 style="margin-bottom:30px; color:var(--color-dark-blue); border-left: 5px solid var(--color-red); padding-left: 20px;">US - CBC Securities</h1>
            <div class="us-text-block">
                <h3 style="color:var(--color-dark-blue); margin-bottom:15px;">Overview</h3>
                <p class="t-en" style="font-size:16px; line-height:1.8;">CBC Securities provides strategic advisory and capital raising services in the United States market. We specialize in connecting Asian issuers with US institutional investors, facilitating cross-border transactions with efficiency and expertise.</p>
                <p class="t-zh" style="font-size:16px; line-height:1.8;">CBC Securities 在美国市场提供战略咨询和融资服务。我们专注于将亚洲发行人与美国机构投资者联系起来，以高效和专业的服务促成跨境交易。</p>
                <a href="https://brokercheck.finra.org/" target="_blank" class="broker-check-btn">
                    Check us on FINRA BrokerCheck &rarr;
                </a>
            </div>
        </div>
    </div>
    `;
}
