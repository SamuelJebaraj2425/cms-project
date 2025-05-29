import React from "react";

export default function DeveloperPage() {

    const developers = [
        { name: "Pradeep P", role: "Developer 1", color: "bg-blue-900 border-blue-500" },
        { name: "Samuel K", role: "Developer 2", color: "bg-green-900 border-green-500" },
        { name: "Rajeshwaren S", role: "Developer 3", color: "bg-purple-900 border-purple-500" },
    ];

    return (
        <div className="relative min-h-screen w-screen overflow-hidden">
            {/* Dark background gradient */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900" />
            <div className="relative flex flex-col items-center justify-center min-h-screen w-screen">
                <h1 className="text-4xl font-bold text-blue-200 mb-4">Welcome to the Developer Page</h1>
                <p className="text-lg text-gray-300 mb-8 text-center max-w-xl">
                    This is a group project done by three members. This application is used as a CMS project.
                </p>
                <h2 className="text-2xl font-semibold text-gray-100 mb-4">Developers</h2>
                <div className="flex flex-row gap-6">
                    {developers.map((dev, idx) => (
                        <div
                            key={idx}
                            className={`shadow-md rounded-lg p-6 flex flex-col items-center min-w-[180px] border-2 ${dev.color}`}
                        >
                            <div className="text-lg font-semibold text-gray-100 mb-2">{dev.role}</div>
                            <div className="text-gray-300">{dev.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}