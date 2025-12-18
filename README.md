# HR Performance Appraisal App - Google Sheets Integration

This application allows you to manage HR performance appraisals and save data to Google Sheets.

## Setup Instructions

### 1. Create a Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet (e.g., "HR Performance Data")
3. Copy the spreadsheet ID from the URL (the long string between `/d/` and `/edit`)

### 2. Set up Google Apps Script
1. In your Google Sheet, go to **Extensions > Apps Script**
2. Delete the default code and paste the contents of `google-apps-script.js`
3. Replace `'YOUR_SPREADSHEET_ID'` with your actual spreadsheet ID
4. Save the project
5. Deploy the script:
   - Click **Deploy > New deployment**
   - Select type **Web app**
   - Description: "HR Performance Data Collector"
   - Execute as: **Me**
   - Who has access: **Anyone** (or restrict as needed)
   - Deploy
6. Copy the **Web app URL** from the deployment dialog

### 3. Configure the HTML App
1. Open `index.html` in a text editor
2. Find the line: `const webAppUrl = 'YOUR_WEB_APP_URL';`
3. Replace `'YOUR_WEB_APP_URL'` with your deployed web app URL

### 4. Run the Application
- Open `index.html` in your web browser
- Add/edit staff data as needed
- Click "Save to Google Sheets" to export the data

## Features
- Input staff performance data
- Automatic rating calculation (A, B, C, D)
- Bell curve analysis
- Export data to Google Sheets
- Generate performance reports and letters

## Security Notes
- For production use, consider restricting access to the web app deployment
- The current setup allows anyone with the URL to submit data
- Consider implementing authentication if needed

## Troubleshooting
- Ensure the web app URL is correct and deployed
- Check that the Google Sheet has the correct permissions
- Verify the spreadsheet ID in the Apps Script code
