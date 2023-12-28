import { useContext, useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TestContext } from './contexts/TestContext'

function App() {
  const [count, dispatch] = useReducer(reducer, 0);
  const contextValue = useContext(TestContext);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>count is {count}</p>
        <button onClick={() => {dispatch({type: 'increment'})}}>
          increment
        </button>
        <button onClick={() => {dispatch({type: 'decrement'})}}>
          decrement
        </button>
        <button onClick={() => {dispatch({type: 'reset'})}}>
          reset       
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        {count % 2 === 0 ? <p>{contextValue}</p> : <p></p>}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

type actionType = 
| {
  type: 'increment'
}
| {
  type: 'decrement'
}
| {
  type: 'reset'
}

const reducer = (state: number, action: actionType) => {
  switch (action.type) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return 0
  }
}

export default App
