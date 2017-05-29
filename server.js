var express= require('express');
var bodyParser= require('body-parser');
var readline = require('readline');
var google = require('googleapis');
var googleAuth = require('google-auth-library');
// var validator= require('validator');
// var excel= require('excel');
var fs = require('fs');
// var id = require("uuid/v4");
// var isEmpty = require('lodash/isEmpty');
// var saltRounds = 10;

var app = express();
app.use(express.static(__dirname+'/client'));
app.use(bodyParser.urlencoded({entended: false}));
app.use(bodyParser.json());
// Variable global
var catalogue;
var product;
// function
function readCatalogue() {
	fs.readFile("....json", function(err, data){
		if(err) throw err;
		catalogue= JSON.parse(data);
	})
}
function writeCatalogue(product, res){
	fs.readFile("....json", function(err, data){
		if(err) throw err;
		catalogue= JSON.parse(data);
		catalogue.push(product)
		var json= JSON.stringify(catalogue)
		fs.writeFile(".....json", json, function(err){
			if(err){
				res.send('Error'+err);
			}
				res.send('Save completly');
		})
	})
}




// If modifying these scopes, delete your previously saved credentials
// at ~/.credentials/sheets.googleapis.com-nodejs-quickstart.json
var SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
var TOKEN_DIR = (process.env.HOME || process.env.HOMEPATH ||
    process.env.USERPROFILE) + '/.credentials/';
var TOKEN_PATH = TOKEN_DIR + 'sheets.googleapis.com-nodejs-quickstart.json';

// Load client secrets from a local file.
fs.readFile('client_secret.json', function processClientSecrets(err, content) {
  if (err) {
    console.log('Error loading client secret file: ' + err);
    return;
  }
  // Authorize a client with the loaded credentials, then call the
  // Google Sheets API.
  authorize(JSON.parse(content), listMajors);
});

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 *
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  var clientSecret = credentials.installed.client_secret;
  var clientId = credentials.installed.client_id;
  var redirectUrl = credentials.installed.redirect_uris[0];
  var auth = new googleAuth();
  var oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, function(err, token) {
    if (err) {
      getNewToken(oauth2Client, callback);
    } else {
      oauth2Client.credentials = JSON.parse(token);
      callback(oauth2Client);
    }
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 *
 * @param {google.auth.OAuth2} oauth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback to call with the authorized
 *     client.
 */
function getNewToken(oauth2Client, callback) {
  var authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES
  });
  console.log('Authorize this app by visiting this url: ', authUrl);
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question('Enter the code from that page here: ', function(code) {
    rl.close();
    oauth2Client.getToken(code, function(err, token) {
      if (err) {
        console.log('Error while trying to retrieve access token', err);
        return;
      }
      oauth2Client.credentials = token;
      storeToken(token);
      callback(oauth2Client);
    });
  });
}

/**
 * Store token to disk be used in later program executions.
 *
 * @param {Object} token The token to store to disk.
 */
function storeToken(token) {
  try {
    fs.mkdirSync(TOKEN_DIR);
  } catch (err) {
    if (err.code != 'EEXIST') {
      throw err;
    }
  }
  fs.writeFile(TOKEN_PATH, JSON.stringify(token));
  console.log('Token stored to ' + TOKEN_PATH);
}

/**
 * Print the names and majors of students in a sample spreadsheet:
 * https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 */
function listMajors(auth) {
  var sheets = google.sheets('v4');
  sheets.spreadsheets.values.get({
    auth: auth,
    spreadsheetId: '1yAOfAtVGLUSO454B_CDMPX5qpQLs7K5D-FI6IJbMm8s',
    range: 'test',
  }, function(err, response) {
    if (err) {
      console.log('The API returned an error: ' + err);
      return;
    }
    var rows = response.values;
    if (rows.length == 0) {
      console.log('No data found.');
    } else {
      //console.log('Name, Major:');
      for (var i = 1; i < rows.length; i++) {// start line 1 ??
        var row = rows[i];
        // Print columns A and E, which correspond to indices 0 and 4.
        console.log( row[0], row[1], row[2], row[3], row[4], row[5], row[6]);
      }
    }
  });
}


app.get('/confirmGoogleAPI',function(req,resp) {
	var bbbb  = req.query.code;
	resp.send('coller ceci dans le terminal svp: <code>'+bbbb+'</code>');
	// listMajors();
});
app.listen(3000,function(){
	console.log('bianchiDelice app running on port 3000')
});
