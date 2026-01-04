import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center px-6">
      
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

        {/* LEFT IMAGE + MOTIVATION */}
        <div className="hidden md:flex flex-col justify-between bg-gradient-to-br from-indigo-600 to-purple-600 p-10 text-white">
          <div>
            <h2 className="text-3xl font-extrabold mb-4">
              Start Your Journey 🚀
            </h2>
            <p className="text-indigo-100 text-lg leading-relaxed">
              Join HireSphere and unlock career opportunities tailored to your
              skills and ambitions.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9"
            alt="Career success"
            className="rounded-2xl shadow-lg mt-10"
          />

          <p className="mt-6 text-sm text-indigo-200 italic">
            “The future depends on what you do today.”
          </p>
        </div>

        {/* RIGHT REGISTER FORM */}
        <div className="p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
            Create Your Account ✨
          </h2>
          <p className="text-gray-600 mb-8">
            Start applying to jobs in minutes.
          </p>

          <form className="space-y-5">

            {/* NAME */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                👤 Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                📧 Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                🔒 Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            {/* ROLE */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                🎯 Register As
              </label>
              <select
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              >
                <option>Job Seeker</option>
                <option>Recruiter</option>
              </select>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-lg hover:opacity-90 transition shadow-lg"
            >
              Register
            </button>
          </form>

          {/* FOOTER */}
          <p className="mt-6 text-sm text-gray-600 text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-indigo-600 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
