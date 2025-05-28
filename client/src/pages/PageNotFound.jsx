export default function PageNotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-gray-600 mb-6">Page Not Found</p>
        <a
          href="/"
          className="text-blue-600 hover:underline"
        >
          Go back to Home
        </a>
      </div>
    </div>
  );
}