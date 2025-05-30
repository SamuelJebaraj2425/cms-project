export default function PageNotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-96 text-center border-2 border-violet-700">
        <img
          src="https://cdn-icons-png.flaticon.com/512/564/564619.png"
          alt="Page Not Found"
          className="mx-auto mb-6 w-24 h-24"
        />
        <h1 className="text-5xl font-extrabold mb-4 text-pink-400">404</h1>
        <p className="text-purple-300 mb-6">Page Not Found</p>
        <a
          href="/"
          className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition"
        >
          Go back to Home
        </a>
      </div>
    </div>
  );
}