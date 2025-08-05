import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { HeartIcon } from "lucide-react";
import { CiCalendar } from "react-icons/ci";
import { RiAdminFill } from "react-icons/ri";
import { IoArrowBackCircle } from "react-icons/io5";
import { FaSignInAlt } from "react-icons/fa";

const Navbar = async ({ isAdminPage = false }) => {
  const isAdmin = false;

  return (
    <header className="fixed top-2 right-0 left-0 max-w-4xl rounded-full mx-auto bg-gradient-to-t from-black to-gray-500 dark:bg-gradient-to-t dark:from-gray-200 dark:to-gray-700 p-5 border-b-1 border-gray-700">
      <nav className="mx-auto flex items-center justify-between p-2">
        <Link
          className=" font-extrabold text-2xl tracking-[3px]  text-gray-200 dark:text-gray-700 cursor-pointer hover:text-gray-400"
          href={isAdminPage ? "/admin" : "/"}>
          Gear-Grid
        </Link>
        <div className="flex items-center space-x-4">
          {isAdminPage ? (
            <Link href="/">
              <Button className=" cursor-pointer border-1 border-gray-700 hover:bg-gray-700">
                <IoArrowBackCircle size={15} className="mr-.5 text-red-500" />
                <span className="hidden md:inline">Back to Dashboard</span>
              </Button>
            </Link>
          ) : (
            <SignedIn>
              <Link href="/favorites">
                <Button className=" cursor-pointer border-1 border-gray-700 hover:bg-gray-700">
                  <HeartIcon size={15} className="mr-.5 text-red-500" />
                  <span className="hidden md:inline">My Favs</span>
                </Button>
              </Link>

              {!isAdmin ? (
                <Link href="/bookigs">
                  <Button className=" cursor-pointer border-1 border-gray-700 hover:bg-gray-700">
                    <CiCalendar size={15} className="mr-.5 text-blue-500" />
                    <span className="hidden md:inline">My Bookings</span>
                  </Button>
                </Link>
              ) : (
                <Link href="/admin">
                  <Button className=" cursor-pointer border-1 border-gray-700 hover:bg-gray-700">
                    <RiAdminFill size={15} className="mr-.5 text-blue-500" />
                    <span className="hidden md:inline">Admin Panel</span>
                  </Button>
                </Link>
              )}
            </SignedIn>
          )}
          <SignedOut>
            <SignInButton forceRedirectUrl={"/"}>
              <Button className=" cursor-pointer border-1 border-gray-700 hover:bg-gray-700">
                <FaSignInAlt className="text-blue-500 mr-.5" />
                <span className="hidden md:inline">Login</span>
              </Button>
            </SignInButton>
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

export default Navbar;
