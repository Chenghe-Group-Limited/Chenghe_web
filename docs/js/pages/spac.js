/**
 * SPAC 页面逻辑模块
 * 管理SPAC页面的所有逻辑和动态内容
 * 修改此文件即可更新SPAC页面功能和内容
 */

let currentSpacProject = 'Overview';

// 各 SPAC 项目新闻：titleEn/titleZh 与 urlEn/urlZh；仅中文内容时只填 titleZh+urlZh，该条只在中文页显示；无中文时英文链接在中文页也显示
var SPAC_NEWS = {
    'HHL': [
        { 
            titleEn: 'HH&L Acquisition Co. Announces Closing of Upsized $414 Million Initial Public Offering and Exercise of Underwriters\' Over-Allotment Option in Full', 
            urlEn: 'http://www.prnewswire.com/news-releases/hhl-acquisition-co-announces-closing-of-upsized-414-million-initial-public-offering-and-exercise-of-underwriters-over-allotment-option-in-full-301225164.html',
            summaryEn: 'HH&L Acquisition Co. completes its upsized US$414 million IPO, including full exercise of the underwriters’ over‑allotment option.'
        }
    ],
    'Chenghe': [
        { 
            titleEn: 'Chenghe Acquisition Co. Announces Pricing of $100 Million Initial Public Offering - PR Newswire APAC', 
            urlEn: 'https://en.prnasia.com/releases/apac/chenghe-acquisition-co-announces-pricing-of-100-million-initial-public-offering-359555.shtml',
            summaryEn: 'Chenghe Acquisition Co. prices its US$100 million SPAC IPO of 10,000,000 units on Nasdaq under the symbol CHEAU.'
        },
        { 
            titleEn: 'Chenghe Acquisition Co. Announces Closing of $115 Million Initial Public Offering and Exercise of Underwriters\' Over-Allotment Option in Full - PR Newswire APAC', 
            urlEn: 'http://enold.prnasia.com/releases/apac/chenghe-acquisition-co-announces-closing-of-115-million-initial-public-offering-and-exercise-of-underwriters-over-allotment-option-in-full-360009.shtml',
            summaryEn: 'Chenghe Acquisition Co. closes its upsized US$115 million IPO as underwriters fully exercise their over‑allotment option.'
        },
        { 
            titleZh: 'Chenghe Acquisition Co.宣布完成1.15亿美元的首次公开募股-美通社PR-Newswire', 
            urlZh: 'https://www.prnasia.com/story/360007-1.shtml',
            summaryZh: '成和并购公司宣布完成总额1.15亿美元的首次公开募股，包括承销商完全行使超额配股权。' 
        },
        { 
            titleEn: 'Chenghe Acquisition Co. Announces the Separate Trading of its Class A Ordinary Shares and Warrants Commencing June 23, 2022 - PR Newswire APAC', 
            urlEn: 'http://enold.prnasia.com/releases/apac/chenghe-acquisition-co-announces-the-separate-trading-of-its-class-a-ordinary-shares-and-warrants-commencing-june-23-2022-365601.shtml',
            summaryEn: 'Beginning June 23, 2022, holders of Chenghe Acquisition Co. units may separately trade the Class A ordinary shares and warrants on Nasdaq.'
        },
        { 
            titleZh: 'Chenghe Acquisition宣布其A类普通股和权证自6月23日起分开交易-美通社PR-Newswire', 
            urlZh: 'https://www.prnasia.com/story/365602-1.shtml',
            summaryZh: '自2022年6月23日起，成和并购公司首次公开发行所含A类普通股和权证可在纳斯达克分别交易。'
        }
    ],
    'Chenghe I': [
        { 
            titleEn: 'Femco Steel Technology Co., Ltd. to be Publicly Listed in the U.S. Through a Business Combination with Chenghe Acquisition I Co.', 
            urlEn: 'https://www.prnewswire.com/apac/news-releases/femco-steel-technology-co-ltd-to-be-publicly-listed-in-the-us-through-a-business-combination-with-chenghe-acquisition-i-co-302021622.html',
            summaryEn: 'Femco Steel Technology Co., Ltd. agrees to become a U.S.‑listed company through a business combination with Chenghe Acquisition I Co.'
        },
        { 
            titleZh: '啟坤科技股份有限公司將於整合後與成和Chenghe Acquisition I Co.合併後至美國公開上市-美通社PR-Newswire', 
            urlZh: 'http://hk.prnasia.com/story/432234-2.shtml',
            summaryZh: '啟坤科技股份有限公司宣布将通过与成和 Chenghe Acquisition I Co. 的业务合并，在美国公开上市。'
        }
    ],
    'Chenghe II': [
        { 
            titleEn: 'Chenghe Acquisition II Co. Announces Pricing of $75 Million Initial Public Offering', 
            urlEn: 'https://www.prnewswire.com/apac/news-releases/chenghe-acquisition-ii-co-announces-pricing-of-75-million-initial-public-offering-302167117.html',
            summaryEn: 'Chenghe Acquisition II Co. prices its US$75 million IPO of 7,500,000 units on NYSE American under the symbol CHEB.U.'
        },
        { 
            titleEn: 'Chenghe Acquisition II Co. Announces Closing of $86.25 Million Initial Public Offering', 
            urlEn: 'https://www.prnewswire.com/apac/news-releases/chenghe-acquisition-ii-co-announces-closing-of-86-25-million-initial-public-offering-302168830.html',
            summaryEn: 'Chenghe Acquisition II Co. closes its US$86.25 million IPO after underwriters fully exercise their over‑allotment option.'
        },
        { 
            titleEn: 'Chenghe Acquisition II Co. Announces the Separate Trading of Its Class A Ordinary Shares and Warrants, Commencing on July 29, 2024', 
            urlEn: 'https://www.prnewswire.com/news-releases/chenghe-acquisition-ii-co-announces-the-separate-trading-of-its-class-a-ordinary-shares-and-warrants-commencing-on-july-29-2024-302207817.html',
            summaryEn: 'From July 29, 2024, investors can separately trade Chenghe Acquisition II Co.’s Class A ordinary shares and warrants under tickers CHEB and CHEB WS.'
        }
    ],
    'Chenghe III': []
};

//SPAC Filing Section Code
var SPAC_SEC_FILINGS = {
    'HHL': [
        { form: 'S-1/A', url: 'https://www.sec.gov/Archives/edgar/data/1824185/000110465921009820/tm2030280-7_s1a.htm', dateF: '', dateR: '' },
        { form: '10-Q', url: 'https://www.sec.gov/ix?doc=/Archives/edgar/data/0001824185/000141057821000140/hhla-20210930x10q.htm', dateF: '11/12/2021', dateR: '' },
        { form: '10-Q', url: 'https://www.sec.gov/ix?doc=/Archives/edgar/data/0001824185/000110465921100546/hhla-20210630x10q.htm', dateF: '08/05/2021', dateR: '' },
        { form: '10-Q', url: 'https://www.sec.gov/ix?doc=/Archives/edgar/data/0001824185/000110465921071365/hhla-20210331x10q.htm', dateF: '05/24/2021', dateR: '' },
        { form: '424B4', url: 'https://www.sec.gov/Archives/edgar/data/1824185/000110465921013544/tm2030280-10_424b4.htm', dateF: '02/08/2021', dateR: '' },
        { form: 'S-1MEF', url: 'https://www.sec.gov/Archives/edgar/data/1824185/000110465921012479/tm215385d1_s1mef.htm', dateF: '02/04/2021', dateR: '' },
        { form: 'S-1/A', url: 'https://www.sec.gov/Archives/edgar/data/1824185/000110465921009820/tm2030280-7_s1a.htm', dateF: '02/01/2021', dateR: '' },
        { form: 'S-1', url: 'https://www.sec.gov/Archives/edgar/data/1824185/000110465921005777/tm2030280-5_s1.htm', dateF: '01/20/2021', dateR: '' }
    ],
    'Chenghe': [
        { form: 'S-1', url: '', dateR: '', dateF: '' }
    ],
    'Chenghe I': [
        { form: 'S-1', url: '', dateR: '', dateF: '' }
    ],
    'Chenghe II': [
        { form: 'S-1', url: '', dateR: '', dateF: '' },
        { form: 'DRS', url: '', dateR: '', dateF: '' }
    ],
    'Chenghe III': [
        { form: 'S-1', url: '', dateR: '', dateF: '' }
    ]
};

