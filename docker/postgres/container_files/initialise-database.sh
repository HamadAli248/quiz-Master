
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
      permissions VARCHAR (355) UNIQUE NOT NULL
    );
    CREATE TABLE quizes (
      quizname VARCHAR (50) UNIQUE NOT NULL,
      quizinfo VARCHAR (50) UNIQUE NOT NULL
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
    CREATE TABLE quiz3 (
      id serial PRIMARY KEY,
      question VARCHAR (1000) UNIQUE NOT NULL,
      correctAnswer VARCHAR (1000) UNIQUE NOT NULL,
      incorrectAnswer1 VARCHAR (1000) UNIQUE NOT NULL,
      incorrectAnswer2 VARCHAR (1000) UNIQUE NOT NULL,
      incorrectAnswer3 VARCHAR (1000) UNIQUE NOT NULL,
      incorrectAnswer4 VARCHAR (1000) UNIQUE NOT NULL
    );
    CREATE TABLE quiz2 (
      id serial PRIMARY KEY,
      question VARCHAR (1000) UNIQUE NOT NULL,
      correctAnswer VARCHAR (1000) UNIQUE NOT NULL,
      incorrectAnswer1 VARCHAR (1000) UNIQUE NOT NULL,
      incorrectAnswer2 VARCHAR (1000) UNIQUE NOT NULL,
      incorrectAnswer3 VARCHAR (1000) UNIQUE NOT NULL,
      incorrectAnswer4 VARCHAR (1000) UNIQUE NOT NULL
    );
    CREATE TABLE quiz1 (
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
    insert into users (id, username, password,permissions ) values ('1', 'hamad.ali', 'test', 'Edit');
    insert into quiz2 (id,question, correctanswer, incorrectanswer1, incorrectanswer2,incorrectanswer3,incorrectanswer4 )values (‘1’, ‘In which part of your body would you find the cruciate ligament?’, ‘Knee’, ‘Arm’,‘Neck’,‘Head’,‘Other’);
    insert into quiz2 (id,question, correctanswer, incorrectanswer1, incorrectanswer2,incorrectanswer3,incorrectanswer4 )values (‘2’, ‘What is the name of the main antagonist in the Shakespear play Othello?’, ‘Iago’, ‘Jeph’,‘Mark’,‘Tim’,‘Kay’);
    insert into quiz2 (id,question, correctanswer, incorrectanswer1, incorrectanswer2,incorrectanswer3,incorrectanswer4 )values (‘3’, ‘What element is denoted by the chemical symbol Sn in the periodic table?’, ‘Tin’, ‘Silver’,‘Gold’,‘Copper’,‘aluminium’);
    insert into quiz2 (id,question, correctanswer, incorrectanswer1, incorrectanswer2,incorrectanswer3,incorrectanswer4 )values (‘4’, ‘What is the name of the 1976 film about the Watergate scandal, starring Robert Redford and Dustin Hoffman?’, ‘All the President’s Men’, ‘Some Thing Else’,‘Goals’,‘The Great Escape’,‘Go’);
    insert into quiz2 (id,question, correctanswer, incorrectanswer1, incorrectanswer2,incorrectanswer3,incorrectanswer4 )values (‘5’, ‘How many of Henry VIII’s wives were called Catherine?’, ‘3’, ‘4’,‘5’,‘6’,‘8’);
    insert into quiz2 (id,question, correctanswer, incorrectanswer1, incorrectanswer2,incorrectanswer3,incorrectanswer4 )values (‘6’, ‘What was the most popular girls name in the UK in 2019?’, ‘Olivia’, ‘Jen’,‘Sophia’,‘Izzy’,‘Mia’);
    insert into quiz2 (id,question, correctanswer, incorrectanswer1, incorrectanswer2,incorrectanswer3,incorrectanswer4 )values (‘7’, ‘Which comedian was the second permanent host of Never Mind the Buzzcocks after Mark Lamarr?’, ‘Simon Amstell’, ‘Nick G’,‘Raghav’,‘John’,‘Jony’);
    insert into quiz2 (id,question, correctanswer, incorrectanswer1, incorrectanswer2,incorrectanswer3,incorrectanswer4 )values (‘8’, ‘Which popular video game franchise has released games with the subtitles World At War and Black Ops?’, ‘Call of Duty’, ‘Rio’,‘Fifa’,‘None’,‘Mario’);
    insert into quiz2 (id,question, correctanswer, incorrectanswer1, incorrectanswer2,incorrectanswer3,incorrectanswer4 )values (‘9’, ‘In what US State is the city Nashville?’, ‘Tennessee’, ‘other’,‘NYC’,‘LA’,‘Texas’);
    insert into quiz2 (id,question, correctanswer, incorrectanswer1, incorrectanswer2,incorrectanswer3,incorrectanswer4 )values (‘10’, ‘Which rock band was founded by Trent Reznor in 1988?’, ‘Nine Inch Nails’, ‘Inch Nails’,‘Ten Inch Nails’,‘Six Inch Nails’,‘Two Inch Nails’);
    insert into quiz1 (id,question, correctanswer, incorrectanswer1, incorrectanswer2,incorrectanswer3,incorrectanswer4 )values (‘1’, ‘In which part of your body would you find the cruciate ligament?’, ‘Knee’, ‘Arm’,‘Neck’,‘Head’,‘Other’);
    insert into quiz1 (id,question, correctanswer, incorrectanswer1, incorrectanswer2,incorrectanswer3,incorrectanswer4 )values (‘2’, ‘What is the name of the main antagonist in the Shakespear play Othello?’, ‘Iago’, ‘Jeph’,‘Mark’,‘Tim’,‘Kay’);
    insert into quiz1 (id,question, correctanswer, incorrectanswer1, incorrectanswer2,incorrectanswer3,incorrectanswer4 )values (‘3’, ‘What element is denoted by the chemical symbol Sn in the periodic table?’, ‘Tin’, ‘Silver’,‘Gold’,‘Copper’,‘aluminium’);
    insert into quiz1 (id,question, correctanswer, incorrectanswer1, incorrectanswer2,incorrectanswer3,incorrectanswer4 )values (‘4’, ‘What is the name of the 1976 film about the Watergate scandal, starring Robert Redford and Dustin Hoffman?’, ‘All the President’s Men’, ‘Some Thing Else’,‘Goals’,‘The Great Escape’,‘Go’);
    insert into quiz1 (id,question, correctanswer, incorrectanswer1, incorrectanswer2,incorrectanswer3,incorrectanswer4 )values (‘5’, ‘How many of Henry VIII’s wives were called Catherine?’, ‘3’, ‘4’,‘5’,‘6’,‘8’);
    insert into quiz1 (id,question, correctanswer, incorrectanswer1, incorrectanswer2,incorrectanswer3,incorrectanswer4 )values (‘6’, ‘What was the most popular girls name in the UK in 2019?’, ‘Olivia’, ‘Jen’,‘Sophia’,‘Izzy’,‘Mia’);
    insert into quiz1 (id,question, correctanswer, incorrectanswer1, incorrectanswer2,incorrectanswer3,incorrectanswer4 )values (‘7’, ‘Which comedian was the second permanent host of Never Mind the Buzzcocks after Mark Lamarr?’, ‘Simon Amstell’, ‘Nick G’,‘Raghav’,‘John’,‘Jony’);
    insert into quiz1 (id,question, correctanswer, incorrectanswer1, incorrectanswer2,incorrectanswer3,incorrectanswer4 )values (‘8’, ‘Which popular video game franchise has released games with the subtitles World At War and Black Ops?’, ‘Call of Duty’, ‘Rio’,‘Fifa’,‘None’,‘Mario’);
    insert into quiz1 (id,question, correctanswer, incorrectanswer1, incorrectanswer2,incorrectanswer3,incorrectanswer4 )values (‘9’, ‘In what US State is the city Nashville?’, ‘Tennessee’, ‘other’,‘NYC’,‘LA’,‘Texas’);
    insert into quiz1 (id,question, correctanswer, incorrectanswer1, incorrectanswer2,incorrectanswer3,incorrectanswer4 )values (‘10’, ‘Which rock band was founded by Trent Reznor in 1988?’, ‘Nine Inch Nails’, ‘Inch Nails’,‘Ten Inch Nails’,‘Six Inch Nails’,‘Two Inch Nails’);
    insert into quiz3 (id,question, correctanswer, incorrectanswer1, incorrectanswer2,incorrectanswer3,incorrectanswer4 )values (‘1’, ‘In which part of your body would you find the cruciate ligament?’, ‘Knee’, ‘Arm’,‘Neck’,‘Head’,‘Other’);
    insert into quiz3 (id,question, correctanswer, incorrectanswer1, incorrectanswer2,incorrectanswer3,incorrectanswer4 )values (‘2’, ‘What is the name of the main antagonist in the Shakespear play Othello?’, ‘Iago’, ‘Jeph’,‘Mark’,‘Tim’,‘Kay’);
    insert into quiz3 (id,question, correctanswer, incorrectanswer1, incorrectanswer2,incorrectanswer3,incorrectanswer4 )values (‘3’, ‘What element is denoted by the chemical symbol Sn in the periodic table?’, ‘Tin’, ‘Silver’,‘Gold’,‘Copper’,‘aluminium’);
    insert into quiz3 (id,question, correctanswer, incorrectanswer1, incorrectanswer2,incorrectanswer3,incorrectanswer4 )values (‘4’, ‘What is the name of the 1976 film about the Watergate scandal, starring Robert Redford and Dustin Hoffman?’, ‘All the President’s Men’, ‘Some Thing Else’,‘Goals’,‘The Great Escape’,‘Go’);
    insert into quiz3 (id,question, correctanswer, incorrectanswer1, incorrectanswer2,incorrectanswer3,incorrectanswer4 )values (‘5’, ‘How many of Henry VIII’s wives were called Catherine?’, ‘3’, ‘4’,‘5’,‘6’,‘8’);
    insert into quiz3 (id,question, correctanswer, incorrectanswer1, incorrectanswer2,incorrectanswer3,incorrectanswer4 )values (‘6’, ‘What was the most popular girls name in the UK in 2019?’, ‘Olivia’, ‘Jen’,‘Sophia’,‘Izzy’,‘Mia’);
    insert into quiz3 (id,question, correctanswer, incorrectanswer1, incorrectanswer2,incorrectanswer3,incorrectanswer4 )values (‘7’, ‘Which comedian was the second permanent host of Never Mind the Buzzcocks after Mark Lamarr?’, ‘Simon Amstell’, ‘Nick G’,‘Raghav’,‘John’,‘Jony’);
    insert into quiz3 (id,question, correctanswer, incorrectanswer1, incorrectanswer2,incorrectanswer3,incorrectanswer4 )values (‘8’, ‘Which popular video game franchise has released games with the subtitles World At War and Black Ops?’, ‘Call of Duty’, ‘Rio’,‘Fifa’,‘None’,‘Mario’);
    insert into quiz3 (id,question, correctanswer, incorrectanswer1, incorrectanswer2,incorrectanswer3,incorrectanswer4 )values (‘9’, ‘In what US State is the city Nashville?’, ‘Tennessee’, ‘other’,‘NYC’,‘LA’,‘Texas’);
    insert into quiz3 (id,question, correctanswer, incorrectanswer1, incorrectanswer2,incorrectanswer3,incorrectanswer4 )values (‘10’, ‘Which rock band was founded by Trent Reznor in 1988?’, ‘Nine Inch Nails’, ‘Inch Nails’,‘Ten Inch Nails’,‘Six Inch Nails’,‘Two Inch Nails’);

EOSQL