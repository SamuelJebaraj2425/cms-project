import { Link } from "react-router-dom";

export default function AsideBar() {
    return (
        <aside className="w-64 h-screen bg-gray-800 text-white flex flex-col">
            {/* Top Bar with Profile Picture */}
            <div className="flex items-center p-4 bg-gray-900">
                <img
                    src="https://i.pravatar.cc/40"
                    alt="Profile"
                    className="w-10 h-10 rounded-full mr-3"
                />
                <span className="text-lg font-semibold">Welcome</span>
            </div>
            <div className="p-4">
                <h1 className="text-2xl font-bold">Aside Bar</h1>
            </div>
            <nav className="mt-4 flex-1 relative">
                <ul>
                    <li className="p-2 hover:bg-gray-700"><Link to="/dashboard">Add Today</Link></li>
                    <li className="p-2 hover:bg-gray-700"><a href="#about">All Content</a></li>
                    <li className="p-2 hover:bg-gray-700"><a href="#services">Favourites</a></li>
                </ul>
                <div className="absolute bottom-0 w-full p-4">
                    <button
                        className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded"
                        onClick={() => {
                            // Add your logout logic here
                            console.log('Logout clicked');
                        }}
                    >
                        Logout
                    </button>
                </div>
            </nav>
        </aside>
    );
}