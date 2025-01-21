import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { View } from 'react-native';
import theme from '../Constants/theme';

// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

interface Props {}

interface State {}

export default class WeightGraph extends Component<Props, State> {
  render() {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Weight',
                data: [65, 59, 80, 81, 56, 55],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: theme.primary,
                borderWidth: 2,
                tension: 0.4,
                fill: true,
                pointBorderColor: '#FFA84A',
                pointBackgroundColor: '#FFF',
                pointBorderWidth: 2,
                pointRadius: 5,
                pointHoverRadius: 7,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: 'bottom' as const,
            },
            title: {
                display: false,
                text: 'Weight Graph',
            },
            tooltip: {
                enabled: true,
                displayColors: false,
                backgroundColor: '#FFF',
                bodyColor: '#243465',
                bodyFont: {
                    family: theme.font,
                    size: 12,
                    weight: 600,
                    letterSpacing: 0.184,
                },
                callbacks: {
                    label: (context: any) => {
                        return `${context.raw} KG`;
                    },
                    title: () => '',
                },
            },
        },      
        scales: {
            y: {
                beginAtZero: false,
            },
            x: {
                display: false,
            }
        },
    };

    return (
      <View style={{ flex: 1 }}>
        <Line data={data} options={options} />
      </View>
    );
  }
}