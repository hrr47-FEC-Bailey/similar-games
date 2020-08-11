const faker = require('faker');
const db = require('./database.js');

let seriesPossibilities = [];
let seriesNum = 5;
for (var i = 0; i < seriesNum; i++)
{
  seriesPossibilities.push(faker.name.title());
};

for ( var i = 0; i < 4; i++)
{
  let gameName = faker.name.title();
  let gamePrice = faker.commerce.price();
  let gameSale = (Math.random().toFixed(2, 2) - .01);

  let gameInSeries = Math.floor(Math.random() * 100);
  let gameSeries =  null;
  if (gameInSeries >= 20)
  {
    gameSeries = seriesPossibilities[(Math.floor(gameInSeries / 20) - 1)];
  }
  let dateFaker = faker.date.past();
  let month = dateFaker.getMonth().toString();
  let day = dateFaker.getDate().toString();
  let date = dateFaker.getFullYear() + '-' + month.padStart(2, '0') + '-' + day.padStart(2, '0');
  //date = date.split('T')[0];
  let reviewNum = Math.floor(Math.random() * 500);
  let avgReview = (Math.random() * 4).toFixed(1, 2);
  let image1 = faker.image.avatar();
  let image2 = faker.image.avatar();
  let image3 = faker.image.avatar();
  let image4 = faker.image.avatar();
  let gameTags = [];
  let tagNum = Math.floor(Math.random() * (5 - 1) + 1);
  for ( var j = 0; j < 5; j++)
  {
    gameTags.push(faker.hacker.adjective());
  }
   let newGame = {
     name: gameName,
     price: gamePrice,
     sale: gameSale,
     series: gameSeries,
     release: date,
     reviews: reviewNum,
     rating: avgReview,
     imagea: image1,
     imageb: image2,
     imagec: image3,
     imaged: image4,
     tags: gameTags
   }

   console.log(i);
   console.log(newGame);
   db.seedIntoDatabase(newGame, function(err, result)
   {
     if (err)
     {
       console.log(err);
       return;
     }
     console.log(result);
   });

}



// CREATE TABLE games (
//   id int NOT NULL AUTO_INCREMENT,
//   name varchar(50) NOT NULL unique,
//   price decimal(5, 2),
//   sale_percent decimal(2, 2),
//   series varchar(50),
//   releasedt date,
//   reviews int,
//   average_review decimal(2, 1),
//   PRIMARY KEY (ID)
// );
// CREATE TABLE media (
//   id int NOT NULL AUTO_INCREMENT,
//   gameID int NOT NULL,
//   image1 varchar(255),
//   FOREIGN KEY (gameID) REFERENCES games(id),
//   PRIMARY KEY (ID)
// );

// CREATE TABLE tags (
//   id int NOT NULL AUTO_INCREMENT,
//   name varchar(50) unique,
//   PRIMARY KEY (id)
// );

// CREATE TABLE gameTags (
//   gameID int NOT NULL,
//   tagID int NOT NULL,
//   FOREIGN KEY (gameID) REFERENCES games(id),
//   FOREIGN KEY (tagID) REFERENCES tags(id)
// );