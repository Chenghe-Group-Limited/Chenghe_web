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
            // HHL 使用专门的项目概览内容，其它项目使用通用模板
            if (currentSpacProject === 'HHL') {
                bodyHtml = `
                <div class="spac-project-layout hhl-overview" style="display:flex; flex-direction:column; gap:32px;">
                    <div style="text-align:center;">
                        <h3 style="margin-bottom:8px; color:var(--color-dark-blue); font-size:28px;">
                            <span class="t-en">HH&amp;L Acquisition Co. (US$414 million)</span>
                            <span class="t-zh">HH&amp;L Acquisition Co.（发行规模约4.14亿美元）</span>
                        </h3>
                        <p style="color:var(--color-grey); font-size:18px; margin:0;">
                            <span class="t-en">The largest healthcare-focused SPAC IPO in Asia since 2021</span>
                            <span class="t-zh">2021年以来亚洲最大的侧重医疗领域的 SPAC IPO</span>
                        </p>
                    </div>
                    <div style="display:flex; flex-wrap:wrap; gap:20px; justify-content:center; margin-top:8px;">
                        <div style="flex:1 1 220px; min-width:220px; max-width:320px; background:#f7f8fb; border-radius:8px; padding:18px 20px;">
                            <p style="font-weight:600; margin-bottom:8px; color:var(--color-dark-blue);">
                                <span class="t-en">Up-sized by around 20%</span>
                                <span class="t-zh">发行规模扩大约 20%</span>
                            </p>
                            <p style="font-size:14px; color:var(--color-grey); margin:0;">
                                <span class="t-en">Final IPO proceeds of approximately US$414 million.</span>
                                <span class="t-zh">最终 IPO 募资规模约 4.14 亿美元。</span>
                            </p>
                        </div>
                        <div style="flex:1 1 220px; min-width:220px; max-width:320px; background:#f7f8fb; border-radius:8px; padding:18px 20px;">
                            <p style="font-weight:600; margin-bottom:8px; color:var(--color-dark-blue);">
                                <span class="t-en">Backed by top-tier investors</span>
                                <span class="t-zh">超过 100 家知名机构投资者</span>
                            </p>
                            <p style="font-size:14px; color:var(--color-grey); margin:0;">
                                <span class="t-en">More than 100 leading institutional investors from Asia, Europe and the U.S.</span>
                                <span class="t-zh">来自亚洲、欧洲及美国的逾百家领先机构投资者参与认购。</span>
                            </p>
                        </div>
                        <div style="flex:1 1 220px; min-width:220px; max-width:320px; background:#f7f8fb; border-radius:8px; padding:18px 20px;">
                            <p style="font-weight:600; margin-bottom:8px; color:var(--color-dark-blue);">
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
            // HHL 使用与 team.js 中一致的三位成员信息与图片，其它项目保持占位布局
            if (currentSpacProject === 'HHL') {
                bodyHtml = `
                <div class="team-grid">
                    <div class="team-card" onclick="openTeamModalByIndex(0)">
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
                    <div class="team-card" onclick="openTeamModalByIndex(10)">
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
                    <div class="team-card" onclick="openTeamModalByIndex(9)">
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
