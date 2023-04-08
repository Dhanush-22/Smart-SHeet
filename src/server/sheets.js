/* eslint-disable operator-assignment */
/* eslint-disable no-await-in-loop */
/* eslint-disable camelcase */
/* eslint-disable dot-notation */
/* eslint-disable no-multi-str */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-template */
/* eslint-disable prefer-const */
/* eslint-disable eqeqeq */
/* eslint-disable vars-on-top */
/* eslint-disable no-plusplus */
/* eslint-disable prettier/prettier */
/* eslint-disable no-var */


const getSheets = () => SpreadsheetApp.getActive().getSheets();


const getActiveSheetName = () => SpreadsheetApp.getActive().getSheetName();


export const getSheetsData = () => {
  const activeSheetName = getActiveSheetName();
  return getSheets().map((sheet, index) => {
    const name = sheet.getName();
    return {
      name,
      index,
      isActive: name === activeSheetName,
    };
  });
};

export const addSheet = (sheetTitle) => {
  SpreadsheetApp.getActive().insertSheet(sheetTitle);
  return getSheetsData();
};

export const deleteSheet = (sheetIndex) => {
  const sheets = getSheets();
  SpreadsheetApp.getActive().deleteSheet(sheets[sheetIndex]);
  return getSheetsData();
};

export const setActiveSheet = (sheetName) => {
  SpreadsheetApp.getActive().getSheetByName(sheetName).activate();
  return getSheetsData();
};

// New Methods Follows

export const getAllHeaders = () =>{
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const currSheet = ss.getActiveSheet().getName();
  const sheet = ss.getSheetByName(currSheet);
  const lastColIdx = String.fromCharCode(64+sheet.getLastColumn());
  // eslint-disable-next-line prefer-const
  let headers = sheet.getRange('A1:'+lastColIdx+'1').getValues();
  return headers[0];
}


export const getActiveUserEmail = async () =>{
  let emailFetched = await Session.getActiveUser().getEmail();
  return emailFetched;
}


async function runOpenAI2(prompt){

  let maxTokens;
  if (!PropertiesService.getUserProperties().getProperty('NUMtokens')){
    maxTokens = 40;
  }else{
    maxTokens = Number(PropertiesService.getUserProperties().getProperty('NUMtokens'));
  }
  
  let model = "text-davinci-003";

  // Set up the request body with the given parameters
  const requestBody = {
    "model": model,
    "prompt": prompt,
    "temperature": 0,
    "max_tokens": maxTokens
  };

  // Set up the request options with the required headers
  const requestOptions = {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + PropertiesService.getUserProperties().getProperty('APIkey')
    },
    "payload": JSON.stringify(requestBody)
  };

  // Send the request to the GPT-3 API endpoint for completions
  try{
    const response = await UrlFetchApp.fetch("https://api.openai.com/v1/completions", requestOptions);
    const responseBody = JSON.parse(response.getContentText());
    let answer = responseBody.choices[0].text
    // console.log("Ans: ",answer);
    // Return the generated text from the response
    return [1,answer];
  }catch(err){
    return [-1,""];
  }
}



function getSelectedCellsA1Notation() {
  var rangeList = SpreadsheetApp.getActiveRangeList();
  var ranges = rangeList.getRanges();
  var cells = [];
  var cellsData = [];
  
  for (let i = 0; i < ranges.length; i++) {
    var range = ranges[i];
    var startRow = range.getRow();
    var endRow = startRow + range.getNumRows() - 1;
    var column = range.getColumn();
    
    for (var row = startRow; row <= endRow; row++) {
      var cell = SpreadsheetApp.getActive().getActiveSheet().getRange(row, column);
      cells.push(cell.getA1Notation());
      cellsData.push(cell.getValue());
    }
  }
  
  for (let i = 0; i < cells.length; i++) {
    Logger.log("Selected Cell: " + cells[i] + " Data: " + cellsData[i]);
  }

  // console.log("Cells: ",cells);
  // console.log("Cells Data: ",cellsData);
  
  // Cells:  [ 'B1', 'B3', 'B5', 'B12' ]
  // Cells Data:  [ 2, 200, 1000, '' ]
  return [cells, cellsData];
}



export const fillDataInSelectedCellsOnceForCell = async (prompt) => {
  
  const [cells, cellsData] = getSelectedCellsA1Notation();
  
  var spreadsheet = SpreadsheetApp.getActive();

  let tmpBool = false;

  for (let i=0; i<cells.length; i++){
    var cell = cells[i];
    var cellNumber = cell.substring(1);
    let entity_name = spreadsheet.getRange('A'+cellNumber).getValue();

    let result;
    if(entity_name){
      result = await runOpenAI2(prompt+" "+entity_name);
    }else{
      result = await runOpenAI2(prompt);
    }

    if(result[0] == -1 && !tmpBool){
      return -1;
    }

    let newResult = result[1].replace(/\s+/g,' ').trim();
    spreadsheet.getRange(cell).setValue(newResult);

    tmpBool = true;

  }
  return 1;
}



// export const fillDataInSelectedCellsOnceForCell = async (prompt) => {
//   if (!PropertiesService.getUserProperties().getProperty('APIkey')){
//     return -1;
//   }
//   var spreadsheet = SpreadsheetApp.getActive();
//   var range = spreadsheet.getActiveRange();
//   var num_rows = range.getNumRows();
//   var num_cols = range.getNumColumns();
//   let tmp = range.getRow();

//   let tmpBool = false;

