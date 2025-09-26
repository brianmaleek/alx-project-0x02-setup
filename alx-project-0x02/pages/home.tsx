import Head from "next/head";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { useState } from "react";

interface Post {
    id: string;
    title: string;
    content: string;
    createdAt: Date;
    isUserCreated?: boolean;
}

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [posts, setPosts] = useState<Post[]>([
        {
            id: "1",
            title: "Getting Started",
            content: "Learn how to navigate through our application and discover all the amazing features we have built for you using modern web technologies.",
            createdAt: new Date(),
            isUserCreated: false
        },
        {
            id: "2", 
            title: "Features Overview",
            content: "Explore the comprehensive set of features including responsive design, dark mode support, and seamless navigation between different sections.",
            createdAt: new Date(),
            isUserCreated: false
        },
        {
            id: "3",
            title: "Technology Stack", 
            content: "Built with Next.js, TypeScript, and Tailwind CSS to provide a fast, type-safe, and beautifully designed user experience.",
            createdAt: new Date(),
            isUserCreated: false
        },
    ]);

    const handleAddPost = (title: string, content: string) => {
        const newPost: Post = {
            id: Date.now().toString(),
            title,
            content,
            createdAt: new Date(),
            isUserCreated: true
        };
        setPosts([newPost, ...posts]);
    };

    // Separate user-created posts from default posts
    const userPosts = posts.filter(post => post.isUserCreated);
    const defaultPosts = posts.filter(post => !post.isUserCreated);

    return (
        <>
            <Head>
                <title>Home - My Next.js App</title>
                <meta name="description" content="Home page of My Next.js App" />
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
                            Home
                        </span>
                    </div>
                    
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
                            Home Page
                        </h1>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-200 flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            Add New Post
                        </button>
                    </div>

                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                        Welcome to the Home section of my Next.js application!
                    </p>

                    {/* User Created Posts */}
                    {userPosts.length > 0 && (
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                                Your Posts ({userPosts.length})
                            </h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {userPosts.map((post) => (
                                    <Card
                                        key={post.id}
                                        title={post.title}
                                        content={post.content}
                                        className="border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20"
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Featured/Default Posts */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                            Featured Content
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {defaultPosts.map((post) => (
                                <Card
                                    key={post.id}
                                    title={post.title}
                                    content={post.content}
                                />
                            ))}
                        </div>
                    </div>
                </main>

                {/* Modal for adding new post */}
                <PostModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onAddPost={handleAddPost}
                />
            </div>
        </>
    );
}
