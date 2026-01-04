import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO (Clickable) */}
        <Link to="/" className="text-2xl font-extrabold tracking-tight">
          <span className="text-indigo-600">Hire</span>
          <span className="text-purple-600">Sphere</span>
        </Link>

        {/* NAV LINKS */}
        <div className="flex items-center gap-6 text-gray-600 font-medium">
          <Link
            to="/jobs"
            className="hover:text-indigo-600 transition"
          >
            Jobs
          </Link>

          <Link
            to="/login"
            className="hover:text-indigo-600 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
          >
            Register
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
