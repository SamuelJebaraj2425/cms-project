export default function Home() {
    return (
        <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
            <div className="bg-white rounded-xl shadow-lg p-10 flex flex-col items-center">
                <h1 className="text-3xl font-bold mb-6 text-blue-700">Welcome To Our Webpage</h1>
                <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                    Get Started
                </button>
            </div>
        </section>
    );
}