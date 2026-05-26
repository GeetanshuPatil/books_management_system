import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white py-8 mt-10 shadow-inner">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center justify-center text-center">
        <p className="text-sm md:text-base">
          © {currentYear} Book Management System. All rights reserved.
        </p>

        <p className="text-xs md:text-sm text-blue-100 mt-2">
          Built with React, Tailwind CSS and MockAPI
        </p>

        <p className="text-xs md:text-sm text-blue-100 mt-2">
          Developed by Geetanshu Patil
        </p>

        <div className="flex items-center gap-5 mt-4">
          <a
            href="https://github.com/GeetanshuPatil"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm md:text-base text-white hover:text-yellow-200 transition"
          >
            <FaGithub size={20} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/geetanshu-patil-923637375/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm md:text-base text-white hover:text-yellow-200 transition"
          >
            <FaLinkedin size={20} />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;