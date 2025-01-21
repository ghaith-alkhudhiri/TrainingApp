import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { View } from 'react-native';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
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
        <Bar data={data} options={options} />
      </View>
    );
  }
}