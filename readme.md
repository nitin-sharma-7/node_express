## User Management API (Express.js)

A simple RESTful API built with Node.js and Express.js using MVC architecture. This project manages api/user data with in-memory storage, includes validation middleware, and centralized error handling.

## Features

Get all api/users

Get a api/user by ID

Create a new api/user with validation

Update existing api/user

Delete a api/user

Centralized error handling middleware

## Technologies Used

Node.js

nodemon

Express.js

MVC architecture

## Folder Structure

.
├── controllers/
│ └── userController.js
├── data/
│ └── usersData.js
├── middleware/
│ ├── errorHandler.js
│ └── validateUser.js
├── routes/
│ └── userRoutes.js
├── index.js

## Installation

git clone https://github.com/your-username/your-repo.git
cd your-repo
npm install

Running the Server

node index.js

Server runs at: http://localhost:2000

## API Endpoints

GET /api/users

Returns all users

GET /api/users/:id

Returns a single api/user by ID

Returns 404 if not found

POST /api/user

Adds a new user

Required fields: firstName, lastName, hobby

Returns 400 if any field is missing

PUT /api/user/:id

Updates an existing user by ID

Returns 404 if user not found

DELETE /api/user/:id

Deletes a user by ID

Returns 404 if api/user not found

Example Request Body for POST and PUT

{
"firstName": "John",
"lastName": "Doe",
"hobby": "Gaming"
}

## License

MIT License © 2025 Nitin_Sharma
