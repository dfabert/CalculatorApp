import React, { useEffect } from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

export function LineChart(props) {
  useEffect(() => {},[props]);

  return (
      <div>
        <Line
          data={props.chartData}
          options={{
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
    );
  }


  
export function BarChart(props) {
  useEffect(() => {},[props]);

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
    );
  }

export function Donut(props) {
    useEffect(() => {},[props]);
  
    return (
        <div>
          <Doughnut
            data={props.chartData}
            options={{
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
      );
    }
