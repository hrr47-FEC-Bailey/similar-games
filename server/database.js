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
//AND t.name = 'platformer'
// LEFT JOIN media AS m ON g.id = m.gameID
// (games AS g, gameTags AS gt, tags AS t)  LEFT JOIN media AS m ON g.id = m.gameID WHERE g.id = gt.gameID AND gt.tagID = t.id
const getGamesByTags = (function(callback) {
  connection.query("SELECT g.id, g.name, g.price, g.sale_percent, g.series, g.releasedt, g.reviews, g.average_review,  GROUP_CONCAT(t.name) as tags FROM gameTags gt JOIN games AS g ON gt.gameID = g.id JOIN tags AS t ON gt.tagID = t.id GROUP BY g.id, g.name; ", function(err, result, fields)
  {
    if (err)
    {
      console.log(err);
      callback(err, null);
    }
    else
    {
      callback(null, result);
    }
  })
});

const seedIntoDatabase = (function(data, callback) {
  let newGame = data;
  console.log(' Data from database.js: ' + JSON.stringify(data));
  connection.query(
    "CALL populateRow('" + newGame.name + "', " + newGame.price + ", " + newGame.sale + ", '" + newGame.series + "', '" + newGame.release + "', " + newGame.reviews + ", " + newGame.rating + ", '" + newGame.tags[0] + "', '" + newGame.tags[1] + "', '" + newGame.tags[2] + "', '" + newGame.tags[3] + "', '" + newGame.tags[4] + "', '" + newGame.imagea + "', '" + newGame.imageb + "', '" + newGame.imagec + "', '" + newGame.imaged + "');",
    //"BEGIN WORK " +
  //  "INSERT INTO games (name, price, sale_percent, series, releasedt, reviews, average_review) VALUES ('" +  + "', " +  + ", " +  + ", '" +  + "', '" +  + "'," + + ", " +  + "); " +
  //  "SET @last_id_game = LAST_INSERT_ID();  " +

    // "INSERT INTO tags (name) VALUES ('" + newGame.tags[0] + "')  "  +
    // "SET @last_id_tag = LAST_INSERT_ID()  " +
    // "INSERT INTO gameTags (gameID, tagID) VALUES (@last_id_game, @last_id_tag)  " +
    // "INSERT INTO tags (name) VALUES ('" + newGame.tags[1] + "')  " +
    // "SET @last_id_tag = LAST_INSERT_ID(); " +
    // "INSERT INTO gameTags (gameID, tagID) VALUES (@last_id_game, @last_id_tag)  " +
    // "INSERT INTO tags (name) VALUES ('" + newGame.tags[2] + "')  " +
    // "SET @last_id_tag = LAST_INSERT_ID(); " +
    // "INSERT INTO gameTags (gameID, tagID) VALUES (@last_id_game, @last_id_tag)  " +
    // "INSERT INTO tags (name) VALUES ('" + newGame.tags[3] + "')  " +
    // "SET @last_id_tag = LAST_INSERT_ID() " +
    // "INSERT INTO gameTags (gameID, tagID) VALUES (@last_id_game, @last_id_tag);  " +
    // "INSERT INTO tags (name) VALUES ('" + newGame.tags[4] + "')  " +
    // "SET @last_id_tag = LAST_INSERT_ID()  " +
    // "INSERT INTO gameTags (gameID, tagID) VALUES (@last_id_game, @last_id_tag)  " +

    // "INSERT INTO media (gameID, imageFile) VALUES (@last_id_game, '" + newGame.imagea + "')  " +
    // "INSERT INTO media (gameID, imageFile) VALUES (@last_id_game, '" + newGame.imageb + "')  " +
    // "INSERT INTO media (gameID, imageFile) VALUES (@last_id_game, '" + newGame.imagec + "')  " +
    // "INSERT INTO media (gameID, imageFile) VALUES (@last_id_game, '" + newGame.imaged + "')  " +
    //"ROLLBACK TRANSACTION; \n " +
    //"END",
    function(err, result)
  {
    if (err)
    {
      console.log(err);
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
  getGamesByTags,
  seedIntoDatabase

}