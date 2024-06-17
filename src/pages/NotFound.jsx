import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="bg-[#F7F8F9] dark:bg-[#23272F] h-screen flex flex-col gap-3 pt-64 items-center dark:text-white">
      <span className="text-8xl font-bold">404</span>
      <span className="text-4xl font-semibold">Page not found</span>
      <Link
        to="/"
        className="mt-4 px-5 py-3 bg-amber-500 text-lg font-semibold rounded-2xl"
      >
        Back to homepage
      </Link>
    </div>
  );
}

export default NotFound;
