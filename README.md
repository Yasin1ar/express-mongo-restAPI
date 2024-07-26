# Product Management API

## Overview

This project is a simple product management API built using Node.js, Express, and MongoDB. It allows users to perform CRUD (Create, Read, Update, Delete) operations on products. The API is secured using the Helmet middleware and follows best practices for error handling and database connection management.

## Features

- **CRUD Operations**: Create, read, update, and delete products.
- **Security**: Enhanced security using Helmet middleware.
- **Error Handling**: Comprehensive error handling with appropriate status codes and messages.
- **Database Connection**: Connects to a MongoDB database and handles connection errors gracefully.

## Project Structure

- **index.js**: Initializes the Express server, sets up middleware, connects to MongoDB, and starts the server.
- **route/product.router.js**: Defines the routes for product-related operations.
- **controller/product.controller.js**: Contains the logic for handling product-related operations.
- **models/products.model.js**: Defines the MongoDB schema for products.

## Getting Started

### Prerequisites

- Node.js
- ExpressJs
- MongoDB driver for node.js
- MongoDB Atlas connection string
- npm (Node Package Manager)

You could sign-up for MonogoDB Atlas and use the free service!
https://www.mongodb.com/cloud/atlas/register

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Yasin1ar/crud-app-mongodb.git
   cd crud-app-mongodb
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:
   ```plaintext
   PORT=<your-port>
   MONGO_URI=<your-mongodb-uri>
   ```

### Running the Server

Start the server by running:

```bash
npm start
```
or
```bash
npm run serve
```
or for running in developemnet:
```bash
npm run dev
```
Navigate to http://localhost:PORT to see the server running.

### API Endpoints

product Routes

- GET /api/products: Retrieve all products.
- GET /api/products/:id: Retrieve a specific product by ID.
- POST /api/products: Create a new product.
- PUT /api/products/:id: Update a specific product by ID.
- PUT /api/products: Update multiple products.
- DELETE /api/products/:id: Delete a specific product by ID.
- DELETE /api/products: Delete multiple products (disabled by default for safety).

### Middleware

- express.json(): Parses incoming requests with JSON payloads.
- express.urlencoded(): Parses incoming requests with URL-encoded payloads.
- helmet(): Secures the app by setting various HTTP headers.

### Error Handling

If an error occurs during any operation, the server will log the error and respond with a 500 status code and an appropriate error message.

### Database Connection

The server connects to a MongoDB database using the URI provided in the .env file. Upon successful connection, the server starts and listens on the specified port. If the connection fails, an error message is logged.

### contribute to this 

I would gladly take feedback and I would really appreciate any contribute to this project guys,
thank you and have fun mongos-bros!
(mongos-bros?! such a lame Ending for such a professional introduction I know, well, what can I say, I am no Perfectionist man!)