// 动态生成 SEC 文件描述文字
function getSecFilingLinkText(form) {
    const formDescriptions = {
        'S-1': 'General form for registration securities under the Securities Act of 1933',
        'S-1/A': 'General form for registration securities under the Securities Act of 1933 - Amendment',
        'S-1MEF': 'Registration adding securities to prior Form S-1 registration',
        '10-Q': 'Quarterly Report',
        '10-K': 'Annual Report',
        '424B4': 'Prospectus',
        'DRS': 'Draft Registration Statement',
        '8-K': 'Current Report'
    };
    
    return formDescriptions[form] || `${form} Filing`;
}

function switchSpacMainTab(tabName, updateUrl = true) {
    // 先切换页面（但不更新URL，因为后面会统一更新）
    switchPage('spac', false); 
    currentSpacProject = tabName;
    
    // 更新：使用 data-tab 进行精确匹配
    const tabs = document.querySelectorAll('#spac-main-tabs .tab-btn');
    tabs.forEach(t => {
        t.classList.remove('active');
        // 仅当 data-tab 属性完全相等时才激活，避免 "Chenghe" 激活 "Chenghe I"
        if(t.getAttribute('data-tab') === tabName) {
            t.classList.add('active');
        }
    });
    
    // 更新标题（支持双语）
    const titleEl = document.getElementById('spac-title');
    if (tabName === 'Overview') {
         titleEl.innerHTML = '<span class="t-en">SPAC Overview</span><span class="t-zh">SPAC 概览</span>';
         titleEl.style.fontFamily = ''; // 使用全局标题字体
    } else if (tabName === 'HHL') {
         // HHL 在标题中显示为全名，并使用 Times New Roman
         titleEl.innerHTML = 'HH&L Acquisition Co.';
         titleEl.style.fontFamily = '"Times New Roman", Times, serif';
    } else if (tabName === 'Chenghe') {
         titleEl.innerHTML = 'Chenghe Acquisition Co.';
         titleEl.style.fontFamily = '';
    } else if (tabName === 'Chenghe I') {
         titleEl.innerHTML = 'Chenghe Acquisition I Co.';
         titleEl.style.fontFamily = '';
    } else if (tabName === 'Chenghe II') {
         titleEl.innerHTML = 'Chenghe Acquisition II Co.';
         titleEl.style.fontFamily = '';
    } else if (tabName === 'Chenghe III') {
         titleEl.innerHTML = 'Chenghe Acquisition III Co.';
         titleEl.style.fontFamily = '';
    } else {
         // 兜底：直接显示 tabName
         titleEl.innerHTML = tabName;
         titleEl.style.fontFamily = '';
    }

    renderSpacContent('Overview');
    
    // 更新URL为 spac-[项目名]，保持当前语言状态
    if (updateUrl) {
        const currentLang = document.body.className.includes('lang-zh') ? 'zh' : 'en';
        const urlHash = 'spac-' + tabName.replace(/\s+/g, '-');
        window.history.pushState({page: 'spac', tab: tabName, lang: currentLang}, '', window.location.pathname + '#' + urlHash + '?lang=' + currentLang);
    }
}

