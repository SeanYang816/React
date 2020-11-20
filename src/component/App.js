import React, { useState, useEffect } from 'react';

export default function App() {

  const [color, setColor] = useState()

  const [count, setCount] = useState(0)

  function add() {
    setCount(count => count + 1)
    setColor('blue');

  }
  function subtract() {
    setCount(count => count - 1)
  }

  return (


    <React.Fragment>
      <button onClick={add}>+</button>
      <span>{count}</span>
      <span>{color}</span>
      <button onClick={subtract}>-</button>
    </React.Fragment>
  )
}
