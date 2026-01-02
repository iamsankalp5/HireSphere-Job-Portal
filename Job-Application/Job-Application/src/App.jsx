import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Pages
import Landing from "./Pages/Landing";
import JobList from "./Pages/JobList";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import JobSeekerDashboard from "./Pages/JobSeekerDashboard";
import RecruiterDashboard from "./Pages/RecruiterDashboard";
import ApplyJob from "./Pages/ApplyJob";

// Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Landing />} />

        {/* Jobs */}
        <Route path="/jobs" element={<JobList />} />
        <Route path="/apply/:jobId" element={<ApplyJob />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboards */}
        <Route path="/jobseeker" element={<JobSeekerDashboard />} />
        <Route path="/recruiter" element={<RecruiterDashboard />} />
      </Routes>

      {/* 🔔 Toast Notifications (ADD THIS) */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="colored"
      />
    </BrowserRouter>
  );
}

export default App;
