"use client";
import { useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const techStack = [
    { src: "/portfolio/Java.svg", name: "Java" },
    { src: "/portfolio/JavaScript.svg", name: "JavaScript" },
    { src: "/portfolio/TypeScript.svg", name: "TypeScript" },
    { src: "/portfolio/HTML5.svg", name: "HTML" },
    { src: "/portfolio/CSS3.svg", name: "CSS" },
    { src: "/portfolio/React.svg", name: "React" },
    { src: "/portfolio/Next.js.svg", name: "Next.js" },
    { src: "/portfolio/Spring.svg", name: "Spring Boot" },
    { src: "/portfolio/Node.js.svg", name: "Node.js" },
    { src: "/portfolio/Express.svg", name: "Express" },
    { src: "/portfolio/Hibernate.svg", name: "Hibernate" },
    { src: "/portfolio/MySQL.svg", name: "MySQL" },
    { src: "/portfolio/MongoDB.svg", name: "MongoDB" },
    { src: "/portfolio/Material UI.svg", name: "Material UI" },
    { src: "/portfolio/Tailwind CSS.svg", name: "Tailwind CSS" },
    { src: "/portfolio/Bootstrap.svg", name: "Bootstrap" },
    { src: "/portfolio/Redux.svg", name: "Redux" },
    { src: "/portfolio/Postman.svg", name: "Postman" },
    { src: "/portfolio/Redis.svg", name: "Redis" },
    { src: "/portfolio/Docker.svg", name: "Docker" },
    { src: "/portfolio/GitHub.svg", name: "GitHub" },
    { src: "/portfolio/Heroku.svg", name: "Heroku" },
    { src: "/portfolio/Jenkins.svg", name: "Jenkins" },
    { src: "/portfolio/SonarQube.svg", name: "SonarQube" },
    { src: "/portfolio/Vercel.svg", name: "Vercel" },
    { src: "/portfolio/Jira.svg", name: "Jira" },
];


export default function TechStack() {
    const scrollRef = useRef(null);

    // Auto-scroll
    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollRef.current) {
                scrollRef.current.scrollBy({ left: 150, behavior: "smooth" });
                if (
                    scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
                    scrollRef.current.scrollWidth
                ) {
                    scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
                }
            }
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -150, behavior: "smooth" });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 150, behavior: "smooth" });
    };

    return (
        <section id="skills" className="relative w-[90%] py-12 bg-white mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Capability Console
            </h2>

            <div className="relative flex items-center w-full">
                {/* Left Arrow */}
                <button
                    className="absolute left-0 z-10 p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                    onClick={scrollLeft}
                >
                    <FaChevronLeft />
                </button>

                {/* Scrollable Container */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto scrollbar-hide px-12"
                >
                    {techStack.map((tech, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-24 h-28 flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300"
                        >
                            <img
                                src={tech.src}
                                alt={tech.name}
                                className="w-16 h-16 mb-2"
                                onError={(e) => {
                                    e.currentTarget.src = "/portfolio/web-dev.svg";
                                }}
                            />
                            <span className="text-sm font-medium text-gray-700">{tech.name}</span>
                        </div>
                    ))}
                </div>

                {/* Right Arrow */}
                <button
                    className="absolute right-0 z-10 p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                    onClick={scrollRight}
                >
                    <FaChevronRight />
                </button>
            </div>
        </section>
    );
}
