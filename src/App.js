import { useEffect, useState } from "react";
import "./App.css";
import TestComponent from "./components/main";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  useEffect(() => {
    console.log("hello world");
  }, [num1]);
  console.log(num2)
  return (
    <div className="App">
      <TestComponent />
      <button onClick={() => setNum1((prev) => prev + 1)}>+num1</button>
      <button onClick={() => setNum2((prev) => prev + 1)}>+num2</button>
    </div>
  );
}

export default App;
