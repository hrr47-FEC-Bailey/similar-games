const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const db = require('./database.js');
const path = require('path');
const port = 3003;
const app = express();


app.use(bodyParser.json());
app.use(express.static('public'));
//app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/client')); //could be problematic as well

app.get('/getGamesBySeries/:seriesID', function(req, res) {
  var seriesID = req.params.seriesID;
  db.getGamesBySeries(seriesID, function(error, result)
  {
    if (error)
    {
      console.log('Get request failed')
      res.status(500);
      return;
    } else {
      res.status(200).json(result);
      return;
    }

  });

});

app.get('/', function(req, res) {
  res.sendFile(path.join(_dirname, "public", index.html));

  //res.sendFile('/mnt/c/Users/Stephanye/FRONT-END-CAPSTONE/similar-games/public/index.html');
});

app.get('/getGamesByTags/:gameID/:tagString', function(req, res) {
  var gameID = req.params.gameID;
  var tagString = req.params.tagString;
  var tagArray = tagString.split('&');
  db.getGamesByTags(gameID, tagArray, function(error, result)
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