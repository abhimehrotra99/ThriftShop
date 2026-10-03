# 🛍️ ThriftShop

> A full-stack e-commerce platform for discovering, shopping, and managing products — built with React and Node.js.

### ✨ Highlights

* 🛒 Product browsing & shopping cart
* 🔐 User authentication & protected routes
* 📦 Product & order management
* 💳 PayPal payment integration
* 🖼️ Product image uploads
* ⚡ RESTful backend APIs
* 📱 Responsive React UI

### 🧰 Tech Stack

**Frontend**
React · Redux · React Router · Bootstrap · Axios

**Backend**
Node.js · Express.js · MongoDB · Mongoose · JWT

**Other**
PayPal · Multer · Bcrypt · REST APIs

### 🏗️ Architecture

```text
┌──────────────────┐
│   React Frontend │
│ Redux · Axios    │
└────────┬─────────┘
         │ REST API
         ▼
┌──────────────────┐
│  Express Backend │
│ Node.js · JWT    │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│     MongoDB      │
│    Mongoose      │
└──────────────────┘
```

### 🚀 Run Locally

```bash
git clone https://github.com/abhimehrotra99/ThriftShop.git
cd ThriftShop/ecomm-backend
npm install
npm run dev
```

The project is configured to run the React client alongside the backend during development.

---

Built with ☕ and JavaScript by **Abhinav**
