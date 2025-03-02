// by this we can use webhooks
import { useState } from "react";

function HookDemo(){

    // web hook
    // by this we can change the variable almost everywere,
    // where the counter is written

    // in this the first param is name and second is a function
    // and in useState() inside the param of it , i can give any data type variable to object anything
    let [counter,setCounter] = useState(0);

    function increase(){
        console.log("increase");
        setCounter(counter+1)
    }

    function decrease(){
        if(counter > 0){
        console.log("decrease");
        setCounter(counter-1)
        }
    }   

    return (
        <>
        <div style={{ width: "200px", margin: "auto", textAlign: "center"}}>
        <h1>COUNTER {counter}</h1>
        <button onClick={increase}>ADD</button>
        <button onClick={decrease}>SUB</button>
        </div>
        </>
    )
} 


export default HookDemo;

