import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import PlayerSummary from "./components/player-summary";
import ProfileStats from "./components/profile-stats";
import AwardedBadgesList from "./components/awarded-badges";
import { useState } from "react";
import { ColumnHeaders } from "./components/column-headers";
import PlayerProgressTrackerRows from "./components/progress-rows";
import ProgressTrackerLineChart from "../_progress/line-chart";

const metadata = require('./h5fakeapi/metadata.json');
const EagleStats = require('./h5fakeapi/stats/eagle.json');
const EagleProgress = require('./h5fakeapi/progress/eagleratingp1.json');

const { 
    player, 
    stats,
    badges 
} = EagleStats;

const {
    progress: {
        headers,
        column
    }
} = EagleProgress;

const ProfilePageDemo = () => {

    const [chartData, setChartData] = useState(false);

    return (
        <div id="demo-wrapper" className="profile-page">
            <article id="demo-page-header">
                <div class="demo-header-image-wrapper">
                    <div class="demo-header-image ghoul-town">
                        <div class="demo-header-image-vignette">
                            <div class="demo-header-image-title-wrapper">
                                <div class="header-image-title">
                                    <span>Stats Tracker Demo</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <div id="demo-content">
                <article>
                    <section className="dark-bg">
                        <>
                            {
                                player && (
                                    <>            
                                        <PlayerSummary 
                                            player={player} 
                                            medals={metadata.medals}
                                            stats={stats && stats.infectionStats.data} 
                                            topMedalSummary={stats.topMedalSummary}
                                            profile={true}
                                        />
                                    </>
                                )
                            }
                            <section className="tabs-with-links">
                                <Tabs>
                                    <TabList>
                                        <Tab>
                                            <span>Stats</span>
                                        </Tab>
                                        <Tab>                        
                                            <span>Progress</span>
                                        </Tab>
                                    </TabList>
                                    <TabPanel>
                                        <ProfileStats
                                            player={player}
                                            badges={badges}
                                            metadata={metadata}
                                            stats={stats && stats.infectionStats.data}
                                            positions={stats && stats.lbpositions && stats.lbpositions.data}
                                            communityComparison={stats && stats.communityComparison}
                                        /> 
                                        {
                                            (badges && badges.awardedBadges.length > 0) && (
                                                <AwardedBadgesList
                                                    player={player}
                                                    medals={metadata.medals}
                                                    badges={badges}
                                                />
                                            )
                                        }
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="stat-tracker-player-data content-margin">  
                                            <div className="stats-tracker-panels content-margin">
                                                <span className="flex flex-align-left">Show Data as Charts <span class="checkbox-item"><button class={`checkbox-select-option ${chartData && "selected"}`} onClick={() => setChartData(!chartData)}></button></span></span>
                                            </div>
                                            {
                                                chartData 
                                                ? (
                                                    <div className="player-progress-charts">
                                                        <ProgressTrackerLineChart
                                                            progress={EagleProgress.progress} 
                                                            cumulative={true} 
                                                        />
                                                    </div>
                                                )
                                                : (
                                                    <div className='stat-tracker-mod-scrollable'>
                                                        <ColumnHeaders 
                                                            headers={headers} 
                                                            currentOrder={column}
                                                            staticCols={            
                                                                <>
                                                                    <div className="date-col"><span>Date</span></div>
                                                                </>
                                                            }
                                                            basePath={"/demo"}
                                                        />
                                                        <PlayerProgressTrackerRows data={EagleProgress} />               
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </TabPanel>
                                </Tabs>
                            </section>
                        </>
                    </section>
                </article>
            </div>
            <div id="page-footer-wrapper">
                <div id="page-footer">
                    <p><b>Legal</b></p>
                    <p class="footnote">This application is offered by Eagle Precursor (Jordan Knight), which is solely responsible for its content. It is not sponsored or endorsed by Microsoft. This application uses the Halo® Game Data API. Halo © Microsoft Corporation. All rights reserved. Microsoft, Halo, and the Halo Logo are trademarks of the Microsoft group of companies.</p>
                    <p class="footnote">Halo 5 &copy; Microsoft Corporation. The Halo 5 implementation of the Gaming Stats Tracker as well as the Halo 5 Infection Leaderboard were created under Microsoft's <a href="https://www.xbox.com/en-us/developers/rules">"Game Content Usage Rules"</a> using assets from Halo 5, and it is not endorsed by or affiliated with Microsoft.</p>
                </div>
            </div>
        </div>
    );
}

export default ProfilePageDemo;