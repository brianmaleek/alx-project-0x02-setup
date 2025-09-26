import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
    return (
        <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
            <div className="container mx-auto px-4 py-6">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                    My Next.js App
                </h1>
                <nav className="flex flex-wrap gap-6">
                    <Link 
                        href="/home" 
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-colors duration-200"
                    >
                        Home
                    </Link>
                    <Link 
                        href="/about" 
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-colors duration-200"
                    >
                        About
                    </Link>
                    <Link 
                        href="/posts" 
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-colors duration-200"
                    >
                        Posts
                    </Link>
                    <Link 
                        href="/users" 
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-colors duration-200"
                    >
                        Users
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;