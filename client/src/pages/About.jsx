export default function About() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 via-gray-800 to-purple-900">
            <div className="max-w-2xl w-full p-8 bg-gradient-to-br from-gray-850 via-gray-800 to-indigo-950 rounded-xl shadow-lg border border-purple-700">
                <h1 className="text-3xl font-bold mb-4 text-cyan-400">About</h1>
                <p className="mb-2 text-gray-200">This is the about page of our application.</p>
                <p className="mb-6 text-gray-300">
                    We are using <span className="text-cyan-300 font-semibold">React</span> and <span className="text-fuchsia-400 font-semibold">Vite</span> for development.
                </p>
                <h2 className="text-2xl font-semibold mb-2 text-cyan-300">Our Mission</h2>
                <p className="mb-6 text-gray-300">
                    Our mission is to provide a simple and efficient content management system that helps users manage their content with ease.
                </p>
                <h2 className="text-2xl font-semibold mb-2 text-fuchsia-400">Features</h2>
                <ul className="list-disc list-inside mb-6 text-gray-200">
                    <li className="marker:text-cyan-400 hover:text-cyan-300 transition-colors">Fast and modern user interface</li>
                    
                    
                </ul>
                <h2 className="text-2xl font-semibold mb-2 text-emerald-400">Contact Us</h2>
                <p className="text-gray-200">
                    If you have any questions or feedback, feel free to reach out at{' '}
                    <a href="mailto:samuelkirubakaran2425@gmail.com" className="text-cyan-300 underline hover:text-fuchsia-400">support@cms-project.com</a>.
                </p>
            </div>
        </div>
    );
}