function renderSpacContent(subTab) {
    const contentDiv = document.getElementById('spac-dynamic-content');
    let subNavHtml = '';
    
    // 定义子菜单的中英文映射
    const subTabMap = {
        'Overview': '概览',
        'Management': '管理团队',
        'News': '新闻',
        'SEC Filings': 'SEC 文件', 
        'Governance': '公司治理' 
    };

    if (currentSpacProject !== 'Overview') {
        const subTabs = ['Overview', 'Management', 'News', 'SEC Filings', 'Governance'];
        subNavHtml = `<div class="spac-sub-tabs">`;
        subTabs.forEach(t => {
            const activeClass = (t === subTab) ? 'active' : '';
            // 渲染双语按钮
            subNavHtml += `<button class="sub-tab-btn ${activeClass}" onclick="renderSpacContent('${t}')">
                <span class="t-en">${t}</span>
                <span class="t-zh">${subTabMap[t]}</span>
            </button>`;
        });
        subNavHtml += `</div>`;
    }

    let bodyHtml = '';
    
    if (currentSpacProject === 'Overview') {
        bodyHtml = `
            <div class="spac-overview-page" style="max-width:960px; margin:0 auto; padding:0 24px 48px;">
                <section class="spac-intro-section" style="margin-bottom:56px;">
                    <h2 class="spac-overview-h2" style="font-size:26px; color:var(--color-dark-blue); margin-bottom:20px; padding-bottom:12px; border-bottom:2px solid var(--color-gold);">
                        <span class="t-en">What is SPAC</span>
                        <span class="t-zh">什么是 SPAC</span>
                    </h2>
                    <p class="t-en" style="font-size:16px; color:var(--color-grey); line-height:1.85; margin-bottom:16px;">SPAC stands for Special Purpose Acquisition Company (also known as blank-check company). It is a way to help small and mid-sized companies go public quickly. Compared with traditional IPOs, SPAC listings offer higher efficiency, lower fees, more flexible financing, greater media exposure and stronger deal certainty.</p>
                    <p class="t-zh" style="font-size:16px; color:var(--color-grey); line-height:1.85; margin-bottom:16px;">SPAC 全称 Special Purpose Acquisition Company，中文名称为空头支票公司或特殊目的收购公司，是一种帮助中小企业快速上市的方式。相较于传统 IPO，SPAC 上市具有更高的效率、更低的费率、更灵活的融资安排、更高的媒体曝光率以及更强的确定性。</p>
                    <p class="t-en" style="font-size:15px; color:var(--color-dark-blue); font-weight:600; margin:24px 0 12px;">Listing via SPAC generally follows four stages:</p>
                    <p class="t-zh" style="font-size:15px; color:var(--color-dark-blue); font-weight:600; margin:24px 0 12px;">拟上市企业借由 SPAC 模式上市一般分为四个阶段：</p>
                    <ol class="spac-stages-list" style="list-style:none; padding-left:0; margin:0 0 20px;">
                        <li style="display:flex; gap:12px; margin-bottom:14px; font-size:15px; color:var(--color-grey); line-height:1.7;"><span style="flex-shrink:0; width:28px; height:28px; background:var(--color-gold); color:white; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; font-weight:700; font-size:14px;">1</span><span class="t-en">Formation: Sponsors raise capital and form a cash-only shell company (the SPAC).</span><span class="t-zh">设立 SPAC：专业发起人募集资金，创立仅有现金、无实际业务的公司（SPAC）。</span></li>
                        <li style="display:flex; gap:12px; margin-bottom:14px; font-size:15px; color:var(--color-grey); line-height:1.7;"><span style="flex-shrink:0; width:28px; height:28px; background:var(--color-gold); color:white; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; font-weight:700; font-size:14px;">2</span><span class="t-en">SPAC IPO: The SPAC completes its IPO and places proceeds in a trust account.</span><span class="t-zh">SPAC 上市：SPAC 公司完成 IPO 上市，将募集的资金存入专门的信托账户。</span></li>
                        <li style="display:flex; gap:12px; margin-bottom:14px; font-size:15px; color:var(--color-grey); line-height:1.7;"><span style="flex-shrink:0; width:28px; height:28px; background:var(--color-gold); color:white; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; font-weight:700; font-size:14px;">3</span><span class="t-en">Target search: The SPAC identifies and evaluates growth companies as merger targets.</span><span class="t-zh">寻找标的：SPAC 公司寻找并筛选具有成长潜力的非上市公司作为并购标的。</span></li>
                        <li style="display:flex; gap:12px; margin-bottom:14px; font-size:15px; color:var(--color-grey); line-height:1.7;"><span style="flex-shrink:0; width:28px; height:28px; background:var(--color-gold); color:white; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; font-weight:700; font-size:14px;">4</span><span class="t-en">De-SPAC: The SPAC merges with the target in a reverse merger; the target becomes the listed company and the ticker and name change.</span><span class="t-zh">完成并购（De-SPAC）：SPAC 与标的公司达成合并协议，完成反向并购，标的公司借此实现上市，取代 SPAC 成为新的上市公司主体，变更股票代码及公司名称。</span></li>
                    </ol>
                    <p class="t-en" style="font-size:15px; color:var(--color-grey); line-height:1.8;">Compared with traditional reverse mergers, the SPAC structure is a clearer financial tool: the SPAC is a pure cash shell with no debt or legacy business risk, a focused and professional shareholder base, and high capital security, making it a more transparent and efficient path to listing.</p>
                    <p class="t-zh" style="font-size:15px; color:var(--color-grey); line-height:1.8;">与传统的反向并购相比，SPAC 模式具备更强的金融工具属性，其核心优势在于资产结构清晰。SPAC 本身为纯现金壳公司，无负债、无历史业务风险，股东结构集中且专业，资金安全性高，风险更加可控，使得 SPAC 成为更透明、更高效的上市路径选择。</p>
                </section>
                <section class="chenghe-spac-section" style="margin-bottom:40px;">
                    <h2 class="spac-overview-h2" style="font-size:26px; color:var(--color-dark-blue); margin-bottom:20px; padding-bottom:12px; border-bottom:2px solid var(--color-gold);">
                        <span class="t-en">Chenghe SPAC</span>
                        <span class="t-zh">成和 SPAC</span>
                    </h2>
                    <p class="t-en" style="font-size:16px; color:var(--color-grey); line-height:1.85; margin-bottom:32px;">Chenghe has a leading SPAC team in Asia and has successfully sponsored multiple U.S.-listed SPACs. As of March 2026, one SPAC remains in search of a high-potential merger target. Overview of each SPAC:</p>
                    <p class="t-zh" style="font-size:16px; color:var(--color-grey); line-height:1.85; margin-bottom:32px;">成和拥有亚洲一流的 SPAC 团队，过去几年已成功在美国发行多个 SPAC。截至 2026 年 3 月，仍有 1 支在寻找具有高潜力合并标的。各个 SPAC 情况概览如下：</p>
                    <div class="spac-overview-cards" style="display:flex; flex-direction:column; gap:24px;">
                        <a href="javascript:void(0)" onclick="switchSpacMainTab('HHL')" class="spac-overview-card" style="display:block; background:#fff; border-radius:12px; padding:24px 28px; box-shadow:0 4px 20px rgba(45,78,108,0.08); border-left:4px solid var(--color-gold); text-decoration:none; color:inherit; transition:box-shadow 0.25s, transform 0.2s;">
                            <div style="font-weight:700; font-size:18px; color:var(--color-dark-blue); margin-bottom:8px;">HH&L Acquisition Co.</div>
                            <div style="font-size:14px; color:var(--color-gold); font-weight:600; margin-bottom:12px;"><span class="t-en">NYSE: HHLA · IPO size US$414 million</span><span class="t-zh">NYSE: HHLA，IPO 规模 4.14 亿美元</span></div>
                            <p class="t-en" style="font-size:14px; color:var(--color-grey); line-height:1.7; margin:0;">One of the largest and most successful SPACs in Asia, focused on biotech and healthcare; attracted over 10x oversubscription from the world’s largest funds and listed on the NYSE in February 2021.</p>
                            <p class="t-zh" style="font-size:14px; color:var(--color-grey); line-height:1.7; margin:0;">亚洲迄今发行最大、最为成功的 SPAC 之一，专注生物医疗类，共吸引 10 多倍全球最大型基金的超额认购，于 2021 年 2 月在纽约交易所成功上市。</p>
                        </a>
                        <a href="javascript:void(0)" onclick="switchSpacMainTab('Chenghe')" class="spac-overview-card" style="display:block; background:#fff; border-radius:12px; padding:24px 28px; box-shadow:0 4px 20px rgba(45,78,108,0.08); border-left:4px solid var(--color-gold); text-decoration:none; color:inherit; transition:box-shadow 0.25s, transform 0.2s;">
                            <div style="font-weight:700; font-size:18px; color:var(--color-dark-blue); margin-bottom:8px;">Chenghe Acquisition Co.</div>
                            <div style="font-size:14px; color:var(--color-gold); font-weight:600; margin-bottom:12px;"><span class="t-en">Nasdaq: CHEA · IPO size US$115 million</span><span class="t-zh">Nasdaq: CHEA，IPO 规模 1.15 亿美元</span></div>
                            <p class="t-en" style="font-size:14px; color:var(--color-grey); line-height:1.7; margin:0;">Attracted over 4x subscription from top global investors and listed on Nasdaq in April 2022. Business combination with Taiwan Color Optoelectronics Co., Ltd completed on 15 February 2024.</p>
                            <p class="t-zh" style="font-size:14px; color:var(--color-grey); line-height:1.7; margin:0;">该 SPAC 共吸引超过 4 倍全球顶级投资人的认购，于 2022 年 4 月在纳斯达克交易所成功上市。2024 年 2 月 15 日，与台湾彩光科技股份有限公司完成并购上市。</p>
                        </a>
                        <a href="javascript:void(0)" onclick="switchSpacMainTab('Chenghe I')" class="spac-overview-card" style="display:block; background:#fff; border-radius:12px; padding:24px 28px; box-shadow:0 4px 20px rgba(45,78,108,0.08); border-left:4px solid var(--color-gold); text-decoration:none; color:inherit; transition:box-shadow 0.25s, transform 0.2s;">
                            <div style="font-weight:700; font-size:18px; color:var(--color-dark-blue); margin-bottom:8px;">Chenghe Acquisition I Co.</div>
                            <div style="font-size:14px; color:var(--color-gold); font-weight:600; margin-bottom:12px;"><span class="t-en">Nasdaq: LATG · IPO size US$130 million</span><span class="t-zh">Nasdaq: LATG，IPO 规模 1.3 亿美元</span></div>
                            <p class="t-en" style="font-size:14px; color:var(--color-grey); line-height:1.7; margin:0;">Formerly LatAmGrowth SPAC; Chenghe completed the acquisition and assumed control in October 2023, renaming the SPAC—setting a precedent for an Asian sponsor team acquiring a U.S.-listed SPAC. Business combination with Chikun Technology completed on 15 January 2025.</p>
                            <p class="t-zh" style="font-size:14px; color:var(--color-grey); line-height:1.7; margin:0;">该 SPAC 原名 LatAmGrowth SPAC，成和于 2023 年 10 月与其完成股权收购交割，接管控制权并更名，开创了亚洲创始人团队收购美国主板 SPAC 先例。2025 年 1 月 15 日，与启坤科技股份有限公司完成并购上市。</p>
                        </a>
                        <a href="javascript:void(0)" onclick="switchSpacMainTab('Chenghe II')" class="spac-overview-card" style="display:block; background:#fff; border-radius:12px; padding:24px 28px; box-shadow:0 4px 20px rgba(45,78,108,0.08); border-left:4px solid var(--color-gold); text-decoration:none; color:inherit; transition:box-shadow 0.25s, transform 0.2s;">
                            <div style="font-weight:700; font-size:18px; color:var(--color-dark-blue); margin-bottom:8px;">Chenghe Acquisition II Co.</div>
                            <div style="font-size:14px; color:var(--color-gold); font-weight:600; margin-bottom:12px;"><span class="t-en">NYSE: CHEB · IPO size US$86.25 million</span><span class="t-zh">NYSE: CHEB，IPO 规模 8,625 万美元</span></div>
                            <p class="t-en" style="font-size:14px; color:var(--color-grey); line-height:1.7; margin:0;">Attracted multiple oversubscription and listed on the NYSE in June 2024. Business combination with Polibeli Group Ltd completed on 7 August 2025.</p>
                            <p class="t-zh" style="font-size:14px; color:var(--color-grey); line-height:1.7; margin:0;">该 SPAC 吸引多倍超额认购，于 2024 年 6 月在纽约交易所成功上市。2025 年 8 月 7 日，与 Polibeli Group Ltd 完成并购上市。</p>
                        </a>
                        <a href="javascript:void(0)" onclick="switchSpacMainTab('Chenghe III')" class="spac-overview-card" style="display:block; background:#fff; border-radius:12px; padding:24px 28px; box-shadow:0 4px 20px rgba(45,78,108,0.08); border-left:4px solid var(--color-gold); text-decoration:none; color:inherit; transition:box-shadow 0.25s, transform 0.2s;">
                            <div style="font-weight:700; font-size:18px; color:var(--color-dark-blue); margin-bottom:8px;">Chenghe Acquisition III Co.</div>
                            <div style="font-size:14px; color:var(--color-gold); font-weight:600; margin-bottom:12px;"><span class="t-en">Nasdaq: CHECU · IPO size US$126.5 million</span><span class="t-zh">Nasdaq: CHECU，IPO 规模 1.265 亿美元</span></div>
                            <p class="t-en" style="font-size:14px; color:var(--color-grey); line-height:1.7; margin:0;">Attracted 3x oversubscription from top pension plans and funds; raised over US$2.3 million through the concurrent offering; listed on Nasdaq Global Market in September 2025. This SPAC is currently seeking a merger target.</p>
                            <p class="t-zh" style="font-size:14px; color:var(--color-grey); line-height:1.7; margin:0;">该 SPAC 吸引 3 倍顶级养老金计划和基金超额认购，通过联合募资筹集资金逾 230 万美元，于 2025 年 9 月在纳斯达克全球市场成功上市。该 SPAC 目前正在寻找合作标的。</p>
                        </a>
                </div>
                </section>
            </div>`;
    } else {
        if (subTab === 'Overview') {
            // 特定项目使用专门的项目概览内容，其它项目使用通用模板
            if (currentSpacProject === 'HHL') {
                bodyHtml = `
                <div class="hhl-overview-section" style="max-width:1080px; margin:0 auto; padding:40px 32px 32px; border-radius:16px; background:#f5f7fb;">
                    <div style="text-align:center; margin-bottom:32px;">
                        <h3 style="margin-bottom:10px; color:var(--color-dark-blue); font-size:30px; letter-spacing:0.02em;">
                            <span class="t-en">US$414 million offering size</span>
                            <span class="t-zh">发行规模为 4.14 亿美元</span>
                        </h3>
                        <p style="color:var(--color-grey); font-size:18px; margin:0;">
                            <span class="t-en">The largest healthcare-focused SPAC IPO in Asia since 2021</span>
                            <span class="t-zh">2021年以来亚洲最大的侧重医疗领域的 SPAC IPO</span>
                        </p>
                    </div>
                    <div style="display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:24px;">
                        <div style="background:#ffffff; border-radius:14px; padding:20px 22px; box-shadow:0 10px 24px rgba(15,35,52,0.08);">
                            <p style="font-weight:600; margin-bottom:10px; color:var(--color-dark-blue); font-size:16px;">
                                <span class="t-en">Up-sized by around 20%</span>
                                <span class="t-zh">发行规模扩大约 20%</span>
                            </p>
                            <p style="font-size:14px; color:var(--color-grey); margin:0;">
                                <span class="t-en">Final IPO proceeds of approximately US$414 million.</span>
                                <span class="t-zh">最终 IPO 募资规模约 4.14 亿美元。</span>
                            </p>
                        </div>
                        <div style="background:#ffffff; border-radius:14px; padding:20px 22px; box-shadow:0 10px 24px rgba(15,35,52,0.08);">
                            <p style="font-weight:600; margin-bottom:10px; color:var(--color-dark-blue); font-size:16px;">
                                <span class="t-en">Backed by top-tier investors</span>
                                <span class="t-zh">超过 100 家知名机构投资者</span>
                            </p>
                            <p style="font-size:14px; color:var(--color-grey); margin:0;">
                                <span class="t-en">More than 100 leading institutional investors from Asia, Europe and the U.S.</span>
                                <span class="t-zh">来自亚洲、欧洲及美国的逾百家领先机构投资者参与认购。</span>
                            </p>
                        </div>
                        <div style="background:#ffffff; border-radius:14px; padding:20px 22px; box-shadow:0 10px 24px rgba(15,35,52,0.08);">
                            <p style="font-weight:600; margin-bottom:10px; color:var(--color-dark-blue); font-size:16px;">
                                <span class="t-en">Unique healthcare network</span>
                                <span class="t-zh">全球医疗网络与中国资源</span>
                            </p>
                            <p style="font-size:14px; color:var(--color-grey); margin:0;">
                                <span class="t-en">Differentiated access to global healthcare networks and China&apos;s healthcare market.</span>
                                <span class="t-zh">通过全球医疗网络及在中国医疗市场的深厚资源形成独特渠道。</span>
                            </p>
                        </div>
                    </div>
                </div>`;
            } else if (currentSpacProject === 'Chenghe') {
                // Chenghe Acquisition Co. 的专属概览
                bodyHtml = `
                <div class="spac-project-layout ch-overview" style="max-width:1080px; margin:0 auto; padding:40px 32px 32px; border-radius:16px; background:#f5f7fb;">
                    <div style="text-align:center; margin-bottom:32px;">
                        <h3 style="margin-bottom:10px; color:var(--color-dark-blue); font-size:30px; letter-spacing:0.02em;">
                            <span class="t-en">US$115 million offering size</span>
                            <span class="t-zh">发行规模约 1.15 亿美元</span>
                        </h3>
                        <p style="color:var(--color-grey); font-size:18px; margin:0;">
                            <span class="t-en">Business combination with Taiwan Color Optoelectronics Co., Ltd completed on 15 February 2024</span>
                            <span class="t-zh">与台湾彩光科技股份有限公司于 2024 年 2 月 15 日完成并购上市</span>
                        </p>
                    </div>
                    <div style="display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:24px;">
                        <div style="background:#ffffff; border-radius:14px; padding:20px 22px; box-shadow:0 10px 24px rgba(15,35,52,0.08);">
                            <p style="font-weight:600; margin-bottom:10px; color:#B02A30; font-size:16px;">
                                <span class="t-en">Trusted repeat issuer</span>
                                <span class="t-zh">重复发行人获全球机构信任</span>
                            </p>
                            <p style="font-size:14px; color:var(--color-grey); margin:0;">
                                <span class="t-en">Continued support from leading global institutional investors even during challenging market conditions.</span>
                                <span class="t-zh">即使在市场低谷期，仍持续获得全球顶尖投资机构和战略伙伴的支持与投资。</span>
                            </p>
                        </div>
                        <div style="background:#ffffff; border-radius:14px; padding:20px 22px; box-shadow:0 10px 24px rgba(15,35,52,0.08);">
                            <p style="font-weight:600; margin-bottom:10px; color:var(--color-dark-blue); font-size:16px;">
                                <span class="t-en">Global network, Asia access</span>
                                <span class="t-zh">全球网络 · 亚洲独特通路</span>
                            </p>
                            <p style="font-size:14px; color:var(--color-grey); margin:0;">
                                <span class="t-en">Unique connectivity between global capital and the fast‑growing Asian markets.</span>
                                <span class="t-zh">打通全球资本与高速增长的亚洲市场之间的独特通路。</span>
                            </p>
                        </div>
                    </div>
                </div>`;
            } else if (currentSpacProject === 'Chenghe I') {
                // Chenghe I 的专属概览
                bodyHtml = `
                <div class="spac-project-layout ch1-overview" style="max-width:1080px; margin:0 auto; padding:40px 32px 32px; border-radius:16px; background:#f5f7fb;">
                    <div style="text-align:center; margin-bottom:32px;">
                        <h3 style="margin-bottom:10px; color:var(--color-dark-blue); font-size:30px; letter-spacing:0.02em;">
                            <span class="t-en">US$130 million offering size</span>
                            <span class="t-zh">发行规模约 1.3 亿美元</span>
                        </h3>
                        <p style="color:var(--color-grey); font-size:18px; margin:0;">
                            <span class="t-en">Business combination with Qikang Technology Co., Ltd completed on 15 January 2025</span>
                            <span class="t-zh">与启坤科技股份有限公司于 2025 年 1 月 15 日完成并购上市</span>
                        </p>
                    </div>
                    <div style="display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:24px;">
                        <div style="background:#ffffff; border-radius:14px; padding:20px 22px; box-shadow:0 10px 24px rgba(15,35,52,0.08);">
                            <p style="font-weight:600; margin-bottom:10px; color:var(--color-dark-blue); font-size:16px;">
                                <span class="t-en">Pioneering Asia sponsor team</span>
                                <span class="t-zh">开创亚洲发起人团队收购美国主板 SPAC 先例</span>
                            </p>
                            <p style="font-size:14px; color:var(--color-grey); margin:0;">
                                <span class="t-en">One of the first Asia‑based sponsor teams to list and acquire on the U.S. mainboard.</span>
                                <span class="t-zh">成为最早在美国主板成功完成 SPAC 上市及并购的亚洲团队之一。</span>
                            </p>
                        </div>
                        <div style="background:#ffffff; border-radius:14px; padding:20px 22px; box-shadow:0 10px 24px rgba(15,35,52,0.08);">
                            <p style="font-weight:600; margin-bottom:10px; color:var(--color-dark-blue); font-size:16px;">
                                <span class="t-en">Asia new‑economy focus</span>
                                <span class="t-zh">着眼亚太地区新经济高成长潜力企业</span>
                            </p>
                            <p style="font-size:14px; color:var(--color-grey); margin:0;">
                                <span class="t-en">Targeting innovative, high‑growth new‑economy companies across the Asia‑Pacific region.</span>
                                <span class="t-zh">聚焦亚太地区具有高成长潜力的创新型新经济企业。</span>
                            </p>
                        </div>
                    </div>
                </div>`;
            } else if (currentSpacProject === 'Chenghe II') {
                // Chenghe Acquisition II Co. 的专属概览
                bodyHtml = `
                <div class="spac-project-layout ch2-overview" style="max-width:1080px; margin:0 auto; padding:40px 32px 32px; border-radius:16px; background:#f5f7fb;">
                    <div style="text-align:center; margin-bottom:32px;">
                        <h3 style="margin-bottom:10px; color:var(--color-dark-blue); font-size:30px; letter-spacing:0.02em;">
                            <span class="t-en">US$86.25 million offering size</span>
                            <span class="t-zh">发行规模约 8,625 万美元</span>
                        </h3>
                        <p style="color:var(--color-grey); font-size:18px; margin:0;">
                            <span class="t-en">Business combination with Polibeli Group Ltd completed on 8 August 2025</span>
                            <span class="t-zh">与 Polibeli Group Ltd 于 2025 年 8 月 8 日完成并购上市</span>
                        </p>
                    </div>
                    <div style="display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:24px;">
                        <div style="background:#ffffff; border-radius:14px; padding:20px 22px; box-shadow:0 10px 24px rgba(15,35,52,0.08);">
                            <p style="font-weight:600; margin-bottom:10px; color:var(--color-dark-blue); font-size:16px;">
                                <span class="t-en">Repeat sponsor team</span>
                                <span class="t-zh">具有深厚网络和价值创造能力的重复发起人团队</span>
                            </p>
                            <p style="font-size:14px; color:var(--color-grey); margin:0;">
                                <span class="t-en">Experienced investors with a strong track record in Asian capital markets.</span>
                                <span class="t-zh">在亚洲资本市场拥有丰富经验和优秀长期业绩。</span>
                            </p>
                        </div>
                        <div style="background:#ffffff; border-radius:14px; padding:20px 22px; box-shadow:0 10px 24px rgba(15,35,52,0.08);">
                            <p style="font-weight:600; margin-bottom:10px; color:var(--color-dark-blue); font-size:16px;">
                                <span class="t-en">Asia e‑commerce & consumer</span>
                                <span class="t-zh">专注亚太地区电商与消费等潜力行业</span>
                            </p>
                            <p style="font-size:14px; color:var(--color-grey); margin:0;">
                                <span class="t-en">Targeting high‑growth sectors such as e‑commerce and consumer platforms.</span>
                                <span class="t-zh">重点关注电商及消费平台等高增长细分领域。</span>
                            </p>
                        </div>
                    </div>
                </div>`;
            } else if (currentSpacProject === 'Chenghe III') {
                // Chenghe Acquisition III Co. 的专属概览
                bodyHtml = `
                <div class="spac-project-layout ch3-overview" style="max-width:1080px; margin:0 auto; padding:40px 32px 32px; border-radius:16px; background:#f5f7fb;">
                    <div style="text-align:center; margin-bottom:32px;">
                        <h3 style="margin-bottom:10px; color:var(--color-dark-blue); font-size:30px; letter-spacing:0.02em;">
                            <span class="t-en">US$126.5 million offering size</span>
                            <span class="t-zh">发行规模约 1.265 亿美元</span>
                        </h3>
                        <p style="color:var(--color-grey); font-size:18px; margin:0;">
                            <span class="t-en">Successfully listed on Nasdaq Global Market in September 2025</span>
                            <span class="t-zh">于 2025 年 9 月在纳斯达克全球市场成功上市</span>
                        </p>
                    </div>
                    <div style="display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:24px;">
                        <div style="background:#ffffff; border-radius:14px; padding:20px 22px; box-shadow:0 10px 24px rgba(15,35,52,0.08);">
                            <p style="font-weight:600; margin-bottom:10px; color:var(--color-dark-blue); font-size:16px;">
                                <span class="t-en">Global institutional co‑founders</span>
                                <span class="t-zh">引入华尔街大型基金加入联合创始人</span>
                            </p>
                            <p style="font-size:14px; color:var(--color-grey); margin:0;">
                                <span class="t-en">Participation from leading global funds as cornerstone and co‑founding investors.</span>
                                <span class="t-zh">多家全球领先机构基金作为基石及联合创始投资人参与。</span>
                            </p>
                        </div>
                        <div style="background:#ffffff; border-radius:14px; padding:20px 22px; box-shadow:0 10px 24px rgba(15,35,52,0.08);">
                            <p style="font-weight:600; margin-bottom:10px; color:var(--color-dark-blue); font-size:16px;">
                                <span class="t-en">Strong demand from pensions and funds</span>
                                <span class="t-zh">吸引 3 倍顶级养老金计划和基金超额认购</span>
                            </p>
                            <p style="font-size:14px; color:var(--color-grey); margin:0;">
                                <span class="t-en">Oversubscribed by more than three times from top‑tier pension plans and institutional funds.</span>
                                <span class="t-zh">获得顶级养老金计划及机构基金逾三倍超额认购。</span>
                            </p>
                        </div>
                    </div>
                </div>`;
            } else {
            bodyHtml = `
            <div class="spac-project-layout" style="display:flex; gap:60px;">
                <div class="spac-project-text" style="flex:1;">
                    <h3 style="margin-bottom:20px; color:var(--color-dark-blue);">
                        <span class="t-en">About ${currentSpacProject}</span>
                        <span class="t-zh">关于 ${currentSpacProject}</span>
                    </h3>
                    <p class="t-en" style="line-height:1.8; color:var(--color-grey); font-size:15px;">Detailed overview for ${currentSpacProject}. Investment thesis, target size, and strategic vision.</p>
                    <p class="t-zh" style="line-height:1.8; color:var(--color-grey); font-size:15px;">${currentSpacProject} 的详细概览。这里将介绍具体的投资主题、目标规模和战略愿景。</p>
                </div>
                <div class="spac-project-image" style="width:350px; height:250px; background:var(--color-teal-muted); border-radius:4px; flex-shrink:0;">Project Image</div>
            </div>`;
            }
        } else if (subTab === 'Management') {
            // HHL / Chenghe / Chenghe I / Chenghe II / Chenghe III 使用与 team.js 数据一致的管理团队（但弹窗不再展示公司行），其它项目保持占位布局
            if (currentSpacProject === 'HHL') {
                bodyHtml = `
                <div class="team-grid">
                    <div class="team-card" onclick="openHhlMgmtModalFromSpac(0, 'Chief Executive Officer', '首席执行官')">
                        <div class="team-photo"><img src="images/Team/Richard.png" alt="Richard Li / 李琦"></div>
                        <h3 class="team-name" style="font-size:22px; font-weight:700; margin-top:12px;">
                            <span class="t-en">Richard Li</span>
                            <span class="t-zh">李琦</span>
                        </h3>
                        <p class="team-title" style="font-size:13px; font-style:italic; margin-top:8px;">
                            <span class="t-en">Chief Executive Officer</span>
                            <span class="t-zh">首席执行官</span>
                        </p>
                    </div>
                    <div class="team-card" onclick="openHhlMgmtModalFromSpac(10, 'Chairman', '董事长')">
                        <div class="team-photo"><img src="images/Team/Kenneth-W.Hitchner.png" alt="Ken Hitchner"></div>
                        <h3 class="team-name" style="font-size:22px; font-weight:700; margin-top:12px;">
                            <span class="t-en">Ken Hitchner</span>
                            <span class="t-zh">Ken Hitchner</span>
                        </h3>
                        <p class="team-title" style="font-size:13px; font-style:italic; margin-top:8px;">
                            <span class="t-en">Chairman</span>
                            <span class="t-zh">董事长</span>
                        </p>
                    </div>
                    <div class="team-card" onclick="openHhlMgmtModalFromSpac(9, 'Advisory Board Chairman', '咨询委员会主席')">
                        <div class="team-photo"><img src="images/Team/Fenglei-Fang.png" alt="Fenglei Fang / 方凤雷"></div>
                        <h3 class="team-name" style="font-size:22px; font-weight:700; margin-top:12px;">
                            <span class="t-en">Fenglei Fang</span>
                            <span class="t-zh">方凤雷</span>
                        </h3>
                        <p class="team-title" style="font-size:13px; font-style:italic; margin-top:8px;">
                            <span class="t-en">Advisory Board Chairman</span>
                            <span class="t-zh">咨询委员会主席</span>
                        </p>
                    </div>
                </div>`;
            } else if (currentSpacProject === 'Chenghe') {
                // Chenghe Acquisition Co. 管理团队（Ken Hitchner、Richard Li、Shibin Wang、Zhiyang Zhou）
                bodyHtml = `
                <div class="team-grid team-grid--cols-2">
                    <div class="team-card" onclick="openChengheMgmtModalFromSpac(10, 'Advisory Board Chairman', '顾问委员会主席')">
                        <div class="team-photo"><img src="images/Team/Kenneth-W.Hitchner.png" alt="Ken Hitchner"></div>
                        <h3 class="team-name" style="font-size:22px; font-weight:700; margin-top:12px;">
                            <span class="t-en">Ken Hitchner</span>
                            <span class="t-zh">Ken Hitchner</span>
                        </h3>
                        <p class="team-title" style="font-size:13px; font-style:italic; margin-top:8px;">
                            <span class="t-en">Advisory Board Chairman</span>
                            <span class="t-zh">顾问委员会主席</span>
                        </p>
                    </div>
                    <div class="team-card" onclick="openChengheMgmtModalFromSpac(0, 'Chairman', '董事长')">
                        <div class="team-photo"><img src="images/Team/Richard.png" alt="Richard Li / 李琦"></div>
                        <h3 class="team-name" style="font-size:22px; font-weight:700; margin-top:12px;">
                            <span class="t-en">Richard Li</span>
                            <span class="t-zh">李琦</span>
                        </h3>
                        <p class="team-title" style="font-size:13px; font-style:italic; margin-top:8px;">
                            <span class="t-en">Chairman</span>
                            <span class="t-zh">董事长</span>
                        </p>
                    </div>
                    <div class="team-card" onclick="openChengheMgmtModalFromSpac(4, 'Chief Executive Officer', '首席执行官')">
                        <div class="team-photo"><img src="images/Team/Shibin-Wang.png" alt="Shibin Wang / 王世斌"></div>
                        <h3 class="team-name" style="font-size:22px; font-weight:700; margin-top:12px;">
                            <span class="t-en">Shibin Wang</span>
                            <span class="t-zh">王世斌</span>
                        </h3>
                        <p class="team-title" style="font-size:13px; font-style:italic; margin-top:8px;">
                            <span class="t-en">Chief Executive Officer</span>
                            <span class="t-zh">首席执行官</span>
                        </p>
                    </div>
                    <div class="team-card" onclick="openChengheZhouModalFromSpac()">
                        <div class="team-photo"><img src="images/Team/Zhiyang_Zhou.jpg" alt="Zhiyang Zhou / 周志阳"></div>
                        <h3 class="team-name" style="font-size:22px; font-weight:700; margin-top:12px;">
                            <span class="t-en">Zhiyang Zhou</span>
                            <span class="t-zh">周志阳</span>
                        </h3>
                        <p class="team-title" style="font-size:13px; font-style:italic; margin-top:8px;">
                            <span class="t-en">Chief Financial Officer</span>
                            <span class="t-zh">首席财务官</span>
                        </p>
                    </div>
                </div>`;
            } else if (currentSpacProject === 'Chenghe I') {
                // Chenghe I 管理团队（李琦、王世斌、王兆海）
                bodyHtml = `
                <div class="team-grid team-grid--cols-2">
                    <div class="team-card" onclick="openChenghe1MgmtModalFromSpac(0, 'Advisory Board Chairman', '顾问委员会主席')">
                        <div class="team-photo"><img src="images/Team/Richard.png" alt="Richard Li / 李琦"></div>
                        <h3 class="team-name" style="font-size:22px; font-weight:700; margin-top:12px;">
                            <span class="t-en">Richard Li</span>
                            <span class="t-zh">李琦</span>
                        </h3>
                        <p class="team-title" style="font-size:13px; font-style:italic; margin-top:8px;">
                            <span class="t-en">Advisory Board Chairman</span>
                            <span class="t-zh">顾问委员会主席</span>
                        </p>
                    </div>
                    <div class="team-card" onclick="openChenghe1MgmtModalFromSpac(4, 'Chairman', '董事长')">
                        <div class="team-photo"><img src="images/Team/Shibin-Wang.png" alt="Shibin Wang / 王世斌"></div>
                        <h3 class="team-name" style="font-size:22px; font-weight:700; margin-top:12px;">
                            <span class="t-en">Shibin Wang</span>
                            <span class="t-zh">王世斌</span>
                        </h3>
                        <p class="team-title" style="font-size:13px; font-style:italic; margin-top:8px;">
                            <span class="t-en">Chairman</span>
                            <span class="t-zh">董事长</span>
                        </p>
                    </div>
                    <div class="team-card" onclick="openChenghe1MgmtModalFromSpac(7, 'Chief Financial Officer', '首席财务官')">
                        <div class="team-photo"><img src="images/Team/Lyle.jpg" alt="Lyle Wang / 王兆海"></div>
                        <h3 class="team-name" style="font-size:22px; font-weight:700; margin-top:12px;">
                            <span class="t-en">Lyle Wang</span>
                            <span class="t-zh">王兆海</span>
                        </h3>
                        <p class="team-title" style="font-size:13px; font-style:italic; margin-top:8px;">
                            <span class="t-en">Chief Financial Officer</span>
                            <span class="t-zh">首席财务官</span>
                        </p>
                    </div>
                    <div class="team-card" onclick="openChenghe1MariaModalFromSpac()">
                        <div class="team-photo"><img src="images/Team/Maria.jpg" alt="Yixuan Yuan / 袁怡萱"></div>
                        <h3 class="team-name" style="font-size:22px; font-weight:700; margin-top:12px;">
                            <span class="t-en">Yixuan Yuan</span>
                            <span class="t-zh">袁怡萱</span>
                        </h3>
                        <p class="team-title" style="font-size:13px; font-style:italic; margin-top:8px;">
                            <span class="t-en">Chief Executive Officer</span>
                            <span class="t-zh">首席执行官</span>
                        </p>
                    </div>
                </div>`;
            } else if (currentSpacProject === 'Chenghe II') {
                // Chenghe II 管理团队（李琦、王世斌、王兆海）
                bodyHtml = `
                <div class="team-grid">
                    <div class="team-card" onclick="openChenghe2MgmtModalFromSpac(0, 'Advisory Board Chairman', '顾问委员会主席')">
                        <div class="team-photo"><img src="images/Team/Richard.png" alt="Richard Li / 李琦"></div>
                        <h3 class="team-name" style="font-size:22px; font-weight:700; margin-top:12px;">
                            <span class="t-en">Richard Li</span>
                            <span class="t-zh">李琦</span>
                        </h3>
                        <p class="team-title" style="font-size:13px; font-style:italic; margin-top:8px;">
                            <span class="t-en">Advisory Board Chairman</span>
                            <span class="t-zh">顾问委员会主席</span>
                        </p>
                    </div>
                    <div class="team-card" onclick="openChenghe2MgmtModalFromSpac(4, 'Chief Executive Officer', '首席执行官')">
                        <div class="team-photo"><img src="images/Team/Shibin-Wang.png" alt="Shibin Wang / 王世斌"></div>
                        <h3 class="team-name" style="font-size:22px; font-weight:700; margin-top:12px;">
                            <span class="t-en">Shibin Wang</span>
                            <span class="t-zh">王世斌</span>
                        </h3>
                        <p class="team-title" style="font-size:13px; font-style:italic; margin-top:8px;">
                            <span class="t-en">Chief Executive Officer</span>
                            <span class="t-zh">首席执行官</span>
                        </p>
                    </div>
                    <div class="team-card" onclick="openChenghe2MgmtModalFromSpac(7, 'Chief Financial Officer', '首席财务官')">
                        <div class="team-photo"><img src="images/Team/Lyle.jpg" alt="Lyle Wang / 王兆海"></div>
                        <h3 class="team-name" style="font-size:22px; font-weight:700; margin-top:12px;">
                            <span class="t-en">Lyle Wang</span>
                            <span class="t-zh">王兆海</span>
                        </h3>
                        <p class="team-title" style="font-size:13px; font-style:italic; margin-top:8px;">
                            <span class="t-en">Chief Financial Officer</span>
                            <span class="t-zh">首席财务官</span>
                        </p>
                    </div>
                </div>`;
            } else if (currentSpacProject === 'Chenghe III') {
                // Chenghe III 管理团队（李琦、王世斌、王兆海、李泽原）
                bodyHtml = `
                <div class="team-grid team-grid--cols-2">
                    <div class="team-card" onclick="openChenghe3MgmtModalFromSpac(0, 'Advisory Board Chairman', '顾问委员会主席')">
                        <div class="team-photo"><img src="images/Team/Richard.png" alt="Richard Li / 李琦"></div>
                        <h3 class="team-name" style="font-size:22px; font-weight:700; margin-top:12px;">
                            <span class="t-en">Richard Li</span>
                            <span class="t-zh">李琦</span>
                        </h3>
                        <p class="team-title" style="font-size:13px; font-style:italic; margin-top:8px;">
                            <span class="t-en">Advisory Board Chairman</span>
                            <span class="t-zh">顾问委员会主席</span>
                        </p>
                    </div>
                    <div class="team-card" onclick="openChenghe3MgmtModalFromSpac(4, 'Chairman &amp; CEO', '董事长兼 CEO')">
                        <div class="team-photo"><img src="images/Team/Shibin-Wang.png" alt="Shibin Wang / 王世斌"></div>
                        <h3 class="team-name" style="font-size:22px; font-weight:700; margin-top:12px;">
                            <span class="t-en">Shibin Wang</span>
                            <span class="t-zh">王世斌</span>
                        </h3>
                        <p class="team-title" style="font-size:13px; font-style:italic; margin-top:8px;">
                            <span class="t-en">Chairman &amp; CEO</span>
                            <span class="t-zh">董事长兼首席执行官</span>
                        </p>
                    </div>
                    <div class="team-card" onclick="openChenghe3MgmtModalFromSpac(7, 'Chief Financial Officer', '首席财务官')">
                        <div class="team-photo"><img src="images/Team/Lyle.jpg" alt="Lyle Wang / 王兆海"></div>
                        <h3 class="team-name" style="font-size:22px; font-weight:700; margin-top:12px;">
                            <span class="t-en">Lyle Wang</span>
                            <span class="t-zh">王兆海</span>
                        </h3>
                        <p class="team-title" style="font-size:13px; font-style:italic; margin-top:8px;">
                            <span class="t-en">Chief Financial Officer</span>
                            <span class="t-zh">首席财务官</span>
                        </p>
                    </div>
                    <div class="team-card" onclick="openChenghe3MgmtModalFromSpac(8, 'Senior Advisor', '高级顾问')">
                        <div class="team-photo"><img src="images/Team/Houston.jpg" alt="Houston Li / 李泽原"></div>
                        <h3 class="team-name" style="font-size:22px; font-weight:700; margin-top:12px;">
                            <span class="t-en">Houston Li</span>
                            <span class="t-zh">李泽原</span>
                        </h3>
                        <p class="team-title" style="font-size:13px; font-style:italic; margin-top:8px;">
                            <span class="t-en">Senior Advisor</span>
                            <span class="t-zh">高级顾问</span>
                        </p>
                    </div>
                </div>`;
            } else {
                // 其它 SPAC 项目暂时使用占位管理团队
            let chairmanName = "Richard Li";
            let ceoName = "Ken Hitchner";
            if (currentSpacProject === 'Chenghe') { chairmanName = "Dr. Shibin Wang"; ceoName = "Richard Li"; }
            if (currentSpacProject === 'Chenghe I') { chairmanName = "Yong Zhao"; ceoName = "Tong Zhou"; }

            bodyHtml = `
            <div class="team-grid" style="justify-content:flex-start;">
                <div class="team-card" onclick="openTeamModal('${chairmanName}', 'Chairman', 'Detailed bio for ${chairmanName}...')">
                    <div class="team-photo" style="height:250px;"></div>
                    <h3>${chairmanName}</h3>
                    <p style="color:var(--color-gold); font-weight:bold;">
                        <span class="t-en">Chairman</span><span class="t-zh">董事长</span>
                    </p>
                </div>
                <div class="team-card" onclick="openTeamModal('${ceoName}', 'CEO', 'Detailed bio for ${ceoName}...')">
                    <div class="team-photo" style="height:250px;"></div>
                    <h3>${ceoName}</h3>
                    <p style="color:var(--color-gold); font-weight:bold;">
                        <span class="t-en">CEO</span><span class="t-zh">首席执行官</span>
                    </p>
                </div>
                <div class="team-card" onclick="openTeamModal('CFO Name', 'CFO', 'CFO bio...')">
                    <div class="team-photo" style="height:250px;"></div>
                    <h3>CFO Name</h3>
                    <p style="color:var(--color-gold); font-weight:bold;">
                        <span class="t-en">CFO</span><span class="t-zh">首席财务官</span>
                    </p>
                </div>
            </div>`;
            }
        } else if (subTab === 'News') {
            var newsList = SPAC_NEWS[currentSpacProject];
            if (!newsList || newsList.length === 0) {
                bodyHtml = '<div class="spac-news-empty" style="padding:40px; text-align:center; color:var(--color-grey);"><span class="t-en">News will be posted here.</span><span class="t-zh">新闻将在此更新。</span></div>';
            } else {
                // 特例：Chenghe Acquisition Co. 的中文页面只保留两条中文新闻
                if (currentSpacProject === 'Chenghe' && document.body.className.indexOf('lang-zh') !== -1) {
                    newsList = newsList.filter(function(item) {
                        return item.titleZh && item.urlZh;
                    });
                }
                // 使用与首页相同风格的新闻卡片样式（.news-card），每条新闻一个横向长卡片，点击整卡打开官网链接
                bodyHtml = '<div class="spac-news-list" style="display:flex; flex-direction:column; gap:24px; max-width:1000px; margin:0 auto;">';
                newsList.forEach(function(item) {
                    var zhOnly = !(item.titleEn && item.urlEn);
                    var isZhOnlyClass = zhOnly ? ' spac-news-item--zh-only' : '';
                    var linkEn = item.urlEn || item.urlZh || '#';
                    var linkZh = item.urlZh || item.urlEn || '#';
                    var summaryEn = item.summaryEn || '';
                    var summaryZh = item.summaryZh || item.summaryEn || '';
                    
                    bodyHtml += '' +
                        '<div class="news-card' + isZhOnlyClass + '" ' +
                        'onclick="window.open((document.body.className.indexOf(\'lang-zh\') !== -1 ? \'' + linkZh + '\' : \'' + linkEn + '\'), \'_blank\')">' +
                        '  <h4>' +
                        '    <span class="t-en">' + (item.titleEn || item.titleZh || '') + '</span>' +
                        '    <span class="t-zh">' + (item.titleZh || item.titleEn || '') + '</span>' +
                        '  </h4>' +
                        '  <p class="news-summary">' +
                        '    <span class="t-en">' + (summaryEn || '') + '</span>' +
                        '    <span class="t-zh">' + (summaryZh || '') + '</span>' +
                        '  </p>' +
                        '  <a class="read-more"><span class="t-en">Read More &rarr;</span><span class="t-zh">阅读更多 &rarr;</span></a>' +
                        '</div>';
                });
                bodyHtml += '</div>';
            }
        } else if (subTab === 'SEC Filings') {
            var filings = SPAC_SEC_FILINGS[currentSpacProject];
            if (!filings || filings.length === 0) {
                bodyHtml = '<div style="padding:40px; text-align:center; color:var(--color-grey);"><span class="t-en">SEC Filings will be posted here.</span><span class="t-zh">SEC 文件将在此更新。</span></div>';
            } else {
                bodyHtml = '<div class="sec-filings-table-wrap" style="max-width:1000px; margin:0 auto; overflow-x:auto;">' +
                    '<table class="sec-filings-table" style="width:100%; border-collapse:collapse;">' +
                    '<thead><tr style="border-bottom:2px solid #e1e4e8; background:#f6f8fa;">' +
                    '<th style="width:100px; padding:12px; text-align:left;"><span class="t-en">Form Type</span><span class="t-zh">报告类型</span></th>' +
                    '<th style="padding:12px; text-align:left;"><span class="t-en">Form Description</span><span class="t-zh">报告简述</span></th>' +
                    '<th style="width:130px; padding:12px; text-align:left;"><span class="t-en">Filing Date</span><span class="t-zh">披露日期</span></th>' +
                    '<th style="width:130px; padding:12px; text-align:left;"><span class="t-en">Reporting Date</span><span class="t-zh">报告日期</span></th>' +
                    '  </tr></thead><tbody>';
                
                filings.forEach(function(f) {
                    var linkText = getSecFilingLinkText(f.form);
                    
                    var descCell = f.url && f.url !== ''
                        ? '<a href="' + f.url + '" target="_blank" style="color: #0366d6; text-decoration: none; font-weight:500;">' + linkText + '</a>'
                        : '<span style="color: #586069;">' + linkText + '</span>';
                    
                    bodyHtml += '<tr style="border-bottom:1px solid #e1e4e8;">' +
                        '<td style="padding:12px;"><span style="display:inline-block; background:#e1e4e8; padding:2px 8px; border-radius:3px; font-size:12px; font-weight:500; font-family:monospace;">' + f.form + '</span></td>' +
                        '<td style="padding:12px;" class="sec-filings-desc">' + descCell + '</td>' +
                        '<td style="padding:12px; color:#586069; font-size:14px;">' + (f.dateF || '-') + '</td>' +
                        '<td style="padding:12px; color:#586069; font-size:14px;">' + (f.dateR || '-') + '</td>' +
                        '</tr>';
                });
                
                bodyHtml += '</tbody></table></div>';
                
                bodyHtml += '<style>' +
                    '.sec-filings-table a:hover { text-decoration: underline !important; }' +
                    '.sec-filings-desc a { display: inline-block; padding: 4px 0; }' +
                    '</style>';
            }
        } else {
            bodyHtml = `
            <div style="padding:40px; background:#f9f9f9; text-align:center; border:1px dashed #ccc; color:#999;">
                <span class="t-en">Content for ${subTab} coming soon.</span>
                <span class="t-zh">${subTabMap[subTab]} 内容即将上线。</span>
            </div>`;
        }
    }  
    
    contentDiv.innerHTML = subNavHtml + bodyHtml;
}  



