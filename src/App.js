import React from "react"
import logo from './logo.svg';
import './App.css';
import Child from './Child.js'

 
function App() {
  const [counter, setCounter] =  React.useState(0);

  return (
    <div className="App">
    <h1>Sub Components</h1>
     <p>Counter : {counter}</p>
     <Child step={1} setCounter= {setCounter}/>
     <Child step={5} setCounter= {setCounter}/>    
    </div>
  );
}

export default App;
