// Contact.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({});

    const validate = (name, value) => {
        let error = "";
        if (name === "name") {
            if (!value) error = "Name is required";
            else if (value.length < 2) error = "Name must be at least 2 characters";
        }
        if (name === "email") {
            if (!value) error = "Email is required";
            else if (!/\S+@\S+\.\S+/.test(value)) error = "Invalid email address";
        }
        if (name === "message") {
            if (!value) error = "Message is required";
            else if (value.length < 10) error = "Message must be at least 10 characters";
        }
        return error;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: validate(name, value) });
    };

    const handleSubmit = (e) => {
        const newErrors = {};
        Object.keys(formData).forEach((field) => {
            newErrors[field] = validate(field, formData[field]);
        });
        setErrors(newErrors);

        if (Object.values(newErrors).some((error) => error)) {
            e.preventDefault();
        }
    };

    return (
        <motion.section 
            id="contact"
            className="contact__container"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <div className="contact__content-text">
                <h2 className="contact__title">Contact</h2>
                <p className="contact__subtitle">
                    Get in touch. I’m available for freelance or full-time roles. Let’s talk.
                </p>
            </div>

            <form
                className="contact__form"
                action="https://formspree.io/f/mwpqzprn"
                method="POST"
                onSubmit={handleSubmit}
            >
                <label htmlFor="name">Your name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                {errors.name && <span className="error">{errors.name}</span>}

                <label htmlFor="email">Your email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                {errors.email && <span className="error">{errors.email}</span>}

                <label htmlFor="message">Your message:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                {errors.message && <span className="error">{errors.message}</span>}

                <button type="submit">Send</button>
            </form>
        </motion.section>
    );
}
