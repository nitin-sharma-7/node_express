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

git clone https://github.com/nitin-sharma-7/node_express.git
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

## Screenshots

![Screenshot (192)](https://github.com/user-attachments/assets/7e80faa3-cd09-4e05-844e-be3f99c7560d)
![Screenshot (193)](https://github.com/user-attachments/assets/c6435923-476f-4f08-8fa6-c5689d41e8a4)
![Screenshot (194)](https://github.com/user-attachments/assets/f5c68914-72f0-4f34-9fa3-1d76d28729cc)
![Screenshot (195)](https://github.com/user-attachments/assets/6f4f886a-d757-4564-b874-bc17570d1b55)
![Screenshot (196)](https://github.com/user-attachments/assets/c11c87f6-b23b-4df9-b074-aacb5bfb9282)
![Screenshot (197)](https://github.com/user-attachments/assets/c9183219-0ae1-474a-8ec9-59bfdda9f74b)

## License

MIT License © 2025 Nitin_Sharma