// 从 team.js 的 TEAM_MEMBERS 复用人物信息，但自定义 HH&L 职位文案，且不展示公司行
function openHhlMgmtModalFromSpac(index, roleEn, roleZh) {
    if (typeof TEAM_MEMBERS === 'undefined' || !TEAM_MEMBERS[index] || typeof openTeamModal !== 'function') {
        return;
    }
    var m = TEAM_MEMBERS[index];
    openTeamModal(
        m.nameEn,
        roleEn,
        m.bioEn,
        m.nameZh,
        roleZh,
        m.bioZh,
        m.photo,
        m.logos
    );
}

// Chenghe II 管理团队弹窗：沿用 team.js 的人物与履历，只覆盖职位文案，不展示公司行
function openChenghe2MgmtModalFromSpac(index, roleEn, roleZh) {
    if (typeof TEAM_MEMBERS === 'undefined' || !TEAM_MEMBERS[index] || typeof openTeamModal !== 'function') {
        return;
    }
    var m = TEAM_MEMBERS[index];
    openTeamModal(
        m.nameEn,
        roleEn,
        m.bioEn,
        m.nameZh,
        roleZh,
        m.bioZh,
        m.photo,
        m.logos
    );
}

// Chenghe I 管理团队弹窗：沿用 team.js 的人物与履历，只覆盖职位文案，不展示公司行
function openChenghe1MgmtModalFromSpac(index, roleEn, roleZh) {
    if (typeof TEAM_MEMBERS === 'undefined' || !TEAM_MEMBERS[index] || typeof openTeamModal !== 'function') {
        return;
    }
    var m = TEAM_MEMBERS[index];
    openTeamModal(
        m.nameEn,
        roleEn,
        m.bioEn,
        m.nameZh,
        roleZh,
        m.bioZh,
        m.photo,
        m.logos
    );
}

