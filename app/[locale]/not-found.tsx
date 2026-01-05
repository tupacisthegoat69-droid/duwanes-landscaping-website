import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-white px-4 text-center">
      <h1 className="text-6xl font-bold text-green-700 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-900 mb-6">Page Not Found</h2>
      <p className="text-lg text-gray-600 mb-8 max-w-md">
        Oops! The page you are looking for might have been removed or is temporarily unavailable.
      </p>
      <Link
        href="/"
        className="bg-green-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-green-700 transition-colors"
      >
        Go Back Home
      </Link>
    </div>
  );
}
