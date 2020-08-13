const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const db = require('./database.js');
const path = require('path');
const port = 3003;
const app = express();


app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/client'));

app.get('/getGamesBySeries', function(req, res) {
  db.getGamesBySeries(req.series, function(error, result)
  {
    if (error)
    {
      res.status(500);
      return;
    } else {
      res.status(200).json(result);
      return;
    }

  });

});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
  //
});

app.get('/getGamesByTags', function(req, res) {
  db.getGamesByTags(function(error, result)
  {
    if (error)
    {
      res.status(500);
      return;
    } else {
      res.status(200).json(result);
      return;
    }

  });


});



app.listen(port, () => {
  console.log(`listening on port ${port}`);
});