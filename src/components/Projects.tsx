"use client";
import Modal from "@/common/Modal";
import { useState } from "react";

const projects = [
  {
    title: "FilmTix – Movie Ticket Booking System",
    brief:
      "A full-stack movie ticket booking platform with a secure backend and an interactive React frontend, built for performance, scalability, and seamless user experience.",
    images: [
      "/portfolio/p1-2.png",
      "/portfolio/p1-1.png",
      "/portfolio/p1-3.png"
    ],
    details: [
      "Designed and implemented a modular backend system enabling user management, theater setup, movie cataloging, and ticket booking workflows.",
      "Secured the platform using Spring Security with JWT-based authentication and role-based access control.",
      "Developed RESTful APIs supporting dynamic seat layouts, movie schedules, and ticket confirmations.",
      "Optimized backend performance using Hibernate (JPA) and Redis caching for high-frequency data retrieval and fast response times.",
      "Implemented automated email notifications for successful bookings using JavaMailSender.",
      "Containerized backend with Docker and deployed on Render for scalable cloud hosting.",
      "Currently developing the frontend using React and Tailwind CSS, integrating APIs for real-time booking and interactive user experience.",
      "Followed layered architecture and proper exception handling to ensure maintainable, high-performance code."
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Spring Security (JWT)",
      "Hibernate (JPA)",
      "MySQL",
      "Redis",
      "Docker",
      "JavaMailSender",
      "JavaScript",
      "React",
      "Tailwind CSS"
    ],
    link: "https://github.com/HD145/filmtix-backend"
  },  
  {
    title: "Sahil Writes – Writer Portfolio Website",
    brief:
      "A dynamic portfolio website for a writer, showcasing books, enabling reader interaction, and boosting online visibility through SEO.",
    images: [
      "/portfolio/p2-1.png",
      "/portfolio/p2-2.png",
      "/portfolio/p2-3.png"
    ],
    details: [
      "Developed a responsive portfolio website allowing the writer to showcase and sell their books online.",
      "Implemented a contact feature using NodeMailer so readers can easily get in touch with the author.",
      "Integrated multiple platforms and links where the books are available for purchase.",
      "Applied SEO optimization techniques to enhance search visibility and reach a wider audience.",
      "Maintained the site on GoDaddy and deployed the frontend on Vercel for reliable performance and scalability.",
      "Built using React, HTML, CSS, and JavaScript with clean, modular, and maintainable code.",
      "UI designed collaboratively with my colleague, Ajit Jha (https://www.linkedin.com/in/ajit-kumar-jha-6836a8256/)."
    ],
    stack: [
      "JavaScript",
      "React",
      "HTML",
      "CSS",
      "NodeMailer",
      "Vercel Deployment",
      "SEO Optimization"
    ],
    link: "https://www.sahilwrites.com/"
  },   
  {
    title: "GitSpy – GitHub Profile Explorer",
    brief:
      "A web application to explore GitHub profiles by fetching detailed user data, repositories, and social metrics in real-time.",
    images: [
      "/portfolio/p3-1.png",
      // "/portfolio/gitspy2.png",
      // "/portfolio/gitspy3.png"
    ],
    details: [
      "Developed a responsive web app that allows users to search any GitHub username and instantly retrieve profile details.",
      "Displayed user information including repositories, followers, and following count in a clean, interactive layout.",
      "Integrated **Axios** to fetch data from GitHub’s REST API efficiently and handle asynchronous requests.",
      "Built with **React, HTML, and CSS** ensuring a modular, maintainable, and responsive frontend.",
      "Implemented error handling to manage invalid usernames or API request failures gracefully."
    ],
    stack: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Axios",
      "GitHub API",
      "Netlify"
    ],
    link: "https://spygit.netlify.app/"
  },  
  {
    title: "InkSpire – Full-Stack Blogging Platform",
    brief:
      "A secure, scalable, and feature-rich blogging platform with real-time interactions including likes, comments, follows, and notifications.",
    images: [
      "/portfolio/p4-1.png",
      "/portfolio/p4-2.png",
      // "/portfolio/inkspire3.png"
    ],
    details: [
      "Developed a full-stack blogging platform enabling users to create, edit, and engage with posts in real time.",
      "Implemented modern social features: likes, comments, follows, and notifications for a dynamic user experience.",
      "Secured the platform using JWT, Google OAuth 2.0, and optional Multi-Factor Authentication via Nodemailer.",
      "Optimized performance and scalability with lazy loading, caching strategies, and modular RESTful APIs.",
      "Designed a maintainable, extensible codebase with clean architecture for future feature expansion.",
      "Integrated role-based access control for content moderation and administrative tasks.",
      "Ensured smooth real-time updates with efficient state management and optimized API requests."
    ],
    stack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "JWT",
      "Google OAuth 2.0",
      "Nodemailer",
      "Lazy Loading",
      "RESTful APIs",
      "Caching Strategies"
    ],
    link: "https://github.com/HD145/blog-service-frontend"
  }
  
];

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="relative w-full flex flex-col md:flex-row">
      {/* Left Panel */}
      <div className="w-full md:w-[30%]">
        <div className="sticky top-0 bg-gradient-to-b from-[#4f57c1] to-[#3642a6] p-6 flex flex-col items-center justify-center h-auto md:h-[100vh] text-center">
          <img
            src="/portfolio/projects.PNG"
            alt="Projects Illustration"
            className="w-56 h-56 object-contain animate-pulse drop-shadow-lg mb-6"
          />
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide drop-shadow-lg">
            Engineering Bay
          </h2>
          <p className="mt-4 text-white/80 text-lg max-w-xs">
            A showcase of projects where code meets creativity 🚀
          </p>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-[70%] bg-[#5067c1] p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-[1.02] transform transition duration-300 flex flex-col"
            >
              {/* Image */}
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-44 object-cover rounded-xl mb-4"
              />

              {/* Title & Brief */}
              <div className="flex flex-col items-center text-center flex-grow">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-white/80 text-sm mb-6">{project.brief}</p>
              </div>

              {/* Centered View Details Button */}
              <div className="flex justify-center mt-auto">
                <button
                  onClick={() => setSelected(project)}
                  className="bg-gradient-to-r from-[#ffd700] to-[#ffae00] text-black font-semibold px-5 py-2 rounded-lg shadow-md hover:scale-105 transition"
                  style={{ cursor: "pointer" }}
                >
                  🔍 View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal open={!!selected} onClose={() => setSelected(null)} data={selected} />
    </section>
  );
}
