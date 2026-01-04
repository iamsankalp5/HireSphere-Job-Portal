import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center px-6">
      
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

        {/* LEFT IMAGE + MOTIVATION */}
        <div className="hidden md:flex flex-col justify-between bg-gradient-to-br from-indigo-600 to-purple-600 p-10 text-white">
          <div>
            <h2 className="text-3xl font-extrabold mb-4">
              Welcome Back 🚀
            </h2>
            <p className="text-indigo-100 text-lg leading-relaxed">
              Your next opportunity is just one step away.
              Log in and continue building your future with top companies.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
            alt="Team collaboration"
            className="rounded-2xl shadow-lg mt-10"
          />

          <p className="mt-6 text-sm text-indigo-200 italic">
            “Success usually comes to those who are too busy to be looking for it.”
          </p>
        </div>

        {/* RIGHT LOGIN FORM */}
        <div className="p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
            Login to HireSphere 👋
          </h2>
          <p className="text-gray-600 mb-8">
            Access your dashboard and apply to your dream roles.
          </p>

          <form className="space-y-5">
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

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-lg hover:opacity-90 transition shadow-lg"
            >
              Login
            </button>
          </form>

          {/* FOOTER */}
          <p className="mt-6 text-sm text-gray-600 text-center">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-indigo-600 font-semibold hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
