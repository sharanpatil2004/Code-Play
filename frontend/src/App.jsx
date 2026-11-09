import React from "react";

import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import MyResultPage from "./pages/MyResultPage.jsx";

// Protected Route
function RequireAuth({ children }) {
  const isLoggedIn = Boolean(localStorage.getItem("token"));

  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

const App = () => {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Login */}
      <Route path="/login" element={<Login />} />

      {/* Signup */}
      <Route path="/signup" element={<Signup />} />

      {/* My Result */}
      <Route
        path="/my-result"
        element={
          <RequireAuth>
            <MyResultPage />
          </RequireAuth>
        }
      />
    </Routes>
  );
};

export default App;
