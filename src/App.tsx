import { useState } from "react";
import { Widget } from "./components/Widget";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Hello World</h1>
      <Widget />
    </div>
  );
}

export default App;
