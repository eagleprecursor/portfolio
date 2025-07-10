import React from 'react';

/**
 * Displays a Rating bar on the Leaderboard for this player
 * using the Rating percentage and the name
 * 
 * Only shows positive rating increases, and displays champion
 * status for all positions under 10
 */
export default function RatingBar({ position, data, barStyle, verticalProgressBar = false }) {

    const { name, percentage } = data;

    // Calculate the rating bar class name
    const splitName = name.split(' '); 
    const ratingBarClass = `rating-bar ${splitName[0].toLowerCase()} rank-${splitName[1]} ${(position && position.current <= 10) && "champion"} ${barStyle == 'progress' && 'progress-style'}`;

    return (
        <span class={ratingBarClass}>
            <span class="rating-title">{name}</span>
            <InnerRatingBar percentage={percentage} verticalProgressBar={verticalProgressBar}/>
        </span>
    );
}

export const InnerRatingBar = ({ percentage, verticalProgressBar }) => {
    return (
        <span class="rating-bar-wrapper">
        {
            percentage && <span class="rating-bar-inner" style={
                !verticalProgressBar ? {
                    width: percentage + "%"
                } : {
                    height: percentage + "%"
                }
            }></span>
        }
        </span>
    );
};



/**
 * Displays all the stats for a data row, showing the breakdown
 * for Ratings and the value for other stats
 */
export const PlayerDataRecord = ({ position, currentOrder, stats, comparisons }) => (
    <div className="row-data">
        {
            Object.entries(stats).map(([order, stats]) => {

                let colClass =
                    `${order.replace(/\s/g, "").toLowerCase()}-col ${currentOrder.name == order && `highlight`}`;

                if (order === "Rating")
                {
                    return (
                        <div className={colClass} key={order}>
                            <RatingBar data={stats} position={position} comparison={comparisons && comparisons[order]} />
                        </div>
                    );
                }
                else
                {
                    return (
                        <div className={colClass} key={order}>
                            <span>{stats.value ?? stats}</span>
                            {
                                (comparisons && comparisons[order]) ?
                                    comparisons[order] < 0 
                                        ? <span class="negative-progress">&nbsp;{ comparisons[order] }</span> 
                                        : comparisons[order] > 0 ? 
                                            <span class="positive-progress">&nbsp;+{ comparisons[order] }</span> : <></>
                                : <></>
                            }
                        </div>
                    );
                }
            })
        }
    </div>
);