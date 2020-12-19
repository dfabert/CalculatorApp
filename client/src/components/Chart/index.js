import React, { useEffect } from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';

export function LineChart(props) {
  useEffect(() => {},[props]);

  console.log(props.chartData);

 return (
      <div>
        <Line
          data={props.chartData}
          options={{
            title:{
              display:true,
              text:'Savings Over Time',
              fontSize:20
            },
            legend:{
              display:true,
              position:'left'
            }
          }}
        />
      </div>
    )
  }

  
export function PieChart(props) {
  useEffect(() => {},[props]);

 return (
      <div>
        <Pie
          data={props.chartData}
          options={{
            title:{
              display:true,
              text:'Savings Over Time',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    )
  }

  
export function BarChart(props) {
  useEffect(() => {},[props]);

  console.log(props.chartData);

 return (
      <div>
        <Bar
          data={props.chartData}
          width={400}
          options={{
            scales:{
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            },
            maintainAspectRatio: false,
            title:{
              display:true,
              text:'',
              fontSize:20
            },
            legend:{
              display:true,
              position:'left'
            }
          }}
        />
      </div>
    )
  }

  

