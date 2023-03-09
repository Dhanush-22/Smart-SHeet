/* eslint-disable prefer-template */
/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */


export const onOpen = () => {
  const menu = SpreadsheetApp.getUi()
    .createMenu('OpenAI') // edit me!
    .addItem('App', 'Function1')
    .addItem('Additional settings', 'openDialog')
    .addItem('About Plugin', 'Function3');
  menu.addToUi();
  };

export const Function1 = () => {
  const widget = HtmlService.createHtmlOutputFromFile("sidebar-emailVerification");
  widget.setTitle("OPENAI");
  SpreadsheetApp.getUi().showSidebar(widget);
}


export const setAPIKey = (newKey) =>{
  try {
    const userProperties = PropertiesService.getUserProperties();
    userProperties.setProperty('APIkey', newKey);
  } catch (err) {
    console.log('Failed with error %s', err.message);
  }
  return "updated";
}

export const getAPIKey = () => {
  return PropertiesService.getUserProperties().getProperty('APIkey');
}

export const setNumOfTokens = (newTokens) =>{
  try {
    const userProperties = PropertiesService.getUserProperties();
    userProperties.setProperty('NUMtokens', newTokens);
  } catch (err) {
    console.log('Failed with error %s', err.message);
  }
  return PropertiesService.getUserProperties().getProperty('NUMtokens');
}

export const getNumOfTokens= () => {
  return PropertiesService.getUserProperties().getProperty('NUMtokens');
}


export const runOpenAI = async (prompt) => {
  if( !PropertiesService.getUserProperties().getProperty('APIkey')){
    return "Please add valid API";
  }

  const API_KEY = PropertiesService.getUserProperties().getProperty('APIkey');

  let maxTokens = 40;
  let model = "text-davinci-003";
  let prompt2 = prompt + ":";

  // if (maxWords){maxTokens = maxWords * 0.75}

  // Set up the request body with the given parameters
  const requestBody = {
    "model": model,
    "prompt": prompt2,
    "temperature": 0,
    "max_tokens": maxTokens
  };

  // Set up the request options with the required headers
  const requestOptions = {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + API_KEY
    },
    "payload": JSON.stringify(requestBody)
  };

  // Send the request to the GPT-3 API endpoint for completions
  const response = await UrlFetchApp.fetch("https://api.openai.com/v1/completions", requestOptions);

  // Get the response body as a JSON object
  const responseBody = JSON.parse(response.getContentText());

  let answer = responseBody.choices[0].text

  // Return the generated text from the response
  return answer
}



export const Function3 = () => {
  const url = 'http://www.facebook.com/';
  const html = HtmlService.createHtmlOutput(`<html><script>`
    + `window.close = function(){window.setTimeout(function() {google.script.host.close()},9)};`
    + `var a = document.createElement("a"); a.href="${url}"; a.target="_blank";`
    + `if(document.createEvent){`
    + `  var event=document.createEvent("MouseEvents");`
    + `  if(navigator.userAgent.toLowerCase().indexOf("firefox")>-1){window.document.body.append(a)}`
    + `  event.initEvent("click",true,true); a.dispatchEvent(event);`
    + `}else{ a.click() }`
    + `close();`
    + `</script>`
    + `<body style="word-break:break-word;font-family:sans-serif;">Failed to open automatically. <a href="${url}" target="_blank" onclick="window.close()">Click here to proceed</a>.</body>`
    + `<script>google.script.host.setHeight(40);google.script.host.setWidth(410) </script>`
    + `</html>`)
    .setWidth(90).setHeight(1);
  SpreadsheetApp.getUi().showModalDialog(html, "Opening url... make sure the pop up is not blocked.");
}


export const openDialog = () => {
  const html = HtmlService.createHtmlOutputFromFile('dialog-demo')
    .setWidth(600)
    .setHeight(600);
  SpreadsheetApp.getUi().showModalDialog(html, 'Sheet Editor');
};

export const openDialogBootstrap = () => {
  const html = HtmlService.createHtmlOutputFromFile('dialog-demo-bootstrap')
    .setWidth(600)
    .setHeight(600);
  SpreadsheetApp.getUi().showModalDialog(html, 'Sheet Editor (Bootstrap)');
};

export const openAboutSidebar = () => {
  const html = HtmlService.createHtmlOutputFromFile('sidebar-about-page');
  SpreadsheetApp.getUi().showSidebar(html);
};
