"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export default function Modal({ open, onClose, data }) {
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (open) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open || !data) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative w-full md:w-[70%] max-h-[85vh] shadow-2xl"
        >
          {/* Modal Content */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 overflow-y-auto max-h-[85vh] text-white">
            {/* Project Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 underline decoration-[#ffd700]/70">
              {data.title}
            </h2>

            {/* Image Gallery */}
            {/* Image Gallery */}
            {data.images?.length > 0 && (
              <div
                className={`grid gap-3 mb-6 ${data.images.length === 1
                  ? "grid-cols-1 justify-items-center"
                  : data.images.length === 2
                    ? "grid-cols-2 justify-items-center"
                    : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
                  }`}
              >
                {data.images.map((img, idx) => (
                  <motion.img
                    key={idx}
                    src={img}
                    alt={`Screenshot ${idx + 1}`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className={`rounded-lg shadow-lg ${data.images.length === 1
                      ? "w-auto h-48 object-contain" // ⬅ keeps same height as grid images
                      : data.images.length === 2
                        ? "w-4/5 h-48 object-cover"
                        : "w-full h-40 object-cover"
                      }`}
                  />
                ))}
              </div>
            )}


            {/* Project Details */}
            {data.details?.length > 0 && (
              <>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Highlights</h3>
                <ul className="list-disc pl-5 space-y-2 text-white/90 mb-6 text-sm">
                  {data.details.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </>
            )}

            {/* Tech Stack */}
            {data.stack?.length > 0 && (
              <>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Tech Stack</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {data.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-black/30 rounded-full border border-white/20 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </>
            )}

            {/* Live Project Link */}
            {data.link && (
              <div className="text-center">
                <a
                  href={data.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-[#ffd700] to-[#ffae00] text-black font-bold px-4 py-2 rounded-lg shadow-md hover:scale-105 transition"
                >
                  💻 View Project
                </a>
              </div>
            )}
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white text-xl hover:scale-110 transition z-50"
          >
            ✖
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