// Chenghe I 新增人物 宛怡萱（Maria）：仅在 SPAC 页面使用，不依赖 TEAM_MEMBERS
function openChenghe1MariaModalFromSpac() {
    if (typeof openTeamModal !== 'function') return;
    openTeamModal(
        'Yixuan Yuan',
        'Chief Executive Officer',
        '· 8 years of investment and financing experience, focusing on overseas capital markets in the U.S., Hong Kong and other regions.\n· Previously worked at Credit Suisse and BNP Paribas.',
        '宛怡萱',
        '首席执行官',
        '· 8年投融资经验，专注美国、香港等海外资本市场\n· 曾在瑞士信贷和法国巴黎银行工作',
        'images/Team/Maria.jpg'
    );
}

// Chenghe Acquisition Co. 管理团队弹窗（Ken Hitchner / Richard Li / Shibin Wang）：沿用 team.js 人物与履历，只覆盖职位文案
function openChengheMgmtModalFromSpac(index, roleEn, roleZh) {
    if (typeof TEAM_MEMBERS === 'undefined' || !TEAM_MEMBERS[index] || typeof openTeamModal !== 'function') {
        return;
    }
    var m = TEAM_MEMBERS[index];
    openTeamModal(
        m.nameEn,
        roleEn,
        m.bioEn,
        m.nameZh,
        roleZh,
        m.bioZh,
        m.photo,
        m.logos
    );
}

