import { FaLinkedin, FaGithub,FaInstagram, FaEnvelope } from "react-icons/fa";
import React from "react";
export default function ProfileCard() {
  return (
    <div className="flex flex-wrap items-center justify-center bg-gray-100 dark:bg-gray-900 gap-4">
      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full sm:w-80 text-center">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6">
          <img
            src="/images/c-profile.jpg"
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto border-4 border-white"
          />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-purple-400">Founder</h3>
          <h2 className="text-xl font-bold text-white">Chayan Debbarma</h2>
          <p className="text-gray-400">B.Tech in EEE</p>
          <p className="text-gray-400">North Eastern Hill University, Shillong</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://www.linkedin.com/in/chayan-debbarma-808877238"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:mr.debbarmaoffice@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-600 text-2xl"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full sm:w-80 text-center">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto border-4 border-white"
          />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-purple-400">
            Co-Founder/Developer
          </h3>
          <h2 className="text-xl font-bold text-white">Arif Uz Zaman</h2>
          <p className="text-gray-400">B.Tech in CSE</p>
          <p className="text-gray-400">North Eastern Hill University, Shillong</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://www.linkedin.com/in/arif-uz-zaman-2a48b5275"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Airfzaman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:arifzaman700@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-600 text-2xl"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full sm:w-80 text-center">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6">
          <img
            src="images/jhon.jpg"
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto border-4 border-white"
          />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-purple-400">
            Digital Creator
          </h3>
          <h2 className="text-xl font-bold text-white">John Debbarma</h2>
          <p className="text-gray-400">B.Tech in EEE</p>
          <p className="text-gray-400">North Eastern Hill University, Shillong</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="mailto:dvarmajohn@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-600 text-2xl"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
