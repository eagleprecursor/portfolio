import React, { useState } from "react";
import { EagleProgressLeaderboard } from "../data/progress-chart-1";
import { ProgressTrackerLineChart } from "@eprecursor/gamingstattracker";

const LeaderboardSnippet = () => {

    const [cumulative, showCumulative] = useState(true);

    return (
        <section className='leaderboard-overview'>
            <h3>Leaderboards</h3> 
            <p>A Leaderboard is a list of player stats ordered by a specific column in descending order. For my Halo 5 implementation, I created <b>Rating</b> and used this as the main order column. But any column about stats can be used to order the Leaderboard, even ratios of columns, for example: K/D (Kills/Deaths).</p>
            <div className="stat-tracker-player-data">
                <div class="stat-tracker-mod-col-header stat-tracker-mod-row">
                    <div class="position-col"><span>#</span></div>
                    <div class="account-col"><span>Gamertag</span></div>
                    <div class="row-data">
                        <div class="rating-col highlight">Rating</div>
                        <div class="k/d-col">K/D</div>
                        <div class="killspergame-col">Kills per Game</div>
                        <div class="win%-col">Win %</div>
                        <div class="gamesplayed-col">Games Played</div>
                    </div>
                </div>
                <div class="stat-tracker-mod-rows">
                    <div class="stat-tracker-mod-row low-opacity">
                        <div class="position-col">
                            <span>8</span>
                        </div>
                        <div class="account-col">
                            <span>
                                <img src="/images/h5/emblems/emblem-1.png" />
                                Distrivusionx
                            </span>
                            <button class="expand-row spinner-wrapper small showing">
                                <span class="spinner arrow"></span>
                            </button>
                        </div>
                        <div class="row-data">
                            <div class="rating-col highlight">
                                <span class="rating-bar onyx rank-5">
                                    <span class="rating-title">Onyx 5</span>
                                    <span class="rating-bar-wrapper">
                                        <span class="rating-bar-inner" style={{ width: "67.58%" }}></span>
                                    </span>
                                </span>
                            </div>
                            <div class="k/d-col">
                                <span>2.36</span>
                            </div>
                            <div class="killspergame-col">
                                <span>21.64</span>
                            </div>
                            <div class="win%-col">
                                <span>42.47</span>
                            </div>
                            <div class="gamesplayed-col">
                                <span>15280</span>
                            </div>
                        </div>
                    </div>
                    <div class="stat-tracker-mod-row low-opacity">
                        <div class="position-col">
                            <span>9</span>
                        </div>
                        <div class="account-col">
                            <span>
                                <img src="/images/h5/emblems/emblem-2.png" />
                                Rene Gtz7223
                            </span>
                            <button class="expand-row spinner-wrapper small showing">
                                <span class="spinner arrow"></span>
                            </button>
                        </div>
                        <div class="row-data">
                            <div class="rating-col highlight">
                                <span class="rating-bar onyx rank-5">
                                    <span class="rating-title">Onyx 5</span>
                                    <span class="rating-bar-wrapper">
                                        <span class="rating-bar-inner" style={{ width: "60.42%" }}></span>
                                    </span>
                                </span>
                            </div>
                            <div class="k/d-col">
                                <span>2.68</span>
                            </div>
                            <div class="killspergame-col">
                                <span>20.74</span>
                            </div>
                            <div class="win%-col">
                                <span>53.39</span>
                            </div>
                            <div class="gamesplayed-col">
                                <span>11666</span>
                            </div>
                        </div>
                    </div>
                    <div class="stat-tracker-mod-row expanded">
                        <div class="position-col">
                            <span>10</span>
                        </div>
                        <div class="account-col">
                            <span>
                                <img src="/images/h5/image-eagle.png" />
                                Eagle Precursor
                            </span>
                            <button class="expand-row spinner-wrapper small showing">
                                <span class="spinner up-arrow arrow"></span>
                            </button>
                        </div>
                        <div class="row-data">
                            <div class="rating-col highlight">
                                <span class="rating-bar onyx rank-5">
                                    <span class="rating-title">Onyx 5</span>
                                    <span class="rating-bar-wrapper">
                                        <span class="rating-bar-inner" style={{ width: "51.1%" }}></span>
                                    </span>
                                </span>
                            </div>
                            <div class="k/d-col">
                                <span>4.69</span>
                            </div>
                            <div class="killspergame-col">
                                <span>29.33</span>
                            </div>
                            <div class="win%-col">
                                <span>57.73</span>
                            </div>
                            <div class="gamesplayed-col">
                                <span>7945</span>
                            </div>
                        </div>
                    </div>
                    <div class="stat-tracker-mod-row leaderboard-expansion-row">
                        <div class="position-col"></div>
                        <div class="expansion-row-content">
                            <article class="player-summary flex">
                                <div class="h5-spartan-image" style={{ backgroundImage: "url('/images/h5/spartan-eagle.png')"}}></div>
                                <div class="player-details flex-grow">
                                    <section class="breakdowns-col flex-grow-children">
                                        <div class="player-breakdown">
                                            <section>
                                                <h3>SR152</h3>
                                                <div class="progress-bar">
                                                    <div class="progress-bar-inner" style={{ width: "78%" }}></div>
                                                </div>
                                                <p>distance to SR153</p>
                                            </section>
                                            <section>
                                                <h3>89000000</h3>
                                                <p>Experience (Xp)</p>
                                            </section>
                                            <section>
                                                <h3>47 days 23 hours</h3>
                                                <p>Time Played</p>
                                            </section>
                                        </div>
                                        <div class="stats-breakdown">
                                            <div class="rating-breakdown rating-bar onyx rank-5">
                                                <div class="rating-image"></div>
                                                <span class="rating-bar-wrapper">
                                                    <span class="rating-bar-inner" style={{ width: "51.1%" }}></span>
                                                </span>
                                                <div class="rating-numbers">
                                                    <p>Rating: 205551</p>
                                                    <p>24449 to Onyx 6</p>
                                                </div>
                                            </div>
                                            <div class="top-medals">
                                                <h4>Top Medals Earned</h4>
                                                <span class="profile-stats">
                                                    <span class="medalsheet-halo5" style={{ width: "37px", height: "37px", backgroundSize: "1024px 512px", backgroundPosition: "-888px -37px"}}></span>
                                                    <span>
                                                        <span>Killionaire: 2612</span>
                                                        <span class="profile-stats-pergame">Per game: 0.33</span>
                                                    </span>
                                                </span>
                                                <span class="profile-stats">
                                                    <span class="medalsheet-halo5" style={{ width: "37px", height: "37px", backgroundSize: "1024px 512px", backgroundPosition: "-111px -333px"}}></span>
                                                    <span>
                                                        <span>The Cure: 785</span>
                                                        <span class="profile-stats-pergame">Per game: 0.1</span>
                                                    </span>
                                                </span>
                                                <span class="profile-stats">
                                                    <span class="medalsheet-halo5" style={{ width: "37px", height: "37px", backgroundSize: "1024px 512px", backgroundPosition: "-296px -333px"}}></span>
                                                    <span>
                                                        <span>Lord Of The Flies: 270</span>
                                                        <span class="profile-stats-pergame">Per game: 0.03</span>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div class="stat-tracker-mod-row low-opacity">
                        <div class="position-col">
                            <span>11</span>
                        </div>
                        <div class="account-col">
                            <span>
                                <img src="/images/h5/emblems/emblem-4.png" />
                                Jorge Iron X
                            </span>
                            <button class="expand-row spinner-wrapper small showing">
                                <span class="spinner arrow"></span>
                            </button>
                        </div>
                        <div class="row-data">
                            <div class="rating-col highlight">
                                <span class="rating-bar onyx rank-5">
                                    <span class="rating-title">Onyx 5</span>
                                    <span class="rating-bar-wrapper">
                                        <span class="rating-bar-inner" style={{ width: "41.231%" }}></span>
                                    </span>
                                </span>
                            </div>
                            <div class="k/d-col">
                                <span>3.35</span>
                            </div>
                            <div class="killspergame-col">
                                <span>26.48</span>
                            </div>
                            <div class="win%-col">
                                <span>62.02</span>
                            </div>
                            <div class="gamesplayed-col">
                                <span>7935</span>
                            </div>
                        </div>
                    </div>
                    <div class="stat-tracker-mod-row low-opacity">
                        <div class="position-col">
                            <span>12</span>
                        </div>
                        <div class="account-col">
                            <span>
                                <img src="/images/h5/emblems/emblem-3.png" />
                                Rosalian
                            </span>
                            <button class="expand-row spinner-wrapper small showing">
                                <span class="spinner arrow"></span>
                            </button>
                        </div>
                        <div class="row-data">
                            <div class="rating-col highlight">
                                <span class="rating-bar onyx rank-5">
                                    <span class="rating-title">Onyx 5</span>
                                    <span class="rating-bar-wrapper">
                                        <span class="rating-bar-inner" style={{ width: "38.53%" }}></span>
                                    </span>
                                </span>
                            </div>
                            <div class="k/d-col">
                                <span>4.56</span>
                            </div>
                            <div class="killspergame-col">
                                <span>32.08</span>
                            </div>
                            <div class="win%-col">
                                <span>74.31</span>
                            </div>
                            <div class="gamesplayed-col">
                                <span>5982</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="overview-highlight-row">
                <section className="info">
                    <h4>Headers</h4>
                    <p>Each generated Leaderboard is ordered by a chosen or default column. This column can be used to determine any additional columns that show alongside it (relevant data/stats) based on the column's type (int / duration / ratio etc.)</p>
                </section>
                <div class="stat-tracker-mod-col-header stat-tracker-mod-row">
                    <div class="position-col"><span>#</span></div>
                    <div class="account-col"><span>Gamertag</span></div>
                    <div class="row-data">
                        <div class="rating-col highlight">Rating</div>
                        <div class="k/d-col">K/D</div>
                        <div class="killspergame-col">Kills per Game</div>
                        <div class="win%-col">Win %</div>
                        <div class="gamesplayed-col">Games Played</div>
                    </div>
                </div>
            </div>
            <div className="overview-highlight-row second">
                <section className="info">
                    <h4>Rows</h4>
                    <p>Rows are displayed in position order, highlighting #1, #2 and #3</p>
                    <div class="stat-tracker-player-data">
                        <div class="stat-tracker-mod-col-header stat-tracker-mod-row">
                            <div class="position-col">
                                <span>#</span>
                            </div>
                            <div class="account-col">
                                <span>Gamertag</span>
                            </div>
                            <div class="row-data">
                                <div class="k/d-col highlight">
                                    K/D
                                </div>
                                <div class="rating-col">
                                    Rating
                                </div>
                                <div class="killspergame-col">
                                    Kills per Game
                                </div>
                                <div class="win%-col">
                                    Win %
                                </div>
                                <div class="gamesplayed-col">
                                    Games Played
                                </div>
                            </div>
                        </div>
                        <div class="stat-tracker-mod-rows">
                            <div class="stat-tracker-mod-row top-3 pos-1">
                                <div class="position-col">
                                    <span>1</span>
                                </div>
                                <div class="account-col">
                                    <span>
                                        <img src="/images/h5/emblems/emblem-4.png" />
                                        Jixcs
                                    </span>
                                </div>
                                <div class="row-data">
                                    <div class="k/d-col highlight">
                                        <span>8.38</span>
                                    </div>
                                    <div class="rating-col">
                                        <span class="rating-bar diamond rank-3">
                                            <span class="rating-title">Diamond 3</span>
                                            <span class="rating-bar-wrapper">
                                                <span class="rating-bar-inner" style={{ width: "52.41%" }}></span>
                                            </span>
                                        </span>
                                    </div>
                                    <div class="killspergame-col">
                                        <span>49.98</span>
                                    </div>
                                    <div class="win%-col">
                                        <span>74.4</span>
                                    </div>
                                    <div class="gamesplayed-col">
                                        <span>1121</span>
                                    </div>
                                </div>
                            </div>
                            <div class="stat-tracker-mod-row top-3 pos-2">
                                <div class="position-col">
                                    <span>2</span>
                                </div>
                                <div class="account-col">
                                    <span>
                                        <img src="/images/h5/image-eagle2.png" />
                                        Eagle Perdition
                                    </span>
                                </div>
                                <div class="row-data">
                                    <div class="k/d-col highlight">
                                        <span>7.73</span>
                                    </div>
                                    <div class="rating-col">
                                        <span class="rating-bar onyx rank-5">
                                            <span class="rating-title">Onyx 5</span>
                                            <span class="rating-bar-wrapper">
                                                <span class="rating-bar-inner" style={{ width: "25.66%" }}></span>
                                            </span>
                                        </span>
                                    </div>
                                    <div class="killspergame-col">
                                        <span>42.49</span>
                                    </div>
                                    <div class="win%-col">
                                        <span>81.92</span>
                                    </div>
                                    <div class="gamesplayed-col">
                                        <span>4614</span>
                                    </div>
                                </div>
                            </div>
                            <div class="stat-tracker-mod-row top-3 pos-3">  
                                <div class="position-col">
                                    <span>3</span>
                                </div>
                                <div class="account-col">
                                    <span>
                                        <img src="/images/h5/emblems/emblem-5.png" />
                                        Jyrxz
                                    </span>
                                </div>
                                <div class="row-data">
                                    <div class="k/d-col highlight">
                                        <span>6.04</span>
                                    </div>
                                    <div class="rating-col">
                                        <span class="rating-bar onyx rank-3">
                                            <span class="rating-title">Onyx 3</span>
                                            <span class="rating-bar-wrapper">
                                                <span class="rating-bar-inner" style={{ width: "89.94%" }}></span>
                                            </span>
                                        </span>
                                    </div>
                                    <div class="killspergame-col">
                                        <span>36.14</span>
                                    </div>
                                    <div class="win%-col">
                                        <span>66.2</span>
                                    </div>
                                    <div class="gamesplayed-col">
                                        <span>3778</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="overview-highlight-row third">
                <section className="info">
                    <h4>Expansion Rows</h4>
                    <p>Players on the Leaderboard can be expanded to view the progression of their stats over time for the chosen order column. For my Halo 5 implementation, rating progress isn't shown and a breakdown is shown instead.</p>
                    <div class="stat-tracker-player-data">
                        <div class="stat-tracker-mod-row expanded">
                            <div class="position-col">
                                <span>12</span>
                            </div>
                            <div class="account-col">
                                <span>
                                    <img src="/images/h5/image-eagle.png" />
                                    Eagle Precursor
                                </span>
                                <button class="expand-row spinner-wrapper small showing">
                                    <span class="spinner up-arrow arrow"></span>
                                </button>
                            </div>
                            <div class="row-data">
                                <div class="kills-col highlight"><span>233026</span></div>
                                <div class="killspergame-col"><span>29.33</span></div>
                                <div class="rating-col">
                                    <span class="rating-bar onyx rank-5">
                                        <span class="rating-title">Onyx 5</span>
                                        <span class="rating-bar-wrapper">
                                            <span class="rating-bar-inner" style={{ width: "51.1%" }}></span>
                                        </span>
                                    </span>
                                </div>
                                <div class="gamesplayed-col">
                                    <span>7945</span>
                                </div>
                            </div>
                        </div>
                        <div className="stat-tracker-mod-row leaderboard-expansion-row">
                            <div className="expansion-row-content">
                                <ProgressTrackerLineChart 
                                    player={EagleProgressLeaderboard.player} 
                                    progress={EagleProgressLeaderboard.progress} 
                                    cumulative={cumulative} 
                                    panelButtons={
                                        <>
                                            <button onClick={() => showCumulative(!cumulative)}>{ cumulative ? "Show Daily Increases" : "Show Cumulative Progress"}</button>
                                        </>
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
}

const TechCVSection = () => (
    <div className='flex flex-down'>
        <section className='project-overview'>
            <h1>Gaming Stats Tracker and Leaderboards project</h1>
            <p className='overview'>
                What started out as version 4 for my Halo 5 Infection Leaderboard project became the Gaming Stats Tracker, a system that can make Leaderboards, Progress Trackers and Player overview pages for a big data set for game's player's stats.
            </p>
            <LeaderboardSnippet />
            <h2>Player Data</h2>
            <p>The Stats tracker is designed to work with player's stats data, like the number of games they have played, the amount of time they have played, the number of medals they have, etc.</p>
            <p>Each different stat that a game tracks can be added to a player data table for the game, and categorized by the game's metadata.</p>
            <p>The type of stat can also be set which can change the way it's displayed and change the way the stat is compared between players.</p>
            <h3>Rating Column</h3>
            <p>explain rating column with tiers</p>
            <p>rating selector: auto-generates a random rating number between 1-300k using tiers from H5</p>
            <div class="rating-breakdown rating-bar onyx rank-5">
                <div class="rating-image"></div>
                <span class="rating-bar-wrapper">
                    <span class="rating-bar-inner" style={{ width: "51.1%" }}></span>
                </span>
                <div class="rating-numbers"><p>Rating: 205551</p><p>24449 to Onyx 6</p></div>
            </div>
            <h3>Stats viewer with example from Halo 5 stats</h3>
            <div className='columns-2'>
                <div className='left-column'>
                    <ul>
                        <li>Main</li>
                        <li>Medals</li>
                        <li>Weapons</li>
                    </ul>
                </div>
                <div className='right-column'>
                    <p>I defined Main stats in Halo 5 as any stats that arent Medals or Weapons, and included Column Ratios.</p>
                    <p>display a list of stats from Eagle's profile, with positions. </p>
                    <p>Then do the same accordion tabs style for medals and weapons.</p>
                </div>
            </div>
            <h2>Leaderboards</h2>
            <p>Lots of the stuff here</p>
            <h2>Progress Tracker</h2>
            <h2>Player Badges</h2>
        </section>

        <div id="halo5-infection-lb" className='homepage-section'>
            <h1>Extra features of my Halo 5 Infection Leaderboard</h1>
            <h2>Matches Leaderboard (Records Portal)</h2>
            <h2>Games Viewer</h2>
            <h2>Detailed Game Analysis</h2>
        </div>

        <section className='cv-list'>
            <h1><span className='title'>Web Development Intern – MyKnowledgeMap</span><span className='location'>York, UK</span></h1>
            <h3>October 2020 – June 2021, <i>July – August 2019</i></h3>
            <p className='skills-list'><b>Skills Developed:</b>Web Development, Unit Testing, Team Working, WCAG 2.1, Git, Angular.js, React.js, Redux.js</p>
            <ul>
                <li>Gained experienced working with different web technologies such as React.js, Redux.js and Angular.js whilst implementing accessibility changes and testing for and fixing errors/bugs in the company projects to help them meet the Web Content Accessibility Guidelines (WCAG 2.1)</li>
                <li>Learned how to maintain and improve codebase for working projects by reducing the amount of code duplication, and improving consistency between pages</li>
                <li>Developed skills in collaborating with other members of the team to test changes for a major project release, as well as skills in Unit Testing and using libraries like Headless Chrome to identify and fix issues.</li>
                <li>Modelled a prototype for an interactive book that the company wanted to develop into a future product</li>
            </ul>
        </section>
    </div>
);

export default TechCVSection;