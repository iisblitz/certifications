import {useState} from "react"
import { evaluate } from 'mathjs';
import "./JavaScriptCalculator.css"

const JavaScriptCalculator = () => {
    const [display, setDisplay] = useState(0)
    const [current, setCurrent] = useState('')

    const input = (e) => {
        const pointer = e.target.value;
        const numberRegex = /[0-9]|[.]/;
        const pointRegex =  /[.]/;
        let operation
        
        if(pointRegex.test(current) && pointRegex.test(pointer)) return console.log("Invalid Input, already a dot in operation")
        else if(!numberRegex.test(pointer) && !numberRegex.test(current.slice(-1))){
        operation = current.slice(0, current.length-2) + pointer;
        console.log(operation)
        setCurrent(operation)
        }
        else{setCurrent((prev)=> prev + pointer)}
      };
    
    const reset = () => {
        setCurrent("")
        setDisplay(0)
    }

    const solve = () => {
        try {
            const result = evaluate(current);
            setDisplay(result);
        } catch (error) {
            console.error("Invalid expression", error);
            setDisplay("Error");
        }
    };


    return ( 
        <div className="Calculator">
            <div className="container">
                <p>click on the display to delete inputs</p>
                <div className="Display" onClick={reset} id="clear">
                <label>{display}</label>
                <label id="display">{current}</label>
                </div>
                <p>Casi - o</p>
                <div className="Pad">
                    <div className="row">
                        <button className="number" onClick={(e) => input(e)} value="1" id="one">1</button>
                        <button className="number" onClick={(e) => input(e)} value="2" id="two">2</button>
                        <button className="number" onClick={(e) => input(e)} value="3" id="three">3</button>
                        <button className="operation" onClick={(e) => input(e)} value=" + " id="add">+</button>
                    </div>
                    <div className="row">
                        <button className="number" onClick={(e) => input(e)} value="4" id="four">4</button>
                        <button className="number" onClick={(e) => input(e)} value="5" id="five">5</button>
                        <button className="number" onClick={(e) => input(e)} value="6" id="six">6</button>
                        <button className="operation" onClick={(e) => input(e)} value=" - " id="subtract">-</button>
                    </div>
                    <div className="row">
                        <button className="number" onClick={(e) => input(e)} value="7" id="seven">7</button>
                        <button className="number" onClick={(e) => input(e)} value="8" id="eigth">8</button>
                        <button className="number" onClick={(e) => input(e)} value="9" id="nine">9</button>
                        <button className="operation" onClick={(e) => input(e)} value=" / " id="multiplay">/</button>
                    </div>
                    <div className="row">
                        <button className="number" onClick={(e) => input(e)} value="0" id="zero">0</button>
                        <button className="number" onClick={(e) => input(e)} value=".">.</button>
                        <button className="operation" onClick={(e) => input(e)}value=" / " id="divide">/</button>
                        <button className="operation" onClick={(e) => input(e)} value=" * ">*</button>
                    </div>
                    <div className="row">
                        <button className="equals" onClick={(e)=> solve(e)} id="equals">=</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default JavaScriptCalculator;