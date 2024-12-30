# API_Development

 Backend API Development

This project is a backend application that provides API endpoints for user authentication, project management, and contact form submission. It uses Node.js, Express, and MongoDB to handle backend operations.

 Technologies Used

- Node.js: JavaScript runtime environment for server-side programming.
- Express: Web framework for Node.js.
- MongoDB: NoSQL database for storing data.
- Mongoose: ODM library for MongoDB and Node.js.
- JWT (JSON Web Token): For token-based authentication.
- dotenv: For managing environment variables.

 Features

1. User Authentication:
   - User signup and login system.
   - Token-based authentication (using JWT).

2. Project Management API:
   - Add new projects with fields: title, description, start date, and end date.
   - Fetch all projects with optional filtering by start and end dates.
   - Fetch details of a specific project by its ID.

3. Contact Form Submission:
   - Accept user queries (fields: name, email, message).
   - Store queries in the database.

---

 Setup Instructions

 1. Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [MongoDB](https://www.mongodb.com/) (local instance or cloud-based)


 2. Install Dependencies

Run the following command to install project dependencies:

```bash
npm install
```

 3. Configure Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/Backend_Api
JWT_SECRET=your_jwt_secret_key
```

Replace `your_jwt_secret_key` with a secure random string.

 4. Start the MongoDB Server

Ensure that your MongoDB server is running. If you are using a local instance, start MongoDB using:

```bash
mongod
```

 5. Run the Application

Start the server with:

```bash
npm start
```

The application will run on `http://localhost:5000` (or the port specified in your `.env` file).

---

 API Usage

 1. User Authentication

 Signup
- Endpoint: `POST /api/auth/signup`
- Payload:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```

 Login
- Endpoint: `POST /api/auth/login`
- Payload:
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- Response:
  ```json
  {
    "token": "<JWT Token>"
  }
  ```

 2. Project Management

 Add New Project
- Endpoint: `POST /api/projects`
- Headers:
  - `x-auth-token: <JWT Token>`
- Payload:
  ```json
  {
    "title": "Project Title",
    "description": "Project Description",
    "startDate": "2024-01-01",
    "endDate": "2024-06-30"
  }
  ```

 Fetch All Projects
- Endpoint: `GET /api/projects`
- Optional Query Parameters:
  - `startDate`: Filter projects starting from this date.
  - `endDate`: Filter projects ending before this date.
- Example:
  ```
  /api/projects?startDate=2024-01-01&endDate=2024-06-30
  ```

 Fetch Project by ID
- Endpoint: `GET /api/projects/:id`

 3. Contact Form Submission

 Submit Query
- Endpoint: `POST /api/contact`
- Payload:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "message": "I have a query."
  }
  ```

---

 Running Tests

To test the API using Postman:

1. Import the Postman collection or create requests manually.
2. Use the provided endpoints and payloads.
3. Ensure to include the `x-auth-token` header for protected routes.

