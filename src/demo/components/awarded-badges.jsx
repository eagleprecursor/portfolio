import React from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import MedalImage from "./medal";
import WeaponImage from "./weapon";

/**
 * Awarded badges tab for Profile pages
 * 
 * Displays a list of all this players badges, ordered by the weight
 * of the tier in descending order (highest tier first)
 */
export default function AwardedBadgesList({ badges, medals })  {

    return (
        <div className="profile-section badges">    
            <Tabs>
                <TabList>
                    <Tab>Badges</Tab>
                </TabList>
                <TabPanel>
                    <div className="text-content">This is a list of all the badges that this player has achieved. Badges can be added and removed and be based on stats, players, users, or anything else. The tiers and images are also customisable.</div>
                    <div className="content-margin flex-wrap">
                        {
                            badges.awardedBadges.map(({ name, description, tier, image, badgeColumn }) => (
                                <div className={`awarded-badge ${tier.slug}`}>
                                    <div className={`badge-image${!image && badgeColumn.category == "Medals" ? ' medal' : ''}`}>
                                        {
                                            image 
                                                ? <img src={image.path} />
                                                : badgeColumn && (
                                                    badgeColumn.category === "Medals" ? (
                                                        <MedalImage medals={medals} name={badgeColumn.name} size={75} />
                                                    ) :
                                                    badgeColumn.category === "Weapons" ? (
                                                        <WeaponImage name={badgeColumn.name} size={75}/>
                                                    ) : ''
                                                )
                                        }   
                                    </div>
                                    <div className="badge-details">                                       
                                        <h3>{ name }</h3>
                                        <small>{ description }</small>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
}