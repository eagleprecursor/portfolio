import React, { useState } from 'react';
import { mapCategoriesToRows } from './column-selector';

/**
 * Options Panel class
 * 
 * Provides context to child panels to update options, either by using
 * the redux state for apiOptions, or local state for localOptions
 * 
 * When an apiOption is changed, by default it will cause a reload of
 * the data. This can be changed so that the data isn't fetched again
 * if it's not necessary
 */
export default function OptionsPanel({ columnSelectorHeader, requestedColumn, categorizedColumns, leftPanels, basePath }) {

    const [openedPanelNames, setOpenedPanelNames] = useState([]);

    const expandColumnSelector = () => {
        openedPanelNames.length > 0 ? setOpenedPanelNames([]) : setOpenedPanelNames([requestedColumn.name])
    }

    return (
        <>
            <div className="options-panels">
                <div className="left-panels">
                    <div className='column-selector panel-wrapper'>
                        <label className='panel-header'>{ columnSelectorHeader ?? "Select Column "}</label>
                        <div className='panel'>
                            <span className='panel-text'>{ requestedColumn.name }</span>
                            <button class="expand-row spinner-wrapper small showing" onClick={expandColumnSelector}>
                                <span class={`spinner arrow${openedPanelNames.length > 0 ? ' up-arrow' : ''}`}></span>
                            </button>
                        </div>
                    </div>
                    {
                        leftPanels
                    }
                </div>
            </div>
            {
                (openedPanelNames.length > 0) && (
                    <div className='column-selector-rows'>
                        {
                            mapCategoriesToRows({
                                basePath,
                                columns: categorizedColumns.tree.columns,
                                requestedColumn,
                                openedPanelNames,
                                setOpenedPanelNames
                            })
                        }
                    </div>
                )
            }
        </>
    );
}