CREATE DATABASE pokedex_db;
\c pokedex_db

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name TEXT, 
  email TEXT,
  password_digest TEXT,
  favourite1 TEXT,
  favourite2 TEXT,
  favourite3 TEXT,
  favourite4 TEXT,
  favourite5 TEXT,
  favourite6 TEXT,
  avatar TEXT,
  trainerID TEXT  
);

CREATE TABLE favourites(
  id SERIAL PRIMARY KEY,
  email TEXT,
  favourite TEXT
);

