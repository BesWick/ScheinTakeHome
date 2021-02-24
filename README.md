# Title: Henry Schein Take Home

# Author: John Dobrota

## API Overview

`GET` /api/person

> Return all of the person objects in the running app

`GET` /api/person/:socialSecurityNumber

> Return the single person in the running app

`POST` /api/person

> Create a new person in the running app and return that person as JSON in the POST result

`PUT` /person/:socialSecurityNumber

> Update an existing person

`DELETE` /api/person/:socialSecurityNumber

> Delete an existing person with SSN

## Nain File Structure

.
├── server.js # main file that starts the server
├── person
│ ├── router.js # handles routes for /api/person
│ ├── validator.js # validates user's data
│ └── person-model.js # operations on the people array, here you would make db calls
└── ...

## Installation

```bash
# Install NPM Packages
$ npm install

#Start the Application
$ npm start

# Open 'http://localhost:3003/' in a browser

```

## Test

I used supertest and tape to test the API and indivdual functions, inside two files: router.tape.js + validator.tape.js.
To run any test, for example, router.tape.js

```bash
node ./server/person/router.tape.js
```
