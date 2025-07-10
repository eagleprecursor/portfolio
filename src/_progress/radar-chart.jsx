/**
 * Radar chart for the Profile page that shows a comparison between
 * the current player's stats and the average for all players
 */
import React from 'react';
import 'chart.js/auto';
import { Radar } from 'react-chartjs-2';

export default function ProfileRadar({ label1, label2, data }) {
	
	const chartData = [];

	// Make 2 charts if there's too many points
	if (data.length > 18)
	{
		chartData.push(data.slice(0, Math.floor(data.length / 2)));
		chartData.push(data.slice(Math.floor(data.length / 2), data.length));
	}
	else
	{
		chartData.push(data);
	}

	return chartData.map((data, i) => {

		// Generate default chart options
		var options = { pointLabelFontColor: '#fff' };
		
		// Disable tooltips and aspect ratio
		options.tooltips = { enabled: false }
		options.maintainAspectRatio = false;

		// Hide ticks
		options.scales = {
			r: {
				min: -0.05,
				beginAtZero: true,
				ticks: {
					display: false // Hides the labels in the middel (numbers)
				},
				grid: {
					color: '#333'
				},
				pointLabels: {
					color : '#fff',
					font: {
						size: '14px'
					}
				}
			}
		}
		
		// Hide data labels
		options.plugins = { 
			legend: {
				display: true,
				maxHeight: 40,
				labels: {
					color: '#fff'
				},
			},
			datalabels: {color: 'rgba(0,0,0,0)'} 
		};

		console.log(options);
		
		const chartData = {
			"labels": data.map(columndata => columndata.column.name),
			"datasets": [{
				"label": label1,
				"data": data.map(columndata => columndata.record),
				"borderColor": "rgb(38, 210, 38)",
				"backgroundColor": "rgba(38, 210, 38, .4)",
				"pointBackgroundColor": "rgba(255,255,255,0)",
				"borderWidth": 2
			}, {
				"label": label2,
				"data": data.map(columndata => columndata.comparisonRecord),
				"borderColor": "#0078b2",
				"backgroundColor": "rgba(0, 120, 178, .4)",
				"pointBackgroundColor": "rgba(255,255,255,0)",
				"borderWidth": 2
			}]
		};
		
		return (
			<div className="radar-wrap">
				<Radar key={i} options={options} data={chartData} />
			</div>
		)
	});
}