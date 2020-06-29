const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const rulesJSON = [
{"RuleName": "Must be 5 characters"},
{"RuleName": "Must not be used elsewhere"},
{"RuleName": "Must be very cool"},
]
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
   extended: false
}));

app.use(bodyParser.json());
app.get('/', (req, res) => {  
  res.sendFile(__dirname + '/index.html');
});
app.get('/api', (req, res) => {
  res.send(rulesJSON);
});
app.post('/api', (req, res) => {
  var rule = req.body.RuleName;
  
  rulesJSON.push({RuleName : rule});
})
app.listen(3000, () => console.log('listening on port 3000'));