DROP TABLE IF EXISTS notes;

CREATE TABLE notes (
  id SERIAL PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  content TEXT
);

INSERT INTO notes (title) VALUES ('Buy Milk'), ('Finish homework')