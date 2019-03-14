import React, { useEffect, useState } from "react";
import { render } from "react-dom";

import "./styles.css";

function Count() {
  const [count, setCount] = useState(0);
  console.log("rendering ... ");
  useEffect(() => {
    console.log("Count useEffect");
    return () => {
      console.log("Count useEffect ui destroy");
    };
  });
  // useEffect 第二个参数写[] 只会在初始化时渲染内部逻辑
  return (
    <div>
      <p>Count:{count}</p>
      <button onClick={() => setCount(count => count + 1)}>Count Click</button>
    </div>
  );
}
const App = () => {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Count />
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
};

const rootElement = document.getElementById("root");
render(<App />, rootElement);
