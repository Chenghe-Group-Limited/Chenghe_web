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

// 页面初始化函数（由 index.html 在页面内容加载完成后调用）
function initializeApp() {
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
}

// 如果页面内容已经存在（非模块化版本），自动初始化
window.addEventListener('DOMContentLoaded', function() {
    // 检查是否是模块化版本（页面容器为空）
    const homePage = document.getElementById('page-home');
    if (homePage && homePage.innerHTML.trim() !== '') {
        // 非模块化版本，直接初始化
        initializeApp();
    }
    // 模块化版本会在 index-modular.html 中手动调用 initializeApp()
});

// --- Contact 表单提交（Formspree）：AJAX 提交并显示成功/失败提示，不跳转 ---
document.addEventListener('submit', function(e) {
    if (e.target.id !== 'contact-inquiry-form') return;
    e.preventDefault();
    var form = e.target;
    var msgEl = document.getElementById('contact-form-msg');
    if (!msgEl) return;
    var isZh = document.body.classList.contains('lang-zh');
    if (typeof CONTACT_FORMSPREE_ID === 'undefined' || CONTACT_FORMSPREE_ID === 'YOUR_FORM_ID') {
        msgEl.style.display = 'block';
        msgEl.className = 'contact-form-msg contact-form-msg--error';
        msgEl.textContent = isZh ? '请在 contact.js 中配置 Formspree Form ID 后再使用提交功能。' : 'Please set CONTACT_FORMSPREE_ID in contact.js to enable form submission.';
        return;
    }
    var btn = form.querySelector('.submit-btn');
    if (btn) { btn.disabled = true; btn.textContent = isZh ? '提交中…' : 'Sending…'; }
    msgEl.style.display = 'none';
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
    }).then(function(r) {
        if (r.ok) {
            msgEl.className = 'contact-form-msg contact-form-msg--success';
            msgEl.textContent = isZh ? '提交成功，我们会尽快与您联系。' : 'Thank you. We will get back to you soon.';
            msgEl.style.display = 'block';
            form.reset();
        } else {
            throw new Error('Submit failed');
        }
    }).catch(function() {
        msgEl.className = 'contact-form-msg contact-form-msg--error';
        msgEl.textContent = isZh ? '提交失败，请稍后重试或直接发邮件联系我们。' : 'Submission failed. Please try again later or email us directly.';
        msgEl.style.display = 'block';
    }).finally(function() {
        if (btn) { btn.disabled = false; btn.innerHTML = '<span class="t-en">Submit Inquiry</span><span class="t-zh">提交咨询</span>'; }
    });
});

// --- Team Modal Functions ---
// 兼容两种调用方式：
// 1) 旧版：openTeamModal(name, role, bio)
// 2) 新版多语言：openTeamModal(nameEn, roleEn, bioEn, nameZh, roleZh, bioZh [, photoUrl, logos])
function openTeamModal(a, b, c, d, e, f, photoUrl, logos) {
    var name, role, bio;
    var isZh = document.body.classList.contains('lang-zh');

    if (arguments.length >= 6) {
        name = isZh ? d : a;
        role = isZh ? e : b;
        bio  = isZh ? f : c;
    } else {
        name = a;
        role = b;
        bio  = c || '';
    }

    var mPhoto = document.getElementById('m-photo');
    if (mPhoto) {
        if (photoUrl) {
            mPhoto.src = photoUrl;
            mPhoto.alt = name;
            mPhoto.style.display = 'block';
        } else {
            mPhoto.src = '';
            mPhoto.style.display = 'none';
        }
    }

    document.getElementById('m-name').innerText = name;
    var titleEl = document.getElementById('m-role-title');
    var companyEl = document.getElementById('m-role-company');
    var roleStr = (role || '').trim();
    var title = '', companyHtml = '';
    if (/\s+[-–]\s+/.test(roleStr)) {
        var zhParts = roleStr.split(/\s+[-–]\s+/);
        companyHtml = (zhParts[0] || '').trim().split(/\s*\/\s*/).map(function(s) { return s.trim(); }).filter(Boolean).join('<br>');
        title = (zhParts[1] || '').trim();
    } else {
        var roleParts = roleStr.split(/\s*[\/,]\s*/).map(function(s) { return s.trim(); }).filter(Boolean);
        title = roleParts.length ? roleParts[0] : '';
        companyHtml = roleParts.length > 1 ? roleParts.slice(1).join('<br>') : '';
    }
    if (titleEl) titleEl.innerText = title;
    if (companyEl) companyEl.innerHTML = companyHtml;

    var bioEl = document.getElementById('m-bio');
    var lines = (bio || '').split('\n').map(function(s) { return s.replace(/^[·\s]+/, '').trim(); }).filter(Boolean);
    bioEl.innerHTML = lines.length ? '<ul class="modal-bio-list">' + lines.map(function(line) { return '<li>' + line + '</li>'; }).join('') + '</ul>' : '';

    var logosEl = document.getElementById('m-logos');
    if (logosEl) {
        logosEl.style.display = 'flex';
        if (logos && logos.length) {
            logosEl.innerHTML = logos.map(function(item) {
                var name = (isZh && item.nameZh) ? item.nameZh : (item.nameEn || item.name || '');
                var src = item.src || item.img || '';
                if (src) {
                    return '<div class="modal-logo"><img src="' + src + '" alt="' + name + '"></div>';
                }
                return '<div class="modal-logo modal-logo--text">' + name + '</div>';
            }).join('');
        } else {
            logosEl.innerHTML = '';
        }
    }

    document.getElementById('team-modal').style.display = 'flex';
}

function closeTeamModal(e) {
    if(e.target.className === 'modal-overlay' || e.target.className === 'close-modal') {
        document.getElementById('team-modal').style.display = 'none';
    }
}

// --- About 页面区块详情弹窗（过往业绩等点击后展示完整内容）---
// 参数：titleEn, titleZh, subtitleEn, subtitleZh, bodyEn, bodyZh
function openAboutDetailModal(titleEn, titleZh, subtitleEn, subtitleZh, bodyEn, bodyZh, images, logo) {
    document.getElementById('about-detail-title-en').innerText = titleEn || '';
    document.getElementById('about-detail-title-zh').innerText = titleZh || '';
    document.getElementById('about-detail-subtitle-en').innerText = subtitleEn || '';
    document.getElementById('about-detail-subtitle-zh').innerText = subtitleZh || '';

    var logoEl = document.getElementById('about-detail-logo');
    if (logo) {
        logoEl.src = logo;
        logoEl.style.display = 'block';
    } else {
        logoEl.src = '';
        logoEl.style.display = 'none';
    }

    var bodyDiv = document.getElementById('about-detail-body');
    var enLines = (bodyEn || '').split('\n').filter(function(s){ return s.trim(); });
    var zhLines = (bodyZh || '').split('\n').filter(function(s){ return s.trim(); });
    var html = '<ul class="modal-bio-list t-en">' + enLines.map(function(l){ return '<li>' + l + '</li>'; }).join('') + '</ul>';
    html += '<ul class="modal-bio-list t-zh">' + zhLines.map(function(l){ return '<li>' + l + '</li>'; }).join('') + '</ul>';
    bodyDiv.innerHTML = html;

    var imgDiv = document.getElementById('about-detail-images');
    if (images && images.length) {
        imgDiv.innerHTML = images.map(function(src){
            return '<img src="' + src + '" alt="" style="width:100%; border-radius:6px; margin-bottom:12px;">';
        }).join('');
        imgDiv.style.display = 'block';
    } else {
        imgDiv.innerHTML = '';
        imgDiv.style.display = 'none';
    }

    document.getElementById('about-detail-modal').style.display = 'flex';
}

function closeAboutDetailModal(e) {
    if (e.target.className === 'modal-overlay' || e.target.className === 'close-modal') {
        document.getElementById('about-detail-modal').style.display = 'none';
    }
}
