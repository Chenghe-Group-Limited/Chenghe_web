/**
 * 主应用逻辑 - 路由、语言切换、页面管理
 * 这个文件包含所有页面的核心功能
 */

// --- 核心语言切换逻辑（支持URL保存） ---
function setLanguage(lang) {
    document.body.className = 'lang-' + lang;
    
    // 更新URL，保存语言状态
    const pageId = getPageFromUrl();
    
    // 构建新的URL
    let newUrl = window.location.pathname;
    if (pageId && pageId !== 'home') {
        // 非首页：添加hash和语言参数
        newUrl += '#' + pageId + '?lang=' + lang;
    } else {
        // 首页：只添加语言参数（使用?而不是#）
        newUrl += '?lang=' + lang;
    }
    
    // 更新URL（不触发页面重新加载）
    window.history.replaceState(
        {page: pageId, lang: lang}, 
        '', 
        newUrl
    );
}

// 从URL读取语言设置（支持hash和查询字符串）
function getLanguageFromUrl() {
    // 先从hash中查找（如 #about?lang=zh）
    const hash = window.location.hash;
    let match = hash.match(/[?&]lang=([^&]+)/);
    if (match) return match[1];
    
    // 如果hash中没有，从查询字符串中查找（如 ?lang=zh）
    const search = window.location.search;
    match = search.match(/[?&]lang=([^&]+)/);
    if (match) return match[1];
    
    return null;
}

// --- 移动端菜单切换 ---
function toggleMobileMenu() {
    const nav = document.querySelector('nav');
    const btn = document.querySelector('.mobile-menu-btn');
    nav.classList.toggle('active');
    btn.classList.toggle('active');
}

// --- 页面路由逻辑（支持URL更新） ---
function switchPage(pageId, updateUrl = true) {
    document.querySelectorAll('.page-section').forEach(el => el.classList.remove('active'));
    document.getElementById('page-' + pageId).classList.add('active');
    
    document.querySelectorAll('nav ul li a').forEach(el => el.classList.remove('active'));
    const navBtn = document.getElementById('nav-' + pageId);
    if(navBtn) navBtn.classList.add('active');
    
    // 关闭移动端菜单
    const nav = document.querySelector('nav');
    const btn = document.querySelector('.mobile-menu-btn');
    if(nav && nav.classList.contains('active')) {
        nav.classList.remove('active');
        btn.classList.remove('active');
    }
    
    // 更新URL（使用History API，保持当前语言状态）
    if (updateUrl) {
        // 获取当前语言
        const currentLang = document.body.className.includes('lang-zh') ? 'zh' : 'en';
        let newUrl;
        if (pageId === 'home') {
            // 首页使用根URL，添加语言参数
            newUrl = window.location.pathname + '?lang=' + currentLang;
        } else {
            // 其他页面添加hash和语言参数
            newUrl = window.location.pathname + '#' + pageId + '?lang=' + currentLang;
        }
        window.history.pushState({page: pageId, lang: currentLang}, '', newUrl);
    }
    
    // 更新页面标题
    updatePageTitle(pageId);
    
    window.scrollTo(0,0);
}

// 更新页面标题
function updatePageTitle(pageId) {
    const titles = {
        'home': 'Chenghe Capital - Official Website',
        'about': 'About Us - Chenghe Capital',
        'team': 'Our Team - Chenghe Capital',
        'spac': 'SPAC - Chenghe Capital',
        'fa': 'Financial Advisory - Chenghe Capital',
        'contact': 'Contact Us - Chenghe Capital'
    };
    document.title = titles[pageId] || 'Chenghe Capital - Official Website';
}

// 从URL读取页面ID（移除语言参数）
function getPageFromUrl() {
    let hash = window.location.hash.substring(1);
    // 移除语言参数部分（?lang=zh 或 &lang=zh）
    hash = hash.split('?')[0].split('&')[0];
    
    if (hash) {
        // 处理SPAC子页面格式：spac-Overview 或 spac-Chenghe
        if (hash.startsWith('spac-')) {
            return hash;
        }
        // 处理FA子页面格式：fa-HK 或 fa-US
        if (hash.startsWith('fa-')) {
            return hash;
        }
        return hash;
    }
    return 'home';
}

// 处理浏览器前进/后退
window.addEventListener('popstate', function(event) {
    // 从URL读取语言设置
    const langFromUrl = getLanguageFromUrl();
    if (langFromUrl && (langFromUrl === 'zh' || langFromUrl === 'en')) {
        document.body.className = 'lang-' + langFromUrl;
    }
    
    const pageId = getPageFromUrl();
    loadPageFromUrl(pageId, false);
});

// 从URL加载页面
function loadPageFromUrl(pageId, updateUrl = false) {
    // 处理SPAC子页面
    if (pageId.startsWith('spac-')) {
        const spacTab = pageId.substring(5).replace(/-/g, ' '); // 移除 "spac-" 前缀，将连字符替换为空格
        // 处理特殊项目名称映射
        const tabMap = {
            'Overview': 'Overview',
            'HHL': 'HHL',
            'Chenghe': 'Chenghe',
            'Chenghe I': 'Chenghe I',
            'Chenghe II': 'Chenghe II',
            'Chenghe III': 'Chenghe III'
        };
        const mappedTab = tabMap[spacTab] || spacTab;
        switchPage('spac', updateUrl);
        setTimeout(() => {
            if (typeof switchSpacMainTab === 'function') {
                switchSpacMainTab(mappedTab, false);
            }
        }, 100);
        return;
    }
    
    // 处理FA子页面
    if (pageId.startsWith('fa-')) {
        const region = pageId.split('-')[1];
        switchPage('fa', updateUrl);
        setTimeout(() => {
            if (typeof switchFaTab === 'function') {
                switchFaTab(region, false);
            }
        }, 100);
        return;
    }
    
    // 普通页面
    switchPage(pageId, updateUrl);
}

// 页面加载时根据URL初始化
window.addEventListener('DOMContentLoaded', function() {
    // 首先从URL读取语言设置
    const langFromUrl = getLanguageFromUrl();
    if (langFromUrl && (langFromUrl === 'zh' || langFromUrl === 'en')) {
        document.body.className = 'lang-' + langFromUrl;
    }
    
    // 然后加载页面
    const pageId = getPageFromUrl();
    if (pageId !== 'home') {
        loadPageFromUrl(pageId, false);
    }
});

// --- Team Modal Functions ---
function openTeamModal(name, role, bio) {
    document.getElementById('m-name').innerText = name;
    document.getElementById('m-role').innerText = role;
    document.getElementById('m-bio').innerText = bio;
    document.getElementById('team-modal').style.display = 'flex';
}

function closeTeamModal(e) {
    if(e.target.className === 'modal-overlay' || e.target.className === 'close-modal') {
        document.getElementById('team-modal').style.display = 'none';
    }
}
