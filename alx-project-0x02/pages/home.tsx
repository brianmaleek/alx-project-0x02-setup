import Head from "next/head";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";

export default function Home() {
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
                    
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                        Home Page
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                        Welcome to the Home section of my Next.js application!
                    </p>

                    {/* Example usage of Card component */}
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                        <Card
                            title="Getting Started"
                            content="Learn how to navigate through our application and discover all the amazing features we have built for you using modern web technologies."
                        />
                        
                        <Card
                            title="Features Overview"
                            content="Explore the comprehensive set of features including responsive design, dark mode support, and seamless navigation between different sections."
                        />
                        
                        <Card
                            title="Technology Stack"
                            content="Built with Next.js, TypeScript, and Tailwind CSS to provide a fast, type-safe, and beautifully designed user experience."
                        />
                        
                        <Card
                            title="Best Practices"
                            content="This project follows modern development practices including component reusability, proper TypeScript interfaces, and accessible design patterns."
                        />
                        
                        <Card
                            title="Performance"
                            content="Optimized for speed with Next.js automatic code splitting, image optimization, and server-side rendering capabilities."
                        />
                        
                        <Card
                            title="Documentation"
                            content="Well-documented codebase with clear component structures, making it easy to understand and extend the application functionality."
                        />
                    </div>
                </main>
            </div>
        </>
    );
}
