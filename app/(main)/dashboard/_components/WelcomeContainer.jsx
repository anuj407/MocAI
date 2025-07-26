"use client";
import { useUser } from "@/app/provider";
import React from "react";
import { LogOut } from "lucide-react"; // Optional: logout icon (install lucide-react if needed)
import Image from "next/image";

function WelcomeHeader() {
  const { user } = useUser();
  return (
    <header className="mx-6 mt-6 rounded-2xl bg-white dark:bg-gray-900 shadow-lg p-4 flex items-center justify-between px-6">
      {/* Left: Welcome Text */}
      <div>
        <h1 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">
          Welcome back, <span className="text-green-600">{user?.name}</span> 👋
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Get ready for your AI-driven interview
        </p>
      </div>

      {/* Right: Profile Picture and Actions */}
      <div className="flex items-center gap-4">
        <Image
          src="https://lh3.googleusercontent.com/a/ACg8ocJnfpN9G-T9YF-9B0xG3dfZ_T5a4TdV6GmYTrVwsoQwH90uZg5z=s96-c"
          width={48}
          height={48}
          alt="Profile"
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-green-500 object-cover"
        />
       
      </div>
    </header>
  );
}

export default WelcomeHeader;
