import { Component, createSignal } from "solid-js";

export const Counter: Component = () => {
  const [count, setCount] = createSignal<number>(0);
  const inc = () => {
    setCount(current => current + 1);
  };
  const dec = () => {
    setCount(current => current - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div class="text-xl">
      <div>
        <button onClick={inc} >increment</button>
        <br/>
        <button onClick={dec} >decrement</button>
        <br/>
        <button onClick={reset} >reset</button>
      </div>
      <div>
        <p>
          {count()}
        </p>
      </div>
    </div>
    
  )
}