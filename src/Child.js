import React from "react"

export default function Child ({step, counter, setCounter}){
    const inc = ()=>setCounter(counter+step);
    const dec = () =>setCounter(counter-step);
    return (
        <div>
            <button onClick={inc}>+{step}</button>
            <button onClick={dec}>-{step}</button>  
        </div>
    )
       
}