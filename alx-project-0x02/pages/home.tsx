import Head from "next/head";
import Header from "@/components/layout/Header";

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
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Welcome to the Home section of my Next.js application!
                    </p>
                </main>
            </div>
        </>
    );
}
