DROP DATABASE IF EXISTS similarGames;

CREATE DATABASE similarGames;

USE similarGames;

CREATE TABLE games (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL unique,
  price decimal(6, 2),
  sale_percent decimal(3, 2),
  series varchar(50),
  releasedt date,
  reviews int,
  average_review decimal(2, 1),
  PRIMARY KEY (ID)
);





CREATE TABLE media (
  id int NOT NULL AUTO_INCREMENT,
  gameID int NOT NULL,
  imageFile varchar(255),
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

DELIMITER //

CREATE PROCEDURE populateRow(
		  IN inGameName varchar(50)
		, IN inGamePrice decimal(6, 2)
		, IN inSale decimal(3, 2)
		, IN inSeries varchar(50)
		, IN inReleaseDate date
		, IN inReviews int
		, IN inRating decimal(2, 1)
		, IN inTag1 varchar(50)
		, IN inTag2 varchar(50)
		, IN inTag3 varchar(50)
		, IN inTag4 varchar(50)
		, IN inTag5 varchar(50)
		, IN inImage1 varchar(255)
		, IN inImage2 varchar(255)
		, IN inImage3 varchar(255)
		, IN inImage4 varchar(255)
)
BEGIN
  DECLARE CONTINUE HANDLER FOR 1062
  BEGIN
    SELECT 'Duplicatekey';
  END;
	INSERT INTO games (name, price, sale_percent, series, releasedt, reviews, average_review)
	VALUES (inGameName, inGamePrice, inSale, inSeries, inReleaseDate, inReviews, inRating);

	SET @last_id_game = LAST_INSERT_ID();
    INSERT INTO tags (name) VALUES (inTag1);
    SELECT id INTO @last_id_tag FROM tags WHERE tags.name = inTag1;
    INSERT INTO gameTags (gameID, tagID) VALUES (@last_id_game, @last_id_tag);
    INSERT INTO tags (name) VALUES (inTag2);
    SELECT id INTO @last_id_tag FROM tags WHERE tags.name = inTag2;
    INSERT INTO gameTags (gameID, tagID) VALUES (@last_id_game, @last_id_tag);
    INSERT INTO tags (name) VALUES (inTag3);
    SELECT id INTO @last_id_tag FROM tags WHERE tags.name = inTag3;
    INSERT INTO gameTags (gameID, tagID) VALUES (@last_id_game, @last_id_tag);
    INSERT INTO tags (name) VALUES (inTag4);
    SELECT id INTO @last_id_tag FROM tags WHERE tags.name = inTag4;
    INSERT INTO gameTags (gameID, tagID) VALUES (@last_id_game, @last_id_tag);
    INSERT INTO tags (name) VALUES (inTag5);
    SELECT id INTO @last_id_tag FROM tags WHERE tags.name = inTag5;
    INSERT INTO gameTags (gameID, tagID) VALUES (@last_id_game, @last_id_tag);

    INSERT INTO media (gameID, imageFile) VALUES (@last_id_game, inImage1);
    INSERT INTO media (gameID, imageFile) VALUES (@last_id_game, inImage2);
    INSERT INTO media (gameID, imageFile) VALUES (@last_id_game, inImage3);
    INSERT INTO media (gameID, imageFile) VALUES (@last_id_game, inImage4);
END //

DELIMITER ;

-- INSERT INTO games (name, price, salePercent, developer, release, reviews, averageReview) VALUES ();
-- INSERT INTO media (gameID, image1, image2, image3, image4) VALUES ();
-- INSERT INTO tags (name) VALUES ();



CALL populateRow('Voom Voom Motorcycle', 95.00, 0.25, 'Ham Adventures', '2020-02-14', 143, 4.5, 'open-source', 'auxiliary', 'solid state', 'open-source', 'wireless', 'https://s3.amazonaws.com/uifaces/faces/twitter/lokesh_coder/128.jpg', 'https://s3.amazonaws.com/uifaces/faces/twitter/dzantievm/128.jpg', 'https://s3.amazonaws.com/uifaces/faces/twitter/victorerixon/128.jpg', 'https://s3.amazonaws.com/uifaces/faces/twitter/YoungCutlass/128.jpg');

-- INSERT INTO games (name, price, sale_percent, series, releasedt, reviews, average_review) VALUES ("Bart's Nightmare", 4.75, .10, null, '1992-10-01', 5, 4.6);
-- SET @last_id_game = LAST_INSERT_ID();
-- INSERT INTO tags (name) VALUES ("platformer");
-- SET @last_id_tag = LAST_INSERT_ID();
-- INSERT INTO gameTags (gameID, tagID) VALUES (@last_id_game, @last_id_tag);
-- INSERT INTO tags (name) VALUES ("single-player");
-- SET @last_id_tag = LAST_INSERT_ID();
-- INSERT INTO gameTags (gameID, tagID) VALUES (@last_id_game, @last_id_tag);


-- mysql -u root < server/schema.sql