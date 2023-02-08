/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useRef } from 'react';
import {ExpandMore, ExpandLess} from "@mui/icons-material"



export default function Preview(props) {
    const selectedCells = props.config[0];
    const onceForEachCell = props.config[1];
    const prompt = props.config[2];

    const [toggle, setToggle] = useState(true);

    const prev1 = () => {return(
        <div className='previewBox'>
            <div className="previewcontainer">
                <div className="title2">
                    <p>The OPENAI function will run for the each cell of the selected cells using the prompt -- {prompt}</p>
                </div>
            </div>
        </div>

    )}
    const prev2 = () => {return(
        <div className='previewBox'>
            <div className="previewcontainer">
                <div className="title2">
                    <p>The OPENAI function will run only once for all the selected cells using the prompt -- {prompt}</p>
                </div>
            </div>
        </div>

    )}
    const prev3 = () => {return(
        <div className='previewBox'>
            <div className="previewcontainer">
                <div className="title2">
                    <p>The OPENAI function will run for the each cell in selected column using the prompt -- {prompt}</p>
                </div>
            </div>
        </div>

    )}
    const prev4 = () => {return(
        <div className='previewBox'>
            <div className="previewcontainer">
                <div className="title2">
                    <p>The function will run only once for all the cells in selected column using the prompt -- {prompt}</p>
                </div>
            </div>
        </div>

    )}


    return (
        <>
            <div className='PreviewClass' style={{display:"flex", alignItems:"center", gap:"5px"}}>
                <h3 style={{margin:"2px"}}>Preview</h3>
                {!toggle? <ExpandMore style={{color:"#3b80fe", cursor:"pointer"}} onClick = {()=>{setToggle(true);}}/> : <ExpandLess style={{color:"#3b80fe", cursor:"pointer"}} onClick = {()=>{setToggle(false);}}/>}
            </div>
            {toggle && (<>
                {selectedCells? <>{onceForEachCell? prev1() : prev2()}</>  :  <>{onceForEachCell? prev3() : prev4()}</>}
            </>)}
        </>
    )
}
