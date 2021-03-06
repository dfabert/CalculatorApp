import React, { useState } from 'react';
import Dropdown from '../components/Dropdown';
import { Input, FormBtn, TextArea } from '../components/Form'
import { LineChart, BarChart, PieChart } from '../components/Chart'
import Wrapper from '../components/Wrapper';

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

    const updateFieldChange = (id, event) => {
        console.log(event.target);

        const newInputFields = dataObject.map(i => {
          if(id === i.id) {
            i[event.target.name] = event.target.value
          }
          return i;
        })
        
        setDataObject(newInputFields);
      }

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(dataObject);
      };

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


    function BarGraph() {
        return (
        <div>
            <BarChart chartData={chartData} />
        </div>
        )
    }

    function LineGraph() {
        return (
        <div>
            <LineChart chartData={chartData} />
        </div>
        )
    }

    function PieGraph() {
        return (
        <div>
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
      <div>
        <form>
          {dataObject.map( (dataObject, index) => {
            return (
              <Wrapper>
                <form>
                  <div key={dataObject.id}>
                    <Input name='label' label='label' variant="filled" value={dataObject.label} onChange={event => updateFieldChange(dataObject.id, event)}/>
                  </div>
                  <div>
                    <Input name='amount' label='amount' variant="filled" value={dataObject.amount} onChange={event => updateFieldChange(dataObject.id, event)}/>
                  </div>
                </form>
              </Wrapper> 
            );
          })}
          <FormBtn onClick={(event) => createGraph(event)}>Graph</FormBtn>
        </form>
        <FormBtn onClick={() => changeDataObjectSize('add')}>Add Data Field</FormBtn>
        {/* <FormBtn onClick={() => changeSize('remove')}>Remove Data Field</FormBtn> */}
        <FormBtn onClick={handleSubmit}>Log Current data</FormBtn>
      </div>
      <div>{renderPage()}</div>
    </div>
  );
}

export default Graph;