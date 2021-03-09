# Quiz Manager Application

## Project structure

This repository is structured to hold the frontend application - React.js with npm, backend application using Kotlin and PostgreSQL database.

All commands should be ran from the project root.

- `QuizMaster/`
  - `quiz-master-frontend/` – A react application built with functional components and pages.
  - `quizmasterbackend` – A kotlin application to connect to PostgreSQL database and handle api requests from UI.
  - `docker/postgres` – A directory to hold `.sh` files to build and host a PostgreSQL database in a docker container.

### First time only

- #### Frontend Application

  1. `cd quiz-master-frontend`
  2. [Install npm](https://docs.npmjs.com/) and run `npm install`.

- #### BackEnd Application

  1. `cd quizmasterbackend`
  2. [Install/update gradle dependencies](https://docs.gradle.org/current/userguide/declaring_dependencies.html). If using IntelliJ IDEA this should build it self or give a promt.
  3. You may need to install [kotlin](https://kotlinlang.org/docs/getting-started.html)

- #### Database

  1. `cd docker/postgres`
  2. run `docker run docker-run.sh`. This should build you database
  3. Install [PgAdmin4](https://www.pgadmin.org/download/) and connect the database to port 5432 with password 'password'.

### Build & run

- #### Frontend-Application

  1. `cd quiz-master-frontend`
  2. run `npm start`. This Should start the local development server on [http://localhost:3000](http://localhost:3000)

- #### BackEnd-Application

  1. `cd quizmasterbackend`
  2. If using IntelliJ IDEA using the the play button start the application. or run `kotlinc src/main/kotlin/com/application/quizmasterbackendapplication/QuizMasterBackendApplication.kt`

- #### PostgreSQL Database

  1. run `docker ps` check if you container is running, if it is you can login to pgadmin4
  2. if not run `docker ps -a` adn find the container id for your docker container and run `docker start containerId`
  3. to stop your database at any time run `docker stop containerId`

### Testing

1. `npm run cypress` Launches the test runner in the watch mode.

### Building Information

- #### FrontendApplication

  1. To build new pages create a Js file in pages and then in `quiz-master-frontend/src/components/Main.js` link the new file and add it's route. Finally if the page needs to be in Navbar add code to the `quiz-master-frontend/src/components/Navbar/Navbar.js`
  2. Building new components create a file with component name in the components folder, a component may only be for a certain page if so create the file inside it's page folder inside the component/pageName folder.
  3. The application is using [Material-UI](https://material-ui.com/) for some pre-build components

- #### BackEndApplication

  1. To add new users add the json data into `quizmasterbackend/src/main/kotlin/com/application/quizmasterbackendapplication/services/newUserAdditionService.kt` file and uncomment the code in main file and run the application. This will add new users to the database with hashed password using BCrypt.
  2. We have 2 controller files:
     1. For users sign in
     2. All quiz Information
  3. 1 service
     1. To query database for relevant information and return back the information

- #### PostgreSQLDatabase

  1.  To add new tables quiz run the sql in pgAdmin4. Follow the [SQL docs for more infor](https://docs.oracle.com/cd/B19306_01/server.102/b14200/toc.htm)

### Other Information

- On git commit will run `pretty-quick --staged` and format any code in the quiz-master-frontend directory.
