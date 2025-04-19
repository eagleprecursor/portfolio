/**
 * Main tab for Profile stats
 * 
 * Displays all Profile stats except for Medals and Weapons
 */
import React from 'react';
import StatsList from './stats-list';
import ProfileRadar from '../../_progress/radar-chart';

export default function ProfileMainTab({ stats, player, positions, communityComparison, comparisons, displayMiscMainSize }) {
    
    const { Main, Ratios, Miscellaneous } = stats;

    return (
        <div className={`flex${!communityComparison ? " no-radar" : ""}`}>
            <div className="panels">
                <div className="main-stats-wrapper">
                    <div className='main-stats flex'>
                        {
                            <div className={player ? "flex-down" : "full-width-stats"}>
                                <StatsList 
                                    positions={positions}
                                    player={player}
                                    columns={Main.sub.General.columns} 
                                    comparisons={comparisons}
                                />
                            </div>
                        }
                        {
                            player && communityComparison && (
                                <div className="right-side-charts">
                                    <ProfileRadar label1={player.gamertag} label2="Community Comparison" data={communityComparison}/>
                                </div>
                            )
                        }
                    </div>
                </div>
                {
                    Miscellaneous && (
                        <div className={`${displayMiscMainSize ? "main-stats-wrapper" : "misc-stats"} flex-down`}>
                            <div className="profile-section-header"><p>Miscellaneous Stats</p></div>
                            <StatsList positions={positions} columns={Miscellaneous.columns} player={player} 
                                                                    comparisons={comparisons}/>
                        </div>      
                    )
                }
                {
                    Ratios && (          
                        <div className={`${displayMiscMainSize ? "main-stats-wrapper" : "ratio-stats"} flex-down`}>
                            <div className="profile-section-header"><p>Ratios</p></div>
                            <StatsList positions={positions} columns={Ratios.columns} player={player}
                                                                    comparisons={comparisons} />
                        </div>
                    )
                }
            </div>
        </div>
    );
}