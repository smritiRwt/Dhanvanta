const SHEET_ID = '1YaPuwylcfMaSC2hbswLxhCeZzyTg-kVEtrnUJmA8eTw'
const SHEET_NAME = 'Sheet1'

function doGet() {
  return jsonResponse({success: true, message: 'WealthWise lead endpoint is active.'})
}

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse({success: false, error: 'Request body is missing.'})
    }

    const data = JSON.parse(e.postData.contents)
    const fullName = String(data.fullName || '').trim()
    const email = String(data.email || '').trim()
    const phone = String(data.phone || '').trim()
    const product = String(data.product || '').trim()
    const message = String(data.message || '').trim()

    if (!fullName || !email || !phone || !product) {
      return jsonResponse({success: false, error: 'Required fields are missing.'})
    }

    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME)
    if (!sheet) throw new Error('Sheet not found: ' + SHEET_NAME)

    sheet.appendRow([new Date(), fullName, email, phone, product, message])
    return jsonResponse({success: true})
  } catch (error) {
    return jsonResponse({success: false, error: error.message})
  }
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON)
}
