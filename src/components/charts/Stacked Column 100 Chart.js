import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class StackedColumn100Chart extends Component {
	constructor() {
		super();
		this.toggleDataSeries = this.toggleDataSeries.bind(this);
	}
	toggleDataSeries(e){
		if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else{
			e.dataSeries.visible = true;
		}
		this.chart.render();
	}
	render() {
		const options = {
			animationEnabled: true,
			title:{
				text: "Analysis of Outliers,NaN, Frequency"
			},
			legend: {
				verticalAlign: "center",
				horizontalAlign: "right",
				reversed: true,
				cursor: "pointer",
					fontSize: 16,
					itemclick: this.toggleDataSeries
			},
			toolTip: {
				shared: true
			},
			data: [
			{
				type: "stackedColumn100",
				name: "Outlier",
				showInLegend: true,
				color: "#04d9ff",
				dataPoints: [
					{ label: "AQ", y:1118},
					{ label: "EM", y:473},
					{ label: "SL", y:273},
					{ label: "SR", y:243},
					{ label: "WE", y:269},
					{ label: "WM", y:243},
					{ label: "WN", y:195},
					{ label: "CM", y:236}
				]
			},
			{
				type: "stackedColumn100",
				name: "NaN",
				showInLegend: true,
				color: "#006e82",
				dataPoints: [
					{ label: "AQ",	y: 897},
					{ label: "EM", y: 376},
					{ label: "SL", y: 299},
					{ label: "SR", y: 272},
					{ label: "WE", y: 272},
					{ label: "WM",	y: 212},
					{ label: "WN", y: 210},
					{ label: "CM",	y: 189}
				]
			},
			{
				type: "stackedColumn100",
				name: "Frequency",
				showInLegend: true,
				color: "#004c59",
				dataPoints: [
					{ label: "AQ", y: 789},
					{ label: "EM", y: 355},
					{ label: "SL", y: 303},
					{ label: "SR", y: 310},
					{ label: "WE",	y: 283},
					{ label: "WM", y: 236},
					{ label: "WN", y: 233},
					{ label: "CM", y: 174}
				]
			}
			]
		}
		
		return (
		<div>
			<CanvasJSChart options = {options} 
				onRef={ref => this.chart = ref}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default StackedColumn100Chart;