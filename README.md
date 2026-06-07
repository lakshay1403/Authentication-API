# Authentication API

A RESTful Authentication API built with Node.js, Express.js, MongoDB, and Mongoose following the MVC architecture.

## Features

- User Registration
- User Login
- JWT Authentication
- Password Hashing (bcrypt)
- Protected Routes
- Error Handling

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs

## Installation

```bash
git clone <repository-url>
cd authentication-api
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run the server:

```bash
npm run dev
```

## Project Structure

```bash
├── controllers/
├── middleware/
├── models/
├── routes/
├── config/
├── .env
├── app.js
└── package.json
```

## API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/users/register | Register User |
| POST | /api/users/login | Login User |
| GET | /api/users/profile | Get User Profile |

## Author

Lakshay Goyal