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

app.get('/getGamesBySeries', function(req, res) {
  // console.log('data: ');
  console.log('req params: ' + JSON.stringify(req.params));
  db.getGamesBySeries(req.params, function(error, result)
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

// app.get('/getGameSeriesID', function(req, res) {
//   db.getGameSeriesID(req, function(error, result)
//   {
//     console.log(req.data);
//     if (error)
//     {
//       res.status(500);
//       return;
//     } else {
//       res.status(200).json(result);
//       return;
//     }

//   });

// });

app.get('/', function(req, res) {
  res.sendFile(path.join(_dirname, "public", index.html));

  //res.sendFile('/mnt/c/Users/Stephanye/FRONT-END-CAPSTONE/similar-games/public/index.html');
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