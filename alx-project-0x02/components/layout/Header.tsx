import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header: React.FC = () => {
    const router = useRouter();

    const getLinkClasses = (href: string) => {
        const isActive = router.pathname === href;
        const baseClasses = "text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-colors duration-200";

        if (isActive) {
            return `${baseClasses} bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-medium`;
        } else {
            return `${baseClasses} text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/50`;
        }
    }
    return (
        <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
            <div className="container mx-auto px-4 py-6">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                    My Next.js App
                </h1>
                <nav className="flex flex-wrap gap-6">
                    <Link 
                        href="/home" 
                        className={getLinkClasses("/home")}
                    >
                        Home
                    </Link>
                    <Link 
                        href="/about" 
                        className={getLinkClasses("/about")}
                    >
                        About
                    </Link>
                    <Link 
                        href="/posts" 
                        className={getLinkClasses("/posts")}
                    >
                        Posts
                    </Link>
                    <Link 
                        href="/users" 
                        className={getLinkClasses("/users")}
                    >
                        Users
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;