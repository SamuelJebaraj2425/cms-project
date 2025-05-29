export default function SignUp() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96 border border-gray-700 border-2 border-violet-700">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-gray-200" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-600 rounded bg-gray-900 text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2 text-gray-200" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-600 rounded bg-gray-900 text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-cyan-600 text-white py-2 rounded hover:bg-cyan-700 transition duration-200 font-semibold cursor-pointer"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}