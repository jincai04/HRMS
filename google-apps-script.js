// Google Apps Script code to save data to Google Sheets
// Instructions:
// 1. Create a new Google Sheet (e.g., "HR Performance Data")
// 2. Go to Extensions > Apps Script
// 3. Replace the default code with this
// 4. Set up a trigger or deploy as web app

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const spreadsheetId = '1zcx8MGhMPTcxzsNWxkxdx5leNynL4DJn0yYYtp91Gss'; // Your Google Sheet ID
    const sheetName = 'StaffData'; // Or whatever sheet name you want

    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    let sheet = spreadsheet.getSheetByName(sheetName);

    // Create sheet if it doesn't exist
    if (!sheet) {
      sheet = spreadsheet.insertSheet(sheetName);
      // Add headers
      sheet.appendRow(['Name', 'Title', 'Department', 'Service Year', 'Status', 'Email', 'Score', 'Rating', 'Timestamp']);
    }

    // Clear existing data (optional, or append)
    // sheet.clearContents();
    // sheet.appendRow(['Name', 'Title', 'Department', 'Service Year', 'Status', 'Email', 'Score', 'Rating', 'Timestamp']);

    // Append each staff member
    data.forEach(staff => {
      const rating = getRating(staff.score);
      sheet.appendRow([
        staff.name,
        staff.title,
        staff.department,
        staff.serviceYear,
        staff.status,
        staff.email,
        staff.score,
        rating,
        new Date().toISOString()
      ]);
    });

    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Data saved successfully' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function getRating(score) {
  if (score >= 90) return 'A';
  if (score >= 70) return 'B';
  if (score >= 50) return 'C';
  return 'D';
}

// For testing (optional)
function doGet(e) {
  return ContentService
    .createTextOutput('Google Apps Script is running')
    .setMimeType(ContentService.MimeType.TEXT);
}