// Chenghe Acquisition Co. 新增人物周志阳：仅在 SPAC 页面使用，不依赖 TEAM_MEMBERS
function openChengheZhouModalFromSpac() {
    if (typeof openTeamModal !== 'function') return;
    openTeamModal(
        'Zhiyang Zhou',
        'Chief Financial Officer',
        '· Extensive equity research and finance experience, focused on technology, media and telecommunications sectors in China and the U.S.\n· Previously worked at Mediatek Investment, Great Wall International, Anbang International and CICC (or Bank of Communications International)',
        '周志阳',
        '首席财务官',
        '· 丰富的股权研究和金融经验，专注于中美科技、媒体和电信领域\n· 曾在美迪投资、长城国际、安邦国际和交银国际任职',
        'images/Team/Zhiyang_Zhou.jpg'
    );
}

// Chenghe III 管理团队弹窗：沿用 team.js 的人物与履历，只覆盖职位文案，不展示公司行
function openChenghe3MgmtModalFromSpac(index, roleEn, roleZh) {
    if (typeof TEAM_MEMBERS === 'undefined' || !TEAM_MEMBERS[index] || typeof openTeamModal !== 'function') {
        return;
    }
    var m = TEAM_MEMBERS[index];
    openTeamModal(
        m.nameEn,
        roleEn,
        m.bioEn,
        m.nameZh,
        roleZh,
        m.bioZh,
        m.photo,
        m.logos
    );
}

