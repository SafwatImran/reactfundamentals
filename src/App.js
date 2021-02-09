import React from "react"
import logo from './logo.svg';
import './App.css';



 
function App() {
  const [counter, setCounter] =  React.useState(0);
  return (
    <div className="App">
    <h1>The State Hook</h1>
     <p>Counter : {counter}</p>
     <button onClick={()=>setCounter(counter+1)}>+1</button>
     <button onClick={()=>setCounter(counter-1)}>-1</button>  
    </div>
  );
}

export default App;
