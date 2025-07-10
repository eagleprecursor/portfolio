import React from 'react';
import { Link } from 'react-router';

/**
 * Displays the header for the Leaderboard, including
 * position, gamertag and all the returned columns. Highlights
 * the column for the current Leaderboard order
 * 
 * Each column in the header links to the Leaderboard page
 * for the column's order. The URL is the name of the order
 * unless the column specifies a custom order URL
 */
export const ColumnHeaders = ({ staticCols, headers, currentOrder, defaultColumn = null, basePath }) => {

    if (!headers) return null;

    return (
        <div className="stat-tracker-mod-col-header stat-tracker-mod-row">
            { staticCols }
            <InnerColumnHeaders 
                headers={headers} 
                requestColumn={currentOrder}
                basePath={basePath} 
                defaultColumn={defaultColumn}
            />
        </div>
    );
}

export const InnerColumnHeaders = ({ headers, requestColumn, defaultColumn = null, basePath }) => (
    <div className="row-data">
        {
            headers.map((column) => {

                const { 
                    name,
                    disabled
                } = column;

                let slug = column.slug;

                const colClass = 
                    `${name.replace(/\s/g, "").toLowerCase()}-col ${requestColumn.name == name && "highlight"} ${disabled && " low-opacity"}`;

                return (
                    <div key={name} className={colClass}>
                        {
                            disabled 
                                ? name 
                                : <Link to={`${basePath}${(defaultColumn && defaultColumn.name == name) ? '' : `/${slug}`}`}>{ name }</Link>
                        }
                    </div>
                );
            })
        }
    </div>
)