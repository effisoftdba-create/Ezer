# Google Sheets Lead Collection Setup

To save all details from the **EZER 30-Second Registration Popup** directly into a Google Sheet:

1. Create a new Google Sheet named **"EZER Website Leads"**.
2. Set up row 1 headers:
   `Name | Email | Phone | Country | State | City | Course | Timestamp`
3. Go to **Extensions** → **Apps Script**.
4. Replace all contents in the editor with the script below:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var name = e.parameter.Name || '';
    var email = e.parameter.Email || '';
    var phone = e.parameter.Phone || '';
    var country = e.parameter.Country || '';
    var state = e.parameter.State || '';
    var city = e.parameter.City || '';
    var course = e.parameter.Course || '';
    var timestamp = e.parameter.Timestamp || new Date().toLocaleString();

    sheet.appendRow([name, email, phone, country, state, city, course, timestamp]);

    return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ "result": "error", "error": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

5. Click **Deploy** → **New deployment**.
6. Select **Type**: **Web app**.
7. Set **Execute as**: **Me**.
8. Set **Who has access**: **Anyone** (this allows web form posts without login prompt).
9. Copy the generated Web App URL and paste it into `src/components/PopupForm.jsx` at variable `GOOGLE_SHEETS_SCRIPT_URL`.

*Note: All leads are also stored safely in browser `localStorage` as a fallback!*
