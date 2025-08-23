"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // if you're using shadcn/ui

const NotFound = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center text-center p-6 bg-gray-600 ">
      <h1 className="text-6xl font-bold text-gray-200">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-gray-400">
        Page Not Found
      </h2>
      <p className="mt-2 text-gray-400 max-w-md">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>

      <Link href="/" className="mt-6">
        <Button className="rounded-lg px-6 py-2 cursor-pointer">
          Go Back Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
