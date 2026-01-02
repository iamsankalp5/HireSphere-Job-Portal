# 🚀 HireSphere – Job Application Portal

HireSphere is a full-stack Job Application Portal designed to connect job seekers and recruiters through a clean, modern, and intuitive platform. The application allows users to explore job opportunities, apply seamlessly, and manage applications efficiently.

---

## ✨ Features

### 👩‍💻 Job Seekers
- Browse latest job openings
- View detailed job descriptions
- Apply for jobs with a simple form
- Smooth UI with instant feedback (Toast notifications)

### 🧑‍💼 Recruiters
- Post and manage job listings
- View received applications
- Centralized job management

### 🌐 General
- Attractive landing page inspired by modern job portals
- Responsive and user-friendly UI
- RESTful API integration
- Clean architecture (Controller → Service → Repository)

---

## 🛠 Tech Stack

### Frontend
- React.js
- React Router
- Tailwind CSS
- Axios
- React Toastify

### Backend
- Java
- Spring Boot
- Spring Data JPA
- REST APIs
- MySQL (or any relational DB)

---

## 📂 Project Structure

HireSphere-Job-Portal
│
├── Job-Application (Frontend - React)
│ ├── src
│ ├── components
│ ├── pages
│ └── services
│
├── HireSphere (Backend - Spring Boot)
│ ├── controller
│ ├── service
│ ├── repository
│ ├── entity
│ └── dto
│
└── README.md


---

## ⚙️ How to Run the Project

### Backend (Spring Boot)
1. Open backend in Eclipse 
2. Configure `application.properties`
3. Run the Spring Boot application
4. Server runs on `http://localhost:8080`

### Frontend (React)
1. Navigate to frontend folder
2. Install dependencies:
   ```bash
   npm install

http://localhost:5173  npm run dev

POST /api/applications
{
  "name": "Sankalp",
  "email": "test@gmail.com",
  "job": {
    "id": 3
  }
}
