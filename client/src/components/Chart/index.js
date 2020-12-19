import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';

export function LineChart(props) {
  useEffect(() => {},[props]);

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
              position:'right'
            }
          }}
        />
      </div>
    )
  }

