import React from "react"
import logo from './logo.svg';
import './App.css';
import Child from './Child.js'

 
function App() {
  const [currency, setCurrency] = React.useState('USD')
  const [rates, setRates] = React.useState({});
  React.useEffect(()=>{
    fetch('https://api.ratesapi.io/api/latest?base=' + currency).then(res=>res.json()).then(data=>{
      setRates(data.rates);
    });
  }, [currency]);
  const setUSD = () => setCurrency('USD')
  const setEUR = () => setCurrency('EUR')
  return (
    <div className="App">
    <h1>The Effect Hook</h1>
    <button onClick={setUSD}>USD</button><button onClick={setEUR}>setEUR</button>
    <h2> {currency} Exchange Rate</h2>
    {Object.keys(rates).map(currency => <li>{currency}: {rates[currency]}</li>) } 
    </div>
  );
}

export default App;
