import React from 'react';
import 'chart.js/auto';
import { Line } from 'react-chartjs-2';

/**
 * Taken from eprecursor/gamingstattracker package
 * 
 * Because I cant figure out how to import it, its crashing the app
 * 
 * For now, workaround copy and paste
 * 
 * @todo: Definitely need to fix that
 */
export default function ProgressTrackerLineChart({ progress, cumulative, panelButtons }) {
	
    const {
        column, 
        headers, 
        rows
    } = progress;

    const colors = ["rgb(0, 128, 0)", "rgb(0, 105, 150)", "rgb(209, 0, 0)", " rgb(128, 0, 128)", "rgb(255, 120, 0)", "rgb(0, 128, 37)"];
	const labelColors = ["rgba(0, 128, 0, 0.8)", "rgba(0, 105, 150, 0.8)", "rgba(209, 0, 0, 0.8)", "rgba(128, 0, 128, 0.8)", "rgba(255, 120, 0, 0.8)", "rgba(0,128,37,0.8)"];

    if (!rows && !headers)
    {
        return null;
    }

    return headers.map(({ name: chartHeader }, index) => {

            const color = colors[index % colors.length];
            const labelColor = labelColors[index % labelColors.length];

            // Generate data for chart
            var chartData = {
                labels: rows.map(({ stats }) => stats.date).reverse(),
                datasets: [{
                    label: chartHeader + (cumulative ? " over time" : " day by day"),
                    borderColor: color,
                    backgroundColor: "transparent",
                    data: cumulative 
                        ? rows.map(({ stats }) => stats.data[chartHeader].value).reverse()
                        : rows.map(({ comparisons }) => typeof comparisons[chartHeader] == "object" ? comparisons[chartHeader].difference : comparisons[chartHeader]).reverse(),
                    lineTension: 0,
                    pointRadius: 8,
                    pointHoverRadius: 8,
                    pointHoverBackgroundColor: color,
                    datalabels: { 
                        // Color options
                        color: 'white',
                        backgroundColor: labelColor, 
                        
                        // Alignment and font
                        font: { weight: 'bold', size: '16px'}, 
                        align: 'top', 
                        offset: '8'
                    }
                }]
            };

            // Generate default chart options
            var options = {
                maintainAspectRatio: false,
                layout: {
                    padding: {
                        top: 15,
                        right: 30,
                        left: 15,
                        bottom: 15
                    }
                }
            }
            
            // Format times
            options.plugins = {
                datalabels: {
                    formatter: function(value){
                        
                        // // Convert times
                        // switch (column.name)
                        // {
                        //     case "Time Played":
                        //     case "Time Survived":
                        //         return app.convertSecondsToTime(value, false, false);
                        //         break;
                        // }
                    }
                },
                legend: {
                    display: true,
                    maxHeight: 40,
                    labels: {
                        color: '#fff'
                    },
                }
            }

            // Scales
            const temp = chartData.datasets[0].data;
            options.scales = {
                x: {
                    grid: {
                        color: '#444'
                    },
                    ticks: {
                        color : '#fff',
                        font: {
                            size: '14px'
                        }
                    }
                },
                y: {
                    grid: {
                        color: '#444'
                    },                    
                    suggestedMin: parseFloat(temp[0]) - (parseFloat(temp[0]) / (temp[0] > 1000 ? 500 : 150)),
                    suggestedMax: parseFloat(temp[temp.length-1]) + (parseFloat(temp[temp.length-1]) / (temp[temp.length-1] > 1000 ? 500 : 150)),
                    ticks: {
                        color : '#fff',
                        font: {
                            size: '14px'
                        },
                        callback: function(val) {
                            return (val > 1000000 ? parseFloat(val).toExponential(3) : parseFloat(val.toFixed(3)));
                        }
                    }
                }
            };
                
            return (
                <article className={`progress-line-chart${rows.length > 10 ? ' wide-chart' : ''}`}>
                    <div className="progress-panel panel">
                        <p>{ chartHeader } progress{ cumulative ? " over time" : " per update" }</p>
                        {
                            panelButtons && (
                                <div className="panel-buttons">
                                    { panelButtons }
                                </div>
                            )
                        }
                    </div>
                    <div className='canvas-wrapper'>
                        <Line options={options} data={chartData} />
                    </div>
                </article>
            );
        });
}