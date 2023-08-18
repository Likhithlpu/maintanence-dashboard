import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

 
class PieChart extends Component {
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
					{ y: 30, label: "working" },
					{ y: 70, label: "not working" },
					
				]
			}]
		}
		
		return (
            <div className="chart-container-pie">
			
			<CanvasJSChart options = {options} 
			containerProps={{ width: '100%', height: '100px' }}/>

		</div>
		);
	}
}

export default PieChart;