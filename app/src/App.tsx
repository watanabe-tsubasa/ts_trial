import React, { useState, useCallback } from 'react';
import './App.css';
import { Counter } from './components/counter';
import { Messages } from './components/Messages';
import { Header } from './components/Header';


function App() {
 
  const divStyle = {
    backgroundColor: 'rgb(0, 128, 0)',
  };
  const onClickAlert = useCallback((arg: string) => {
    alert(arg);
  }, []);
  const [count, setCount] = useState(0);
  const onClickInc = () => {
      setCount(count + 1);
  };
  const onClickDec = () => {
      setCount(count - 1);
  };


  return (
    <div style={divStyle} className="App">
      <Header/>
      <div className='bodyContainer'>
        <button onClick={onClickInc}>+</button>
        <button onClick={onClickDec}>-</button>
        <p>{count}</p>
        <Counter>
          カウンター
        </Counter>
        <Messages addEvent={onClickAlert}>
          メモ書き
        </Messages>
        {/* <Messages>
          メモ書き２
        </Messages> */}
      </div>
    </div>
  );
}

export default App;
