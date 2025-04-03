import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
export default function Footer() {
  return (
    <footer className="dark:bg-gray-800 bg-white text-black dark:text-gray-400 py-6">
      <div className="container mx-auto px-6 md:px-12">
        {/* Top Links Section */}
        <div className="flex flex-wrap justify-center space-x-4 md:space-x-8 text-sm md:text-base mb-4">
          <a href="/Objectives" className="hover:text-gray-700 dark:hover:text-white transition-colors">
            Objectives
          </a>
          <a href="/Contact" className=" hover:text-gray-700 hover:text-grey dark:hover:text-white transition-colors">
            Contact Us
          </a>
          <a href="/projects" className="hover:text-gray-700 dark:hover:text-white transition-colors">
            Profile
          </a>
          <a href="#" className="hover:text-gray-700 dark:hover:text-white transition-colors">
            Home
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 text-xl mb-4">
          <a href="https://www.facebook.com/share/1FGhvoEw89/" aria-label="Facebook" target="/_blank" className="hover:text-gray-700 dark:hover:text-white transition-colors">
            <FaFacebook className="h-6 w-6" />
          </a>
          <a href="https://www.instagram.com/innovate360ind" target="/_blank" aria-label="Instagram" className="hover:text-gray-700 dark:hover:text-white transition-colors">
            <FaInstagram className="h-6 w-6" />
          </a>
          <a href="#" aria-label="Twitter" target="/_blank" className="hover:text-gray-700 dark:hover:text-white transition-colors">
            <FaTwitter className="h-6 w-6" />
          </a>
          <a href="https://www.linkedin.com/in/arif-uz-zaman-2a48b5275" target="/_blank" aria-label="Linkedin" className="hover:text-gray-700 dark:hover:text-white transition-colors">
            <FaLinkedin className="h-6 w-6" />
          </a>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-sm md:text-base">
          &copy; 2025 innovate360, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
