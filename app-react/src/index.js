import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Hello from './Hello';
import Clock from './Clock';
import Clock2 from './Clock2';
import Props from './Props';
import State from './State';
import Events from './Events';
import Events2 from './Events2';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <App /> */}
    <Hello />
    <Clock />
    <Props  attr='span' attr2='VALUE2' attr3='VALUE3' />
    <State />
    <Clock2 />
    <Events />
    <Events2 />

  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
