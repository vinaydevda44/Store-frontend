# Store Web Application (MERN Stack)

Store Web Application is a full-stack MERN-based e-commerce platform
that allows users to browse products, place orders, and contact the store
directly. The application is divided into separate frontend and backend
repositories for better scalability and maintainability.

---

## Repositories

- Frontend: https://github.com/vinaydevda44/Store-frontend
- Backend: https://github.com/vinaydevda44/Store-Server

---

## Features

### User
- Browse products by category
- View product details
- Select quantity and place orders
- Contact store owner directly via WhatsApp
- Responsive user interface

### Admin / Store Owner
- Add and manage products
- Manage product categories
- View and manage orders

### General
- REST API based architecture
- Secure backend with proper validations
- Cloud-based image storage
- Clean UI with smooth user experience

---

## Tech Stack

### Frontend
- React
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Other Tools & Services
- Cloudinary (image storage)
- Postman (API testing)
- Git & GitHub (version control)

---

## Project Architecture

The project is divided into two independent repositories:

### Frontend Repository
- Handles UI and user interaction
- Communicates with backend using REST APIs
- Manages application state and routing

### Backend Repository
- Handles business logic and data storage
- Provides REST APIs for frontend
- Manages products, categories, and orders

---

## Installation & Setup

### Frontend Setup
git clone https://github.com/vinaydevda44/Store-frontend.git
cd Store-frontend

npm install
npm run dev

npm install
npm run dev

## Environment Variables

VITE_PHONE=YOUR_MOBILE_NO.
VITE_BASE_URL=BASE_URL
