import { useState} from "react";


function ColorChanger1(){
    const [color,setColor] = useState("pink");

    return(
        
        <div className="w-full h-screen duration-200" 
        style={{backgroundColor : color}}>
        <div >
            <button onClick={() => setColor("red")} style={{backgroundColor : "red"}}>red</button>
            <button onClick={() => setColor("green")} style={{backgroundColor : "green"}}>green</button>
            <button onClick={() => setColor("blue")} style={{backgroundColor : "blue"}}>blue</button>
            <button onClick={() => setColor("yellow")} style={{backgroundColor : "yellow"}}>yellow</button>
        </div>
        </div>
    )
}


export default ColorChanger1;