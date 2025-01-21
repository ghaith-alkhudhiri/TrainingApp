import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
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
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface WeightGraphProps {
  selectedView: 'Weekly' | 'Monthly' | 'Yearly'; // Selected view passed from parent
}

export default class WeightGraph extends Component<WeightGraphProps> {
  render() {
    const { selectedView } = this.props;

    // Data for Weekly view
    const weeklyData = {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      datasets: [
        {
          label: 'Weight',
          data: [65, 55, 59, 54],
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

    // Data for Monthly view
    const monthlyData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'Weight',
          data: [55, 59, 80, 81, 56, 55, 70, 75, 60, 65, 70, 72],
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

    // Data for Yearly view
    const yearlyData = {
      labels: ['2023', '2024', '2025'],
      datasets: [
        {
          label: 'Weight',
          data: [65, 59, 80],
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

    // Use the selected data based on the dropdown value
    const data =
      selectedView === 'Weekly'
        ? weeklyData
        : selectedView === 'Monthly'
        ? monthlyData
        : yearlyData;

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
        },
      },
    };

    return (
      <View style={{ flex: 1 }}>
        <Line data={data} options={options} />
      </View>
    );
  }
}