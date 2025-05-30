import { Link, Outlet } from "react-router";

export default function TopBar() {
    return (
        <>
            <header className="fixed w-screen z-[29] top-0 bg-gray-900 text-gray-100 py-4 shadow-md flex flex-col sm:flex-row items-center justify-between px-6">
                <div className="text-2xl font-semibold flex items-center gap-2">
                    <span role="img" aria-label="notebook">
                        <Link to={'/HomePage'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24">
                                <rect x="4" y="3" width="16" height="18" rx="2" fill="#8b5cf6"/>
                                <rect x="7" y="7" width="10" height="2" rx="1" fill="#fff"/>
                                <rect x="7" y="11" width="10" height="2" rx="1" fill="#fff"/>
                                <rect x="7" y="15" width="6" height="2" rx="1" fill="#fff"/>
                                <rect x="6" y="3" width="2" height="18" fill="#a78bfa"/>
                            </svg>
                        </Link>
                    </span> 
                    Diary
                </div>
                <div className="mt-3 sm:mt-0 flex gap-3">
                    <div className="bg-gray-800 border-2 border-gray-700 text-gray-100 px-4 py-2 rounded cursor-pointer hover:bg-gray-700 transition border-violet-700">
                        <Link to={'/SignIn'}>Sign-in</Link>
                    </div>
                    <div className="bg-gray-500 text-gray-900 px-4 py-2 rounded cursor-pointer border-violet-700 border-2 hover:bg-gray-200 transition ">
                        <Link to={'/SignUp'}>Sign-up</Link>
                    </div>
                </div>
            </header>
            <main className="bg-gray-950 min-h-[calc(100vh-128px)] text-gray-100">
                <Outlet />
            </main>
            <footer className="bg-gray-900 text-gray-400 py-4 text-center border-t border-gray-800 fixed bottom-0 left-0 w-full z-10">
                © {new Date().getFullYear()} Diary App. All rights reserved.
            </footer>
        </>
    );
}

