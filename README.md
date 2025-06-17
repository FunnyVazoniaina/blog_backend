# 📰 FunTech Blog – MERN Stack Project

Welcome to **FunTech**, your personal tech blog built with the **MERN stack (MongoDB, Express, React, Node.js)**. This platform allows you to publish tech-related articles, and lets readers explore, like, comment, and share them — all without mandatory registration, except for commenting.

---

## 📌 Table of Contents

- [📖 About the Project](#-about-the-project)
- [⚙️ Tech Stack](#️-tech-stack)
- [🚀 Features](#-features)
- [📂 Project Structure](#-project-structure)
- [🔧 Installation & Setup](#-installation--setup)
- [🧪 API Overview](#-api-overview)
- [👤 Authentication](#-authentication)
- [📸 Screenshots](#-screenshots)
- [🤝 Contributing](#-contributing)
- [🪪 License](#-license)

---

## 📖 About the Project

**FunTech** is a full-stack personal blogging platform where:
- You, the blog owner, can write and manage posts from a private dashboard.
- Visitors can view posts, like them, share them on social networks.
- Logged-in users (via Google/Clerk) can leave comments.

---

## ⚙️ Tech Stack


### Backend:
- **Node.js** & **Express.js**
- **MongoDB** with **Mongoose**
- **Layered Architecture** (Controller, Service, Model, Routes, Middlewares)
- **JWT** *(for secured endpoints if needed)*
- **CORS / Helmet / Morgan**

---

## 🚀 Features

| Area        | Feature                                         |
|-------------|--------------------------------------------------|
| Blogging    | Create, edit, delete, and publish posts          |
| SEO         | Slug generation for each post                    |
| Tags        | Add and manage post tags                         |
| Comments    | Authenticated users can comment                  |
| Likes       | Anyone can like posts (1 per user per post)      |
| Social      | Share posts to social platforms                  |
| Auth        | Clerk or Google OAuth for login (only for commenting) |
| Admin Panel | Secure dashboard for writing posts (back-office) |

---

## 📂 Project Structure

```
funtech/
├── backend/
│   ├── controllers/
│   ├── services/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── utils/
│   └── server.js
│   └── README.md


```

---

## 🔧 Installation & Setup

### 1. Clone the repo

```bash
git clone https://github.com/your-username/funtech.git
cd funtech
```

### 2. Backend Setup

```bash
cd backend
npm install
touch .env
```

`.env` example:

```
MONGODB_URI=your_mongo_uri
PORT=5000
JWT_SECRET=your_secret
```

```bash
npm run dev
```

---

## 🧪 API Overview

| Method | Endpoint              | Description                 |
|--------|------------------------|-----------------------------|
| GET    | `/api/posts`          | Get all published posts     |
| GET    | `/api/posts/:slug`    | Get post by slug            |
| POST   | `/api/posts`          | Create a new post (admin)   |
| PATCH  | `/api/posts/:id`      | Edit a post (admin)         |
| DELETE | `/api/posts/:id`      | Delete a post (admin)       |
| POST   | `/api/comments`       | Add a comment (auth)        |
| GET    | `/api/comments/:post` | Get comments for a post     |
| POST   | `/api/likes/:postId`  | Like or unlike a post       |

> Full API docs coming soon...

---

## 👤 Authentication

- Handled via [**Clerk.dev**](https://clerk.dev) or Google OAuth.
- Public can view and like posts.
- Auth is required only to post comments.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

To contribute:
1. Fork the project
2. Create your feature branch (`git checkout -b feature/feature-name`)
3. Commit your changes (`git commit -m 'feat: added new feature'`)
4. Push to the branch (`git push origin feature/feature-name`)
5. Open a Pull Request

---

## 🪪 License

Distributed under the MIT License.  
See [`LICENSE`](License.md) for more information.

---

## 📬 Contact

Built by [Your Name](https://github.com/your-username) ✨  
Project idea by yourself – happy coding!