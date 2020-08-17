const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'similarGames'
});

// const getGameSeriesID = (function(data, callback) {
// const sql = "SELECT ID FROM series WHERE seriesName = data"
// connection.query(sql, function(err, result, fields) {
//   if (err)
//     {
//       console.log(err);
//       callback(err, null);
//     }
//     else
//     {
//       console.log(result);
//       callback(null, result);
//     }
// })
// })

const getGamesBySeries = (function(data, callback) {
  const sql = "SELECT g.id, g.name, g.price, g.sale_percent, g.seriesID, g.releasedt, g.reviews, g.average_review, GROUP_CONCAT(DISTINCT t.tagName) as tags,  GROUP_CONCAT(DISTINCT m.imageFile) as media FROM (games AS g, gameTags AS gt, tags AS t, series AS s, media AS m) WHERE s.id = ? AND g.id = gt.gameID AND gt.tagID = t.id AND m.gameID = g.id GROUP BY g.id, g.name;"
  connection.query(sql, data, function(err, result, fields)
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
//AND t.name = 'platformer'
// LEFT JOIN media AS m ON g.id = m.gameID
//
const getGamesByTags = (function(gameID, tagArray, callback) {
  console.log(tagArray);
  var sql = "SELECT g.id, g.name, g.price, g.sale_percent, g.seriesID, g.releasedt, g.reviews, g.average_review, GROUP_CONCAT(DISTINCT t.tagName) as tags, GROUP_CONCAT(DISTINCT m.imageFile) as media, r.rank FROM (games AS g, gameTags AS gt, tags AS t, series AS s, media AS m, (" +
  "SELECT t.gameID, SUM(count) as rank FROM ("
  var first = true;
  for(var i = 0; i < tagArray.length; i++)
  {
    if (!first)
    {
      sql += " UNION "
    }
    first = false;
      sql += " SELECT gameID, count(gameID) as count from gameTags WHERE gameID != " + gameID + " AND tagID = " + tagArray[i] + " group by gameID "
  }
  sql += " ) as t GROUP BY t.gameID) as r) WHERE g.id = gt.gameID AND gt.tagID = t.id AND m.gameID = g.id and r.gameID = g.id GROUP BY g.id ORDER BY r.rank desc;"
  // "SELECT gameID, count(gameID) as count from gameTags WHERE gameID != ? AND tagID = ? group by gameID " +
  // "UNION SELECT gameID, count(gameID) as count from gameTags WHERE gameID != ? AND tagID = ? UNION SELECT gameID, count(gameID) as count from gameTags WHERE gameID != ? AND tagID = ? UNION SELECT gameID, count(gameID) as count from gameTags WHERE gameID != ? AND tagID = ? UNION SELECT gameID, count(gameID) as count from gameTags WHERE gameID != ? AND tagID = ? group by gameID) as t GROUP BY t.gameID) as r) WHERE g.id = gt.gameID AND gt.tagID = t.id AND m.gameID = g.id and r.gameID = g.id GROUP BY g.id ORDER BY r.rank desc;"

  // connection.query(sql, gameID, data.tag[0], data.gameID, data.tag[1], data.gameID, data.tag[2], data.gameID, data.tag[3], data.gameID, data.tag[4], function(err, result, fields)
    connection.query(sql, function(err, result, fields)
  {
    if (err)
    {
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
    "CALL populateRow('" + newGame.name + "', " + newGame.price + ", " + newGame.sale + ", '" + newGame.release + "', " + newGame.reviews + ", " + newGame.rating + ", '" + newGame.series + "', '" + newGame.tags[0] + "', '" + newGame.tags[1] + "', '" + newGame.tags[2] + "', '" + newGame.tags[3] + "', '" + newGame.tags[4] + "', '" + newGame.imagea + "', '" + newGame.imageb + "', '" + newGame.imagec + "', '" + newGame.imaged + "');",

//     CREATE PROCEDURE populateRow(
// 		  IN inGameName varchar(50)
// 		, IN inGamePrice decimal(6, 2)
// 		, IN inSale decimal(3, 2)
// 		, IN inReleaseDate date
// 		, IN inReviews int
// 		, IN inRating decimal(2, 1)
//     , IN inSeriesName varchar(50)
// 		, IN inTag1 varchar(50)
// 		, IN inTag2 varchar(50)
// 		, IN inTag3 varchar(50)
// 		, IN inTag4 varchar(50)
// 		, IN inTag5 varchar(50)
// 		, IN inImage1 varchar(255)
// 		, IN inImage2 varchar(255)
// 		, IN inImage3 varchar(255)
// 		, IN inImage4 varchar(255)
// )

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