import Head from "next/head";
import Header from "@/components/layout/Header";

export default function About() {
    return (
        <>
            <Head>
                <title>About - My Next.js App</title>
                <meta name="description" content="Learn more about My Next.js App" />
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
                            About
                        </span>
                    </div>
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                        About Us
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Learn more about our Next.js application and its features.
                    </p>
                </main>
            </div>
        </>
    );
}
