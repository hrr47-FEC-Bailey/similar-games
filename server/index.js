const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const db = require('./database.js');
const port = 3003;
const app = express();


app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/getGamesBy:series', function(req, res) {
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

app.get('/getGamesBy:tags', function(req, res) {
  db.getGamesByTags(req.tag, function(error, result)
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