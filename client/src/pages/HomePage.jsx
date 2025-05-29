import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
            <h1 className="text-5xl font-extrabold text-white mb-10 drop-shadow-lg">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Welcome to the Home Page
                </span>
            </h1>
            <p className="text-xl text-gray-200 bg-gray-800 bg-opacity-60 rounded px-6 py-4 shadow-lg mt-8">
                This is a group project done by three members. This application is used as a CMS project.
            </p>
            <Link
                to="/SignIn"
                className="mt-10 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded shadow-lg hover:from-blue-600 hover:to-purple-600 transition-colors duration-200 cursor-pointer text-center"
            >
                Get Started
            </Link>
        </div>
    );
}