import React from "react";
import { type ButtonProps } from "@/interfaces";

const sizeClasses =  {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-5 py-3 text-lg",
};

const Button: React.FC<ButtonProps> = ({
    label,
    size = "medium",
    shape = "rounded-md",
    onClick,
    className = "",
}) => {
    return (
        <button
            onClick={onClick}
            className={`bg-blue-600 hover:bg-blue-700 text-white font-medium
                ${sizeClasses[size]} ${shape} transition-colors duration-200 ${className}`}
        >
            {label}
        </button>
    );
};
export default Button;