//   for (var x=1; x<num_cols + 1; x++) {
//     for (var i=1; i<num_rows + 1; i++) {
//       let entity_name = spreadsheet.getRange('A'+(tmp+i-1)).getValue();
//       let fill_cell = range.getCell(i, x);
//       // let result = await runOpenAI2(prompt +" "+entity_name);
//       let result;
//       if(entity_name){
//         result = await runOpenAI2(prompt+" "+entity_name);
//       }else{
//         result = await runOpenAI2(prompt);
//       }
//       if(result[0] == -1 && !tmpBool){
//         return -1;
//       }
//       let newResult = result[1].replace(/\s+/g,' ').trim();
//       fill_cell.setValue([newResult]);
//       tmpBool = true;
//     }
//   }
//   return 1;
// }


export const getEntireDataOfFirstCol = async () =>{
  let ss = SpreadsheetApp.getActiveSpreadsheet();
  let currSheet = ss.getActiveSheet().getName();
  let sheet = ss.getSheetByName(currSheet);
  let colIdx = 1;

  let colName = String.fromCharCode(64+colIdx);
  var Avals = await ss.getRange(colName+1+":"+colName).getValues();
  var lastRowIdx = Avals.filter(String).length;

  let colData = await sheet.getRange(colName+'2:'+colName+lastRowIdx).getValues();
  return colData;
}


export const getColIdx = async (columnName) =>{
  let ss = SpreadsheetApp.getActiveSpreadsheet();
  let currSheet = ss.getActiveSheet().getName();
  let sheet = ss.getSheetByName(currSheet);
  let headers = getAllHeaders();
  let colIdx;

  for (let i=0; i<headers.length; i++){
    if (columnName == headers[i]){
      colIdx = i+1;
      break;
    } 
  }

  let colName = String.fromCharCode(64+colIdx);
  return colIdx;
}


export const fillDataInSelectedColumn = async (prompt, param) =>{
  if (!PropertiesService.getUserProperties().getProperty('APIkey')){
    console.log("API not set in the properties");
    return -1; // API not set
  }

  let ss = SpreadsheetApp.getActiveSpreadsheet();
  let currSheet = ss.getActiveSheet().getName();
  let sheet = ss.getSheetByName(currSheet);


  let tmp = String.fromCharCode(64+sheet.getLastColumn());
  
  var range = sheet.getRange("A1:"+tmp+sheet.getLastRow());


  let colIdx = await getColIdx(param);

  let tmpBool = false;


  for (var i=2; i<sheet.getLastColumn() + 1; i++) {
    let entity_name = await range.getCell(i,1).getValue();
    let fill_cell = await range.getCell(i, colIdx);

    let result;
    if(entity_name){
      result = await runOpenAI2(prompt+" "+entity_name);
    }else{
      result = await runOpenAI2(prompt);
    }
    if(result[0] == -1 && !tmpBool){
      return -1;
    }
    let newResult = result[1].replace(/\s+/g,' ').trim();
    // let newRes2 = "123"
    fill_cell.setValue([newResult]);
    tmpBool = true;
  }
  return 1;
}


export const fillDataInSelectedColumnOnceForAll = async (prompt, param) =>{
  if (!PropertiesService.getUserProperties().getProperty('APIkey')){
    return -1; // API not set
  }
  
  let ss = SpreadsheetApp.getActiveSpreadsheet();
  let currSheet = ss.getActiveSheet().getName();
  let sheet = ss.getSheetByName(currSheet);


  let tmp = String.fromCharCode(64+sheet.getLastColumn());
  
  var range = sheet.getRange("A1:"+tmp+sheet.getLastRow());


  let colIdx = await getColIdx(param);

  // let property_name = await range.getCell(1,colIdx).getValue();

  let dataString = ""

  for (var i=2; i<sheet.getLastColumn() + 1; i++) {
    // let entity_name = await range.getCell(i,1).getValue();
    let fill_cell = await range.getCell(i, colIdx).getValue();
    dataString = dataString + fill_cell + " \n";

    // let result = await get_x_of_y(property_name, entity_name);
  }
  // let result = await runOpenAI2(prompt+" "+dataString);
  let result;
  if(dataString){
    result = await runOpenAI2(prompt+" "+dataString);
  }else{
    result = await runOpenAI2(prompt);
  }
  if(result[0] == -1){
    return -1;
  }
  let tmp2 = String.fromCharCode(65+SpreadsheetApp.getActive().getLastColumn());
  SpreadsheetApp.getActiveSheet().getRange(tmp2+2).setValue(result[1]).setBackground('#90EE90');

  return 1;
}

export const  SelectedCellsAllTogether = async (prompt)=>{
    if (!PropertiesService.getUserProperties().getProperty('APIkey')){
      return -1; // API not set
    }
    var spreadsheet = SpreadsheetApp.getActive();
    var range = spreadsheet.getActiveRange();
  
    const lyst = range.getValues();
    let dataString = ""
    for (let i=0;i<lyst.length; i++){
      for (let j=0;j<lyst[i].length;j++){
        dataString = dataString + " " + lyst[i][j]; 
      }
      dataString = dataString + "\n"
    }
    // console.log("Data String: ",dataString);
  
    // var response = await runOpenAI2(prompt + dataString);
    var response;
    if(dataString){
      response = await runOpenAI2(prompt+dataString);
    }else{
      response = await runOpenAI2(prompt);
    }

    if(response[0] == -1){
      return -1;
    }
    let tmp = String.fromCharCode(65+spreadsheet.getLastColumn());
    SpreadsheetApp.getActiveSheet().getRange(tmp+2).setValue(response[1]).setBackground('#90EE90');
    return 1;
}

