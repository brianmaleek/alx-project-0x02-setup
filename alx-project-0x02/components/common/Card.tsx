import React from "react";
import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-gray-600 dark:text-gray-300">{content}</p>
        </div>
    );
};

export default Card;
