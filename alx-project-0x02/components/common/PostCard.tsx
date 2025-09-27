import React from "react";
import { type PostCardProps } from "@/interfaces";


const PostCard: React.FC<PostCardProps> = ({
    title,
    content,
    author,
    date,
    className = ""
}) => {
    return (
        <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200 ${className}`}>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                {content}
            </p>
            {(author || date) && (
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 pt-3 border-t border-gray-200 dark:border-gray-700">
                    {author && <span>By {author}</span>}
                    {date && <span>{date}</span>}
                </div>
            )}
        </div>
    );
};

export default PostCard;

