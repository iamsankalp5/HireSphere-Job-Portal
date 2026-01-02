import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllJobs } from "../services/api";
import { jobImages, DEFAULT_IMAGE } from "../services/jobImages";

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await getAllJobs();
      setJobs(res.data);
    } catch (err) {
      setError("Failed to load jobs. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* ================= HERO SECTION ================= */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold leading-tight">
            Unlock Your <span className="text-yellow-300">Dream Career</span>
          </h1>
          <p className="mt-4 text-lg text-indigo-100 max-w-2xl mx-auto">
            Discover opportunities from top companies and apply in just one click.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href="#jobs"
              className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow hover:scale-105 transition"
            >
              Explore Jobs
            </a>
            <Link
              to="/login"
              className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-indigo-600 transition"
            >
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* ================= CATEGORIES ================= */}
      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="flex flex-wrap gap-4 justify-center">
          {[
            "Software Development",
            "Data Science",
            "Graphic Design",
            "Marketing",
            "Finance",
          ].map((cat) => (
            <span
              key={cat}
              className="px-5 py-2 bg-white rounded-full shadow text-sm font-medium text-gray-700 hover:bg-indigo-50 cursor-pointer transition"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      {/* ================= MARQUEE SECTION ================= */}
<div className="mt-16 mb-20">
  <div className="marquee">
    <div className="marquee-track gap-8 px-6">
      
      {/* IMAGE 1 */}
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
        alt="Company"
        className="h-40 w-64 rounded-xl object-cover shadow-lg"
      />

      {/* IMAGE 2 */}
      <img
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
        alt="Team"
        className="h-40 w-64 rounded-xl object-cover shadow-lg"
      />

      {/* IMAGE 3 */}
      <img
        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7"
        alt="Office"
        className="h-40 w-64 rounded-xl object-cover shadow-lg"
      />

      {/* IMAGE 4 */}
      <img
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
        alt="Workspace"
        className="h-40 w-64 rounded-xl object-cover shadow-lg"
      />

      {/* DUPLICATE IMAGES (IMPORTANT for seamless loop) */}
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
        className="h-40 w-64 rounded-xl object-cover shadow-lg"
      />

      <img
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
        className="h-40 w-64 rounded-xl object-cover shadow-lg"
      />
    </div>
  </div>
</div>


      {/* ================= JOB LIST ================= */}
      <div id="jobs" className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">
          🔥 Latest Job Openings
        </h2>

        {/* Loading */}
        {loading && (
          <p className="text-center text-gray-500 text-lg">
            Loading jobs...
          </p>
        )}

        {/* Error */}
        {!loading && error && (
          <p className="text-center text-red-500 text-lg">
            {error}
          </p>
        )}

        {/* Jobs Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl shadow hover:shadow-2xl transition overflow-hidden flex flex-col"
              >
                {/* Image */}
                <img
                  src={jobImages[job.title] || DEFAULT_IMAGE}
                  alt={job.title}
                  className="h-48 w-full object-cover"
                />

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900">
                    {job.title}
                  </h3>

                  <p className="text-indigo-600 font-medium mt-1">
                    {job.company}
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    📍 {job.location}
                  </p>

                  <p className="text-gray-700 text-sm mt-4 flex-grow leading-relaxed">
                    {job.description}
                  </p>

                  <Link
                    to={`/apply/${job.id}`}
                    className="mt-6 block text-center py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
                  >
                    Apply Now →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default JobList;
