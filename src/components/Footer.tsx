"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-black/80 backdrop-blur-sm text-gray-300 py-8 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left side - Logo or Name */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-white tracking-wide">
            Harshit Dwivedi
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Crafting code with passion ✨
          </p>
        </div>

        {/* Center - Navigation */}
        <div className="flex flex-wrap justify-center gap-6">
          {["Home", "About", "Experience", "Skills", "Projects", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-yellow-400 transition-colors duration-200 cursor-pointer text-sm font-medium"
              >
                {item}
              </a>
            )
          )}
        </div>

        {/* Right side - Social Links */}
        <div className="flex gap-5">
          <a
            href="https://github.com/HD145"
            title="Github"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-colors duration-200"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.037c-3.338.724-4.033-1.415-4.033-1.415-.547-1.39-1.335-1.76-1.335-1.76-1.09-.744.083-.729.083-.729 1.204.084 1.84 1.236 1.84 1.236 1.07 1.83 2.808 1.303 3.492.996.108-.776.42-1.303.763-1.602-2.665-.3-5.467-1.334-5.467-5.933 0-1.312.469-2.383 1.236-3.223-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.403c1.02.004 2.047.138 3.003.403 2.292-1.552 3.3-1.23 3.3-1.23.653 1.653.241 2.873.118 3.176.77.84 1.236 1.91 1.236 3.223 0 4.61-2.807 5.628-5.48 5.922.43.372.823 1.104.823 2.227v3.293c0 .319.19.694.8.576C20.565 21.797 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/harshit-dwi7/"
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 
              2.24 5 5 5h14c2.76 0 5-2.24 
              5-5v-14c0-2.76-2.24-5-5-5zm-11.75 
              20h-2.5v-10h2.5v10zm-1.25-11.15c-.83 
              0-1.5-.68-1.5-1.5s.67-1.5 
              1.5-1.5 1.5.68 
              1.5 1.5-.67 1.5-1.5 
              1.5zm13 11.15h-2.5v-5.4c0-1.28-.02-2.93-1.79-2.93-1.79 
              0-2.07 1.4-2.07 2.84v5.49h-2.5v-10h2.4v1.37h.03c.33-.63 
              1.14-1.29 2.35-1.29 2.51 0 2.97 1.65 
              2.97 3.79v6.13z" />
            </svg>
          </a>

          <a
            href={`mailto:${process.env.NEXT_PUBLIC_MAIL_ID}`}
            title="Mail"
            className="hover:text-yellow-400 transition-colors duration-200"
            aria-label="Email"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 13.065L0 6V4l12 7 12-7v2l-12 7.065zM0 8v12h24V8l-12 7L0 8z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom - Copyright */}
      <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Harshit Dwivedi. All rights reserved.
      </div>
    </footer>
  );
}
