# CRUD API with MongoDB & Express (TypeScript)

A simple **CRUD API** built using **Node.js, Express, TypeScript, and MongoDB**. This API allows you to create, read, update, and delete products.

---

## Features

- ✅ **Create, Read, Update, Delete (CRUD) operations**
- ✅ **MongoDB as the database**
- ✅ **Express.js for routing**
- ✅ **Helmet for security**
- ✅ **TypeScript for type safety**
- ✅ **Dotenv for environment configuration**
- ✅ **Docker support for MongoDB**

---

## Installation

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/express-mongo-restAPI.git
cd express-mongo-restAPI
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Configure Environment Variables**
Create a **.env** file in the project root and add:

```env
PORT=3000
MONGO_URI=mongodb://{ROOT_USERNAME}:{ROOT_PASSWORD}@localhost:27017/
```

---

## Running MongoDB with Docker (optional)

If you don’t have MongoDB installed, you can **run MongoDB in a Docker container** using the official **MongoDB image**:

### **1️⃣ Pull MongoDB Image**
```sh
docker pull mongo:6
```

### **2️⃣ Run MongoDB Container**
```sh
docker run --name mongodb -d -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=pass123 --rm mongo:6
```

- `-d`: Run the container in the background  
- `-p 27017:27017`: Expose MongoDB on port **27017**  
- `-e MONGO_INITDB_ROOT_USERNAME=admin`: Set a username  
- `-e MONGO_INITDB_ROOT_PASSWORD=pass123`: Set a password  
- `--rm`: Automatically remove the container when stopped  

### **3️⃣ Connect Your App to MongoDB**
Make sure your `.env` file is updated with:

```env
MONGO_URI=mongodb://admin:pass123@localhost:27017/
```

> If using **MongoDB Compass**, connect using:  
> `mongodb://admin:pass123@localhost:27017/`

---

## Running the Project

### **Development Mode**
```sh
npm run dev
```

### **Production Mode**
```sh
npm run build
npm start
```

---

## API Endpoints

| Method | Endpoint            | Description                   |
|--------|---------------------|-------------------------------|
| **GET**    | `/api/products`         | Get all products             |
| **GET**    | `/api/products/:id`     | Get a single product by ID   |
| **POST**   | `/api/products`         | Create a new product         |
| **PUT**    | `/api/products/:id`     | Update a product by ID       |
| **DELETE** | `/api/products/:id`     | Delete a product by ID       |

---

## Example Requests

### **1️⃣ Create a Product**
```sh
curl -X POST http://localhost:3000/api/products \
     -H "Content-Type: application/json" \
     -d '{
       "name": "Gaming Mouse",
       "price": 49.99,
       "description": "Ergonomic gaming mouse with RGB lighting.",
       "category": "Gaming Accessories",
       "stock": 100
     }'
```

### **2️⃣ Get All Products**
```sh
curl http://localhost:3000/api/products
```

### **3️⃣ Get a Product by ID**
```sh
curl http://localhost:3000/api/products/your-product-id
```

### **4️⃣ Update a Product**
```sh
curl -X PUT http://localhost:3000/api/products/your-product-id \
     -H "Content-Type: application/json" \
     -d '{"price": 59.99, "stock": 90}'
```

### **5️⃣ Delete a Product**
```sh
curl -X DELETE http://localhost:3000/api/products/your-product-id
```

---

## Technologies Used

- **Node.js** - Backend runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ORM
- **TypeScript** - Static typing
- **Docker** - Containerized database
- **Helmet** - Security middleware
- **Dotenv** - Environment variable management

---

## License
This project is **open-source** and available under the **MIT License**.

