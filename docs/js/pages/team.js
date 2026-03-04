/**
 * Team 页面内容模块
 * 管理"成和团队"页面的所有HTML内容
 * 修改此文件即可更新Team页面内容
 * 点击成员卡片时通过 openTeamModalByIndex(i) 打开弹窗，避免长字符串中的引号破坏 onclick
 */

var TEAM_MEMBERS = [
    { nameEn: "Richard Li", roleEn: "Chairman, Chenghe Group / Chenghe Capital", photo: "images/Team/Richard.png", logos: [{ nameEn: "HH&L Acquisition Co.", nameZh: "厚合" }, { nameEn: "China Great Wall AMC", nameZh: "中国长城资产" }, { nameEn: "Goldman Sachs", nameZh: "高盛" }, { nameEn: "Deutsche Bank", nameZh: "德意志银行" }], bioEn: "· Co-founder and CEO of HH&L Investment (HH&L Acquisition Co., NYSE: HHLA)\n· Former CIO and COO of China Great Wall Asset (International) and CEO of Great Wall Pan Asia Asset Management\n· Former Managing Director and Head of China Equities at Goldman Sachs Asia, and former Managing Director and Head of North Asia Capital Markets at Deutsche Bank Hong Kong\n· Earlier roles at the World Bank, Merrill Lynch and the Ministry of Finance of the PRC", nameZh: "李琦", roleZh: "成和集团 / 成和资本 - 主席", bioZh: "· 厚合投资联合创办人兼首席执行官（HH&L Acquisition Co., 纽约交易所上市代号：HHLA）\n· 前中国长城资产（国际）CIO、COO；长城环亚资产管理公司首席执行官\n· 前高盛亚洲董事总经理兼中国证券主管，前德意志银行香港董事总经理兼北亚资本市场主管\n· 此前在世界银行、美林证券及国家财政部工作" },
    { nameEn: "Choon Hong Tee", roleEn: "Vice Chairman, Chenghe Capital", photo: "images/Team/Tee.jpg", logos: [{ nameEn: "Standard Chartered Bank", nameZh: "渣打银行" }, { nameEn: "Deutsche Bank", nameZh: "德意志银行" }], bioEn: "· Vice Chairman of Chenghe Capital\n· Former Head of Financial Markets (Hong Kong) and Managing Director of Capital Markets at Standard Chartered Bank\n· Former Managing Director and Co-Head of Asia Corporate Coverage at Deutsche Bank\n· Earlier experience at Merrill Lynch, Chung Hsing International and Nikko Securities", nameZh: "郑俊峰", roleZh: "成和资本 – 副主席", bioZh: "· 成和资本副主席\n· 前渣打银行（香港）金融市场主管兼资本市场董事总经理\n· 德意志银行前常务董事、亚洲企业业务联席主管\n· 曾就职于美林证券、信孚国际、日兴证券等" },
    { nameEn: "Shengwen Peng", roleEn: "Vice Chairman, Chenghe Capital",photo: "images/Team/Shengwen_Peng.jpg", bioEn: "· Vice Chairman of Chenghe Capital\n· Chairman of Shenzhen Hezhihe Venture Capital Co., Ltd.\n· Former head of the Hong Kong Representative Office and General Manager of the Asset Management Department of China Merchants Securities\n· Previously Deputy General Manager at a venture capital firm, and earlier experience at Industrial and Commercial Bank of China", nameZh: "彭胜文", roleZh: "成和资本 – 副主席", bioZh: "· 成和资本副主席\n· 深圳市禾之禾创业投资有限公司董事长\n· 原招商证券香港代表处代表、资产管理部总经理\n· 曾任某风险投资公司副总经理\n· 曾就职于中国工商银行" },
    { nameEn: "Qiang Liu", roleEn: "CEO, CBC Securities / Concordia Boston Capital",photo: "images/Team/Qiang_Liu.jpg", bioEn: "· Chief Executive Officer of CBC Securities\n· President & CEO of Concordia Boston Capital\n· Previously a financial markets expert at the Federal Reserve, responsible for supervision and regulation of systemically important financial institutions\n· Earlier served as an actuary at several financial institutions", nameZh: "刘强", roleZh: "CBC证券有限公司 – 首席执行官", bioZh: "· CBC证券有限公司首席执行官\n· Concordia Boston Capital总裁兼首席执行官\n· 曾在美联储担任金融市场专家，负责监管系统重要性金融机构\n· 曾在多家金融机构担任精算师" },
    { nameEn: "Shibin Wang", roleEn: "CEO & Director, Chenghe Investment", photo: "images/Team/Shibin-Wang.png", bioEn: "· Chief Executive Officer and Director of Chenghe Investment\n· Co-founder and CEO of Hong Kong Digital Asset Ex Ltd\n· Former Executive Director at Deutsche Bank\n· Earlier roles at Goldman Sachs Asia and China Development Bank", nameZh: "王世斌", roleZh: "成和投资 – 首席执行官及董事", bioZh: "· 成和投资首席执行官及董事\n· Hong Kong Digital Asset Ex Ltd联合创始人兼首席执行官\n· 前德意志银行执行董事\n· 曾在高盛亚洲和国家开发银行工作" },
    { nameEn: "Remington Xu", roleEn: "Partner, Chenghe Capital", photo: "images/Team/Remington.jpg", bioEn: "· Partner at Chenghe Capital\n· Former Managing Director and Head of Asset Management at Far East Horizon\n· Former CEO of First Qianhai International Capital\n· Earlier experience at Great Wall International, J.P. Morgan, Credit Suisse and Merrill Lynch", nameZh: "徐睿旻", roleZh: "成和资本 – 合伙人", bioZh: "· 成和资本合伙人\n· 前远东宏信董事总经理、资产管理部负责人\n· 前第一前海国际资本有限公司首席执行官\n· 曾就职于长城国际、摩根大通、瑞士信贷和美林证券" },
    { nameEn: "Erin Baskett", roleEn: "CFO, CBC Securities",photo: "images/Team/Erin.jpg", bioEn: "· Chief Financial Officer of CBC Securities\n· Former member of FINRA committees\n· Extensive industry experience across various asset classes", nameZh: "Erin Baskett", roleZh: "CBC证券有限公司 – 首席财务官", bioZh: "· CBC证券有限公司首席财务官\n· 曾担任FINRA委员会成员\n· 行业经验丰富，涉及各种资产类别" },
    { nameEn: "Lyle Wang", roleEn: "Vice President, Chenghe Capital", photo: "images/Team/Lyle.jpg", bioEn: "· Vice President at Chenghe Capital\n· Previously worked at China Merchants Bank\n· Master of Finance degree from the University of Hong Kong", nameZh: "王兆海", roleZh: "成和资本 – 副总裁", bioZh: "· 成和资本副总裁\n· 曾就职于招商银行\n· 毕业于香港大学金融硕士" },
    { nameEn: "Houston Li", roleEn: "Manager, CBC Securities", photo: "images/Team/Houston.jpg", bioEn: "· Manager at CBC Securities\n· Previously worked in private markets fundraising at Campbell Lutyens\n· Experience in the investment banking division at Morgan Stanley\n· Holds a Bachelor's degree in Applied Mathematics and Economics from Brown University", nameZh: "李泽原", roleZh: "CBC证券有限公司 – 经理", bioZh: "· CBC证券有限公司经理\n· 曾于Campbell Lutyens私募市场融资业务和摩根士丹利投行部任职\n· 毕业于布朗大学，获得应用数学与经济学学士学位" },
    { nameEn: "Fenglei Fang", roleEn: "Advisory Board Chairman, HH&L Acquisition Co.", photo: "images/Team/Fenglei-Fang.png", bioEn: "· Advisory Board Chairman of HH&L Acquisition Co.\n· Renowned investor with an outstanding long-term track record\n· Founder and Chairman of Hopu Investment\n· Extensive experience in sourcing investment opportunities and structuring and executing transactions\n· Broad and influential network in China's capital markets", nameZh: "方凤雷", roleZh: "HH&L Acquisition Co. - 咨询委员会主席", bioZh: "· HH&L Acquisition Co. 咨询委员会主席\n· 拥有数十年长期出色业绩的知名投资者\n· 厚朴投资创办人兼董事长\n· 在投资机会取得及交易结构设计和执行方面拥有广泛的经验\n· 在中国资本市场拥有广泛的网络和重大的影响力" },
    { nameEn: "Ken Hitchner", roleEn: "Chairman, HH&L Acquisition Co.", photo: "images/Team/Kenneth-W.Hitchner.png", bioEn: "· Chairman of HH&L Acquisition Co.\n· Decades of capital markets and advisory experience across global and Asian financial and technology sectors\n· Former Chairman and CEO of Goldman Sachs Asia Pacific (ex-Japan)\n· Former member of the Goldman Sachs Management Committee", nameZh: "Ken Hitchner", roleZh: "HH&L Acquisition Co. - 董事长", bioZh: "· HH&L Acquisition Co. 董事长\n· 在全球和亚洲的金融和技术领域拥有数十年的资本市场和咨询经验\n· 前高盛亚太区（除日本）董事长兼首席执行官\n· 高盛全球管理委员会成员" },
    { nameEn: "Kwan Sun", roleEn: "Founder, Millburn Advisory", photo: "images/Team/Kwan-Sun.png", bioEn: "· Founder of Millburn Advisory with extensive experience in finance and entrepreneurship\n· Built a broad investment banking network\n· Former Vice Chairman of Nan Fung Group's U.S. operations\n· Previously Managing Director at Morgan Stanley and Deutsche Bank\n· Former Vice President at Merrill Lynch", nameZh: "沈琨", roleZh: "Millburn Advisory – 创始人", bioZh: "· Millburn Advisory 创始人\n· 拥有丰富的金融与创业经验，建立了广泛的投行网络\n· 曾任南丰地产美国公司副董事长\n· 曾任摩根士丹利与德意志银行董事总经理\n· 曾任美林证券副总裁" },
    { nameEn: "Gordon Yale", roleEn: "Senior Advisor, CBC Securities", photo: "images/Team/Gordon.jpg", bioEn: "· Senior Advisor to CBC Securities\n· Former President and owner of Yale Group\n· Previously served as an expert to the U.S. Securities and Exchange Commission\n· Special investigative advisor to the Colorado State Board of Accountancy", nameZh: "Gordon Yale", roleZh: "CBC证券有限公司 - 高级顾问", bioZh: "· CBC证券有限公司高级顾问\n· 曾是 Yale Group 总裁兼所有人\n· 曾担任美国证券交易委员会专家\n· 科罗拉多州会计委员会的特别调查顾问" }
];

