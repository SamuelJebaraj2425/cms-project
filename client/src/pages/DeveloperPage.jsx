import React from "react";

export default function DeveloperPage() {

    const developers = [
        { name: "Pradeep P", role: "Developer 1" },
        { name: "Samuel K", role: "Developer 2" },
        { name: "Rajeshwaren S", role: "Developer 3" },
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 w-screen overflow-hidden">
            <h1 className="text-4xl font-bold text-blue-700 mb-4">Welcome to the Developer Page</h1>
            <p className="text-lg text-gray-700 mb-8 text-center max-w-xl">
                This is a group project done by three members. This application is used as a CMS project.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Developers</h2>
            <div className="flex flex-row gap-6">
                {developers.map((dev, idx) => (
                    <div
                        key={idx}
                        className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center min-w-[180px]"
                    >
                        <div className="text-lg font-semibold text-gray-800 mb-2">{dev.role}</div>
                        <div className="text-gray-700">{dev.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}