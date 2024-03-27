// googleSheetsService.js
import { google } from "googleapis";
import fs from "fs/promises";

const credentialsPath = "path/to/your/credentials.json"; // Replace with the path to your credentials JSON file.

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

async function authorize() {
  const credentials = await fs.readFile(credentialsPath);
  const { client_secret, client_id, redirect_uris } =
    JSON.parse(credentials).installed;
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );

  // Check if we have previously stored a token.
  try {
    const token = await fs.readFile("token.json");
    oAuth2Client.setCredentials(JSON.parse(token));
  } catch (err) {
    await getAccessToken(oAuth2Client);
  }

  return oAuth2Client;
}

async function getAccessToken(oAuth2Client) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  });
  console.log("Authorize this app by visiting this URL:", authUrl);

  // After the user authorizes the app, the authorization code is obtained.
  // Use the code to get the access token.
  const code = "AUTHORIZATION_CODE_FROM_REDIRECT_URL"; // Replace with the code obtained from the user's authorization
  const { tokens } = await oAuth2Client.getToken(code);
  oAuth2Client.setCredentials(tokens);

  // Save the token for future use
  await fs.writeFile("token.json", JSON.stringify(tokens));
}

async function writeToSheet(auth, spreadsheetId, range, data) {
  const sheets = google.sheets({ version: "v4", auth });

  const request = {
    spreadsheetId,
    range,
    valueInputOption: "RAW",
    resource: {
      values: [data], // Data to be written to the sheet
    },
  };

  try {
    const response = await sheets.spreadsheets.values.update(request);
    console.log("Data written to the sheet:", response.data);
  } catch (error) {
    console.error("Error writing data to the sheet:", error);
  }
}

export { authorize, writeToSheet };
