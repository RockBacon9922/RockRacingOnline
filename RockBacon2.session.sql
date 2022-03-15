-- @BLOCK
--@BLOCK
CREATE TABLE mk2Users(
    id INT primary Key AUTO_INCREMENT UNIQUE,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    bio TEXT,
    country VARCHAR(2)
);
--@BLOCK
INSERT INTO mk2users (username, password, email)
VALUES("unae8", "passwd6", "@r4.com");
--@BLOCK
SELECT email,
    id
FROM mk2users
ORDER BY email ASC;
--@block
CREATE INDEX emailindex ON mk2users(email);
--@BLOCK
create TABLE Rooms(id INT AUTO_INCREMENT, street VARCHAR(6), owner);
--@BLOCK
ALTER TABLE Users
MODIFY COLUMN Password VARCHAR(255);
--@BLOCK
ALTER TABLE users
    RENAME COLUMN UUsername TO Username;
--@block
INSERT INTO users (Username, Password)
VALUES ('user6', 'user6password');
--@block
UPDATE users
SET password = "user4password"
WHERE username = "user4";
--@BLOCK
SELECT password
FROM users
WHERE username = "user2";