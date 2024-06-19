import { useState } from "react"
import Option from "./Option"
import data from './data.js';

export default function Quiz(){
    let [select,setSelect] = useState(false);
    let [index,setIndex] = useState(0);
    let [score,setScore] = useState([]);

    function onSelect(event){
        if(!select){
            if(event.target.innerText===data[index].ans){
                console.log("SELECTED");
                setScore((prevArr)=>{
                    return [...prevArr,1];
                })
            }
            setSelect(true)
        }
        setSelect(false)
        setIndex(index+1);
    }
    
    return (
        <div className="quiz container-fluid p-4">
            <h1>Quiz App</h1>
            <hr/>
            {
                index!==9 ? <>
                        <h5>{data[index].question}</h5>
                        <div>
                        <Option option={data[index].option1} onSelect={onSelect}/>
                        <Option option={data[index].option2} onSelect={onSelect}/>
                        <Option option={data[index].option3} onSelect={onSelect}/>
                        <Option option={data[index].option4} onSelect={onSelect}/>
                    </div>
                    </> : <div>
                        <h1>Your score {score.reduce((res,el)=>res+el)}/10</h1>
                    </div>       
            }

        </div>
    ) 
}