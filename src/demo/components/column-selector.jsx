import React from 'react';
import { Link } from 'react-router';

const rowNames = ["second-row", "third-row", "fourth-row"];

/**
 * New Column selector replaces the legacy filter select
 * 
 * Instead of using a dropdown, this uses a multi row interface to make
 * it quicker and easier to select a column. New behaviour, once a column
 * is selected, it acts like a link and will automatically refresh the app.
 * No more "reload leaderboard" / "reload api" buttons
 
 * Map a tree of categorized filters to rows of panels that can be expanded and closed
 * @param array orders The tree of Orders 
 * @param int depth Depth of recursion
 */
export const mapCategoriesToRows = ({ basePath, columns, requestedColumn, ...state }, depth = 0) => {

    if (depth > 5)
    {
        return null;
    }

    return (
        <>
            <div className={rowNames[depth]}>
                {
                    Object.entries(columns).map(([category]) => (
                        <div className={`panel${state.openedPanelNames[depth+1] == category ? ' selected' : ''}`}>
                            <button class="expand-row spinner-wrapper small showing" onClick={() => { 
                            
                                let openedPanels = [
                                    ...state.openedPanelNames
                                ];
                                
                                if (openedPanels[depth+1] == category)
                                {
                                    for (let i = depth+1; i<=openedPanels.length; i++)
                                    {
                                        delete openedPanels[i];
                                    }
                                }
                                else
                                {
                                    openedPanels.splice(depth+1);
                                    openedPanels[depth+1] = category;
                                }

                                state.setOpenedPanelNames(openedPanels) 
                            }}>                            
                                { category }
                                <span class={`spinner arrow${state.openedPanelNames[depth+1] == category ? ' up-arrow' : ''}`}></span>
                            </button>
                        </div>
                    ))
                }
            </div>
            {
                columns[state.openedPanelNames[depth+1]] && (
                    !Array.isArray(columns[state.openedPanelNames[depth+1]]) 
                    ? (
                        mapCategoriesToRows({
                            columns: columns[state.openedPanelNames[depth+1]].columns,
                            requestedColumn,
                            basePath,
                            ...state
                        }, depth + 1)
                    )
                    : (
                        <div className={rowNames[depth+1] + " last-row"}>
                        {
                            columns[state.openedPanelNames[depth+1]].map(column => (
                                <div className={`panel${requestedColumn.name == column.name ? ' selected' : ''}`}>
                                    <Link to={`${basePath}/${column.slug}`} onClick={() => state.setOpenedPanelNames([])}>{ column.name }</Link>
                                </div>
                            ))
                        }
                        </div>
                    )
                )
            }
        </>
    );
}