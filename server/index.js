const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const db = require('./database.js');
const path = require('path');
const port = 3003;
const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(bodyParser.json());
app.use(express.static('public'));
//app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/client')); //could be problematic as well



app.get('/api/getGameByID/:gameID', function(req, res) {
  var gameID = req.params.gameID;
  db.getGameByID(gameID, function(error, result)
  {
    if (error)
    {
      console.log('Get request failed')
      res.sendStatus(500).end();
    } else {
      res.json(result).end();
    }

  });
});


app.get('/api/getGamesBySeries/:seriesID', function(req, res) {
  var seriesID = req.params.seriesID;
  db.getGamesBySeries(seriesID, function(error, result)
  {
    if (error)
    {
      console.log('Get request failed')
      res.sendStatus(500).end();
    } else {
      res.json(result).end();
    }

  });
});

app.get('/', function(req, res) {
  res.sendFile(path.join(_dirname, "public", index.html));
});

app.get('/api/getGamesByTags/:gameID/:tagString', function(req, res) {
  var gameID = req.params.gameID;
  var tagString = req.params.tagString;
  var tagArray = tagString.split('&');
  db.getGamesByTags(gameID, tagArray, function(error, result)
  {
    if (error)
    {
      console.log('Get request failed')
      res.sendStatus(500).end();
    } else {
      res.json(result).end();
    }

  });
});



app.listen(port, () => {
  console.log(`listening on port ${port}`);
});