import React, { useState } from "react";
import "/public/css/contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
  };

  return (
    <div className={styles.contact}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className={styles["contact-form"]}>
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required 
        />
        <textarea 
          name="message" 
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>



    </div>
  );
}
