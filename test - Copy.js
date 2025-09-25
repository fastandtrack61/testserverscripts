const { google } = require('googleapis');
const readline = require('readline');

const oAuth2Client = new google.auth.OAuth2(
  '80186504444-1cdil7t134ac9qdti0ov0ofk4fhln5r3.apps.googleusercontent.com',
  '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',
  'https://developers.google.com/oauthplayground'
);

const SCOPES = ['https://www.googleapis.com/auth/gmail.send'];
const authUrl = oAuth2Client.generateAuthUrl({ access_type: 'offline', scope: SCOPES });

console.log('Visit this URL:', authUrl);

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question('Enter code: ', async (code) => {
  const { tokens } = await oAuth2Client.getToken(code);
  console.log('Your refresh token:', tokens.refresh_token);
  rl.close();
});
