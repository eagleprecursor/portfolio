import React from 'react';
import { PlayerDataRecord } from './player-data-record';

/**
 * Displays all data rows for the progress tracker
 * 
 * Renders an account column with a link to the player profile that owns
 * the row, as well as the position of the row on the Leaderboard
 * 
 * Uses the Leaderboard progression row hook to expand rows on the
 * leaderboard to show how the selected player has progressed over time
 * for the value of the chosen order column (and how their leaderboard
 * position has changed over time).
 */
export default function PlayerProgressTrackerRows({ data }) {

    const {
        progress: {
            rows,
            column
        }
    } = data;

    if (!rows) {
        return null;
    }

    return (
        <div className='stat-tracker-mod-rows'>
            {
                rows.map((row, index) => {

                    const {
                        stats,
                        comparisons
                    } = row;

                    return (
                        <div className="stat-tracker-mod-row" key={index}>
                            <div className='date-col'>{ stats.date }</div>
                            <PlayerDataRecord 
                                date={stats.date}
                                stats={stats.data} 
                                comparisons={comparisons} 
                                currentOrder={column} 
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}