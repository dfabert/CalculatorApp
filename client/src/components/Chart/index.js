import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

function Chart(props) {
  useEffect(() => {},[props]);

  let newData = {
    labels:['start', 'end'],
    datasets:[
      {
        label:'savings',
        data:[1,10]
      }
    ]
  }

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

  export default Chart;