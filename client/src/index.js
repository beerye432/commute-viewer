import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CommuteData from './CommuteData';
import Map from './Map';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

ReactDOM.render(
  <div>
    <nav>
      <ul>
        <li><a href="/data">View commute data</a></li>
        <li><a href="/map">View locations on map</a></li>
      </ul>
    </nav>
    <BrowserRouter>
      <Switch>
        <Route path="/data">
          <CommuteData />
        </Route>
        <Route path="/map">
          <Map />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
