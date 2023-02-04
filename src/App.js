import './App.css';
import React, { useState } from 'react';

function App({ label, onClick }) {
  return (
 
    <button className="btn" onClick={() => onClick(label)}>
      {label}
    </button>

    
  );
}

export default function MyApp() {
  const [input, setInput] = useState('');

  const clear = () => {
    setInput('');
  };

  const handleClick = value => {
    setInput(input + value);
  };

  return (
    <div className="root-container">
      <input value={input} id="Screen" readOnly />
      <div className="btn-body">
        <App label="7" onClick={handleClick} />
        <App label="8" onClick={handleClick} />
        <App label="9" onClick={handleClick} />
        <App label="/" onClick={handleClick} /><br />
        <App label="4" onClick={handleClick} />
        <App label="5" onClick={handleClick} />
        <App label="6" onClick={handleClick} />
        <App label="x" onClick={handleClick} /><br />
        <App label="1" onClick={handleClick} />
        <App label="2" onClick={handleClick} />
        <App label="3" onClick={handleClick} />
        <App label="-" onClick={handleClick} /><br />
        <App label="C" onClick={clear} />
        <App label="0" onClick={handleClick} />
        <App label="=" onClick={() => setInput(eval(input))} />
        <App label="+" onClick={handleClick} />
      </div>
    </div>
  );
}
