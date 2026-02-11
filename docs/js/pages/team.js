/**
 * Team 页面内容模块
 * 管理"成和团队"页面的所有HTML内容
 * 修改此文件即可更新Team页面内容
 */

function getTeamPageHTML() {
    return `
    <div style="text-align:center; padding:80px 20px 0;">
        <h1 style="color:var(--color-dark-blue); font-size:48px;">
            <span class="t-en">Our Team</span>
            <span class="t-zh">我们的团队</span>
        </h1>
        <p style="color:var(--color-grey); margin-top:15px; font-size:18px;">
            <span class="t-en">Meet the professionals behind Chenghe Capital</span>
            <span class="t-zh">认识成和资本背后的专业人士</span>
        </p>
    </div>
    <div class="team-level-title">
        <span class="t-en">Key Management</span>
        <span class="t-zh">管理层</span>
    </div>
    <div class="team-grid">
        <div class="team-card" onclick="openTeamModal('John Doe', 'Partner', 'Full bio for John Doe. Extensive experience in cross-border M&A...')">
            <div class="team-photo"></div>
            <h3>John Doe</h3>
            <p><span class="t-en">Partner</span><span class="t-zh">合伙人</span></p>
        </div>
        <div class="team-card" onclick="openTeamModal('Jane Smith', 'Managing Director', 'Full bio for Jane Smith. Specialist in Biotech investment...')">
            <div class="team-photo"></div>
            <h3>Jane Smith</h3>
            <p><span class="t-en">Managing Director</span><span class="t-zh">董事总经理</span></p>
        </div>
    </div>
    <div class="team-level-title">
        <span class="t-en">Core Team</span>
        <span class="t-zh">核心团队</span>
    </div>
    <div class="team-grid">
        <div class="team-card" onclick="openTeamModal('Alice Wang', 'Director', 'Bio for Alice Wang...')">
            <div class="team-photo"></div>
            <h3>Alice Wang</h3>
            <p><span class="t-en">Director</span><span class="t-zh">执行董事</span></p>
        </div>
        <div class="team-card" onclick="openTeamModal('Bob Lee', 'VP', 'Bio for Bob Lee...')">
            <div class="team-photo"></div>
            <h3>Bob Lee</h3>
            <p><span class="t-en">VP</span><span class="t-zh">副总裁</span></p>
        </div>
    </div>
    
    <div class="team-level-title">
        <span class="t-en">Advisors</span>
        <span class="t-zh">顾问团队</span>
    </div>
    <div class="team-grid">
        <div class="team-card" onclick="openTeamModal('Dr. Grant', 'Senior Advisor', 'Bio for Dr. Grant...')">
            <div class="team-photo"></div>
            <h3>Dr. Grant</h3>
            <p>
                <span class="t-en">Senior Advisor</span>
                <span class="t-zh">高级顾问</span>
            </p>
        </div>
    </div>
    `;
}
