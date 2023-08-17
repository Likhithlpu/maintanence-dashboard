import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import './Graphs.css';

const Graphs = () => {
    // Static data for the graphs
    const pieChartData = {
        labels: ['Energy', 'Air Quality', 'Solar', 'Smart Rooms'],
        datasets: [
            {
                data: [30, 20, 25, 15],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50'],
            },
        ],
    };

    const barChartData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [
            {
                label: 'Nodes Dead',
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(75,192,192,0.4)',
                hoverBorderColor: 'rgba(75,192,192,1)',
                data: [3, 2, 5, 1, 4],
            },
        ],
    };

    const tableData = [
        { vertical: 'Energy', deadNodes: 3, totalNodes: 10 },
        { vertical: 'Air Quality', deadNodes: 2, totalNodes: 15 },
        { vertical: 'Solar', deadNodes: 1, totalNodes: 8 },
        { vertical: 'Smart Rooms', deadNodes: 4, totalNodes: 20 },
    ];

    return (
        <div className="graphs-container">
            <div className="graph">
                <h2>Pie Chart</h2>
                <Pie data={pieChartData} />
            </div>
            <div className="graph">
                <h2>Histogram</h2>
                <Bar data={barChartData} />
            </div>
            <div className="graph">
                <h2>Table</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Vertical</th>
                            <th>Dead Nodes</th>
                            <th>Total Nodes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, index) => (
                            <tr key={index}>
                                <td>{row.vertical}</td>
                                <td>{row.deadNodes}</td>
                                <td>{row.totalNodes}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="iframe-container">
                <h2>iFrame</h2>
                <iframe
                    title="External Content"
                    src="https://www.example.com"
                    width="100%"
                    height="400"
                    frameBorder="0"
                ></iframe>
            </div>
        </div>
    );
};

export default Graphs;
