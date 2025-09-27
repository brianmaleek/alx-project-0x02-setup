import Head from "next/head";
import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

export default function About() {
    const handleClick = (buttonType: string) => {
        alert(`${buttonType} button clicked!`);
    };

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
                        Learn more about our Next.js application and its features. This page demonstrates the use of reusable components like buttons with different styles and shapes.
                    </p>

                    {/* Buttons Showcase Section */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mt-10 mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                            Button Component Showcase
                        </h2>

                        {/* Different Button Variants */}
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
                                Different Button Sizes
                            </h3>
                            <div className="flex flex-wrap items-center gap-4">
                                <Button
                                    label="Small Button"
                                    size="small"
                                    onClick={() => handleClick("Small")}
                                />
                                <Button
                                    label="Medium Button"
                                    size="medium"
                                    onClick={() => handleClick("Medium")}
                                />
                                <Button
                                    label="Large Button"
                                    size="large"
                                    onClick={() => handleClick("Large")}
                                />
                            </div>
                        </div>
                        
                        {/* Different Button Shapes */}
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
                                Different Button Shapes
                            </h3>
                            <div className="flex flex-wrap items-center gap-4">
                                <Button
                                    label="Rounded Button"
                                    shape="rounded-sm"
                                    onClick={() => handleClick("Rounded Small")}
                                />
                                <Button
                                    label="Rounded Medium"
                                    shape="rounded-md"
                                    onClick={() => handleClick("Rounded Medium")}
                                />
                                <Button
                                    label="Rounded Full"
                                    shape="rounded-full"
                                    onClick={() => handleClick("Rounded Full")}
                                />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
