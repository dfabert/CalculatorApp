import React, { useState } from 'react';

function Dropdown({ title, items, onSelectedChange }) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!open);

  function handleSelection(item) {
    onSelectedChange(item);
    toggle(!open);
  }

  return (
    <div>
      <div role="button" onKeyPress={() => toggle(!open)} onClick={() => toggle(!open)}>
        <div>
          <p>{title}</p>
        </div>
      </div>
      {open && (
        <ul>
          {items.map(item => (
            <li key={item}>
              <button type="button" style={{ margin: "5px" }} onClick={() => handleSelection(item)}>
                <span>{item}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown