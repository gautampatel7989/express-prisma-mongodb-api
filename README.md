# Ecommerce Backend API

Production-ready Ecommerce Backend API built using Node.js, Express.js, Prisma ORM, MongoDB, JWT Authentication, RBAC, and Docker.

---

# Tech Stack

- Node.js
- Express.js
- Prisma ORM
- MongoDB
- JWT Authentication
- RBAC Authorization
- Zod Validation
- Docker
- Docker Compose

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
├── prisma/
│
├── Docker/
│   └── Dockerfile
│
├── docker-compose.yml
├── .dockerignore
├── .env
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

# Environment Variables

Create `.env` file in root directory.

```env
PORT=5000

DATABASE_URL="mongodb://mongo:27017/ecommerce?replicaSet=rs0"

JWT_SECRET="your_secret_key"
```

---

# Docker Setup

## Prerequisites

- Docker
- Docker Compose

---

# Run Project with Docker

## Build & Start Containers

```bash
docker compose up --build
```

---

# Run in Background

```bash
docker compose up -d
```

---

# Stop Containers

```bash
docker compose down
```

---

# Remove Containers + Volumes

```bash
docker compose down -v
```

---

# MongoDB Replica Set Setup

Prisma transactions require MongoDB Replica Set.

Run the following command after containers start:

```bash
docker exec -it ecommerce-mongo mongosh
```

Then initialize replica set:

```js
rs.initiate();
```

Verify replica set status:

```js
rs.status();
```

You should see:

```text
PRIMARY
```

---

# Prisma Commands

## Generate Prisma Client

```bash
docker compose exec api npx prisma generate
```

---

## Push Database Schema

```bash
docker compose exec api npx prisma db push
```

---

## Open Prisma Studio

```bash
docker compose exec api npx prisma studio
```

---

# Run Without Docker

## Install Dependencies

```bash
npm install
```

---

# Generate Prisma Client

```bash
npx prisma generate
```

---

# Push Database Schema

```bash
npx prisma db push
```

---

# Start Development Server

```bash
npm run dev
```

---

# API Base URL

```text
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

```text
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
- Dockerized Environment
- MongoDB Replica Set Support

---

# Future Improvements

- Refresh Tokens
- Redis Caching
- Swagger Documentation
- AWS S3 Uploads
- Unit Testing
- CI/CD Pipeline
- Kubernetes
- Microservices Architecture

---

# Author

Gautam Patel

---

# License

MIT
