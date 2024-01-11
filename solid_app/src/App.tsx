import { Component } from "solid-js";
import { Counter } from "./components/counter";
import { InputText } from "./components/InputText";

const App: Component = () => {
  return (
    <div class="h-screen flex justify-center items-center">
      <div>
        <span class="text-6xl font-bold">Hello Solid</span>
        <Counter />
        <InputText />
      </div>
    </div>
  );
};

export default App;
