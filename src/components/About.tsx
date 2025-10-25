"use client";
import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function About() {
  return (
    <section
      id="about"
      className={`${sora.className} relative w-full min-h-[70vh] bg-gray-50 flex flex-col md:flex-row overflow-hidden`}
    >
      {/* Left Side - Bold Intro */}
      <div className="w-full md:w-[30%] flex flex-col justify-center items-center md:items-end p-8 bg-gradient-to-b from-[#5c6bc0] to-[#3949ab] md:rounded-bl-2xl drop-shadow-xl text-center md:text-right">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-snug animate-fade-in">
          What <br /> I Do 🚀
        </h2>
        <p className="mt-4 text-white/80 text-sm sm:text-base">
          Full-stack wizardry with a love for clean code & sleek UX
        </p>
      </div>

      {/* Right Side - Description + Feature */}
      <div className="w-full md:w-[70%] flex flex-col justify-center items-start px-6 md:px-12 py-10 space-y-6">
        <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
          I’m a <span className="font-semibold text-gray-900">Software Engineer at Solveda</span>, 
          specializing in full-stack development and owning the entire journey — from crafting 
          pixel-perfect frontends to building secure, high-performance backends. I thrive on 
          turning ideas into seamless, scalable, and visually engaging web experiences.
          <br />
          <br />
          With{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 font-semibold">
            Java, JavaScript, React, Next.js, and Spring Boot
          </span>{" "}
          in my toolkit, I deliver precision, performance, and aesthetic code in every project. 
          Passionate about clean code and modern UI, I create interactive, user-friendly, and 
          high-performance applications that truly make an impact.
        </p>

        {/* Education Card */}
        <div className="mt-8 grid grid-cols-1 gap-6 w-full">
          <div className="group relative w-full h-40 cursor-pointer [perspective:1000px]">
            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              
              {/* Front */}
              <div className="absolute inset-0 flex flex-col justify-center items-center space-y-3 bg-white rounded-xl shadow-xl p-5 [backface-visibility:hidden] hover:scale-105 transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 text-indigo-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14l6.16-3.422a12 12 0 010 6.844L12 14z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14v7"
                  />
                </svg>
                <span className="text-xl font-semibold text-gray-800">
                  Bachelor of Technology
                </span>
                <p className="text-gray-500 text-sm text-center">
                  Galgotias University • 9.30 CGPA
                </p>
              </div>

              {/* Back */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#5c6bc0] to-[#3949ab] rounded-xl text-white text-center p-5 shadow-xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="text-sm leading-relaxed">
                  Completed my Bachelor of Technology at Galgotias University with a 9.30 CGPA in 2024.
                  Focused on software development, full-stack projects, and building scalable applications.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
