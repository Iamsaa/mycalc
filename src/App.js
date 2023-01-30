import './App.css';
import { useState } from 'react';
function App({label}) {
  const shoot = () => {
    value(label);
  }
  return (

    <button class="btn" onClick={shoot}>  {label}</button>
    
  );
}

export default function MyApp(){return (
 

  <div className="root-container">
     <input value={label} id="Screen"></input>
     <div class="btn-body">
  <App label="7"/>
<App label="8"/>
<App label="9"/>
<App label="/"/><br></br>
    <App label="4"/> 
<App label="5"/>
<App label="6"/>
<App label="x"/><br></br>
<App label="1"/>
<App label="2"/>
<App label="3"/>
<App label="-"/><br></br>
<App label="OR"/>
<App label="0"/>
<App label="="/>
<App label="+"/>
</div>
  </div>
);
}

