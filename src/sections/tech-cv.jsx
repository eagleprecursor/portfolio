import React, { useState } from "react";
import { EagleProgressLeaderboard } from "../data/progress-chart-1";
import ProgressTrackerLineChart from "../_progress/line-chart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faIdBadge } from "@fortawesome/free-regular-svg-icons";
import { ProgressTracker } from "../data/progress-chart-2";
import ProfileRadar from "../_progress/radar-chart";
import { RadarChart } from "../data/radar-chart-1";

const LeaderboardSnippet = () => {

    const [cumulative, showCumulative] = useState(true);

    return (
        <section className='leaderboard-overview'>
            <h2>Leaderboards</h2> 
            <p>A Leaderboard is a list of player stats ordered by a specific column in descending order. Each column in a <b>player data table</b> (big-data stats table) has a type, by default an Integer, which allows for this comparison.</p>
            <p>The <b>Rating</b> column type is an integer either from the game or derived from the player's stats that has tiers/categories depending on the value. For my Halo 5 proof-of-concept implementation, I created a Rating for Infection with tiers named after Arena Ranks (Bronze-Onyx and Champion) and used this as the main order column. But any column about stats can be used to order the Leaderboard, even ratios of columns, for example: K/D (Kills/Deaths).</p>
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
                    <p>Rows are displayed in position order, highlighting #1, #2 and #3. The Leaderboard API can be customised to filter the results set, for example, by only showing players that have over 1000 games</p>
                </section>
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
            </div>
            <div className="overview-highlight-row third">
                <section className="info">
                    <h4>Expansion Rows</h4>
                    <p>Players on the Leaderboard can be expanded to view the progression of their stats over time for the chosen order column. For my Halo 5 implementation, rating progress isn't shown and a breakdown is shown instead.</p>
                </section>
                <div class="stat-tracker-player-data darker">
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
            </div>
        </section>
    );
}

