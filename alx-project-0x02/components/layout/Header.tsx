import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
    return (
        <header>
            <h1 className="text-3xl font-bold">Set Up a Next.js Project</h1>
            <nav>
                <Link href="/home" className="text-blue-500 hover:underline">Home</Link>
                <Link href="/about" className="text-blue-500 hover:underline">About</Link>
                <Link href="/posts" className="text-blue-500 hover:underline">Posts</Link>
                <Link href="/users" className="text-blue-500 hover:underline">Users</Link>
            </nav>
        </header>
    );
};

export default Header;