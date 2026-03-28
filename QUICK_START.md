# 🚀 VideoTube Quick Start Guide
Welcome to VideoTube! This guide will walk you through the fastest and easiest way to properly set up the full-stack MERN application locally on your machine.

---

## 🛑 1. Prerequisites
Before you begin, ensure you have the following installed and set up:
- **Node.js**: v18+ (LTS recommended)
- **MongoDB**: A running local server (MongoDB Community) OR a [MongoDB Atlas](https://www.mongodb.com/atlas) cloud account.
- **Cloudinary**: A free [Cloudinary](https://cloudinary.com/) account is required to host image uploads, avatars, and video streams.

---

## ⚙️ 2. Environment Setup

The application strictly requires environment variables for both the backend and frontend to function securely.

### Backend `.env`
Navigate into the `backend/` directory and create a file exactly named `.env`. Copy the following template and replace the placeholder values with your real credentials:

```env
# Server Configuration
PORT=8000
CORS_ORIGIN=http://localhost:5173

# Database Connection
# IMPORTANT: Provide only the cluster/host URL. The actual DB Name (videotube) is read from src/constants.js!
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.0qhqpqi.mongodb.net

# Security & Authentications
ACCESS_TOKEN_SECRET=generate_any_long_secure_random_string_here
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=generate_another_long_secure_random_string_here
REFRESH_TOKEN_EXPIRY=10d

# Media Storage (Cloudinary)
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### Frontend `.env`
Navigate into the `frontend/` directory and create a file named `.env`:

```env
VITE_BACKEND_URL=http://localhost:8000
VITE_FRONTEND_URL=http://localhost:5173
```

---

## 📦 3. Install Dependencies

You need to install the Node modules for the root directory as well as both sub-folders. Open your terminal at the root of the project:

```bash
# 1. Install root dependencies (used for running both servers concurrently)
npm install

# 2. Install backend dependencies
cd backend
npm install

# 3. Install frontend dependencies
cd ../frontend
npm install
```

---

## 🏃 4. Run the Platform

With your environment variables saved and dependencies installed, you can launch the entire stack with a single command!

Navigate back to the **project root folder**, and run:

```bash
npm run dev
```

**Success!** This command will fire up both servers:
- **Backend API Server**: running on `http://localhost:8000`
- **Frontend App (Vite)**: running on `http://localhost:5173`

You can now open your browser and navigate to `http://localhost:5173` to explore VideoTube!

---

## 🛠️ 5. Troubleshooting Common Issues

* **Blank Screen / Videos Not Loading**
  Make sure your backend server is actually running and connected to MongoDB. If it says `MONGODB connection FAILED`, double-check the username and password in your `MONGODB_URI`.
  
* **Missing Videos / Database Mismatch**
  Ensure that `backend/src/constants.js` contains `export const DB_NAME = "videotube"`. If this name mismatches your actual database, the backend will query an empty shadow database!

* **CORS Errors in Browser Console**
  Ensure the `CORS_ORIGIN` inside `backend/.env` is set exactly to your frontend URL (e.g., `http://localhost:5173`) with absolutely **no trailing slashes** at the end.

* **"Failed to Upload" errors when posting videos**
  This almost always means your `CLOUDINARY_API_KEY` or `CLOUDINARY_API_SECRET` are incorrect, expired, or you've accidentally left a space in the `.env` file string. Double check your Cloudinary dashboard.
