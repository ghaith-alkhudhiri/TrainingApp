// import React, { Component } from 'react';
// import { Line } from 'react-chartjs-2';
// import { View, Button } from 'react-native';
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// // Register necessary Chart.js components
// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// interface WeightEntry {
//   date: string;
//   weight: number;
// }

// interface WeightGraphProps {
//   data: WeightEntry[];
//   borderColor?: string;
//   backgroundColor?: string;
//   fontColor?: string;
//   fontSize?: number;
// }

// interface WeightGraphState {
//   timeframe: 'weekly' | 'monthly' | 'yearly';
// }

// class WeightGraph extends Component<WeightGraphProps, WeightGraphState> {
//     static defaultProps = {
//         borderColor: 'rgba(75, 192, 192, 1)',
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//         fontColor: '#000',
//         fontSize: 12,
//     }
//   constructor(props: WeightGraphProps) {
//     super(props);
//     this.state = {
//       timeframe: 'weekly',
//     };
//   }

//   setTimeframe = (timeframe: 'weekly' | 'monthly' | 'yearly') => {
//     this.setState({ timeframe });
//   };

//   filterDataByTimeframe = (data: WeightEntry[], timeframe: 'weekly' | 'monthly' | 'yearly') => {
//     const now = new Date();
//     const filteredData = data.filter(entry => {
//       const entryDate = new Date(entry.date);
//       switch (timeframe) {
//         case 'weekly':
//           return (now.getTime() - entryDate.getTime()) / (1000 * 60 * 60 * 24) <= 7;
//         case 'monthly':
//           return (now.getTime() - entryDate.getTime()) / (1000 * 60 * 60 * 24) <= 30;
//         case 'yearly':
//           return (now.getTime() - entryDate.getTime()) / (1000 * 60 * 60 * 24 * 365) <= 1;
//         default:
//           return true;
//       }
//     });
//     return filteredData;
//   };

//   render() {
//     const { data, borderColor, backgroundColor, fontColor, fontSize } = this.props;
//     const { timeframe } = this.state;

//     const filteredData = this.filterDataByTimeframe(data, timeframe);

//     const chartData = {
//       labels: filteredData.map(entry => entry.date),
//       datasets: [
//         {
//           label: 'Weight',
//           data: filteredData.map(entry => entry.weight),
//           borderColor: borderColor,
//           backgroundColor: backgroundColor,
//           fill: true,
//         },
//       ],
//     };

//     const chartOptions = {
//       responsive: true,
//       plugins: {
//         legend: {
//           position: 'top' as const,
//           labels: {
//             color: fontColor,
//             font: {
//                 size: fontSize
//             }
//           }
//         },
//         title: {
//           display: true,
//           text: `Weight Data (${timeframe.charAt(0).toUpperCase() + timeframe.slice(1)})`,
//           color: fontColor,
//           font: {
//             size: fontSize,
//           }
//         },
//         tooltip: {
//             bodyFont: {
//                 size: fontSize,
//             },
//             titleFont: {
//                 size: fontSize,
//             },
//         },
//       },
//       scales: {
//         x: {
//             ticks: {
//                 color: fontColor,
//                 font: {
//                     size: fontSize,
//                 },
//             },
//         },
//         y: {
//             ticks: {
//                 color: fontColor,
//                 font: {
//                     size: fontSize,
//                 }
//             }
//         }
//       }
//     };

//     return (
//       <View>
//         <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 }}>
//           <Button title="Weekly" onPress={() => this.setTimeframe('weekly')} />
//           <Button title="Monthly" onPress={() => this.setTimeframe('monthly')} />
//           <Button title="Yearly" onPress={() => this.setTimeframe('yearly')} />
//         </View>
//         <Line data={chartData} options={chartOptions} />
//       </View>
//     );
//   }
// }

// export default WeightGraph;
