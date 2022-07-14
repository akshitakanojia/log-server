const express = require('express');
const app = express();
app.get('/', function(req,res){
  res.send("Hi There");
});
const port = 8000;
app.listen(port, function () {
  console.log('Listening on port 8000!');
  console.log('\x1b[36m%s\x1b[0m', 'I am cyan');  //cyan
  console.log('\x1b[33m%s\x1b[0m', 'I am yellow');  //yellow
})