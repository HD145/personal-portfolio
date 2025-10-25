"use client";

import { useState, useEffect } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    // Validate inputs
    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        if (!formData.message.trim()) newErrors.message = "Message is required";
        else if (formData.message.trim().length < 5)
            newErrors.message = "Message must be at least 5 characters";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle input change and clear errors as soon as user types
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });

        // Clear the error for this field
        if (errors[id]) {
            setErrors((prev) => ({ ...prev, [id]: "" }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        setLoading(true);
        try {
            const response = await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSuccess(true);
                setFormData({ name: "", email: "", message: "" });
                setErrors({});

                // Hide success message after 5 seconds
                setTimeout(() => setSuccess(false), 5000);
            } else {
                alert("Failed to send message. Please try again later.");
            }
        } catch (err) {
            console.error(err);
            alert("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            id="contact"
            className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 py-20"
        >
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
                Let's Connect and Make it Happen 🚀
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl">
                Have an idea, project, or just want to say hi? Fill out the form below
                or reach out directly via{" "}
                <a
                    href={`mailto:${process.env.NEXT_PUBLIC_MAIL_ID}`}
                    className="text-[#ffd23e] hover:underline"
                    title="Send me an email"
                >
                    {process.env.NEXT_PUBLIC_MAIL_ID}
                </a>
                
            </p>

            <form className="w-full max-w-lg space-y-6" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ffd23e] ${errors.name ? "border border-red-500" : ""
                            }`}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ffd23e] ${errors.email ? "border border-red-500" : ""
                            }`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        id="message"
                        rows={5}
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ffd23e] ${errors.message ? "border border-red-500" : ""
                            }`}
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    style={{ cursor: "pointer" }}
                    className="w-full bg-[#ffd23e] text-black font-semibold py-3 rounded-lg shadow-md hover:bg-yellow-400 transition"
                >
                    {loading ? "Sending..." : "Send Message"}
                </button>

                {success && (
                    <p className="text-green-500 text-center mt-4">
                        Message sent successfully!
                    </p>
                )}
            </form>
        </section>
    );
}
