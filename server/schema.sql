DROP DATABASE IF EXISTS similarGames;

CREATE DATABASE similarGames;

USE similarGames;

CREATE TABLE games (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL unique,
  price decimal(5, 2),
  sale_percent decimal(2, 2),
  series varchar(50),
  releasedt date,
  reviews int,
  average_review decimal(2, 1),
  PRIMARY KEY (ID)
);





CREATE TABLE media (
  id int NOT NULL AUTO_INCREMENT,
  gameID int NOT NULL,
  image1 varchar(255),
  FOREIGN KEY (gameID) REFERENCES games(id),
  PRIMARY KEY (ID)
);

CREATE TABLE tags (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) unique,
  PRIMARY KEY (id)
);

CREATE TABLE gameTags (
  gameID int NOT NULL,
  tagID int NOT NULL,
  FOREIGN KEY (gameID) REFERENCES games(id),
  FOREIGN KEY (tagID) REFERENCES tags(id)
);



-- INSERT INTO games (name, price, salePercent, developer, release, reviews, averageReview) VALUES ();
-- INSERT INTO media (gameID, image1, image2, image3, image4) VALUES ();
-- INSERT INTO tags (name) VALUES ();





INSERT INTO games (name, price, sale_percent, series, releasedt, reviews, average_review) VALUES ("Bart's Nightmare", 4.75, .10, null, '1992-10-01', 5, 4.6);
SET @last_id_game = LAST_INSERT_ID();
INSERT INTO tags (name) VALUES ("platformer");
SET @last_id_tag = LAST_INSERT_ID();
INSERT INTO gameTags (gameID, tagID) VALUES (@last_id_game, @last_id_tag);
INSERT INTO tags (name) VALUES ("single-player");
SET @last_id_tag = LAST_INSERT_ID();
INSERT INTO gameTags (gameID, tagID) VALUES (@last_id_game, @last_id_tag);


-- mysql -u root < server/schema.sql