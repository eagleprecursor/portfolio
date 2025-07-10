import React from "react";
import StatsList from "./stats-list";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import ProfileMainTab from "./main-tab";

/**
 * Stats tab for Profile pages
 * 
 * Displays an object of Stats seperated by category. Rating, Ratios,
 * Misc stats and Main stats are all shown in the Main tab
 */
export default function ProfileStats({ stats, positions, metadata, player, displayMiscMainSize, communityComparison })  {

    const { Medals, Weapons, Rating, ...others } = stats;
    
    const tabs = {
        Medals, 
        Weapons
    };

    return (
        <div className="profile-section">    
            <section className="text-content">The Stats tab shows all of the Stats that have been tracked and saved for this player.</section>
            <Tabs>
                <TabList>
                    <Tab>Main</Tab>
                    {
                        Object.entries(tabs).map(([name, data]) => data && <Tab key={name}>{name}</Tab>)
                    }
                </TabList>
                <div className="content-margin">
                    <TabPanel>
                        <ProfileMainTab 
                            stats={others} 
                            player={player}
                            positions={positions}
                            displayMiscMainSize={displayMiscMainSize}
                            communityComparison={communityComparison}
                        />
                    </TabPanel>
                    {
                        Object.entries(tabs).map(([category, data]) => {
                            
                            const cat = category.toLowerCase();
        
                            return (
                                <TabPanel key={cat}>
                                    <div className={cat + "-stats panels"}>            
                                        {
                                            data.sub && (
                                                Object.entries(data.sub).map(([subcat, data]) => data && (
                                                    <div className="subcat-stats flex-col" key={subcat}>
                                                        <div className="profile-section-header"><p>{subcat}</p></div>
                                                        <StatsList 
                                                            metadata={metadata}
                                                            player={player}
                                                            category={category} 
                                                            positions={positions}
                                                            columns={data.columns}
                                                        />
                                                    </div>
                                                ))
                                            )
                                        }
                                        {
                                            Array.isArray(data.sub) && data.sub.length < 1 && (
                                                <h3>No stats were found for this player for this category!</h3>
                                            )
                                        }
                                    </div>
                                </TabPanel>
                            );
                        })
                    }
                </div>
            </Tabs>
        </div>
    );
}