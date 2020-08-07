const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'similarGames'
});

const getGamesBySeries = (function(data, callback) {
  connection.query("SELECT * FROM (games AS g, gameTags AS gt, tags AS t)  LEFT JOIN media AS m ON g.id = m.gameID WHERE g.series = '' AND g.id = gt.gameID AND gt.tagID = t.id", function(err, result, fields)
  {
    if (err)
    {
      console.log(err);
      result.sendStatus(500);
      callback(err, null);
    }
    else
    {
      callback(null, result);
    }
  })
});
//
// LEFT JOIN media AS m ON g.id = m.gameID
const getGamesByTags = (function(data, callback) {
  connection.query("SELECT * FROM (games AS g, gameTags AS gt, tags AS t)  LEFT JOIN media AS m ON g.id = m.gameID WHERE g.id = gt.gameID AND gt.tagID = t.id AND t.name = 'platformer'", function(err, result, fields)
  {
    if (err)
    {
      console.log(err);
      result.sendStatus(500);
      callback(err, null);
    }
    else
    {
      callback(null, result);
    }
  })
});

module.exports = {
  getGamesBySeries,
  getGamesByTags

}