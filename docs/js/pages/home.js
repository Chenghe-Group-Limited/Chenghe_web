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
            <a class="hero-news-link" onclick="window.open((document.body.className.indexOf('lang-zh') !== -1 ? 'https://lioncitylife.com/finance/chenghe-acquisition-iii-co-%e5%ae%a3%e5%b8%83%e5%85%b6a%e7%b1%bb%e6%99%ae%e9%80%9a%e8%82%a1%e5%92%8c%e8%ae%a4%e8%82%a1%e6%9d%83%e8%af%81%e5%b0%86%e4%ba%8e2025%e5%b9%b411%e6%9c%8811%e6%97%a5%e5%bc%80/' : 'https://www.globenewswire.com/news-release/2025/09/18/3152111/0/en/Chenghe-Acquisition-III-Co-Announces-Closing-of-126-5-Million-Initial-Public-Offering-Including-Full-Exercise-of-the-Underwriter-s-Overallotment-Option.html'), '_blank')">
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
                    <div class="spac-home-nav" style="margin-top: 0;">
                        <a class="spac-home-overview-bar" onclick="switchSpacMainTab('Overview')">
                            <span class="t-en">SPAC Overview</span>
                            <span class="t-zh">SPAC 概览</span>
                        </a>
                        <div class="spac-home-sub-grid">
                            <a href="javascript:void(0)" class="spac-home-sub-link" onclick="switchSpacMainTab('HHL')">
                                <span class="t-en">HH&L Acquisition Co.</span>
                                <span class="t-zh">HH&L Acquisition Co.</span>
                            </a>
                            <a href="javascript:void(0)" class="spac-home-sub-link" onclick="switchSpacMainTab('Chenghe')">
                                <span class="t-en">Chenghe Acquisition Co.</span>
                                <span class="t-zh">Chenghe Acquisition Co.</span>
                            </a>
                            <a href="javascript:void(0)" class="spac-home-sub-link" onclick="switchSpacMainTab('Chenghe I')">
                                <span class="t-en">Chenghe Acquisition I Co.</span>
                                <span class="t-zh">Chenghe Acquisition I Co.</span>
                            </a>
                            <a href="javascript:void(0)" class="spac-home-sub-link" onclick="switchSpacMainTab('Chenghe II')">
                                <span class="t-en">Chenghe Acquisition II Co.</span>
                                <span class="t-zh">Chenghe Acquisition II Co.</span>
                            </a>
                            <a href="javascript:void(0)" class="spac-home-sub-link" onclick="switchSpacMainTab('Chenghe III')">
                                <span class="t-en">Chenghe Acquisition III Co.</span>
                                <span class="t-zh">Chenghe Acquisition III Co.</span>
                            </a>
                        </div>
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
                <div class="spac-home-nav" style="margin-top: 0;">
                    <a class="spac-home-overview-bar" onclick="switchFaTab('HK')">
                        <span class="t-en">Hong Kong – Chenghe Capital Management</span>
                        <span class="t-zh">香港 – 成和资本管理</span>
                    </a>
                    <a class="spac-home-overview-bar" onclick="switchFaTab('US')">
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
                <div class="news-card t-zh" onclick="window.open('https://lioncitylife.com/finance/chenghe-acquisition-iii-co-%E5%AE%A3%E5%B8%83%E5%AE%8C%E6%88%901-265%E4%BA%BF%E7%BE%8E%E5%85%83%E9%A6%96%E6%AC%A1%E5%85%AC%E5%BC%80%E5%8B%9F%E8%82%A1%EF%BC%8C%E5%8C%85%E6%8B%AC%E5%AE%8C%E5%85%A8/', '_blank')">
                    <h4>
                        <span class="t-zh">Chenghe Acquisition III Co. 宣布完成1.265亿美元首次公开募股</span>
                    </h4>
                    <p style="font-size:14px; color:#999; margin-bottom:8px;">2025 年 9 月</p>
                    <p style="color:var(--color-grey); font-size:14px;">
                        <span class="t-zh">Chenghe Acquisition III Co.，一家新成立的特殊目的收购公司，根据开曼群岛豁免公司法成立，今日宣布其首次公开发行已完成，... </span>
                    </p>
                    <a class="read-more t-zh">阅读更多 &rarr;</a>
                </div>
                
                <div class="news-card t-zh" onclick="window.open('https://cn.investing.com/news/sec-filings/article-93CH-2822291', '_blank')">
                    <h4>
                        <span class="t-zh">成和收购II公司定于2025年6月6日完成合并</span>
                    </h4>
                    <p style="font-size:14px; color:#999; margin-bottom:8px;">2025 年 6 月</p>
                    <p style="color:var(--color-grey); font-size:14px;">
                        <span class="t-zh">2025年5月23日，特殊目的收购公司（SPAC）成和收购II公司（Chenghe II）召开了特别股东大会，就其与Polibeli集团有限公司（Polibeli Group Ltd.）的拟议业务合并进行投票。</span>
                    </p>
                    <a class="read-more t-zh">阅读更多 &rarr;</a>
                </div>
                
                <div class="news-card t-zh" onclick="window.open('https://xueqiu.com/8031625547/321087481', '_blank')">
                    <h4>
                        <span class="t-zh">营收 2873 万美金，来自台湾的启坤科技借壳 SPAC 挂牌纳斯达克</span>
                    </h4>
                    <p style="font-size:14px; color:#999; margin-bottom:8px;">2025 年 1 月</p>
                    <p style="color:var(--color-grey); font-size:14px;">
                        <span class="t-zh">来自台湾的高尔夫球杆制造商 Femco Steel Technology Co., Ltd.（“启坤科技”）与 SPAC 公司 Chenghe Acquisition I Co.（“Chenghe I”）宣布完成业务合并，在纳斯达克挂牌上市。</span>
                    </p>
                    <a class="read-more t-zh">阅读更多 &rarr;</a>
                </div>

                <div class="news-card t-zh" onclick="window.open('https://spac.mg21.com/merger/8378.html', '_blank')">
                    <h4>
                        <span class="t-zh">Chenghe Acquisition 与 TCO 达成合并上市协议，以加速成长型行业的光子集成电路技术的开发</span>
                    </h4>
                    <p style="font-size:14px; color:#999; margin-bottom:8px;">2023 年 7 月</p>
                    <p style="color:var(--color-grey); font-size:14px;">
                        <span class="t-zh">2023年7月21日，光学与3D感测科技公司台湾彩光科技股份有限公司（"TCO"）与特殊目的收购公司Chenghe Acquisition Co.达成业务合并协议。</span>
                    </p>
                    <a class="read-more t-zh">阅读更多 &rarr;</a>
                </div>

                <div class="news-card t-en" onclick="window.open('https://www.globenewswire.com/news-release/2025/09/18/3152111/0/en/Chenghe-Acquisition-III-Co-Announces-Closing-of-126-5-Million-Initial-Public-Offering-Including-Full-Exercise-of-the-Underwriter-s-Overallotment-Option.html', '_blank')">
                    <h4>
                        <span class="t-en">Chenghe Acquisition III Co. Announces Closing of $126.5 Million Initial Public Offering, Including Full Exercise of the Underwriter’s Overallotment Option</span>
                    </h4>
                    <p style="font-size:14px; color:#999; margin-bottom:8px;">Sep, 2025</p>
                    <p style="color:var(--color-grey); font-size:14px;">
                        <span class="t-en">Chenghe Acquisition III Co. (“the Company”), a newly organized special purpose acquisition company formed as a Cayman Islands exempted company, ...</span>
                    </p>
                    <a class="read-more t-en">Read More &rarr;</a>
                </div>

                <div class="news-card t-en" onclick="window.open('https://www.prnewswire.com/apac/news-releases/chenghe-acquisition-ii-co-announces-closing-of-86-25-million-initial-public-offering-302168830.html', '_blank')">
                    <h4>
                        <span class="t-en">Chenghe Acquisition II Co. Announces Closing of $86.25 Million Initial Public Offering</span>
                    </h4>
                    <p style="font-size:14px; color:#999; margin-bottom:8px;">Jun, 2024</p>
                    <p style="color:var(--color-grey); font-size:14px;">
                        <span class="t-en">Chenghe Acquisition II Co. ("the Company") (NYSE:CHEB.U), a blank check company, announced today the closing of its initial public offering of 8,625,000 units, ...</span>
                    </p>
                    <a class="read-more t-en">Read More &rarr;</a>
                </div>

                <div class="news-card t-en" onclick="window.open('https://www.prnewswire.com/apac/news-releases/femco-steel-technology-co-ltd-to-be-publicly-listed-in-the-us-through-a-business-combination-with-chenghe-acquisition-i-co-302021622.html', '_blank')">
                    <h4>
                        <span class="t-en">Femco Steel Technology Co., Ltd. to be Publicly Listed in the U.S. Through a Business Combination with Chenghe Acquisition I Co.</span>
                    </h4>
                    <p style="font-size:14px; color:#999; margin-bottom:8px;">Dec, 2023</p>
                    <p style="color:var(--color-grey); font-size:14px;">
                        <span class="t-en">Chenghe Acquisition I Co. (Nasdaq: LATG) ("Chenghe" or "SPAC") and Femco Steel Technology Co., Ltd. (TWO: 6731) ("FST" or the "Company"), ...</span>
                    </p>
                    <a class="read-more t-en">Read More &rarr;</a>
                </div>

                <div class="news-card t-en" onclick="window.open('https://www.paulhastings.com/news/chenghe-acquisition-company-completes-spac-ipo-on-nasdaq', '_blank')">
                    <h4>
                        <span class="t-en">Chenghe Acquisition Co. Completes SPAC IPO on NASDAQ</span>
                    </h4>
                    <p style="font-size:14px; color:#999; margin-bottom:8px;">Apr, 2022</p>
                    <p style="color:var(--color-grey); font-size:14px;">
                        <span class="t-en">Chenghe Acquisition Co. priced its IPO of 10,000,000 units at US$10.00 per unit. Each unit consists of one Class A ordinary share and one-half of one redeemable warrant, ...</span>
                    </p>
                    <a class="read-more t-en">Read More &rarr;</a>
                </div>

                <div class="news-card t-en" onclick="window.open('#', '_blank')">
                    <h4>
                        <span class="t-en">[English headline 4]</span>
                    </h4>
                    <p style="font-size:14px; color:#999; margin-bottom:8px;">[Month Day, Year]</p>
                    <p style="color:var(--color-grey); font-size:14px;">
                        <span class="t-en">[One or two lines of English summary for news 4.]</span>
                    </p>
                    <a class="read-more t-en">Read More &rarr;</a>
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
