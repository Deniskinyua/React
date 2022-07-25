import React  from 'react'
import './App.css';
import { useState } from 'react';

export default function App(){
  const [show, setShow] = useState(true)
  return(
    <div className="App">
      
      <button onClick ={() => setShow(!show)}>Show/hide new poem form</button>
      {
        show?<h4>Hello World!</h4>:null
      }
    </div>
  );
}
