# Smart Brain API

Welcome to the Smart Brain API! This API is designed to provide intelligent functionalities for the Smart Brain application, enabling features like image recognition and user authentication.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Features

- User registration and login
- Image recognition using external APIs
- Secure user sessions with JWT authentication
- Easy integration with the Smart Brain frontend

## Technologies

- Node.js
- Express.js
- PostgreSQL (or any other database you prefer)
- JSON Web Tokens (JWT) for authentication
- External APIs for image processing (e.g., Clarifai, AWS Rekognition)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/q8bloushi/smart-brain-api.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd smart-brain-api
   ```
3. **Install dependencies:**

   ```bash
   npm install
   ```
4. **Set up environment variables:**
   configurat the following variables in your ```server.js```

   ```bash
		host: 'YOUR_HOST_NAME',
		user: 'YOUR_USERNAME',
		password: 'DB_PASSWORD',
		database: 'DB_NAME',
		port: 'YOUR_PORT'
   ```
5. **Start the server:**
   ```bash
   npm start
   ```
## Usage
Once the server is running, you can access the API endpoints listed below. Remember to include the Authorization header with your JWT token for any protected routes

## API Endpoints
### User Registration
- POST ```/register```
  - Request body: ```{ "email": "user@example.com", "password": "yourpassword", "name": "name"}```

### User Login
- POST ```/signin```
  - Request body: ```{ "email": "user@example.com", "password": "yourpassword" }```

#### example of POST /signin:
- using postman:
![](https://ibb.co/1GL1pt6)