function getSpacPageHTML() {
    return `
    <div class="tab-container spac-main-tabs-bar">
        <div class="tab-list" id="spac-main-tabs">
            <div class="tab-btn active" onclick="switchSpacMainTab('Overview')" data-tab="Overview"><span class="t-en">Overview</span><span class="t-zh">概览</span></div>
            <div class="tab-btn" onclick="switchSpacMainTab('HHL')" data-tab="HHL">HH&L</div>
            <div class="tab-btn" onclick="switchSpacMainTab('Chenghe')" data-tab="Chenghe">Chenghe</div>
            <div class="tab-btn" onclick="switchSpacMainTab('Chenghe I')" data-tab="Chenghe I">Chenghe I</div>
            <div class="tab-btn" onclick="switchSpacMainTab('Chenghe II')" data-tab="Chenghe II">Chenghe II</div>
            <div class="tab-btn" onclick="switchSpacMainTab('Chenghe III')" data-tab="Chenghe III">Chenghe III</div>
        </div>
    </div>
    <div class="spac-content">
        <h1 id="spac-title" style="margin-bottom:40px; text-align:center; color:var(--color-dark-blue); font-size: 36px;">
            <span class="t-en">SPAC Overview</span><span class="t-zh">SPAC 概览</span>
        </h1>
        <div id="spac-dynamic-content"></div>
    </div>
    `;
}
