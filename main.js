function doGet() {
    var html = HtmlService.createHtmlOutputFromFile('index');
    return html.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  }
  
  
  // App Script function to save data to sheet
  function saveData(data) {
    var sheet = SpreadsheetApp.getActiveSheet();
    sheet.appendRow(data);
  
  }
  
  
  
  function uploadFiles(data)
  {
   var file = data.myFile;
   var folder = DriveApp.getFolderById('1d6RNxh6HF8H6mY-qOeP6LHM4XYIh-WjQ');
   var createFile = folder.createFile(file);
   return createFile.getUrl();
   var uploadURL = file.getUrl();
    
  }