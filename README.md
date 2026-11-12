# CodePlay

CodePlay is a web-based quiz application I built to make practising technical concepts more interactive. Users can create an account, log in, attempt quizzes, and keep track of their scores through their result history.

The project gave me an opportunity to work with both frontend and backend development, connect a database, and deploy a full-stack application.

**Live Demo:** https://code-play-frontend-0gwq.onrender.com

**Backend:** https://code-play-backend-d7jk.onrender.com

## Features

- User registration and login
- JWT-based authentication
- Interactive quiz interface
- Automatic saving of quiz results
- View previously attempted quiz results
- Database integration for storing user and result information

## Technologies Used

**Frontend:** React.js, Vite, CSS

**Backend:** Node.js, Express.js

**Database:** MongoDB, Mongoose

**Authentication:** JSON Web Tokens (JWT)

**Deployment:** Render

**Version Control:** Git and GitHub

## Project Structure

```text
Code-Play/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

## Running the Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/sharanpatil2004/Code-Play.git
cd Code-Play
```

### 2. Start the backend

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder:

```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Start the backend:

```bash
npm start
```

### 3. Start the frontend

Open a new terminal:

```bash
cd frontend
npm install
```

Create a `.env` file inside the frontend folder:

```env
VITE_API_BASE_URL=http://localhost:4000
```

Run the frontend:

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## API Routes

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/auth/register` | Create a new account |
| POST | `/api/auth/login` | Authenticate a user |
| POST | `/api/results` | Save quiz results |
| GET | `/api/results` | Retrieve quiz results |

The quiz result routes require authentication.

## Deployment

The application is deployed using Render, with separate services for the frontend and backend. MongoDB Atlas is used for cloud database storage.

## Developer

**Sharan Patil**

GitHub: https://github.com/sharanpatil2004
