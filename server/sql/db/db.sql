CREATE DATABASE chatapp;

--\c chatapp

CREATE TABLE message(
    message_id SERIAL PRIMARY KEY,
    content VARCHAR(255),
    authorId INT,
    timeStamp TIMESTAMP,
);

-- INSERT INTO message (content, authorId) VALUES ('hello world',1); 