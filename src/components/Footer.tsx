import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-gray-500 text-gray-400 dark:text-gray-200 py-2 px-4 flex flex-col items-center">
      {/* Branding */}
      <div className="text-center mb-4">
        <h2 className="font-extrabold text-md tracking-[4px]">GEARGRID</h2>
        <p className="text-xs leading-relaxed mt-1">
          Buy and sell cars with ease. Trusted by thousands across Australia.
        </p>
      </div>

      {/* Footer Main Content */}
      <div className="w-1/2 border-t border-primary-foreground/20 pt-2 flex flex-col md:flex-col gap-2 items-center justify-center ">
        {/* Navigation */}

        {/* Copyright */}
        <p className="text-xs text-center md:text-left">
          © {new Date().getFullYear()} Geargrid. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <Link
            href="https://www.linkedin.com/in/ash-ak"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 transition">
            <FaLinkedin className="size-5" />
          </Link>
          <Link
            href="https://github.com/ak-ash93"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-black transition">
            <FaGithub className="size-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
