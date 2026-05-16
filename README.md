# Ecommerce Backend API

Production-ready Ecommerce Backend API built using Node.js, Express.js, Prisma ORM, and MongoDB.

---

## Tech Stack

- Node.js
- Express.js
- Prisma ORM
- MongoDB
- JWT Authentication
- RBAC Authorization
- Zod Validation
- REST APIs

---

# Features

## Authentication & Authorization

- User Registration
- User Login
- JWT Authentication
- Role Based Access Control (RBAC)
- Protected Routes
- Admin Only Routes

---

## Users Module

- Get Current User
- Admin Access Control

---

## Products Module

- Create Product
- Get All Products
- Get Single Product
- Update Product
- Delete Product
- Pagination
- Search
- Filtering
- Sorting

---

## Orders Module

- Create Order
- User Orders
- Admin Orders
- Order Status Update
- Stock Management
- Prisma Transactions

---

# Project Structure

```bash
src/
│
├── config/
├── controllers/
├── middlewares/
├── modules/
├── repositories/
├── routes/
├── services/
├── utils/
├── validations/
│
└── server.js
```

---

# Architecture

```text
Route
 ↓
Controller
 ↓
Service
 ↓
Repository
 ↓
Prisma
 ↓
MongoDB
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/gautampatel7989/express-prisma-mongodb-api.git
```

---

## Install Dependencies

```bash
npm install
```

---

# Environment Variables

Create `.env` file in root directory.

```env
PORT=5000

DATABASE_URL="mongodb://localhost:27017/ecommerce"

JWT_SECRET="your_secret_key"
```

---

# Prisma Setup

```bash
npx prisma generate
```

```bash
npx prisma db push
```

---

# Run Development Server

```bash
npm run dev
```

---

# API Base URL

```txt
http://localhost:5000/api
```

---

# API Endpoints

## Auth APIs

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | /api/auth/register | Register User |
| POST   | /api/auth/login    | Login User    |

---

## User APIs

| Method | Endpoint         | Description  |
| ------ | ---------------- | ------------ |
| GET    | /api/users/me    | Current User |
| GET    | /api/users/admin | Admin Route  |

---

## Product APIs

| Method | Endpoint          | Description        |
| ------ | ----------------- | ------------------ |
| GET    | /api/products     | Get Products       |
| GET    | /api/products/:id | Get Single Product |
| POST   | /api/products     | Create Product     |
| PUT    | /api/products/:id | Update Product     |
| DELETE | /api/products/:id | Delete Product     |

---

## Order APIs

| Method | Endpoint               | Description         |
| ------ | ---------------------- | ------------------- |
| POST   | /api/orders            | Create Order        |
| GET    | /api/orders/my-orders  | My Orders           |
| GET    | /api/orders            | All Orders (Admin)  |
| PUT    | /api/orders/:id/status | Update Order Status |

---

# Authentication

Protected APIs require Bearer Token.

Example:

```txt
Authorization: Bearer YOUR_TOKEN
```

---

# Security Features

- Password Hashing using bcryptjs
- JWT Authentication
- Role Based Authorization
- Global Error Handling
- Request Validation
- Rate Limiting
- Secure Middleware

---

# Future Improvements

- Refresh Tokens
- Redis Caching
- Docker Support
- Swagger Documentation
- AWS S3 Uploads
- Unit Testing
- CI/CD Pipeline
- Microservices Architecture

---

# Author

Gautam Patel

---

# License

MIT
