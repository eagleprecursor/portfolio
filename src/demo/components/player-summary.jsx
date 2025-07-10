import React from 'react';
import MedalImage from './medal';
import { Link } from 'react-router';
import { InnerRatingBar } from './player-data-record';

/**
 * Full width rating bar that shows progression percentage,
 * the number value of the Rating as well as the distance the
 * player is to the next Rating name.
 */
export const RatingBreakdown = ({ data, showNumbers = true, verticalProgressBar = false }) => {
    
    const { 
        value, 
        name, 
        nextRating, 
        distance 
    } = data;

    const [tier, number] = name.toLowerCase().split(" ");

    const ratingClass = `
        rating-breakdown
        rating-bar
        ${tier}
        ${number && `rank-${number}`}
    `;

    return (
        <div className={ratingClass}>
            <div className="rating-image"></div>
            <InnerRatingBar percentage={data.percentage} verticalProgressBar={verticalProgressBar} />
            {
                showNumbers && (
                    <div className="rating-numbers">
                        <p>Rating: {value}</p>
                        {
                            nextRating ? (
                                <p>{ distance } to {nextRating}</p>
                            ) : (
                                <p>{ name } (<small>Max Rating</small>)</p>
                            )
                        }
                    </div>
                )
            }
        </div>
    );
}

/**
 * Displays a player breakdown of XP and time played
 * using Main stats categorized by column and category
 */
export const PlayerBreakdown = ({ player, profile, spartanRank, xp, showPlayerLink, timePlayed, showLbLink = true }) => {

    return (
        <div className="player-breakdown">
            {
                showPlayerLink && (
                    <h3><Link to={`/demo/player/${player.slug}`}>{ player.gamertag }</Link></h3>
                )
            }
            {
                (spartanRank && xp) ? (
                    <>
                        <section>
                            <h3>SR{spartanRank}</h3>
                            <div className="progress-bar">
                                <div className="progress-bar-inner" style={
                                    {width: xp.percentToNext + "%"}}>
                                </div>
                            </div>
                            <p>distance to SR{spartanRank+1}</p>
                        </section>
                        <section>
                            <h3>{ xp.value }</h3>
                            <p>Experience (Xp)</p>
                        </section>
                    </>
                ) : (
                    <section>
                        <h3>No Spartan Rank data.</h3>
                        <p>As the site is now readonly, spartan image and rank data cannot be displayed.</p>
                    </section>
                )
            }
            <section>
                <h3>{ timePlayed }</h3>
                <p>Time Played</p>
            </section>
            {
                profile && <section><Link to="/demo/rating">&lt;&lt; Back to Leaderboard</Link></section>
            }
        </div>
    );
}

/**
 * Shows the summary for a player
 * 
 * Displays
 * - The players spartan
 * - The players current spartan rank, and the distance to the
 * next with a progress bar
 * - The players arena games played and time played
 * - The players rating
 */
export default function PlayerSummary({ stats, medals, profile, flexAlignCenter, player, showPlayerLink, showLbLink = true, topMedalSummary }) {

    const {
        images
    } = player.profile;

    const {
        Rating,
        Main
    } = stats;
    
    const timePlayed = Main.sub.General.columns["Time Played"];

    // Players that are imported from the old API don't have Spartan data
    const spartanRank = Main.sub.Spartan && Main.sub.Spartan.columns["Spartan Rank"];
    const xp = Main.sub.Spartan && Main.sub.Spartan.columns["XP"];

    return (
        <article className={`player-summary${flexAlignCenter ? ` flex`: ` flex-align-top`}`}>
            <div className="h5-spartan-image" style={{backgroundImage: `url(${images.spartan}`}} />
            <div className="player-details flex-grow">
				<section className="breakdowns-col flex-grow-children">
                    <PlayerBreakdown 
                        player={player} 
                        showPlayerLink={showPlayerLink} 
                        spartanRank={spartanRank && spartanRank.value} 
                        xp={xp} 
                        timePlayed={timePlayed.value} 
                        showLbLink={showLbLink}
                        profile={profile}
                    />
                    <div className="stats-breakdown">
                        {
                            Rating && (
                                <RatingBreakdown data={Rating.columns.Rating} />
                            )
                        }
                        <div className="top-medals">
                            <h4>Top Medals Earned</h4>
                            {
                                Object.entries(topMedalSummary).map(([medal, stats]) => (
                                    <span class="profile-stats">
                                        <MedalImage medals={medals} name={medal} />
                                        <span>
                                            <span>{medal}: {stats.value}</span>
                                            {
                                                stats["per Game"] && (
                                                    <span class="profile-stats-pergame">Per game: { stats["per Game"] }</span>
                                                )
                                            }
                                        </span>
                                    </span>
                                ))
                            }
                            {
                                Array.isArray(topMedalSummary) && topMedalSummary.length < 1 && (
                                    <p>No medals were found for this player!</p>
                                )
                            }
                        </div>
                    </div>
                </section>
            </div>
        </article>
    );
}