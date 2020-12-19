import React, { useState} from 'react';
import Dropdown from '../components/Dropdown';

const options = ['Bar Graph', 'Line Graph', 'Pie Chart'];


function Graph() {

    const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Dropdown 
        title={selected}
        items={options}
        onSelectedChange={setSelected} 
      />
    </div>
  );
}

export default Graph;