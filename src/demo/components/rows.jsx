import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { PlayerDataRecord } from './player-data-record';
import PlayerSummary from './player-summary';

const EagleRatingBreakdown = require('../h5fakeapi/stats/eagleb.json');

const expansionRows = {
    "eagle-precursor": {
        "rating": EagleRatingBreakdown
    }
};

/**
 * Displays all data rows for the Stats Leaderboard 
 * 
 * Renders an account column with a link to the player profile that owns
 * the row, as well as the position of the row on the Leaderboard
 * 
 * Uses the Leaderboard progression row hook to expand rows on the
 * leaderboard to show how the selected player has progressed over time
 * for the value of the chosen order column (and how their leaderboard
 * position has changed over time).
 */
export default function StatsLeaderboardRows({ data, metadata }) {

    const {
        rows,
        order
    } = data;

    // // todo: This should be RowBreakdownData for rating
    // // Because on a badges leaderboard (non cumulative), the row should still be expandable
    // // and obviously, thats not showing progress.
    // const {
    //     expansionRows,
    //     expandingPlayer,
    //     expandingPlayerFailed,
    //     expandedPlayer,
    //     closePlayerProgressionRow,
    //     getProgressionForPlayer
    // } = useLeaderboardShowRowProgressionData();

    const [expandedPlayer, setExpandedPlayer] = useState(false);
    const [cumulative, showCumulative] = useState(true);

    const navigate = useNavigate();
    const viewDetailedProgress = (e, account) => {
        e.preventDefault();
        navigate(`/demo/player/${account.slug}/progress/${order.slug}`);
    }

    const disableUnclickableRows = rows.filter(({ row: { account } }) => typeof account.link != "undefined").length;

    
    if (!rows) {
        return null;
    }


    return (
        <div className='stat-tracker-mod-rows'>
        {
            rows.map(({ position, row, canDisplayProgression }) => {

                const {
                    stats,
                    account,
                    comparisons
                } = row;

                const rowClass = `stat-tracker-mod-row ${position <=3 && "top-3 pos-" + position} ${(expandedPlayer == account.slug) && "expanded"} ${disableUnclickableRows && ((account.link) ? 'highlight-on-hover' : 'disable-on-hover')}`;

                return (
                    <>
                        <div
                            class={rowClass} 
                            key={position} 
                        >
                            <div className="position-col">
                                <span>{ position }</span>
                            </div>
                            <div className={`account-col ${ !account.link && "grey-out-link"}`}>
                                { 
                                    <span>
                                        <img src={account.profile.images.emblem} />
                                        {
                                            account.link 
                                                ? <Link to={`/demo/player/${account.slug}`}>{account.gamertag}</Link>
                                                : account.gamertag
                                        }
                                    </span>
                                }
                                {
                                    canDisplayProgression ? (
                                        <button class="expand-row spinner-wrapper small showing" onClick={
                                            () => expandedPlayer == account.slug ? setExpandedPlayer(false) : setExpandedPlayer(account.slug)
                                        }>
                                            <span class={`spinner ${
                                                expandedPlayer == account.slug 
                                                    ? "up-arrow arrow" 
                                                    : "arrow"
                                            }`}></span>
                                        </button>
                                    ) : <></>
                                }
                            </div>
                            <PlayerDataRecord
                                date={stats.date}
                                stats={stats.data} 
                                position={position} 
                                comparisons={comparisons} 
                                currentOrder={order} 
                            />
                        </div>
                        {
                            (expandedPlayer == account.slug) && (
                                expansionRows[account.slug][order.slug].breakdown ? (
                                    <div className="stat-tracker-mod-row leaderboard-expansion-row">
                                        <div className="position-col"></div>
                                        <div className="expansion-row-content">
                                            <PlayerSummary 
                                                medals={metadata.medals}
                                                player={account} 
                                                flexAlignCenter={true}
                                                showLbLink={false}
                                                stats={expansionRows[account.slug][order.slug].breakdown.infectionStats.data} 
                                                topMedalSummary={expansionRows[account.slug][order.slug].breakdown.topMedalSummary}
                                            />
                                        </div>
                                    </div>
                                )
                                : (<></>
                                    // <div className="stat-tracker-mod-row leaderboard-expansion-row">
                                    //     <div className="expansion-row-content">
                                    //         <ProgressTrackerLineChart 
                                    //             player={account} 
                                    //             progress={expansionRows[account.slug].progress} 
                                    //             cumulative={cumulative} 
                                    //             panelButtons={
                                    //                 <>
                                    //                     <button onClick={() => showCumulative(!cumulative)}>{ cumulative ? "Show Daily Increases" : "Show Cumulative Progress"}</button>
                                    //                     <Link to={`/h5/player/${account.slug}/progress/${order.slug}`} onClick={(e) => viewDetailedProgress(e, account)}>View Detailed Progress for {account.gamertag}</Link>
                                    //                 </>
                                    //             }
                                    //         />
                                    //     </div>
                                    // </div>
                                )
                            )
                        }
                    </>
                )
            })
        }
        </div>
    )
}