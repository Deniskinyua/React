import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const ReactPage = (
  <div>
      <img src ="./logo.svg" alt = "react-logo"/>
      <h2> Fun Fact About React</h2>
      <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on Github</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousand of enterprise apps, including mobile apps</li>
      </ul>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(ReactPage);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
