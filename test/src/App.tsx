import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const inc = () => {
    setCount(current => current + 1);
  }
  const dec = () => {
    setCount(current => current - 1);
  }

  return (
    <>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
      <p>{count}</p>
    </>
  )
}

export default App
