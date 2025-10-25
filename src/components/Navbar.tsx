"use client";

import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Smooth scroll function without changing URL
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false); // close mobile menu after click
        }
    };

    return (
        <nav className="fixed top-0 w-full z-50 flex justify-end items-center p-4 md:p-4">

            <ul className="hidden md:flex space-x-8 px-6 py-2 rounded-full shadow-lg 
                     bg-black/60 backdrop-blur-sm text-white font-semibold">
                {["home", "about", "experience", "skills", "projects", "contact"].map((section) => (
                    <li key={section}>
                        <button
                            onClick={() => scrollToSection(section)}
                            className="hover:text-yellow-400 transition-colors duration-200 cursor-pointer"
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </button>
                    </li>
                ))}
            </ul>

            {/* Mobile Hamburger */}
            <div className="md:hidden relative">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white focus:outline-none z-50 relative cursor-pointer"
                >
                    {isOpen ? (
                        <svg className="w-7 h-7" viewBox="0 0 24 24">
                            <path
                                d="M6 18L18 6M6 6l12 12"
                                stroke="white"
                                strokeWidth={2}
                                strokeLinecap="round"
                            />
                        </svg>
                    ) : (
                        <svg className="w-7 h-7" viewBox="0 0 24 24">
                            <path
                                d="M4 6h16M4 12h16M4 18h16"
                                stroke="white"
                                strokeWidth={2}
                                strokeLinecap="round"
                            />
                        </svg>
                    )}
                </button>

                {/* Mobile menu with slide transition */}
                <div
                    className={`fixed top-16 right-0 bg-black/80 backdrop-blur-sm shadow-lg rounded-lg w-40 p-4 
                      transform transition-transform duration-300 ease-in-out
                      ${isOpen ? "translate-x-0" : "translate-x-full"}`}
                >
                    {["home", "about", "experience", "skills", "projects", "contact"].map((section) => (
                        <button
                            key={section}
                            onClick={() => scrollToSection(section)}
                            className="block w-full text-left text-white font-semibold py-2 hover:text-yellow-400 transition-colors duration-200 cursor-pointer"
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
}
