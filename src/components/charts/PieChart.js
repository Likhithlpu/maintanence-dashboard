import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

 
class AQStatus extends Component {
	render() {
		const options = {
			theme: "light2",
			animationEnabled: true,
			exportFileName: "Node status",
			exportEnabled: false,
			title:{
				text: "AQ status"
			},
			data: [{
				type: "pie",
				showInLegend: false,
				legendText: "{label}",
				toolTipContent: "{label}: <strong>{y}%</strong>",
				indexLabel: "{y}%",
				indexLabelPlacement: "inside",
				dataPoints: [
					{ y: 75, label: "working" , color: "#77dd77"},
					{ y: 25, label: "not working", color: "#ff6961"},
					
				]
			}]
		}
		
		return (
            <div className="chart-container-pie">
			
			<CanvasJSChart options = {options} 
			containerProps={{ width: '100%', height: '120px' }}/>

		</div>
		);
	}
}

class EMStatus extends Component {
	render() {
		const options = {
			theme: "light2",
			animationEnabled: true,
			exportFileName: "Node status",
			exportEnabled: false,
			title:{
				text: "EM status"
			},
			data: [{
				type: "pie",
				showInLegend: false,
				legendText: "{label}",
				toolTipContent: "{label}: <strong>{y}%</strong>",
				indexLabel: "{y}%",
				indexLabelPlacement: "inside",
				dataPoints: [
					{ y: 32, label: "working" , color: "#77dd77"},
					{ y: 68, label: "not working", color: "#ff6961"},
					
				]
			}]
		}
		
		return (
            <div className="chart-container-pie">
			
			<CanvasJSChart options = {options} 
			containerProps={{ width: '100%', height: '120px' }}/>

		</div>
		);
	}
}

class SLStatus extends Component {
	render() {
		const options = {
			theme: "light2",
			animationEnabled: true,
			exportFileName: "Node status",
			exportEnabled: false,
			title:{
				text: "SL status"
			},
			data: [{
				type: "pie",
				showInLegend: false,
				legendText: "{label}",
				toolTipContent: "{label}: <strong>{y}%</strong>",
				indexLabel: "{y}%",
				indexLabelPlacement: "inside",
				dataPoints: [
					{ y: 90, label: "working" , color: "#77dd77"},
					{ y: 10, label: "not working", color: "#ff6961"},
					
				]
			}]
		}
		
		return (
            <div className="chart-container-pie">
			
			<CanvasJSChart options = {options} 
			containerProps={{ width: '100%', height: '120px' }}/>

		</div>
		);
	}
}

class SRStatus extends Component {
	render() {
		const options = {
			theme: "light2",
			animationEnabled: true,
			exportFileName: "Node status",
			exportEnabled: false,
			title:{
				text: "SR status"
			},
			data: [{
				type: "pie",
				showInLegend: false,
				legendText: "{label}",
				toolTipContent: "{label}: <strong>{y}%</strong>",
				indexLabel: "{y}%",
				indexLabelPlacement: "inside",
				dataPoints: [
					{ y: 98, label: "working" , color: "#77dd77"},
					{ y: 2, label: "not working", color: "#ff6961"},
					
				]
			}]
		}
		
		return (
            <div className="chart-container-pie">
			
			<CanvasJSChart options = {options} 
			containerProps={{ width: '100%', height: '120px' }}/>

		</div>
		);
	}
}

class WEStatus extends Component {
	render() {
		const options = {
			theme: "light2",
			animationEnabled: true,
			exportFileName: "Node status",
			exportEnabled: false,
			title:{
				text: "WE status"
			},
			data: [{
				type: "pie",
				showInLegend: false,
				legendText: "{label}",
				toolTipContent: "{label}: <strong>{y}%</strong>",
				indexLabel: "{y}%",
				indexLabelPlacement: "inside",
				dataPoints: [
					{ y: 55, label: "working" , color: "#77dd77"},
					{ y: 45, label: "not working", color: "#ff6961"},
					
				]
			}]
		}
		
		return (
            <div className="chart-container-pie">
			
			<CanvasJSChart options = {options} 
			containerProps={{ width: '100%', height: '120px' }}/>

		</div>
		);
	}
}

class WMStatus extends Component {
	render() {
		const options = {
			theme: "light2",
			animationEnabled: true,
			exportFileName: "Node status",
			exportEnabled: false,
			title:{
				text: "WM status"
			},
			data: [{
				type: "pie",
				showInLegend: false,
				legendText: "{label}",
				toolTipContent: "{label}: <strong>{y}%</strong>",
				indexLabel: "{y}%",
				indexLabelPlacement: "inside",
				dataPoints: [
					{ y: 100, label: "working" , color: "#77dd77"},
					{ y: 0, label: "not working", color: "#ff6961"},
					
				]
			}]
		}
		
		return (
            <div className="chart-container-pie">
			
			<CanvasJSChart options = {options} 
			containerProps={{ width: '100%', height: '120px' }}/>

		</div>
		);
	}
}

class WNStatus extends Component {
	render() {
		const options = {
			theme: "light2",
			animationEnabled: true,
			exportFileName: "Node status",
			exportEnabled: false,
			title:{
				text: "WN status"
			},
			data: [{
				type: "pie",
				showInLegend: false,
				legendText: "{label}",
				toolTipContent: "{label}: <strong>{y}%</strong>",
				indexLabel: "{y}%",
				indexLabelPlacement: "inside",
				dataPoints: [
					{ y: 40, label: "working" , color: "#77dd77"},
					{ y: 60, label: "not working", color: "#ff6961"},
					
				]
			}]
		}
		
		return (
            <div className="chart-container-pie">
			
			<CanvasJSChart options = {options} 
			containerProps={{ width: '100%', height: '120px' }}/>

		</div>
		);
	}
}

class CMStatus extends Component {
	render() {
		const options = {
			theme: "light2",
			animationEnabled: true,
			exportFileName: "Node status",
			exportEnabled: false,
			title:{
				text: "CM status"
			},
			data: [{
				type: "pie",
				showInLegend: false,
				legendText: "{label}",
				toolTipContent: "{label}: <strong>{y}%</strong>",
				indexLabel: "{y}%",
				indexLabelPlacement: "inside",
				dataPoints: [
					{ y: 35, label: "working" , color: "#77dd77"},
					{ y: 65, label: "not working", color: "#ff6961"},
					
				]
			}]
		}
		
		return (
            <div className="chart-container-pie">
			
			<CanvasJSChart options = {options} 
			containerProps={{ width: '100%', height: '120px' }}/>

		</div>
		);
	}
}

export {AQStatus,EMStatus,SLStatus,SRStatus,WEStatus,WMStatus,WNStatus,CMStatus};