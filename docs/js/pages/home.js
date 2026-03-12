/**
 * 首页内容模块
 * 管理首页的所有HTML内容
 * 修改此文件即可更新首页内容
 */

function getHomePageHTML() {
    return `
    <div class="hero">
        <div class="hero-news-box" id="hero-news-alert">
            <span class="news-badge">
                <span class="t-en">Latest Update</span>
                <span class="t-zh">最新动态</span>
            </span>
            <h3>
                <span class="t-en">Chenghe Acquisition III Co. (NASDAQ: CHEC) Officially Launches Target Search</span>
                <span class="t-zh">Chenghe Acquisition III Co. (NASDAQ: CHEC) 正式启动目标搜寻</span>
            </h3>
            <p>
                <span class="t-en">As our 5th successful SPAC, CHEC is now seeking industry leaders with disruptive technology and strong growth potential in the Asian region as merger targets.</span>
                <span class="t-zh">作为我们成功发行的第五支SPAC，CHEC现面向亚洲地区寻找具有颠覆性技术和强劲增长潜力的行业领导者作为合并目标。</span>
            </p>
            <a class="hero-news-link" onclick="switchSpacMainTab('Chenghe III')">
                <span class="t-en">Learn More about CHEC &rarr;</span>
                <span class="t-zh">了解更多关于 CHEC &rarr;</span>
            </a>
        </div>

        <div class="hero-overlay-box">
            <h2>
                <span class="t-en">Principal Investing<br>Capital Markets Advisory<br>SPAC</span>
                <span class="t-zh">私募股权投资<br>资本市场顾问<br>SPAC</span>
            </h2>
            <p>
                <span class="t-en">Connecting global capital markets with visionary Asian enterprises</span>
                <span class="t-zh">连接全球资本市场与具有远见卓识的亚洲企业</span>
            </p>
        </div>
    </div>

    <div class="business-preview">
        <h2>
            <span class="t-en">Our Expertise</span>
            <span class="t-zh">成和业务</span>
        </h2>

        <div class="biz-container">
            <div class="biz-box">
                <h3>
                    <span class="t-en">SPAC Sponsor</span>
                    <span class="t-zh">SPAC 发起人</span>
                </h3>
                <p class="biz-desc">
                    <span class="t-en">Chenghe is a leading player in the Asian SPAC market, with over $4.3 billion in transaction value closed.</span>
                    <span class="t-zh">成和是亚洲 SPAC 市场的领先参与者，已累计完成逾 43 亿美元的交易总额。</span>
                </p>
                <div style="margin-top: 0;">
                    <a class="biz-link" onclick="switchSpacMainTab('Overview')">
                        <span class="t-en">Chenghe SPAC Overview</span>
                        <span class="t-zh">成和SPAC概览</span>
                    </a>
                </div>
            </div>

            <div class="biz-box">
                <h3>
                    <span class="t-en">Advisory Services</span>
                    <span class="t-zh">顾问服务</span>
                </h3>
                <p class="biz-desc">
                    <span class="t-en">We partner with enterprises positioned for international growth, providing end-to-end guidance from securing financing and navigating restructuring to achieving a public listing. </span>
                    <span class="t-zh">我们与有国际增长潜力的企业合作，为其从获得融资到重构再到上市，提供全方位的咨询服务。</span>
                </p>
                <div style="margin-top: 0;">
                    <a class="biz-link" onclick="switchFaTab('HK')">
                        <span class="t-en">Hong Kong – Chenghe Capital Management</span>
                        <span class="t-zh">香港 – 成和资本管理</span>
                    </a>
                    <a class="biz-link" onclick="switchFaTab('US')">
                        <span class="t-en">United States – CBC Securities</span>
                        <span class="t-zh">美国 – CBC 证券</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
    
    <div class="news-section">
        <h2>
            <span class="t-en">News</span>
            <span class="t-zh">成和新闻</span>
        </h2>
        <div class="news-container" id="news-scroll-host">
            <div class="news-grid">
                <div class="news-card" onclick="window.open('https://finance.yahoo.com/news/chenghe-acquisition-iii-co-announces-014100803.html?guccounter=1', '_blank')">
                    <h4>
                        <span class="t-en">Chenghe Acquisition III Announces Pricing of $100 Million IPO</span>
                        <span class="t-zh">Chenghe Acquisition III 宣布定价1亿美元 IPO</span>
                    </h4>
                    <p style="font-size:14px; color:#999; margin-bottom:15px;">November 2025</p>
                    <p style="color:var(--color-grey); font-size:14px;">
                        <span class="t-en">The Company announced the pricing of its initial public offering of 10,000,000 units...</span>
                        <span class="t-zh">公司宣布其1000万单位的首次公开募股定价...</span>
                    </p>
                    <a class="read-more"><span class="t-en">Read More &rarr;</span><span class="t-zh">阅读更多 &rarr;</span></a>
                </div>
                
                <div class="news-card">
                    <h4>
                        <span class="t-en">Strategic Partnership Announced</span>
                        <span class="t-zh">宣布达成战略合作伙伴关系</span>
                    </h4>
                    <p style="font-size:14px; color:#999; margin-bottom:15px;">January 20, 2026</p>
                    <p style="color:var(--color-grey); font-size:14px;">
                        <span class="t-en">Expanding our reach in the green energy sector through strategic alliances with key Asian players.</span>
                        <span class="t-zh">通过与亚洲主要参与者的战略联盟，扩大我们在绿色能源领域的影响力。</span>
                    </p>
                    <a class="read-more"><span class="t-en">Read More &rarr;</span><span class="t-zh">阅读更多 &rarr;</span></a>
                </div>
                
                <div class="news-card">
                    <h4>
                        <span class="t-en">Chenghe Capital Expands Team</span>
                        <span class="t-zh">成和资本扩充团队</span>
                    </h4>
                    <p style="font-size:14px; color:#999; margin-bottom:15px;">March 10, 2026</p>
                    <p style="color:var(--color-grey); font-size:14px;">
                        <span class="t-en">We are pleased to welcome new senior partners to our Hong Kong office.</span>
                        <span class="t-zh">我们要非常荣幸地欢迎新的高级合伙人加入我们的香港办事处。</span>
                    </p>
                    <a class="read-more"><span class="t-en">Read More &rarr;</span><span class="t-zh">阅读更多 &rarr;</span></a>
                </div>

                <div class="news-card">
                    <h4>
                        <span class="t-en">Quarterly Market Insight</span>
                        <span class="t-zh">季度市场洞察</span>
                    </h4>
                    <p style="font-size:14px; color:#999; margin-bottom:15px;">April 05, 2026</p>
                    <p style="color:var(--color-grey); font-size:14px;">
                        <span class="t-en">An in-depth analysis of the recovering Asian tech IPO market for Q1 2026.</span>
                        <span class="t-zh">对2026年第一季度亚洲科技IPO市场复苏的深度分析。</span>
                    </p>
                    <a class="read-more"><span class="t-en">Read More &rarr;</span><span class="t-zh">阅读更多 &rarr;</span></a>
                </div>

                <div class="news-card">
                    <h4>
                        <span class="t-en">Annual Investor Conference</span>
                        <span class="t-zh">年度投资者大会</span>
                    </h4>
                    <p style="font-size:14px; color:#999; margin-bottom:15px;">May 12, 2026</p>
                    <p style="color:var(--color-grey); font-size:14px;">
                        <span class="t-en">Join us for our annual gathering to discuss global macroeconomic trends.</span>
                        <span class="t-zh">加入我们的年度聚会，共同探讨全球宏观经济趋势。</span>
                    </p>
                    <a class="read-more"><span class="t-en">Read More &rarr;</span><span class="t-zh">阅读更多 &rarr;</span></a>
                </div>

                <div class="news-card">
                    <h4>
                        <span class="t-en">ESG Report 2025 Release</span>
                        <span class="t-zh">2025 ESG 报告发布</span>
                    </h4>
                    <p style="font-size:14px; color:#999; margin-bottom:15px;">June 01, 2026</p>
                    <p style="color:var(--color-grey); font-size:14px;">
                        <span class="t-en">Highlighting our commitment to sustainable investing and corporate governance.</span>
                        <span class="t-zh">重点介绍我们在可持续投资和公司治理方面的承诺。</span>
                    </p>
                    <a class="read-more"><span class="t-en">Read More &rarr;</span><span class="t-zh">阅读更多 &rarr;</span></a>
                </div>
            </div>
        </div>
        <div class="news-scrollbar-wrap">
            <div class="news-scrollbar-track" id="news-scrollbar-track">
                <div class="news-scrollbar-thumb" id="news-scrollbar-thumb"></div>
            </div>
        </div>
    </div>
    `;
}
