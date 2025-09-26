import Head from "next/head";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Next.js & TailWind CSS App Project</title>
        <meta name="description" content="A modern Next.js app with Tailwind CSS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header />
        
        <main className="container mx-auto px-4 py-12">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              Welcome to My Next.js App!
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              This is the home page of our modern Next.js application built with TypeScript and styled with Tailwind CSS.
            </p>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mt-12">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                Getting Started
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Explore the navigation above to discover different sections of our application.
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}