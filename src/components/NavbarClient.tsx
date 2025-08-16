"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";
import { HeartIcon, UserPlus } from "lucide-react";
import { CiCalendar } from "react-icons/ci";
import { RiAdminFill } from "react-icons/ri";
import { IoArrowBackCircle } from "react-icons/io5";
import { FaSignInAlt } from "react-icons/fa";
import Image from "next/image";

type NavbarClientProps = {
  isAdmin: boolean;
  isAdminPage?: boolean; // optional
};

const NavbarClient = ({ isAdmin, isAdminPage }: NavbarClientProps) => {
  return (
    <header className="border-b-1 fixed top-0 right-0 left-0 w-full mx-auto bg-gradient-to-r  from-black to-gray-600 dark:bg-gradient-to-t dark:from-gray-200 dark:to-gray-700 p-2 z-100 border-gray-700">
      <nav className="mx-auto flex items-center justify-between px-2">
        <Link href={isAdmin ? "/admin" : "/"}>
          <Image
            src="/logo-r.png"
            alt="GearGrid Logo"
            width={85}
            height={50}
            priority
            className="h-16 w-auto object-contain rounded-lg"
          />
        </Link>
        <div className="flex items-center space-x-4">
          {isAdminPage ? (
            <Link href="/">
              <Button className="cursor-pointer border-1 border-gray-700 hover:scale-105">
                <IoArrowBackCircle size={15} className="mr-.5 text-red-500" />
                <span className="hidden md:inline">Back to Dashboard</span>
              </Button>
            </Link>
          ) : (
            <SignedIn>
              <Link href="/favorites">
                <Button className="cursor-pointer border-1 border-gray-700  hover:scale-105">
                  <HeartIcon size={15} className="mr-.5 text-red-500" />
                  <span className="hidden md:inline">My Favs</span>
                </Button>
              </Link>

              {!isAdmin ? (
                <Link href="/bookigs">
                  <Button className="cursor-pointer border-1 border-gray-700 hover:scale-105">
                    <CiCalendar size={15} className="mr-.5 text-blue-500" />
                    <span className="hidden md:inline">My Bookings</span>
                  </Button>
                </Link>
              ) : (
                <Link href="/admin">
                  <Button className="cursor-pointer border-1 border-gray-700 hover:scale-105">
                    <RiAdminFill size={15} className="mr-.5 text-blue-500" />
                    <span className="hidden md:inline">Admin Panel</span>
                  </Button>
                </Link>
              )}
            </SignedIn>
          )}

          <SignedOut>
            <SignInButton forceRedirectUrl={"/"}>
              <Button
                size={"lg"}
                className="cursor-pointer border-1 border-gray-700 hover:scale-105">
                <FaSignInAlt className="text-blue-500 mr-.5 w-5 h-5" />
                <span className="hidden md:inline">Login</span>
              </Button>
            </SignInButton>
            <Button
              size="lg"
              className="cursor-pointer border-1 border-gray-700 hover:scale-105"
              asChild>
              <Link href="/sign-up" className="flex items-center gap-2">
                <UserPlus className="w-5 h-5 text-blue-500" />
                <span className="hidden md:inline">Sign Up</span>
              </Link>
            </Button>
          </SignedOut>

          <SignedIn>
            <UserButton
              afterSignOutUrl="/"
              appearance={{ elements: { avatarBox: "w-12 h-12" } }}
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default NavbarClient;