function openTeamModalByIndex(index) {
    var m = TEAM_MEMBERS[index];
    if (m && typeof openTeamModal === "function") {
        openTeamModal(m.nameEn, m.roleEn, m.bioEn, m.nameZh, m.roleZh, m.bioZh, m.photo, m.logos);
    }
}

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
        <span class="t-en">Core Management</span>
        <span class="t-zh">核心管理层</span>
    </div>
    <div class="team-grid">
        <div class="team-card" onclick="openTeamModalByIndex(0)">
            <div class="team-photo"><img src="images/Team/Richard.png" alt="Richard Li / 李琦"></div>
            <h3 class="team-name" style="font-size:22px; font-weight:700; margin-top:12px;">
                <span class="t-en">Richard Li</span>
                <span class="t-zh">李琦</span>
            </h3>
            <p class="team-title" style="font-size:13px; font-style:italic; margin-top:8px;">
                <span class="t-en">Chairman</span>
                <span class="t-zh">主席</span>
            </p>
            <p class="team-company" style="font-size:15px; font-style:italic; font-weight:600; margin-top:6px;">
                <span class="t-en">Chenghe Group / Chenghe Capital</span>
                <span class="t-zh">成和集团 / 成和资本</span>
            </p>
        </div>
        <div class="team-card" onclick="openTeamModalByIndex(1)">
            <div class="team-photo"><img src="images/Team/Tee.jpg" alt="Choon Hong Tee / 郑俊峰"></div>
            <h3 class="team-name" style="font-size:22px; font-weight:700; margin-top:12px;">
                <span class="t-en">Choon Hong Tee</span>
                <span class="t-zh">郑俊峰</span>
            </h3>
            <p class="team-title" style="font-size:13px; font-style:italic; margin-top:8px;">
                <span class="t-en">Vice Chairman</span>
                <span class="t-zh">副主席</span>
            </p>
            <p class="team-company" style="font-size:15px; font-style:italic; font-weight:600; margin-top:6px;">
                <span class="t-en">Chenghe Capital</span>
                <span class="t-zh">成和资本</span>
            </p>
        </div>
        <div class="team-card" onclick="openTeamModalByIndex(2)">
            <div class="team-photo"><img src="images/Team/Shengwen_Peng.jpg" alt="Shengwen Peng / 彭胜文"></div>
            <h3 class="team-name" style="font-size:22px; font-weight:700; margin-top:12px;">
                <span class="t-en">Shengwen Peng</span>
                <span class="t-zh">彭胜文</span>
            </h3>
            <p class="team-title" style="font-size:13px; font-style:italic; margin-top:8px;">
                <span class="t-en">Vice Chairman</span>
                <span class="t-zh">副主席</span>
            </p>
            <p class="team-company" style="font-size:15px; font-style:italic; font-weight:600; margin-top:6px;">
                <span class="t-en">Chenghe Capital</span>
                <span class="t-zh">成和资本</span>
            </p>
        </div>
        <div class="team-card" onclick="openTeamModalByIndex(3)">
            <div class="team-photo"><img src="images/Team/Qiang_Liu.jpg" alt="Qiang Liu / 刘强"></div>
            <h3 class="team-name" style="font-size:22px; font-weight:700; margin-top:12px;">
                <span class="t-en">Qiang Liu</span>
                <span class="t-zh">刘强</span>
            </h3>
            <p class="team-title" style="font-size:13px; font-style:italic; margin-top:8px;">
                <span class="t-en">Chief Executive Officer</span>
                <span class="t-zh">首席执行官</span>
            </p>
            <p class="team-company" style="font-size:15px; font-style:italic; font-weight:600; margin-top:6px;">
                <span class="t-en">CBC Securities </span>
                <span class="t-zh">CBC 证券有限公司</span>
            </p>
        </div>
        <div class="team-card" onclick="openTeamModalByIndex(4)">
            <div class="team-photo"><img src="images/Team/Shibin-Wang.png" alt="Shibin Wang / 王世斌"></div>
            <h3 class="team-name" style="font-size:22px; font-weight:700; margin-top:12px;">
                <span class="t-en">Shibin Wang</span>
                <span class="t-zh">王世斌</span>
            </h3>
            <p class="team-title" style="font-size:13px; font-style:italic; margin-top:8px;">
                <span class="t-en">Chief Executive Officer & Director</span>
                <span class="t-zh">首席执行官及董事</span>
            </p>
            <p class="team-company" style="font-size:15px; font-style:italic; font-weight:600; margin-top:6px;">
                <span class="t-en">Chenghe Investment</span>
                <span class="t-zh">成和投资</span>
            </p>
        </div>
    </div>
    <div class="team-level-title">
        <span class="t-en">Core Team Members</span>
        <span class="t-zh">团队核心成员</span>
    </div>
    <div class="team-grid">
        <div class="team-card" onclick="openTeamModalByIndex(5)">
            <div class="team-photo"><img src="images/Team/Remington.jpg" alt="Remington / 徐睿旻"></div>
            <h3 class="team-name" style="font-size:22px; font-weight:700; margin-top:12px;">
                <span class="t-en">Remington Xu</span>
                <span class="t-zh">徐睿旻</span>
            </h3>
            <p class="team-title" style="font-size:13px; font-style:italic; margin-top:8px;">
                <span class="t-en">Partner</span>
                <span class="t-zh">合伙人</span>
            </p>
            <p class="team-company" style="font-size:15px; font-style:italic; font-weight:600; margin-top:6px;">
                <span class="t-en">Chenghe Capital</span>
                <span class="t-zh">成和资本</span>
            </p>
        </div>
        <div class="team-card" onclick="openTeamModalByIndex(7)">
            <div class="team-photo"><img src="images/Team/Lyle.jpg" alt="Lyle Wang/ 王兆海"></div>
            <h3 class="team-name" style="font-size:22px; font-weight:700; margin-top:12px;">
                <span class="t-en">Lyle Wang</span>
                <span class="t-zh">王兆海</span>
            </h3>
            <p class="team-title" style="font-size:13px; font-style:italic; margin-top:8px;">
                <span class="t-en">Vice President</span>
                <span class="t-zh">副总裁</span>
            </p>
            <p class="team-company" style="font-size:15px; font-style:italic; font-weight:600; margin-top:6px;">
                <span class="t-en">Chenghe Capital</span>
                <span class="t-zh">成和资本</span>
            </p>
        </div>
        <div class="team-card" onclick="openTeamModalByIndex(8)">
            <div class="team-photo"><img src="images/Team/Houston.jpg" alt="Houston Li / 李泽原"></div>
            <h3 class="team-name" style="font-size:22px; font-weight:700; margin-top:12px;">
                <span class="t-en">Houston Li</span>
                <span class="t-zh">李泽原</span>
            </h3>
            <p class="team-title" style="font-size:13px; font-style:italic; margin-top:8px;">
                <span class="t-en">Manager</span>
                <span class="t-zh">经理</span>
            </p>
            <p class="team-company" style="font-size:15px; font-style:italic; font-weight:600; margin-top:6px;">
                <span class="t-en">CBC Securities</span>
                <span class="t-zh">CBC证券有限公司</span>
            </p>
        </div>
        <div class="team-card" onclick="openTeamModalByIndex(6)">
            <div class="team-photo team-photo--headshot"><img src="images/Team/Erin.jpg" alt="Erin Baskett / Erin Baskett"></div>
            <h3 class="team-name" style="font-size:22px; font-weight:700; margin-top:12px;">
                <span class="t-en">Erin Baskett</span>
                <span class="t-zh">Erin Baskett</span>
            </h3>
            <p class="team-title" style="font-size:13px; font-style:italic; margin-top:8px;">
                <span class="t-en">Chief Financial Officer</span>
                <span class="t-zh">首席财务官</span>
            </p>
            <p class="team-company" style="font-size:15px; font-style:italic; font-weight:600; margin-top:6px;">
                <span class="t-en">CBC Securities</span>
                <span class="t-zh">CBC证券有限公司</span>
            </p>
        </div>
    </div>
    
    <div class="team-level-title">
        <span class="t-en">Partners and Advisors</span>
        <span class="t-zh">合作伙伴与顾问</span>
    </div>
    <div class="team-grid">
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
            <p class="team-company" style="font-size:15px; font-style:italic; font-weight:600; margin-top:6px;">
                <span class="t-en">HH&L Acquisition Co.</span>
                <span class="t-zh">HH&L Acquisition Co.</span>
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
            <p class="team-company" style="font-size:15px; font-style:italic; font-weight:600; margin-top:6px;">
                <span class="t-en">HH&L Acquisition Co.</span>
                <span class="t-zh">HH&L Acquisition Co.</span>
            </p>
        </div>
        <div class="team-card" onclick="openTeamModalByIndex(11)">
            <div class="team-photo"><img src="images/Team/Kwan-Sun.png" alt="Kwan Sun / 沈琨"></div>
            <h3 class="team-name" style="font-size:22px; font-weight:700; margin-top:12px;">
                <span class="t-en">Kwan Sun</span>
                <span class="t-zh">沈琨</span>
            </h3>
            <p class="team-title" style="font-size:13px; font-style:italic; margin-top:8px;">
                <span class="t-en">Founder</span>
                <span class="t-zh">创始人</span>
            </p>
            <p class="team-company" style="font-size:15px; font-style:italic; font-weight:600; margin-top:6px;">
                <span class="t-en">Millburn Advisory</span>
                <span class="t-zh">Millburn Advisory</span>
            </p>
        </div>
        <div class="team-card" onclick="openTeamModalByIndex(12)">
            <div class="team-photo"><img src="images/Team/Gordon.jpg" alt="Gordon Yale"></div>
            <h3 class="team-name" style="font-size:22px; font-weight:700; margin-top:12px;">
                <span class="t-en">Gordon Yale</span>
                <span class="t-zh">Gordon Yale</span>
            </h3>
            <p class="team-title" style="font-size:13px; font-style:italic; margin-top:8px;">
                <span class="t-en">Senior Advisor</span>
                <span class="t-zh">高级顾问</span>
            </p>
            <p class="team-company" style="font-size:15px; font-style:italic; font-weight:600; margin-top:6px;">
                <span class="t-en">CBC Securities</span>
                <span class="t-zh">CBC证券有限公司</span>
            </p>
        </div>
    </div>
    `;
}
