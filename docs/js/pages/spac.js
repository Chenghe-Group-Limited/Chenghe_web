/**
 * SPAC 页面逻辑模块
 * 管理SPAC页面的所有逻辑和动态内容
 * 修改此文件即可更新SPAC页面功能和内容
 */

let currentSpacProject = 'Overview'; 

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
    } else {
         titleEl.innerHTML = tabName; // 项目名称如 HHL 保持英文即可
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
        'Management': '团队',
        'News': '新闻',
        'SEC Filings': 'SEC Filings', 
        'Governance': '管理' 
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
            <div class="spac-overview-layout" style="display:flex; gap:60px; align-items:center;">
                <div class="spac-text-content" style="flex:1;">
                    <p class="t-en" style="font-size:20px; color:#555; line-height:1.8;">Our SPAC strategy focuses on high-growth technology sectors in Asia. We leverage our deep network to identify proprietary deal flow and create value for shareholders through disciplined execution.</p>
                    <p class="t-zh" style="font-size:20px; color:#555; line-height:1.8;">我们的 SPAC 战略专注于亚洲的高增长科技领域。我们利用深厚的网络资源发掘独家交易机会，并通过严谨的执行为股东创造价值。</p>
                </div>
                <div class="spac-image-content" style="width:500px; height:350px; background:var(--color-accent-blue); display:flex; align-items:center; justify-content:center; color:white; font-size:24px;">Main Image</div>
            </div>`;
    } else {
        if (subTab === 'Overview') {
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
        } else if (subTab === 'Management') {
            // 模拟数据
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
        } else if (subTab === 'News') {
            bodyHtml = `
            <div class="news-item-horizontal">
                <div class="news-img"><img src="" alt=""></div>
                <div class="news-text">
                    <h4>
                        <span class="t-en">${currentSpacProject} Announces Merger Agreement</span>
                        <span class="t-zh">${currentSpacProject} 宣布合并协议</span>
                    </h4>
                    <p class="t-en">Chenghe Capital is pleased to announce a definitive merger agreement...</p>
                    <p class="t-zh">成和资本荣幸地宣布已达成最终合并协议...</p>
                </div>
            </div>`;
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

function getSpacPageHTML() {
    return `
    <div class="tab-container">
        <div class="tab-list" id="spac-main-tabs">
            <div class="tab-btn active" onclick="switchSpacMainTab('Overview')" data-tab="Overview"><span class="t-en">Overview</span><span class="t-zh">概览</span></div>
            <div class="tab-btn" onclick="switchSpacMainTab('HHL')" data-tab="HHL">HHL</div>
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
