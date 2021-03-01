
#!/bin/bash
set -e
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE USER quizmasterapp WITH ENCRYPTED PASSWORD 'password';
    CREATE DATABASE "quizmasterapp";
    GRANT ALL ON DATABASE "quizmasterapp" TO "quizmasterapp";
EOSQL
psql -v ON_ERROR_STOP=1 --username quizmasterapp --dbname quizmasterapp <<-EOSQL
    CREATE TABLE users (
      id serial PRIMARY KEY,
      username VARCHAR (50) UNIQUE NOT NULL,
      password VARCHAR (100) NOT NULL,
      email VARCHAR (355) UNIQUE NOT NULL,
      permissions VARCHAR (355) UNIQUE NOT NULL
    );
    CREATE TABLE questions (
      id serial PRIMARY KEY,
      question VARCHAR (50) UNIQUE NOT NULL,
      correctAnswer VARCHAR (50) UNIQUE NOT NULL,
      incorrectAnswer1 VARCHAR (50) UNIQUE NOT NULL,
      incorrectAnswer2 VARCHAR (50) UNIQUE NOT NULL,
      incorrectAnswer3 VARCHAR (50) UNIQUE NOT NULL,
      incorrectAnswer4 VARCHAR (50) UNIQUE NOT NULL
    );
EOSQL

psql -v ON_ERROR_STOP=1 --username quizmasterapp --dbname quizmasterapp <<-EOSQL
    insert into users (id, username, password, email,permissions )
    values ('1', 'hamad.ali', 'test', 'hamad.ali@test.com', 'admin');
EOSQL