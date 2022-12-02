# ABB interview test!

This test consists of creating a backend and a frontend for data visualization.

### Frontend
The frontend is built with React using the functional components.

**Stack**

 - React
 - Apollo GraphQL client
 - React Router Dom
 - Typescript
 - Styled components
 - Testing library / Jest

### Backend
The service is built on Express with GraphQL. The service allows us to perform queries and obtain data in real time. The service returns random data.

**Stack**

 - Express Js
 - CORS
 - GraphQL
 - Apollo Server
 - LRUCache
 - Jest

### Running instructions
Make sure node js and npm are installed in the running environment.

##### Backend
Open your command line, go into the project directory and run the following

    cd backdend
    npm install
    npm start

Open your browser to access the GraphQL playground [http://localhost:4900/graphql](http://localhost:4900/graphql)
To run the tests, execute

    npm run test

##### Frontend 
Open your command line, go into the project directory and run the following

    cd front
    npm install
    npm start

Open your browser and go to [http://localhost:3000](http://localhost:3000)
To run the tests, execute

    npm run test


### Next steps

 1. Backend authentication with jwt
 2. Improve backend subscriptions
 3. Add frontend authorization
 4. Improve directory structure / Atomic design or grouped by features
 5. Improve tests
 6. Use turborepo
