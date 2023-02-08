// export const onOpen = () => {
//   const menu = SpreadsheetApp.getUi()
//     .createMenu('My Sample React Project') // edit me!
//     .addItem('Sheet Editor', 'openDialog')
//     .addItem('Sheet Editor (Bootstrap)', 'openDialogBootstrap')
//     .addItem('Sheet Editor (Tailwind CSS)', 'openDialogTailwindCSS')
//     .addItem('About me', 'openAboutSidebar');

//   menu.addToUi();
// };


export const onOpen = () => {
  const menu = SpreadsheetApp.getUi()
    .createMenu('Smart Sheet')
    .addItem('App', 'Function1')
    .addItem('Additional settings', 'openDialog')
    .addItem('About', 'Function3');
  menu.addToUi();
  };

  export const Function1 = () => {
    const widget = HtmlService.createHtmlOutputFromFile("sidebar-openAI");
    widget.setTitle("Smart Sheet");
    SpreadsheetApp.getUi().showSidebar(widget);
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

export const openDialogTailwindCSS = () => {
  const html = HtmlService.createHtmlOutputFromFile('dialog-demo-tailwindcss')
    .setWidth(600)
    .setHeight(600);
  SpreadsheetApp.getUi().showModalDialog(html, 'Sheet Editor (Tailwind CSS)');
};

export const openAboutSidebar = () => {
  const html = HtmlService.createHtmlOutputFromFile('sidebar-about-page');
  html.setTitle("Smart Sheet");
  SpreadsheetApp.getUi().showSidebar(html);
};
