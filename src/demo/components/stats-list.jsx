import React from 'react';
import MedalImage from './medal';
import WeaponImage from './weapon';

/**
 * Stats List for Profiles
 * 
 * Converts an object of columns -> stats data into a list of stats
 * to display on the profile page.
 */
export default function StatsList({ positions, columns, category, metadata }) {

    return (
        <div className='profile-stats-wrapper'>
            {
                Object.entries(columns).map(([column, data]) => {

                    const orderColClass = `
                        profile-stats
                        ${(column == "Time Played" || column == "Time Survived") && "duration-col"}
                        ${(positions && positions[column] && positions[column] <= 3) && `top-position-${positions[column]}`}
                        ${(data.value == 0 && "zero-value")}
                    `;

                    return (
                        <span key={column} className={orderColClass}>
                            {
                                category === "Medals" ? (
                                    <MedalImage medals={metadata.medals} name={column} />
                                ) :
                                category === "Weapons" && (
                                    <WeaponImage weapons={metadata.weapons} name={column} />
                                )
                            }
                            <span>
                                <span className='value-pos-row'>
                                    {
                                        <><b>{column}</b>: {data.value}</>
                                    }
                                    { 
                                        (positions && positions[column]) ? (
                                            <span className={(positions && positions[column]) ? (positions[column] <= 100 ? 'position-top100' : 'position-default') : ''}> (#{positions[column]})</span>
                                        ) : <></>
                                    }
                                </span>
                                {
                                    (typeof data["per Game"] !== 'undefined') ? (
                                        <span className="profile-stats-pergame">Per game: { data["per Game"] }</span>
                                    ) : <></>
                                }
                            </span>
                        </span>
                    )
                })
            }
        </div>
    );
}