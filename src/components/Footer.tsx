import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-gradient-to-b from-black to-gray-500 text-gray-400 dark:text-gray-200 py-1 px-4 flex flex-col items-center text-xs z-50">
      {/* Branding */}
      <div className="text-center mb-1">
        <h2 className="font-bold text-sm tracking-[2px]">GEARGRID</h2>
        <p className="leading-tight mt-0.5">
          Buy and sell cars with ease. Trusted by thousands across Australia.
        </p>
      </div>

      {/* Footer Main Content */}
      <div className="w-full md:w-1/2 border-t border-primary-foreground/20 pt-1 flex flex-col md:flex-row items-center justify-between">
        {/* Copyright */}
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} Geargrid. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-3 mt-1 md:mt-0">
          <Link
            href="https://www.linkedin.com/in/ash-ak"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 transition">
            <FaLinkedin className="h-5 w-5" />
          </Link>
          <Link
            href="https://github.com/ak-ash93"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-black transition">
            <FaGithub className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
