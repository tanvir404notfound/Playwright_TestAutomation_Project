// Utility to read test data from Excel
const XLSX = require('xlsx');
const path = require('path');

function getTestData(fileName) {
  const filePath = path.resolve('fixtures', fileName);
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(sheet);
  return data;
}

module.exports = { getTestData };
