import { ColumnHeaders } from "./components/column-headers";
import StatsLeaderboardPanels from "./components/panels";
import StatsLeaderboardRows from "./components/rows";

const metadata = require('./h5fakeapi/metadata.json');

const StatsTrackerDemoWithComponents = ({ api }) => (
    <div id="demo-wrapper">
        <header id="demo-page-header">
            <div class="demo-header-image-wrapper">
                <div class="demo-header-image backwoods">
                    <div class="demo-header-image-vignette">
                        <div class="demo-header-image-title-wrapper">
                            <div class="header-image-title">
                                <span>Stats Tracker Demo</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div id="demo-content">
            <main>
                <section className="dark-bg">
                    <div class="text-content">
                        <p>This is a demo of the stats tracker built using player stats from Halo 5: Guardians. The demo only contains a small subset of player data and available stats. The only player viewable is <b>Eagle Precursor</b>. Any headers/links that are greyed out will not load. At this time, I have no plans to upload the full site, as the playerbase for the game is now extremely low, so to view the full site in action <a href='https://www.youtube.com/watch?v=0oOmcVUOx4E'>click here to view an overview video</a> going through all the features in depth.</p>      
                    </div>            
                    <div className="stat-tracker-player-data">
                        <StatsLeaderboardPanels data={api} metadata={metadata} />
                        <div className='stat-tracker-mod-scrollable'>
                            <ColumnHeaders 
                                staticCols={            
                                    <>
                                        <div className="position-col"><span>#</span></div>
                                        <div className="account-col"><span>Gamertag</span></div>
                                    </>
                                }
                                headers={api.headers} 
                                currentOrder={api.order}
                                basePath={"/demo"}
                            />
                            <StatsLeaderboardRows data={api} metadata={metadata} />               
                        </div>
                    </div>
                </section>
            </main>
        </div>
        <div id="page-footer-wrapper">
            <div id="page-footer">
                <p class="header">Legal</p>
                <p class="footnote">This application is offered by Eagle Precursor (Jordan Knight), which is solely responsible for its content. It is not sponsored or endorsed by Microsoft. This application uses the Halo® Game Data API. Halo © Microsoft Corporation. All rights reserved. Microsoft, Halo, and the Halo Logo are trademarks of the Microsoft group of companies.</p>
                <p class="footnote">Halo 5 &copy; Microsoft Corporation. The Halo 5 implementation of the Gaming Stats Tracker as well as the Halo 5 Infection Leaderboard were created under Microsoft's <a href="https://www.xbox.com/en-us/developers/rules">"Game Content Usage Rules"</a> using assets from Halo 5, and it is not endorsed by or affiliated with Microsoft.</p>
            </div>
        </div>
    </div>
)

export default StatsTrackerDemoWithComponents;