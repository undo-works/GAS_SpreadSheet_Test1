function doGet() {
  var btn = HtmlService.createHtmlOutputFromFile('btnHtml');
  SpreadsheetApp.getUi().showModalDialog(btn, "登録画面");
}

function btnCancel(){
  var btn = HtmlService.createHtmlOutputFromFile('cancelHtml');
  SpreadsheetApp.getUi().showModalDialog(btn, "キャンセル画面");
}

function register(form) {
  var spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadSheet.getSheetByName(form.store);
  sheet.insertRowsBefore(4,1);
  const range = sheet.getRange('A4:F4')
  const array = [[form.date,form.name,form.quantity,form.value,'','']];
  range.setValues(array);

  const range2 = sheet.getRange('F4');
  range2.setFormula('=(C4-E4)*D4');

  if(form.date == ''){
    const range3 = sheet.getRange('A4');
    var d = new Date();
    range3.setValue(Utilities.formatDate(d, 'Asia/Tokyo', 'yyyy-MM-dd'));
  }
  var btn = HtmlService.createHtmlOutputFromFile('btnHtml');
  SpreadsheetApp.getUi().showModalDialog(btn, "登録画面");
}

function cancel(form){
  var spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadSheet.getSheetByName(form.store);
  
  const keys = sheet.getRange(3,2,sheet.getLastRow()-2,1).getValues().flat();
  
  const row = keys.indexOf(form.name);
  const range = sheet.getRange(row+3, 5);
  range.setValue(form.quantity);

  var btn = HtmlService.createHtmlOutputFromFile('cancelHtml');
  SpreadsheetApp.getUi().showModalDialog(btn, "キャンセル画面");
}
