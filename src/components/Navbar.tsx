import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";
import { HeartIcon, Home, UserPlus } from "lucide-react";
import { CiCalendar } from "react-icons/ci";
import { RiAdminFill } from "react-icons/ri";
import { IoArrowBackCircle } from "react-icons/io5";
import { FaSignInAlt } from "react-icons/fa";
import Image from "next/image";
import { checkUser } from "@/lib/checkUser";
import React from "react";

type NavbarClientProps = {
  isAdminPage?: boolean;
  children?: React.ReactNode; // allows injecting things like SidebarTrigger
};

const Navbar = async ({ isAdminPage, children }: NavbarClientProps) => {
  const user = await checkUser();
  const isAdmin = user?.role === "ADMIN";

  return (
    <header className="fixed top-0 right-0 left-0 z-50 w-full border-b border-gray-700 bg-gradient-to-r from-black to-gray-600 dark:from-gray-200 dark:to-gray-700">
      <nav className="mx-auto flex h-20 items-center justify-between px-4">
        {/* Left side: Sidebar trigger + logo */}
        <div className="flex  items-center gap-3">
          <Link href={isAdmin ? "/admin" : "/"}>
            <Image
              src="/logo-r.png"
              alt="GearGrid Logo"
              width={85}
              height={50}
              priority
              className="h-12 w-auto object-contain rounded-lg"
            />
          </Link>
        </div>

        {/* Right side: nav actions */}
        <div className="flex items-center space-x-4">
          {isAdminPage ? (
            <div className="flex items-center justify-between gap-3">
              <Link href="/">
                <Button className="cursor-pointer border border-gray-700 hover:scale-105">
                  <IoArrowBackCircle size={15} className="mr-1 text-red-500" />
                  <span className="hidden md:inline">Back to Dashboard</span>
                </Button>
              </Link>
              {children}
            </div>
          ) : (
            <SignedIn>
              <div className="flex items-center justify-center gap-3">
                <Link href="/">
                  <Button className="cursor-pointer border border-gray-700 hover:scale-105">
                    <Home size={15} className="mr-1 text-blue-500" />
                  </Button>
                </Link>
                <Link href="/favorites">
                  <Button className="cursor-pointer border border-gray-700 hover:scale-105">
                    <HeartIcon size={15} className="mr-1 text-red-500" />
                    <span className="hidden md:inline">My Favs</span>
                  </Button>
                </Link>
              </div>

              {!isAdmin ? (
                <Link href="/bookings">
                  <Button className="cursor-pointer border border-gray-700 hover:scale-105">
                    <CiCalendar size={15} className="mr-1 text-blue-500" />
                    <span className="hidden md:inline">My Bookings</span>
                  </Button>
                </Link>
              ) : (
                <Link href="/admin">
                  <Button className="cursor-pointer border border-gray-700 hover:scale-105">
                    <RiAdminFill size={15} className="mr-1 text-blue-500" />
                    <span className="hidden md:inline">Admin Panel</span>
                  </Button>
                </Link>
              )}
            </SignedIn>
          )}

          {/* Sign-In / Sign-Up */}
          <SignedOut>
            <SignInButton forceRedirectUrl={"/"}>
              <Button className="cursor-pointer border border-gray-700 hover:scale-105">
                <FaSignInAlt className="text-blue-500 mr-1 w-5 h-5" />
                <span className="hidden md:inline">Login</span>
              </Button>
            </SignInButton>
            <Button
              className="cursor-pointer border border-gray-700 hover:scale-105"
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

export default Navbar;
