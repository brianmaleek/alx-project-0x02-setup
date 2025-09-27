import Head from "next/head";
import Link from "next/link";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { type UserProps, type UsersPageProps } from "@/interfaces";
import { useEffect, useState } from "react";
import { GetStaticProps } from "next";

export default function Users({ users: serverUsers }: UsersPageProps) {
    const [users, setUsers] = useState<UserProps[]>(serverUsers || []);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Fetch users if server didn't provide any
    useEffect(() => {
        const fetchUsers = async () => {
            if (serverUsers.length === 0) {
                try {
                    setLoading(true);
                    const response = await fetch('https://jsonplaceholder.typicode.com/users');
                    if (!response.ok) {
                        throw new Error('Failed to fetch users');
                    }
                    const data: UserProps[] = await response.json();
                    setUsers(data);
                } catch (err) {
                    setError(err instanceof Error ? err.message : 'An unknown error occurred');
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchUsers();
    }, [serverUsers]);

    return (
        <>
            <Head>
                <title>Users - My Next.js App</title>
                <meta name="description" content="Browse our community of users" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                <Header />

                <main className="container mx-auto px-4 py-12">
                    <div className="mb-4">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            You are here: 
                        </span>
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400 ml-1">
                            Users
                        </span>
                    </div>
                    
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                        Users
                    </h1>
                    
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                        Meet our community members and their information.
                    </p>

                    {/* Error Message */}
                    {error && (
                        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-8">
                            <p className="text-red-600 dark:text-red-400">Error: {error}</p>
                        </div>
                    )}

                    {/* Users Stats */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                                    Community Members
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300 mt-1">
                                    {loading ? 'Loading...' : `${users.length} users registered`}
                                </p>
                            </div>
                            <div className="bg-green-100 dark:bg-green-900/30 px-4 py-2 rounded-lg">
                                <span className="text-green-800 dark:text-green-200 font-medium">
                                    {loading ? 'Loading...' : users.length} Users
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Loading State */}
                    {loading && (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[...Array(6)].map((_, index) => (
                                <div key={`loading-${index}`} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 animate-pulse">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                                        <div>
                                            <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded mb-2 w-32"></div>
                                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Users Grid */}
                    {!loading && (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {users.map((user, index) => (
                                <UserCard
                                    key={user.id}
                                    user={user}
                                    className={`hover:scale-105 transition-transform duration-200 ${
                                        index % 3 === 0 ? 'border-l-4 border-blue-500' :
                                        index % 3 === 1 ? 'border-l-4 border-green-500' :
                                        'border-l-4 border-purple-500'
                                    }`}
                                />
                            ))}
                        </div>
                    )}

                    {/* Call to Action */}
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-8 mt-12 text-center">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                            Join Our Community!
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            Connect with other users and share your thoughts through posts and discussions.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/posts"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-200"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                </svg>
                                View Posts
                            </Link>
                            <Link
                                href="/home"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition-colors duration-200"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                                Create Post
                            </Link>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}

// Add getStaticProps for server-side rendering
export async function getStaticProps() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        const users: UserProps[] = await response.json();

        return {
            props: {
                users,
            },
            revalidate: 3600, // Revalidate every hour
        };
    } catch (error) {
        console.error('Error fetching users:', error);
        return {
            props: {
                users: [],
            },
            revalidate: 3600,
        };
    }
}