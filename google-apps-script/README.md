# Google Sheets Lead Saving

## 1. Create the sheet

Create a Google Sheet named `Website Leads`. In the first row, add these headers:

```text
Timestamp | Full Name | Email | Phone | Product | Message
```

The supplied Sheet ID is already configured in `Code.gs`:

```text
1YaPuwylcfMaSC2hbswLxhCeZzyTg-kVEtrnUJmA8eTw
```

If you rename the tab from `Sheet1`, update `SHEET_NAME` in `Code.gs`.

## 2. Create the Apps Script web app

1. Open the sheet and select **Extensions > Apps Script**.
2. Paste the complete contents of `Code.gs`.
3. Confirm `SHEET_ID` matches the ID in your Sheet URL.
4. Click **Deploy > New deployment**.
5. Select **Web app** as the deployment type.
6. Set **Execute as** to **Me**.
7. Set **Who has access** to **Anyone**.
8. Deploy and authorize the requested permissions.
9. Copy the generated Web app URL.

Open that URL in a browser. You should see this JSON response:

```json
{"success":true,"message":"WealthWise lead endpoint is active."}
```

If you see a Google Drive "unable to open the file" page, the copied address is not an active Web app URL. Return to **Deploy > Manage deployments**, open the active Web app deployment, and copy its **Web app URL** again. It must start with `https://script.google.com/macros/s/` and end with `/exec`.

Keep the Sheet private. Website visitors only receive the Web app endpoint; they do not receive edit access to the Sheet.

## 3. Connect React

Open `src/config/formConfig.js` and replace the placeholder with the copied Web app URL:

```js
export const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec'
```

Run the website, submit a test enquiry, and verify that it appears as a new row in the Sheet.
