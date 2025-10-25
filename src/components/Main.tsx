"use client";

import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaMedium, SiTopmate
} from "react-icons/fa";
import { SiFreelancer } from "react-icons/si";
import { HiOutlineDocumentText } from "react-icons/hi";

export default function Main() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/portfolio/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full w-full px-6 md:px-12 lg:px-24 items-start justify-start">
        <div className="text-white max-w-xl mt-24 md:mt-32 space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
            Harshit Dwivedi
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl">
            Software Engineer | Full Stack Developer
          </p>

          {/* Social Icons */}
          <div className="flex flex-wrap gap-3 mt-4">
            <a
              href="https://www.linkedin.com/in/harshit-dwi7/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-blue-600 transition"
            >
              <FaLinkedin className="text-white text-xl" />
            </a>

            <a
              href="https://github.com/HD145"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-gray-800 transition"
            >
              <FaGithub className="text-white text-xl" />
            </a>

            <a
              href="https://www.freelancer.in/u/harshitBuilds"
              target="_blank"
              rel="noopener noreferrer"
              title="Freelancer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-cyan-500 transition"
            >
              <SiFreelancer className="text-white text-xl" />
            </a>


            <a
              href="https://x.com/harshitdwivedi_"
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter / X"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-sky-400 transition"
            >
              <FaTwitter className="text-white text-xl" />
            </a>

            <a
              href="https://www.instagram.com/dw_harshit/"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-pink-500 transition"
            >
              <FaInstagram className="text-white text-xl" />
            </a>

            <a
              href="https://medium.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Medium"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-black transition"
            >
              <FaMedium className="text-white text-xl" />
            </a>

            <a
              href="https://topmate.io/harshit_dwivedi1"
              target="_blank"
              rel="noopener noreferrer"
              title="Topmate"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-gray-800 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
                className="w-5 h-5 text-white"
                fill="currentColor"
              >
                <path d="M512 0C229.2 0 0 229.2 0 512s229.2 512 512 512 512-229.2 512-512S794.8 0 512 0zm120 720h-80V384h-80v336h-80V304h240v416z" />
              </svg>
            </a>
          </div>

          {/* Short About Me */}
          <p className="mt-6 text-gray-200 text-base sm:text-lg leading-relaxed border-l-4 border-yellow-400 pl-4 italic">
            A software sorcerer turning coffee into code. Welcome to my digital
            workshop.
          </p>

          {/* Button */}
          <a
            href={`${process.env.NEXT_PUBLIC_RESUME}`}
            target="_blank"
            rel="noopener noreferrer"
            title="View Resume"
            className="mt-6 inline-block px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-semibold rounded-lg shadow hover:scale-105 transition"
          >
            Resume
          </a>

        </div>
      </div>
    </section>
  );
}
