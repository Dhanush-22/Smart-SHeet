/* eslint-disable eqeqeq */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line no-unused-vars
// import axios from "axios"
import React, { useEffect, useState, useRef } from 'react';
import { Cached, DoneOutline, ExpandMore, ExpandLess } from "@mui/icons-material"
import CircularProgress from '@mui/material/CircularProgress';
import { serverFunctions } from '../../utils/serverFunctions';
// import Preview from './Preview';




const SidebarHome = () => {
  const [firstPage, setFirstPage] = useState(true);
  // const [userEmail, setUserEmail] = useState('not yet fetched');
  // const [isFetching, setIsFetching] = useState(false);
  // const [selectedRowRadio, setSelectedRowRadio] = useState(true);
  // const [selectedOnceForEachCell, setSelectedOnceForEachCell] = useState(true);
  // const [chooseHeader, setChooseHeader] = useState(false);
  // const [colSelectedForVerify, setColSelectedForVerify] = useState("");

  // const [tokenCount, setTokenCount] = useState(40);

  // Assume the current is newUser
  // const [isNewUser, setIsNewUser] = useState(true);

  // const [manualPrompt, setManualPrompt] = useState(false);
  // const [toggle, setToggle] = useState(false);


  // // CHANGE THE DEFAULT APIKEY TO NULL
  // const [openApiKey, setOpenApiKey] = useState("");
  // const [apiKey, setApiKey] = useState("");

  // const [apiKey, setApiKey] = useState("sk-zKnVdM**********639eH");
  // const [apiKey, setApiKey] = useState("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");

  // const [prompt, setPrompt] = useState("");

  // const [warning, setWarning] = useState(false);

  // const [updated, setUpdated] = useState(false);

  // const [names, setNames] = useState([]);
  // const [headers, setHeaders] = useState([]);

  // const [chooseAdvancedOptions, setChooseAdvancedOptions] = useState(false);


  // Response:  {openAIAPIKey: 'APt231r6t23JHWGSHKDEF', authorisedEmail: 'bedredhanush.nitap@gmail.com', modifiedOn: 1671294164728, displayKey: 'APt2****KDEF'}
  // const handleFetchData = async (email) => {
  //   try {
  //     const response = await axios.get('https://api.nuw.io/v1/api/core/get-credentials', { headers: { "x-email": email } })
  //     // console.log("Response ", response);
  //     const fetchAPIres = response.data.responseData;
  //     if (Object.keys(fetchAPIres).length === 0) {
  //       console.log("Empty");
  //       setIsNewUser(true);
  //     } else {
  //       await setOpenApiKey(fetchAPIres.openAIAPIKey);
  //       setApiKey(fetchAPIres.displayKey);
  //       const response3 = await serverFunctions.setAPIKey(fetchAPIres.openAIAPIKey);
  //       console.log("Response3: ", response3);
  //     }
  //     return [1, response.data.responseData];
  //   } catch (e) {
  //     console.log("Error: ", e);
  //     return [-1, ""];
  //   }
  // }

  // const handlePostData = async () => {
  //   console.log("Calling POST request");
  //   //  axios.post('http://54.146.179.97:3001/v1/api/core/get-credentials', { headers: {"x-email": "bedredhanush37@gmail.com"}})
  //   try {
  //     const response = await axios.post('https://api.nuw.io/v1/api/core/update-credentials', {
  //       "openAIAPIKey": apiKey,
  //       "authorisedEmail": userEmail
  //     })
  //     console.log("Response: ", response);
  //     const upd = await handleFetchData(userEmail);
  //   } catch (e) {
  //     console.log("Error: ", e);
  //   }
  // }

  // useEffect(() => {
  //   const func1 = async () => {
  //     try {
  //       const response = await serverFunctions.getActiveUserEmail();
  //       const res2 = await setUserEmail(response);
  //       const fetchAPI = await handleFetchData(response);
  //       if (fetchAPI[0] !== 1) {
  //         console.log("Error while fetching data");
  //       }
  //       const fetchAPIres = await fetchAPI[1];
  //     } catch (error) {
  //       // eslint-disable-next-line no-alert
  //       alert(error);
  //     }
  //   };
  //   func1();
  // }, []);


  // let config = [selectedRowRadio, selectedOnceForEachCell, prompt]

  // useEffect(() => {
  //   config = [selectedRowRadio, selectedOnceForEachCell]
  // }, [selectedRowRadio, selectedOnceForEachCell, prompt]);



  // const extractHeaders = async () => {
  //   try {
  //     setIsFetching(true);
  //     setHeaders([]);
  //     const response = await serverFunctions.getAllHeaders();
  //     setHeaders(response);
  //     setIsFetching(false);
  //     if (headers.length > 0) {
  //       setColSelectedForVerify(headers[0]);
  //     }
  //   } catch (error) {
  //     setIsFetching(false);
  //     alert(error);
  //   }
  // };


  // const handleSubmitForOpenAI = async () => {
  //   const numTkres = await serverFunctions.setNumOfTokens(tokenCount);
  //   if (selectedRowRadio && !selectedOnceForEachCell) {
  //     try {
  //       console.log("Here1..........", prompt);
  //       setIsFetching(true);
  //       const res = await serverFunctions.SelectedCellsAllTogether(prompt);
  //       setIsFetching(false);
  //       if(res == -1){
  //         console.log("Error ......")
  //         setWarning(true);
  //         await setTimeout(function () {
  //           setWarning(false);
  //         }, 8000);
  //       }
  //     } catch (error) {
  //       setIsFetching(false);
  //       alert(error);
  //     }
  //     setWarning(false);
  //   }

  //   else if (selectedRowRadio && selectedOnceForEachCell) {
  //     console.log("Here2..........", prompt);
  //     try {
  //       setIsFetching(true);
  //       const res = await serverFunctions.fillDataInSelectedCellsOnceForCell(prompt);
  //       setIsFetching(false);
  //       if(res == -1){
  //         console.log("Error ......");
  //         setWarning(true);
  //         await setTimeout(function () {
  //           setWarning(false);
  //         }, 8000);
  //       }
  //     } catch (error) {
  //       setIsFetching(false);
  //       alert(error);
  //     }
  //     setWarning(false);
  //   }

  //   else if (colSelectedForVerify && selectedOnceForEachCell) {
  //     try {
  //       console.log("Here3..........", colSelectedForVerify, prompt);
  //       setIsFetching(true);
  //       const res = await serverFunctions.fillDataInSelectedColumn(prompt, colSelectedForVerify);
  //       setIsFetching(false);
  //       if(res == -1){
  //         console.log("Error ......")
  //         setWarning(true);
  //         await setTimeout(function () {
  //           setWarning(false);
  //         }, 8000);
  //       }
  //     } catch (error) {
  //       setIsFetching(false);
  //       alert(error);
  //     }
  //     setWarning(false);
  //   }

  //   else if (colSelectedForVerify && !selectedOnceForEachCell) {
  //     try {
  //       console.log("Here3..........", colSelectedForVerify, prompt);
  //       setIsFetching(true);
  //       const res = await serverFunctions.fillDataInSelectedColumnOnceForAll(prompt, colSelectedForVerify);
  //       setIsFetching(false);
  //       if(res == -1){
  //         console.log("Error ......")
  //         setWarning(true);
  //         await setTimeout(function () {
  //           setWarning(false);
  //         }, 8000);
  //       }
  //     } catch (error) {
  //       setIsFetching(false);
  //       alert(error);
  //     }
  //     setWarning(false);
  //   }
  //   else {
  //     console.log("Error has Raised");
  //   }
  // }

  // const handleInitialize = async () => {
  //   try {
  //     if (!apiKey.includes("*")) {
  //       setIsFetching(true);
  //       await serverFunctions.setAPIKey(apiKey);
  //       await handlePostData();
  //       setUpdated(true);
  //       setIsFetching(false);
  //       setTimeout(function () {
  //         setFirstPage(false);
  //       }, 3000)
  //     }
  //   } catch (error) {
  //     console.log("error while adding the API");
  //   }
  // }


  const page1 = () => {
    return (
      <>
        <div className="card">
          <div className="cardContainer">
            <h2>Add API</h2>
            <p>
              Add a valid API here            </p>
            <div className='formClass'>
              <div className='inputsClass'>
                <div className='inputClass'>
                  <p>API</p>
                  <input type="text" placeholder="Enter your api key"
                    className="inputField"
                    // onChange={(e) => setApiKey(e.target.value)}
                    // value={apiKey}
                    required
                  />
                </div>
              </div>
                {/* {isFetching ? <CircularProgress size="18px" style={{ color: "white" }} /> : <>{apiKey.includes("*")? <>
                  <DoneOutline size="18px" style={{ color: "" }} />
                </>
                  : "Initialize"}</>
                } */}
              {/* onClick={handleInitialize} */}
              <button className="submitButton" >
                "Initialize"
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }

  const page2 = () => {
    return (
      <>
        {/* {(apiKey.length < 5) && <p className="wariningP">Please add the API in initilaize page</p>}
        {(warning) && <p className="wariningP">Invalid API. Please update the API in initilaize page & try again.</p>}
        {(manualPrompt && prompt.length < 2) && <p className="wariningP">Please fill the Prompt</p>} */}

        <div className='card'>
          {/* <div className="cardContainer">
            <h2>Instructions</h2>
            <p>
              <strong>Documentation of functions:</strong>
            </p>
            <p>
              function <b>runOpenAI(prompt)</b><br/>
              prompt type: <b>string</b> <br/>
              return value: <b>string</b>
            </p>
            <p><b>Usage: </b></p>
            <p><b>Example1:</b> type in a cell =runOpenAI(&quot;Who is the CEO of Apple&quot;) and press Enter to see result</p>
            <p><b>Example2:</b>: Suppose cell A2 has value &quot;Amazon&quot; then type =runOpenAI(concat(&quot;Categorize the comapany type into Ecommerce or other of &quot;,A2)) in a cell and press Enter to see result</p>
          </div> */}
        </div>

        <div className='card'>
          <div className="cardContainer">
            <div>
              <h2>Enter the prompt</h2>
              <p>
                Prompt
              </p>
              {/* onChange={e => setPrompt(e.target.value)} */}
              {/* value={prompt} */}
              <textarea name="textArea" type="text" rows="4" cols="10" className="txtArea">
              </textarea>
            </div>
            <div style={{display:"flex", gap:"8px", alignItems:"center"}}>
              <p>
                Number of Tokens: 
              </p>
              {/* onChange={(e) => { setTokenCount(e.target.value) }} value={tokenCount} */}
              <input className= "numField" type="number" id="quantity" name="quantity" min="10" max="200"  />
            </div>
          </div>
        </div>

        <div className='card'>
          <div className="cardContainer">
            <h2>Cells</h2>
            <p>
              Select the cells which you’d need OpenAI help
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "5px", margin: "2px 0 5px 0" }}>
            {/* onClick={() => { setChooseHeader(false); setSelectedRowRadio(true); }} */}
              <input type="radio" id="id1" name="option" value="" defaultChecked />
              <label className="radioBtnTxt">Selected Cell(s)</label>
            </div>
            {/* onClick={() => { setSelectedRowRadio(false); extractHeaders(); setChooseHeader(true) }} */}
            <div style={{ display: "flex", alignItems: "center", gap: "5px", margin: "2px 5px 5px 0" }}>
              <input type="radio" id="id2" name="option" value=""  />
              {/* {(chooseHeader) && <Cached onClick={extractHeaders} title="refresh" className='refreshIcon' />} */}
              <label className="radioBtnTxt">Select an entire column</label>
            </div>
            {/* {(chooseHeader) ?
              <div className="dropDownBox">
                <select className="dropDown" id="header" name="Header" onChange={(e) => { console.log("Selected: ", e.target.value); setColSelectedForVerify(e.target.value) }} placeholder="Headers">
                  <option value="none" selected disabled hidden>Choose a header</option> &&
                  {headers.map(o => (o.length > 1 && (<option key={o} className='dropDwnOption' value={o}>{o}</option>)))}
                </select>
              </div>
              :
              <></>
            } */}
          </div>
        </div>

        <div className='card'>
          <div className="cardContainer">
            <h2>Execution</h2>
            <p>
              Run the openAI function for:
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "5px", margin: "2px 0 5px 0" }}>
            {/* onClick={() => { setSelectedOnceForEachCell(true) }} */}
              <input type="radio" id="id3" name="option2" value="" defaultChecked />
              <label className="radioBtnTxt">Once for each cell</label>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "5px", margin: "2px 5px 5px 0" }}>
            {/* onClick={() => { setSelectedOnceForEachCell(false) }} */}
              <input type="radio" id="id4" name="option2" value=""/>
              <label className="radioBtnTxt">Once for selection</label>
            </div>
            <div className='RadioBtnsClass'>
              <div className='PreviewClass' style={{ display: "flex", alignItems: "center", gap: "5px", fontFamily: 'Roboto'}}>
                <h4>Advanced Options</h4>
                {/* {!toggle ? <ExpandMore style={{ color: "#3b80fe", cursor: "pointer" }} onClick={() => { setToggle(true); }} /> : <ExpandLess style={{ color: "#3b80fe", cursor: "pointer" }} onClick={() => { setToggle(false); }} />} */}
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="cardContainer">
            <form>
              <h2>Run</h2>
              <p>Click the button below to fetch info from OpenAI.</p>
              <button className="submitButton" onClick={handleSubmitForOpenAI}>
                {/* {isFetching ? <CircularProgress size="18px" style={{ color: "white" }} /> : "Submit"} */}
                "Submit"
              </button>
            </form>
          </div>
        </div>

        {/* <div style={{display:"flex", flexDirection:"column", fontFamily: 'Roboto'}}>
         <Preview config={config} />
        </div> */}
      </>
    )
  }


  return (
    <div className="box">
      <div className="container" style={{ marginTop: "5px" }}>
        {/* <p>{userEmail}</p> */}
        <p>bedredhanush.nitap@gmail.com</p>
        {/* <div className="shiftButtons">
          <button className={firstPage ? "shiftButtonSelected" : "shiftButton"} onClick={() => { setFirstPage(true); setChooseHeader(false); setUpdated(false) }}>{!apiKey.current ? "Initialize" : "Modify"}</button>
          <button className={firstPage ? "shiftButton" : "shiftButtonSelected"} onClick={() => { setFirstPage(false) }}>Run</button>
        </div> */}
        {firstPage ? page1() : page2()}
      </div>
      {/* <hr /> */}
      {/* <div className="creditsInfo">
        <div className="creditTitle">
          Credits
        </div>
        <div className="creditNum">
          <span>100</span>
        </div>
      </div> */}
    </div>
  );

};

export default SidebarHome;

// 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
