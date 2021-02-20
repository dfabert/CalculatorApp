import React, { useState } from 'react';
import Dropdown from '../components/Dropdown';
import { Input, FormBtn } from '../components/Form'
import { LineChart, BarChart, PieChart } from '../components/Chart'

const options = ['Bar Graph', 'Line Graph', 'Pie Chart'];

function Graph() {

    const [selected, setSelected] = useState(options[0]);
    const [dataObject, setDataObject] = useState([{
        id: 0,
        label: 'first label',
        amount: 0
    }]);
    const [chartData, setChartData] = useState({});

    const changeDataObjectSize = (change) =>{
        setDataObject([...dataObject, {
            id: dataObject.length + 1,
            label: 'new label',
            amount: 0
        }]);
    }

    const updateFieldChange = index => e =>{
        console.log('index: ' + index);
        console.log('property name: '+ e.target.name);
        if(e.target.name === 'label'){
            let newArr = [...dataObject];
            newArr[index].label = e.target.value; 
            setDataObject(newArr)
        }
        if(e.target.name === 'amount'){
            let newArr = [...dataObject];
            newArr[index].amount = e.target.value; 
            setDataObject(newArr)
        }
    }

    const createGraph = (event) =>{
        event.preventDefault();
        let xAxisArray = [];
        let barValuesArray=[];
        for(let i = 0; i < dataObject.length; i++){
            xAxisArray.push(dataObject[i].label);
            barValuesArray.push(dataObject[i].amount);
        }
        let newData = {
            labels: xAxisArray,
            datasets:[
              {
                label:  'y-axis variable',
                data:  barValuesArray
              }
            ]
        }
        setChartData(newData);
    }

    function DataEntry () {
        return (
            <div>
                <form>
                    {dataObject.map( (data, index) => {
                        return (
                          <form>
                            <div>
                            <Input type='text' name='label' value={data.label} onChange={updateFieldChange(index)}/>
                            </div>
                            <div>
                            <Input type='text' name='amount' value={data.amount} onChange={updateFieldChange(index)}/>
                            </div>
                          </form>
                        );
                    })}
                  <FormBtn onClick={(event) => createGraph(event)}>Graph</FormBtn>
                </form>
            <FormBtn onClick={() => changeDataObjectSize('add')}>Add Data Field</FormBtn>
            {/* <FormBtn onClick={() => changeSize('remove')}>Remove Data Field</FormBtn> */}
        </div>
        )
    }

    function BarGraph() {
        return (
        <div>
            <DataEntry />
            <BarChart chartData={chartData} />
        </div>
        )
    }

    function LineGraph() {
        return (
        <div>
            <DataEntry />
            <LineChart chartData={chartData} />
        </div>
        )
    }

    function PieGraph() {
        return (
        <div>
            <DataEntry />
            <PieChart chartData={chartData} />
        </div>
        )
    }

    function renderPage() {
        if(selected === 'Bar Graph'){
            return <BarGraph />;            
        }
        if(selected === 'Line Graph'){
            return <LineGraph />
        }
        if(selected === 'Pie Chart'){
            return <PieGraph />
        }else{
            return <h1>Please Select A Graph</h1>
        }
    }

  return (
    <div>
      <Dropdown 
        title={selected}
        items={options}
        onSelectedChange={setSelected} 
      />
      <div>{renderPage()}</div>
    </div>
  );
}

export default Graph;