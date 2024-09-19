// src/components/Contact.js
import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        email: "",
        subject: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            // Here you can handle form submission, e.g., via an API
            console.log("Form data:", formData);
            // Example of a mock API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            alert("Message sent successfully!");
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-container" style={styles.container} >
            <h2 style={styles.header}>Contact Us</h2>
            <p style={styles.subtext}>
                Got a technical issue? Want to send feedback about a beta feature? Let us know.
            </p>
            <form onSubmit={handleSubmit} style={styles.form}>
                <input
                    type="email"
                    name="email"
                    placeholder="name@teethseg.com"
                    value={formData.email}
                    onChange={handleChange}
                    style={styles.input}
                    required
                />
                <input
                    type="text"
                    name="subject"
                    placeholder="Let us know how we can help you"
                    value={formData.subject}
                    onChange={handleChange}
                    style={styles.input}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Leave a comment..."
                    value={formData.message}
                    onChange={handleChange}
                    style={styles.textarea}
                    required
                />
                <button type="submit" style={styles.button} disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                </button>
            </form>
            <div style={styles.infoSection}>
                <div style={styles.infoItem}>
                    <p>Our Location</p>
                    <p>Villa Num 75 Lotissement la gare Mohammedia Maroc</p>
                </div>
                <div style={styles.infoItem}>
                    <p>How Can We Help?</p>
                    <p>+212 5 23 30 04 46</p>
                    <p>3dmartfactory@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

// Styles inline pour simplifier, tu peux les externaliser dans un fichier CSS si tu préfères
const styles = {
    container: {
        padding: "20px",
        maxWidth: "600px",
        margin: "0 auto",
        backgroundColor: "#f1f5f9",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" // Added a subtle shadow
    },
    header: {
        textAlign: "center",
        color: "#4FD1C5"
    },
    subtext: {
        textAlign: "center",
        marginBottom: "20px",
        fontSize: "1rem"
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "15px"
    },
    input: {
        padding: "10px",
        fontSize: "1rem",
        borderRadius: "4px",
        border: "1px solid #ccc",
        boxSizing: "border-box" // Ensures padding does not affect width
    },
    textarea: {
        padding: "10px",
        fontSize: "1rem",
        height: "100px",
        borderRadius: "4px",
        border: "1px solid #ccc",
        boxSizing: "border-box" // Ensures padding does not affect width
    },
    button: {
        backgroundColor: "#3182CE",
        color: "white",
        padding: "10px",
        borderRadius: "4px",
        border: "none",
        cursor: "pointer",
        fontSize: "1rem"
    },
    infoSection: {
        marginTop: "20px",
        textAlign: "center"
    },
    infoItem: {
        marginBottom: "10px"
    }
};

export default Contact;
