import React from "react";
import { type UserProps } from "@/interfaces";

const UserCard: React.FC<{ user: UserProps; className?: string }> = ({ user, className = "" }) => {
    return (
        <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200 ${className}`}>
            {/* User Info */}
            <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {user.name.charAt(0)}
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                        {user.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        @{user.username}
                    </p>
                </div>
            </div>

            {/* Contact */}
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <p>{user.address.city}</p>
            </div>

            {/* Company */}
            <div className="pt-3 mt-3 border-t border-gray-200 dark:border-gray-700">
                <p className="font-medium text-gray-800 dark:text-gray-100">
                    {user.company.name}
                </p>
            </div>
        </div>
    );
};

export default UserCard;