const MedalsDisplay = () => (
    <section className="overview-for-medals">
        <div className="overview-highlight-row">
            <section className="info"><h4>Medals by Category: Multi Kill</h4><p>All medals that the player has earned are displayed, along with the count and position. </p></section>
            <div class="profile-stats-wrapper">
                <span class="profile-stats">
                    <span class="medalsheet-halo5" style={{ width: "37px", height: "37px", backgroundSize: "1024px 512px", backgroundPosition: "-592px -37px"}}></span>
                    <span>
                    <span class="value-pos-row">
                        <b>Double Kill:</b>&nbsp;40798 <span class="position-top100"> (#11)</span>
                    </span>
                    <span class="profile-stats-pergame">Per game: 5.14</span>
                    </span>
                </span>            
                <span class="profile-stats">
                    <span class="medalsheet-halo5" style={{ width: "37px", height: "37px", backgroundSize: "1024px 512px", backgroundPosition: "-629px -37px"}}></span>
                    <span>
                    <span class="value-pos-row">
                        <b>Triple Kill:</b>&nbsp;19589 <span class="position-top100"> (#10)</span>
                    </span>
                    <span class="profile-stats-pergame">Per game: 2.47</span>
                    </span>
                </span>
                <span class="profile-stats">
                    <span class="medalsheet-halo5" style={{ width: "37px", height: "37px", backgroundSize: "1024px 512px", backgroundPosition: "-666px -37px"}}></span>
                    <span>
                    <span class="value-pos-row">
                        <b>Overkill:</b>&nbsp;12036 <span class="position-top100"> (#9)</span>
                    </span>
                    <span class="profile-stats-pergame">Per game: 1.51</span>
                    </span>
                </span>
                <span class="profile-stats">
                    <span class="medalsheet-halo5" style={{ width: "37px", height: "37px", backgroundSize: "1024px 512px", backgroundPosition: "-703px -37px"}}></span>
                    <span>
                    <span class="value-pos-row">
                        <b>Killtacular:</b>&nbsp;8502 <span class="position-top100"> (#9)</span>
                    </span>
                    <span class="profile-stats-pergame">Per game: 1.07</span>
                    </span>
                </span>
                <span class="profile-stats">
                    <span class="medalsheet-halo5" style={{ width: "37px", height: "37px", backgroundSize: "1024px 512px", backgroundPosition: "-740px -37px"}}></span>
                    <span>
                    <span class="value-pos-row">
                        <b>Killtrocity:</b>&nbsp;6346 <span class="position-top100"> (#8)</span>
                    </span>
                    <span class="profile-stats-pergame">Per game: 0.8</span>
                    </span>
                </span>
                <span class="profile-stats">
                    <span class="medalsheet-halo5" style={{ width: "37px", height: "37px", backgroundSize: "1024px 512px", backgroundPosition: "-777px -37px"}}></span>
                    <span>
                    <span class="value-pos-row">
                        <b>Killamanjaro:</b>&nbsp;4904 <span class="position-top100"> (#9)</span>
                    </span>
                    <span class="profile-stats-pergame">Per game: 0.62</span>
                    </span>
                </span>
                <span class="profile-stats">
                    <span class="medalsheet-halo5" style={{ width: "37px", height: "37px", backgroundSize: "1024px 512px", backgroundPosition: "-814px -37px"}}></span>
                    <span>
                    <span class="value-pos-row">
                        <b>Killtastrophe:</b>&nbsp;3884 <span class="position-top100"> (#10)</span>
                    </span>
                    <span class="profile-stats-pergame">Per game: 0.49</span>
                    </span>
                </span>
                <span class="profile-stats">
                    <span class="medalsheet-halo5" style={{ width: "37px", height: "37px", backgroundSize: "1024px 512px", backgroundPosition: "-851px -37px"}}></span>
                    <span>
                    <span class="value-pos-row">
                        <b>Killpocalypse:</b>&nbsp;3160 <span class="position-top100"> (#10)</span>
                    </span>
                    <span class="profile-stats-pergame">Per game: 0.4</span>
                    </span>
                </span>
                <span class="profile-stats">
                    <span class="medalsheet-halo5" style={{ width: "37px", height: "37px", backgroundSize: "1024px 512px", backgroundPosition: "-888px -37px"}}></span>
                    <span>
                    <span class="value-pos-row">
                        <b>Killionaire:</b>&nbsp;2612 <span class="position-top100"> (#8)</span>
                    </span>
                    <span class="profile-stats-pergame">Per game: 0.33</span>
                    </span>
                </span>
            </div>
        </div>
        <div className="overview-highlight-row second">
            <section className="info"><h4>Medals by Category: Weapon Profiency</h4><p>Any medals that a player has not earned can also be tracked, either showing as un-earned or completely hidden.</p></section>
            <div class="profile-stats-wrapper">
                <span class="profile-stats">
                    <span class="medalsheet-halo5" style={{ width: "37px", height: "37px", backgroundSize: "1024px 512px", backgroundPosition: "-740px 0px"}}></span>
                    <span>
                    <span class="value-pos-row">
                        <b>Airborne Snapshot!:</b>&nbsp;198 <span class="position-top100"> (#57)</span>
                    </span>
                    <span class="profile-stats-pergame">Per game: 0.02</span>
                    </span>
                </span>
                <span class="profile-stats zero-value">
                    <span class="medalsheet-halo5" style={{ width: "37px", height: "37px", backgroundSize: "1024px 512px", backgroundPosition: "-74px -148px"}}></span>
                    <span>
                        <span class="value-pos-row">Big Gun Runner: 0</span>
                    </span>
                </span>
                <span class="profile-stats">
                    <span class="medalsheet-halo5" style={{ width: "37px", height: "37px", backgroundSize: "1024px 512px", backgroundPosition: "-74px -37px"}}></span>
                    <span>
                        <span class="value-pos-row">
                            <b>Hat Trick:</b>&nbsp;11 <span class="position-top100"> (#91)</span></span>
                    <span class="profile-stats-pergame">Per game: 0</span>
                    </span>
                </span>
                <span class="profile-stats">
                    <span class="medalsheet-halo5" style={{ width: "37px", height: "37px", backgroundSize: "1024px 512px", backgroundPosition: "-74px -111px"}}></span>
                    <span>
                    <span class="value-pos-row">
                        <b>Headshot:</b>&nbsp;73599 <span class="position-top100"> (#5)</span>
                    </span>
                    <span class="profile-stats-pergame">Per game: 9.26</span>
                    </span>
                </span>
                <span class="profile-stats">
                    <span class="medalsheet-halo5" style={{ width: "37px", height: "37px", backgroundSize: "1024px 512px", backgroundPosition: "-296px -37px"}}></span>
                    <span>
                    <span class="value-pos-row">
                        <b>Perfect Kill:</b>&nbsp;1 <span class="position-top100"> (#54)</span>
                    </span>
                    <span class="profile-stats-pergame">Per game: 0</span>
                    </span>
                </span>
                <span class="profile-stats">
                    <span class="medalsheet-halo5" style={{ width: "37px", height: "37px", backgroundSize: "1024px 512px", backgroundPosition: "-111px -37px"}}></span>
                    <span>
                    <span class="value-pos-row">
                        <b>Snapshot:</b>&nbsp;316 <span class="position-default"> (#282)</span>
                    </span>
                    <span class="profile-stats-pergame">Per game: 0.04</span>
                    </span>
                </span>
                <span class="profile-stats zero-value">
                    <span class="medalsheet-halo5" style={{ width: "37px", height: "37px", backgroundSize: "1024px 512px", backgroundPosition: "-629px 0px"}}></span>
                    <span>
                    <span class="value-pos-row">Snipeltaneous!: 0</span>
                    </span>
                </span>
                <span class="profile-stats">
                    <span class="medalsheet-halo5" style={{ width: "37px", height: "37px", backgroundSize: "1024px 512px", backgroundPosition: "-777px -74px"}}></span>
                    <span>
                    <span class="value-pos-row">
                        <b>Sniper Headshot:</b>&nbsp;95 <span class="position-default"> (#621)</span>
                    </span>
                    <span class="profile-stats-pergame">Per game: 0.01</span>
                    </span>
                </span>
                <span class="profile-stats zero-value">
                    <span class="medalsheet-halo5" style={{ width: "37px", height: "37px", backgroundSize: "1024px 512px", backgroundPosition: "-444px -222px"}}></span>
                    <span>
                    <span class="value-pos-row">Snipunch: 0</span>
                    </span>
                </span>
            </div>
        </div>
    </section>
)

const StatsDisplay = () => (
    <div className="overview-highlight-row third">
    <section className="info">
        <h4>Main Stats: With highlights for position #1, #2, #3</h4>
        <p>Main (Core) stats for Halo 5 are displayed without an image. These are stats such as Time Played, total number of Kills, Games Played, etc.</p>
    </section>
    <div class="main-stats-wrapper">
        <div class="main-stats flex">
            <div class="flex-down">
            <div class="profile-stats-wrapper">
                <span class="profile-stats top-1">
                <span>
                    <span class="value-pos-row">
                    <b>Assists:</b>&nbsp;52715 <span class="position-top100"> (#1)</span>
                    </span>
                    <span class="profile-stats-pergame">Per game: 3.16</span>
                </span>
                </span>
                <span class="profile-stats">
                <span>
                    <span class="value-pos-row">
                    <b>Deaths:</b>&nbsp;109725 <span class="position-top100"> (#11)</span>
                    </span>
                    <span class="profile-stats-pergame">Per game: 6.59</span>
                </span>
                </span>
                <span class="profile-stats top-2">
                <span>
                    <span class="value-pos-row">
                    <b>Games Played:</b>&nbsp;16659 <span class="position-top100"> (#2)</span>
                    </span>
                </span>
                </span>
                <span class="profile-stats top-1">
                <span>
                    <span class="value-pos-row">
                    <b>Games Tied:</b>&nbsp;187 <span class="position-top100"> (#1)</span>
                    </span>
                </span>
                </span>
                <span class="profile-stats top-1">
                <span>
                    <span class="value-pos-row">
                    <b>Games Won:</b>&nbsp;7761 <span class="position-top100"> (#1)</span>
                    </span>
                </span>
                </span>
                <span class="profile-stats top-2">
                <span>
                    <span class="value-pos-row">
                    <b>Grenade Damage:</b>&nbsp;442977 <span class="position-top100"> (#2)</span>
                    </span>
                    <span class="profile-stats-pergame">Per game: 26.59</span>
                </span>
                </span>
                <span class="profile-stats top-2">
                <span>
                    <span class="value-pos-row">
                    <b>Grenade Kills:</b>&nbsp;8945 <span class="position-top100"> (#2)</span>
                    </span>
                    <span class="profile-stats-pergame">Per game: 0.54</span>
                </span>
                </span>
                <span class="profile-stats top-3">
                <span>
                    <span class="value-pos-row">
                    <b>Headshots:</b>&nbsp;83979 <span class="position-top100"> (#3)</span>
                    </span>
                    <span class="profile-stats-pergame">Per game: 5.04</span>
                </span>
                </span>
                <span class="profile-stats top-1">
                <span>
                    <span class="value-pos-row">
                    <b>Kills:</b>&nbsp;395829 <span class="position-top100"> (#1)</span>
                    </span>
                    <span class="profile-stats-pergame">Per game: 23.76</span>
                </span>
                </span>
                <span class="profile-stats top-3">
                <span>
                    <span class="value-pos-row">
                    <b>Melee Kills:</b>&nbsp;11362 <span class="position-top100"> (#3)</span>
                    </span>
                    <span class="profile-stats-pergame">Per game: 0.68</span>
                </span>
                </span>
                <span class="profile-stats top-1">
                <span>
                    <span class="value-pos-row">
                    <b>Shots Fired:</b>&nbsp;2543176 <span class="position-top100"> (#1)</span>
                    </span>
                    <span class="profile-stats-pergame">Per game: 152.66</span>
                </span>
                </span>
                <span class="profile-stats top-1">
                <span>
                    <span class="value-pos-row">
                    <b>Shots Landed:</b>&nbsp;945628 <span class="position-top100"> (#1)</span>
                    </span>
                    <span class="profile-stats-pergame">Per game: 56.76</span>
                </span>
                </span>
                <span class="profile-stats duration-col top-1">
                <span>
                    <span class="value-pos-row">
                    <b>Time Played:</b>&nbsp;108 days 19 hours <span class="position-top100"> (#1)</span>
                    </span>
                </span>
                </span>
                <span class="profile-stats top-1">
                <span>
                    <span class="value-pos-row">
                    <b>Weapon Damage:</b>&nbsp;22035291 <span class="position-top100"> (#1)</span>
                    </span>
                    <span class="profile-stats-pergame">Per game: 1322.73</span>
                </span>
                </span>
            </div>
            </div>
        </div>
    </div>
</div>
);

const ComparingPlayers = () => (
    <>
        <div className="overview-highlight-row">
            <section className="info">
                <h4>Head to Head Breakdown</h4>
                <p>This breakdown compares Rating between the two players, highlighting the player who has the higher rating of the two</p>
            </section>
            <section className="head-to-head-bdown">
                <article class="player-summary flex">
                    <div class="flex-align-top flex-3">
                        <div class="h5-spartan-image" style={{ backgroundImage: "url('/images/h5/spartan-eagle.png')" }}></div>
                        <div class="player-details">
                        <h3>Eagle Precursor</h3>
                        <div class="player-breakdown">
                            <section>
                                <h3>SR152</h3>
                                <div class="progress-bar">
                                    <div class="progress-bar-inner" style={{ width: "78%"}}></div>
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
                        </div>
                        </div>
                        <div class="comparison-breakdown">
                        <div class="rating-head-to-head">
                        <div class="winner">
                            <div class="rating-info">
                                <p>Rating:</p>
                                <h2>205551</h2>
                                <p>Onyx 5</p>
                                <p>24449 to Onyx 6</p>
                            </div>
                            <div class="rating-breakdown rating-bar onyx rank-5">
                                <div class="rating-image"></div>
                                <span class="rating-bar-wrapper">
                                    <span class="rating-bar-inner" style={{ height: "51.1%" }}></span>
                                </span>
                            </div>
                        </div>
                        <div class="second">
                            <div class="rating-breakdown rating-bar onyx rank-5">
                                <div class="rating-image"></div>
                                <span class="rating-bar-wrapper">
                                    <span class="rating-bar-inner" style={{ height: "25.66%" }}></span>
                                </span>
                            </div>
                            <div class="rating-info">
                                <p>Rating:</p>
                                <h2>192831</h2>
                                <p>Onyx 5</p>
                                <p>37169 to Onyx 6</p>
                            </div>
                        </div>
                        </div>
                        </div>
                        <div class="flex-align-top flex-3 comparison-player">
                        <div class="player-details">
                        <h3>Eagle Perdition</h3>
                        <div class="player-breakdown">
                            <section>
                                <h3>SR150</h3>
                                <div class="progress-bar">
                                    <div class="progress-bar-inner" style={{ width: "23.1405%" }}></div>
                                </div>
                                <p>distance to SR151</p>
                            </section>
                            <section>
                                <h3>26545459</h3>
                                <p>Experience (Xp)</p>
                            </section>
                            <section>
                                <h3>28 days 22 hours</h3>
                                <p>Time Played</p>
                            </section>
                        </div>
                    </div>
                    <div class="h5-spartan-image" style={{ backgroundImage: "url('https://image.halocdn.com/h5/spartans/1102000_0_2012_3039_48_28?width=512&amp;crop=Full&amp;api-version=2016-01-26&amp;hash=hIvEYZ7jk0hqGOjENBbi0234%2feY1NettkJep%2beh9fxI%3d')" }}></div>
                    </div>
                </article>
            </section>
        </div>
        <div className="overview-highlight-row second">
            <section className="info">
                <h4>Head to Head Stats viewer</h4>
                <p>This breakdown shows each stat for both players (in this example Weapons -&gt; Standard) and the winner highlighted. The difference between the player's stats is also displayed using a Radar graph.</p>
            </section>
            <div className="flex">
                <div class="profile-stats-wrapper flex-1">
                    <span class="player-comparison-stats flex flex-down Weapons-stats">
                        <span class="flex">
                            <span class="">9931</span>
                            <span class="weapon-halo5">
                                <img src="/images/h5/weapons/ar.png" />
                            </span>
                            <span class="winner">12268</span>
                        </span>
                        <span>Assault Rifle</span>
                    </span>
                    <span class="player-comparison-stats flex flex-down Weapons-stats">
                        <span class="flex">
                            <span class="">123</span>
                            <span class="weapon-halo5">
                                <img src="/images/h5/weapons/br.png" />
                            </span>
                            <span class="winner">455</span>
                        </span>
                        <span>Battle Rifle</span>
                    </span>
                    <span class="player-comparison-stats flex flex-down Weapons-stats">
                        <span class="flex">
                            <span class="winner">138</span>
                            <span class="weapon-halo5">
                                <img src="/images/h5/weapons/boltshot.png" />
                            </span>
                            <span class="">20</span>
                        </span>
                        <span>Boltshot</span>
                    </span>
                    <span class="player-comparison-stats flex flex-down Weapons-stats">
                        <span class="flex">
                            <span class="winner">181</span>
                            <span class="weapon-halo5">
                                <img src="/images/h5/weapons/carbine.png" />
                            </span>
                            <span class="">153</span>
                        </span>
                        <span>Carbine</span>
                    </span>
                    <span class="player-comparison-stats flex flex-down Weapons-stats">
                        <span class="flex">
                            <span class="winner">24181</span>
                            <span class="weapon-halo5">
                                <img src="/images/h5/weapons/dmr.png" />
                            </span>
                            <span class="">4780</span>
                        </span>
                        <span>Dmr</span>
                    </span>
                    <span class="player-comparison-stats flex flex-down Weapons-stats">
                        <span class="flex">
                            <span class="winner">1851</span>
                            <span class="weapon-halo5">
                                <img src="/images/h5/weapons/lightrifle.png" />
                            </span>
                            <span class="">304</span>
                        </span>
                        <span>Lightrifle</span>
                    </span>
                    <span class="player-comparison-stats flex flex-down Weapons-stats">
                        <span class="flex">
                            <span class="">37607</span>
                            <span class="weapon-halo5">
                                <img src="/images/h5/weapons/magnum.png" />
                            </span>
                            <span class="winner">53383</span>
                        </span>
                        <span>Magnum</span>
                    </span>
                    <span class="player-comparison-stats flex flex-down Weapons-stats">
                        <span class="flex">
                            <span class="winner">132</span>
                            <span class="weapon-halo5">
                                <img src="/images/h5/weapons/pp.png" />
                            </span>
                            <span class="">2</span>
                        </span>
                        <span>Plasma Pistol</span>
                    </span>
                    <span class="player-comparison-stats flex flex-down Weapons-stats">
                        <span class="flex">
                            <span class="winner">784</span>
                            <span class="weapon-halo5">
                                <img src="/images/h5/weapons/smg.png" />
                            </span>
                            <span class="">146</span>
                        </span>
                        <span>Smg</span>
                    </span>
                    <span class="player-comparison-stats flex flex-down Weapons-stats">
                        <span class="flex">
                            <span class="winner">27</span>
                            <span class="weapon-halo5">
                                <img src="/images/h5/weapons/suprs.png" />
                            </span>
                            <span class="">0</span>
                        </span>
                        <span>Suppressor</span>
                    </span>
                </div>
                <div className="right-side-charts">
                    <ProfileRadar label1="Eagle Precursor" label2="Eagle Perdition" data={RadarChart}/>
                </div>
            </div>
        </div>
    </>
)

const TechCVSection = () => (
    <div className='flex flex-down'>
        <section className='project-overview'>
            <h1>Gaming Stats Tracker and Leaderboards project</h1>
            <h3>2021 - Now</h3>
            <p className='overview'>When I finished the third version of my Halo 5 Infection Leaderboard project (detailed below), I began working on the fourth version, which could support multiple Leaderboards and Progress trackers more easily. I wanted to make a Leaderboard for Matches played as well as the existing one for Stats, and have them both use the same code, work seamlessly and be easily updatable with new columns/metadata if necessary.</p>
            <p>Through many iterations learning Laravel and React.js and figuring out the best design for the project, I have developed the Gaming Stats Tracker that realises this vision.</p>
            <p>In it's current state (v1.0 alpha), the system can make Leaderboards and Progress trackers from a big-data table of stats data related to players in a game. To show off how the system works, I build a proof-of-concept website that uses it for Halo 5 with the old stats data I had backed up from the Infection Leaderboard website before I took it offline.</p>
            <LeaderboardSnippet />
            <h2>Player Data - Stats Overview, Badges, Progress Tracker</h2>
            <p>All of the stats that are stored about players for a game can be used to build profile pages (a stats overview / service record) for each player, giving a breakdown of their stats by category, as well as showing their Leaderboard position for each. The Leaderbord API supports showing players for any given order column by calculating the player's position for it and using it to find the page they are on.</p>
            <h3>Stats Overview: Examples from Halo 5 players</h3>
            <p>Stats columns can be categorized by multiple criteria within the API. In Halo 5, most stats are categorized by their type and optional sub-category. For example, a Medal is a type of stat that can be earned in-game which has an image and description. Each medal also has a sub-category, describing what kind of medal that it is.</p>
            <MedalsDisplay />
            <StatsDisplay />
            <h3>Badges</h3>
            <p>Player Badges within the Stats Tracker are accolades that can be given/awarded to players when they meet a certain criteria within the game. The most simple type of badge works on a single column in a single player data table, for example, awarding a badge to a player once they have played 500 games of Infection. More complicated badges that use multiple columns and multiple criteria can also be created. Badges can be given custom images, or derive their image from the column's metadata (for a medal this would be the Medal Image). When a player updates their stats within the stat-tracker, their stats will be evaluated against all the badges to see if they meet the criteria for them.</p>
            <h4>Example Badges:</h4>
            <div className="badge-overview">
                <section className="info">
                    <p>Simple Player Data Badges</p>
                    <p>These badges are evaluated using the Games Played column, when the criteria is above a certain number</p>
                </section>
                <div className="badges-wrapper flex">
                    <div class="awarded-badge bronze">
                        <div class="badge-image">
                            <img src="/images/xbox-controller.png" />
                        </div>
                        <div class="badge-details">
                            <h3>The grind begins..</h3>
                            <small>Play 100 games of Infection</small>
                        </div>
                    </div>
                    <div class="awarded-badge gold">
                        <div class="badge-image">
                            <img src="/images/xbox-controller.png" />
                        </div>
                        <div class="badge-details">
                            <h3>This is my favourite game</h3>
                            <small>Play 2500 games of Infection</small>
                        </div>
                    </div>
                    <div class="awarded-badge onyx">
                        <div class="badge-image">
                            <img src="/images/xbox-controller.png" />
                        </div>
                        <div class="badge-details">
                            <h3>Ultimate Dedication</h3>
                            <small>Play 10000 games of Infection</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="badge-overview">
                <section className="info">
                    <p>Custom Player Data Badge</p>
                    <p>This badge is evaluated using multiple columns, and multiple different criteria must be met before it can be awarded</p>
                </section>
                <div className="badges-wrapper flex">
                    <div class="awarded-badge champion">
                        <div class="badge-image">
                            <img src="/images/h5/champ-emblem.png" />
                        </div>
                        <div class="badge-details">
                            <h3>Infection Mastery</h3>
                            <small>Achieve an Onyx rating in Infection with a K/G of 30, Win% of 70% and 1000 Killionaires</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="badge-overview">
                <section className="info">
                    <p>Fully Custom Badge</p>
                    <p>This badge can be evaluated against any criteria desired, that doesn't need data about players. An example could be tracking how many times a player has updated their stats.</p>
                </section>
                <div className="badges-wrapper flex">
                    <div class="awarded-badge diamond">
                        <div class="badge-image">
                            <FontAwesomeIcon icon={faChartLine} style={{ height: "60px", margin: "15px"}} />
                        </div>
                        <div class="badge-details">
                            <h3>Tracker</h3>
                            <small>Update your stats 50 times</small>
                        </div>
                    </div>
                    <div class="awarded-badge bronze">
                        <div class="badge-image">
                            <FontAwesomeIcon icon={faIdBadge} style={{ height: "60px", margin: "15px"}} />
                        </div>
                        <div class="badge-details">
                            <h3>Badge Collector</h3>
                            <small>Earn your first 10 badges</small>
                        </div>
                    </div>
                    <div class="awarded-badge champion">
                        <div class="badge-image">
                            <FontAwesomeIcon icon={faIdBadge} style={{ height: "60px", margin: "15px"}} />
                        </div>
                        <div class="badge-details">
                            <h3>Completionist</h3>
                            <small>Earn all 150 badges!</small>
                        </div>
                    </div>
                </div>
            </div>
            <h3>Progress Tracker</h3>
            <p>Just like Leaderboards, the progress tracker can be shown for all of the different player stats that are tracked. Users are able to choose the stat they want to view progress for by using the column selector, and then view their progress over time by either using a list of rows or a group of line charts. Just like Leaderboards, the chosen column can be used to get any data for additional relevant columns.</p>
            <section className="dark-bg" style={{ marginBottom: "15px" }}>
                <div class="options-panels"><div class="left-panels"><div class="column-selector panel-wrapper"><label class="panel-header">Select Order</label><div class="panel"><span class="panel-text">Killionaire</span><button class="expand-row spinner-wrapper small showing"><span class="spinner arrow up-arrow"></span></button></div></div></div></div>
                <div class="column-selector-rows"><div class="second-row"><div class="panel"><button class="expand-row spinner-wrapper small showing">Main<span class="spinner arrow"></span></button></div><div class="panel selected"><button class="expand-row spinner-wrapper small showing">Medals<span class="spinner arrow up-arrow"></span></button></div><div class="panel"><button class="expand-row spinner-wrapper small showing">Miscellaneous<span class="spinner arrow"></span></button></div><div class="panel"><button class="expand-row spinner-wrapper small showing">Rating<span class="spinner arrow"></span></button></div><div class="panel"><button class="expand-row spinner-wrapper small showing">Ratios<span class="spinner arrow"></span></button></div><div class="panel"><button class="expand-row spinner-wrapper small showing">Weapons<span class="spinner arrow"></span></button></div></div><div class="third-row"><div class="panel"><button class="expand-row spinner-wrapper small showing">Infection<span class="spinner arrow"></span></button></div><div class="panel selected"><button class="expand-row spinner-wrapper small showing">MultiKill<span class="spinner arrow up-arrow"></span></button></div><div class="panel"><button class="expand-row spinner-wrapper small showing">Style<span class="spinner arrow"></span></button></div><div class="panel"><button class="expand-row spinner-wrapper small showing">Vehicles<span class="spinner arrow"></span></button></div><div class="panel"><button class="expand-row spinner-wrapper small showing">WeaponProficiency<span class="spinner arrow"></span></button></div></div><div class="fourth-row last-row"><div class="panel"><b>Double Kill</b></div><div class="panel"><b>Killamanjaro</b></div><div class="panel selected"><b>Killionaire</b></div><div class="panel"><b>Killpocalypse</b></div><div class="panel"><b>Killtacular</b></div><div class="panel"><b>Killtastrophe</b></div><div class="panel"><b>Killtrocity</b></div><div class="panel"><b>Overkill</b></div><div class="panel"><b>Triple Kill</b></div></div></div>
                <div className="player-progress-charts">
                    <ProgressTrackerLineChart 
                        progress={ProgressTracker.progress} 
                        cumulative={true} 
                    />
                </div>
            </section>
        </section>
        
        <section className='project-overview no-border'>
            <h1>Halo 5 Stats Tracker: Comparing Players</h1>
            <p>Using the stats stored for 2 players in the Infection stats player data table, I implemented a player comparison page on the Halo 5 stats tracker. This page acts as a profile page for both players, showing all the stats that they both have, and displaying the winner for each between the two.</p>
            <ComparingPlayers />
        </section> 

        <section className="white-section">
            <section className='project-overview'>
                <h1 style={{ fontSize: "1.5em" }}>Halo 5 Infection Leaderboard</h1>
                <h3>2018 - 2021</h3>
                <h2>Matches Leaderboard (Records Portal)</h2>
                <p>The old version of the Halo 5 Leaderboard website included a Matches Leaderboard (named Records Portal), a collage of the highest score achieved on every map in the game.</p>
                <p>One of the main motivations for building the Stats Tracker was the ability to change the "Match History" big data table into a player data table like player stats, allowing a Leaderboard for all stats earnable in games (e.g. Highest score per map, Highest Kills per map, Highest Deaths per map etc.), and create a progress tracker to see the Records over time for each map.</p>
                <p>I have not implemented this Leaderboard in the Halo 5 version of my new Stats Tracker as I no longer have access to the data about player's match history.</p>
                <p>This screenshot shows an example of how the Records Portal used to appear: With the map photo, map name, record holders name and the score for the record game.</p>
                <img src="/images/records-portal.png" style={{ maxWidth: "1200px", width: "100%", boxShadow: "0 0 5px -1px #eee" }}/>
                <h2>Games Viewer</h2>
                <p>The old version of the website also had a page to view a Match Result from the Match History table, called a Game on the website. This page was very similar to the profile stats overview page in the Stats Tracker, but for the game rather than a single player. The stats from the "perspective" of the winner were shown, but the game could be loaded from a different perspective to view someone else's stats from that game.</p>
                <p>This screenshot shows an example of how the Games viewer for a Match result used to appear: With the stats, a radar graph of all players killed by the perspective player, and medals earned by that player.</p>
                <img src="/images/games-viewer-white.png" style={{ maxWidth: "1200px", width: "100%", boxShadow: "0 0 5px -1px #eee" }}/>
            </section>
        </section>

        <h1 className="big-header">CS Work and Study Experience</h1>

        <section className='cv-list'>
            <h1><span className='title'>Web Development Intern – MyKnowledgeMap</span><span className='location'>York, UK</span></h1>
            <h3>October 2020 – June 2021, <i>July – August 2019</i></h3>
            <p className='skills-list'><b>Skills Developed:</b> Web Development, Unit Testing, Team Working, WCAG 2.1, Git, Angular.js, React.js, Redux.js</p>
            <ul>
                <li>Gained experienced working with different web technologies such as React.js, Redux.js and Angular.js whilst implementing accessibility changes and testing for and fixing errors/bugs in the company projects to help them meet the Web Content Accessibility Guidelines (WCAG 2.1)</li>
                <li>Learned how to maintain and improve codebase for working projects by reducing the amount of code duplication, and improving consistency between pages</li>
                <li>Developed skills in collaborating with other members of the team to test changes for a major project release, as well as skills in Unit Testing and using libraries like Headless Chrome to identify and fix issues.</li>
                <li>Modelled a prototype for an interactive book that the company wanted to develop into a future product</li>
            </ul>
            <h1><span className="title">Computer Science BSc</span><span className="location">Newcastle University, UK</span></h1>
            <h3>September 2017 – July 2020</h3>
            <ul>
                <li>Graduated with a 2:1 and the following modules scored 70% or higher</li>
                <ul>
                    <li>Programming 1 - 75%</li>
                    <li>Programming 2 - 79%</li>
                    <li>Website Design and Construction - 71%</li>
                    <li>Computer Networks - 72%</li>
                    <li>Project and Dissertation in Computing Science - 70%</li>
                    <li>System and Network Security - 84%</li>
                    <li>Gaming Simulations - 81%</li>
                    <li>Understanding Programming Languages - 80%</li>
                </ul>
            </ul>
        </section>
    </div>
);

export default TechCVSection;