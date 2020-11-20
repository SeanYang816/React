import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import First from './component/First.js'
//import Components

const Index = () => {

  return (
    <React.StrictMode>
      <First />
    </React.StrictMode>
  )
}

let reactContainer = document.querySelector("#root")
ReactDOM.render(<Index />, reactContainer)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
