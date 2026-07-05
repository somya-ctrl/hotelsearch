import { Link } from "react-router-dom";
import { FaCompass, FaHome } from "react-icons/fa";
import Layout from "../components/layouts/Layout";

function NotFound() {
  return (
    <Layout>
      <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-16 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-3xl text-blue-600">
          <FaCompass />
        </span>

        <p className="mt-6 font-mono text-sm font-semibold uppercase tracking-widest text-blue-600">
          Error 404
        </p>
        <h1 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
          Looks like this stay doesn&apos;t exist
        </h1>
        <p className="mt-4 max-w-md text-gray-500">
          The page you&apos;re looking for may have been moved or never existed.
          Let&apos;s get you back to finding a place to stay.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-md transition-colors hover:bg-blue-700"
        >
          <FaHome />
          Back to Home
        </Link>
      </div>
    </Layout>
  );
}
export default NotFound;
