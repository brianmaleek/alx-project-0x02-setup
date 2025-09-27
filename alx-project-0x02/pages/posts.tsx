import Head from "next/head";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import Link from "next/link";

export default function Posts() {
    const posts = [
        {
            id: "1",
            title: "Getting Started with Next.js",
            content: "Next.js is a powerful React framework that enables you to build full-stack web applications. It provides features like server-side rendering, static site generation, and API routes out of the box.",
            author: "Developer Team",
            date: "2024-01-15"
        },
        {
            id: "2",
            title: "Understanding TypeScript Benefits",
            content: "TypeScript adds static type definitions to JavaScript, helping you catch errors early in development and providing better IDE support with autocomplete and refactoring tools.",
            author: "Tech Lead",
            date: "2024-01-10"
        },
        {
            id: "3",
            title: "Tailwind CSS for Rapid Development",
            content: "Tailwind CSS is a utility-first CSS framework that allows you to build custom designs quickly without writing custom CSS. It provides low-level utility classes for styling.",
            author: "UI Designer",
            date: "2024-01-05"
        },
        {
            id: "4",
            title: "Component Architecture Best Practices",
            content: "Building reusable components is key to maintainable React applications. Focus on single responsibility, proper prop interfaces, and composition over inheritance.",
            author: "Senior Developer",
            date: "2024-01-01"
        }
    ];

    return (
        <>
            <Head>
                <title>Posts - My Next.js App</title>
                <meta name="description" content="Browse our collection of posts about web development" />
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
                            Posts
                        </span>
                    </div>
                    
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                        Posts
                    </h1>
                    
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                        Explore our collection of articles about web development, best practices, and modern technologies.
                    </p>

                    {/* Posts Stats */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                                    Latest Posts
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300 mt-1">
                                    {posts.length} articles available
                                </p>
                            </div>
                            <div className="bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-lg">
                                <span className="text-blue-800 dark:text-blue-200 font-medium">
                                    {posts.length} Posts
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Posts Grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {posts.map((post, index) => (
                            <PostCard
                                key={post.id}
                                title={post.title}
                                content={post.content}
                                author={post.author}
                                date={post.date}
                                className={`hover:scale-105 transition-transform duration-200 ${
                                    index % 2 === 0 ? 'border-l-4 border-blue-500' : 'border-l-4 border-purple-500'
                                }`}
                            />
                        ))}
                    </div>

                    {/* Call to Action */}
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-8 mt-12 text-center">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                            Want to Create Your Own Posts?
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            Head over to the Home page to use our post creation modal and add your own content!
                        </p>
                        <Link
                            href="/home"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-200"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            Create New Post
                        </Link>
                    </div>
                </main>
            </div>
        </>
    );
}