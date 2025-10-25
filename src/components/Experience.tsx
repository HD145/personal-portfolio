"use client";

import { Briefcase, Code, Rocket } from "lucide-react";

const experiences = [
  {
    company: "Solveda",
    role: "Software Engineer",
    duration: "January'24 - Present",
    icon: <Code className="w-6 h-6 text-black" />,
    points: [
      "Developed enterprise-level application using Next.js, optimized performance with lazy loading and code splitting.",
      "Designed scalable backend services using Spring Boot and ensured high performance by implementing Redis caching for frequently accessed data.",
      "Built reusable custom hooks and API context for efficient state management and maintainability.",
      "Integrated RESTful APIs using Axios and SWR, leveraging mutation for real-time updates and cache management.",
      "Developed core modules such as Purchase Order and Intransit system handling critical business operations.",
      "Automated weekly data refresh for purchase order reports using a Cron scheduler, ensuring up-to-date reporting.",
      "Implemented Jenkins-based CI/CD for automated frontend deployment and testing."
    ],
    stack: [
      "Next.js",
      "Spring Boot",
      "Redis",
      "Axios",
      "SWR",
      "MySQL",
      "Material UI",
      "GitHub",
      "Jenkins"
    ]
  },
  {
    company: "Accenture",
    role: "Intern",
    duration: "June'23 - July'23",
    icon: <Code className="w-6 h-6 text-black" />,
    points: [
      "Collaborated on the development of a data portal aimed at monitoring and managing certification and training program records within the organization",
      "Built features enabling associates to enroll, track, and complete programs, while allowing admin monitoring."
    ],
    stack: ["Microsoft Powerapps"]
  },
  {
    company: "Rudraksha Welfare Foundations",
    role: "Full Stack Developer",
    duration: "August'22 - October'22",
    icon: <Code className="w-6 h-6 text-black" />,
    points: [
      "Implemented a secure admin login system using JWT for authentication and integrated Redux Toolkit to manage application state efficiently.",
      "Designed and implemented the frontend using React and backend APIs with Node.js for a Courier Management System (CMS), streamlining package monitoring and tracking processes.",
      "Optimized overall application performance and enhanced user experience by implementing reusable components and efficient API integrations."
    ],
    stack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux Toolkit",
      "JWT",
      "Bootstrap"
    ]
  }
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full flex flex-col md:flex-row bg-gradient-to-r from-gray-100 via-white to-gray-100"
    >
      {/* Left Side: Experience Cards */}
      <div className="w-full md:w-[70%] flex flex-col order-2 md:order-1">
        <div className="flex-1 flex flex-col space-y-8 p-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-[#ffd23e] to-[#ffaf40] p-8 shadow-lg flex flex-col space-y-4 rounded-2xl transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Company Header with Icon */}
              <div className="flex items-center space-x-3 justify-center">
                {exp.icon}
                <h3 className="text-2xl font-extrabold tracking-wide text-black underline underline-offset-4 decoration-gray-800">
                  {exp.company}
                </h3>
              </div>

              {/* Role & Duration */}
              <div className="flex justify-between text-gray-900 flex-wrap font-semibold">
                <span className="italic">{exp.role}</span>
                <span>{exp.duration}</span>
              </div>

              {/* Tech Stack */}
              <div className="text-sm text-gray-800 font-bold">
                <span className="text-black">Tech Stack:</span>{" "}
                {exp.stack.join(", ")}
              </div>

              {/* Points */}
              <ul className="list-disc pl-6 space-y-2 text-gray-900">
                {exp.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="text-gray-800 leading-relaxed tracking-wide"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side: Sticky Section Title */}
      <div className="w-full md:w-[30%] order-1 md:order-2 my-5 transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="sticky top-0 bg-[#ffd23e] p-8 flex flex-col items-center justify-center h-auto md:h-screen shadow-lg rounded-bl-2xl md:rounded-bl-none md:rounded-l-2xl">
          <img
            src="/portfolio/exp.png"
            alt="Experience Illustration"
            className="w-72 h-48 object-contain mb-6 drop-shadow-xl"
          />
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-snug text-center drop-shadow-md">
            Experience
          </h2>
          <p className="mt-4 text-gray-800 font-medium text-center max-w-sm">
            A journey of building, breaking, fixing, and creating value 🚀
          </p>
        </div>
      </div>
    </section>
  );
}
