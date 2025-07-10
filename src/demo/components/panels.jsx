import React from 'react';
import OptionsPanel from './options-panel';

/**
 * Displays all panels for the Stats Leaderboard
 * 
 * Shows the Stats about registered players, page buttons, and
 * the order selector
 */
export default function StatsLeaderboardPanels({ metadata, data }) {
    
    const {
        defaultOrder: defaultColumn,
        order: column,
        pages
    } = data;

    const {
        infection_stats: columns
    } = metadata;

    const basePath = "/demo";

    return (
        <div className="stats-tracker-panels">
            <OptionsPanel 
                columnSelectorHeader="Select Order" 
                requestedColumn={column} 
                categorizedColumns={columns}
                leftPanels={
                    <>
                        <div className="panel-wrapper">
                            <label className="panel-header">Rows per Page </label>
                            <div className="panel">
                                <span class="panel-text">15</span>
                            </div>
                        </div>                        
                        <div className="panel-wrapper">
                            <label className="panel-header">Min Games </label>
                            <div className="panel">
                                <span class="panel-text">50</span>
                            </div>
                        </div>
                    </>
                }
                basePath={basePath}
            >
            </OptionsPanel>
            <div class="page-panel">
                <label class="panel-header">Pages</label>
                <div class="pages-wrapper buttons">
                    <button class="selected">1</button><span>2</span><span>3</span><span>4</span><span>5</span><span>&gt;</span><span>&gt;&gt;</span>
                </div>
            </div>
        </div>
    );
}