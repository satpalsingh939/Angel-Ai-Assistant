import React from "react";
import styles from "/public/css/about.module.css";
import { FaUser, FaMicrochip, FaCode, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function AboutMe() {
  return (
    <>

      <header className={styles["chat-header"]}>
            <div className={styles.logo}>
              <img src="/public/logoPS.png" alt="logo" />
            </div>
            <nav className={styles["nav-links"]}>
              <Link to="/">Home</Link>
              {/* <Link to="/">Contact</Link> */}
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
              <Link to="/member">Member</Link>
            </nav>
          </header>

      <main className={styles.mainP}>
        {/* Project About Section */}
        <section className={styles.blk1}>
          <div className={styles.blk1T}>
            <h1 className={styles.title}>AI Assistant</h1>
            <p className={styles.subtitle}>
              A smart assistant built with React, Node.js & MongoDB
            </p>
            <p className={styles.content1}>  
              This project is designed to provide users with a great experience of interacting
              with an intelligent assistant. It supports <b>voice and text-based queries</b>, helps
              in automating small tasks, and delivers quick, reliable information. The focus is on{" "}
              <b>direct access, usability, and responsiveness</b> for end users.
            </p>
          </div>
          <div className={styles.blk2}>
            <ul className={styles.factT}>
              <li>
                <FaMicrochip /> &nbsp; <span>Tech Stack:</span> React, Node.js, MongoDB
              </li>
              <li>
                <FaCode /> &nbsp; <span>Features:</span> Voice + Text Assistant, NLP, User-Friendly UI
              </li>
              <li>
                {/* <FaUser /> &nbsp; <span>Developer:</span> Palak Rathore / Satpal Singh Jadhav */}
                <FaUser /> &nbsp; <span>Developer:</span> Satpal Singh Jadhav
              </li>
            </ul>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className={styles.section}>
          <h2 className={styles.sectionTitle}>Core Features</h2>
          <div className={styles.grid}>
            <article className={styles.card}>
              <h3>Voice Recognition</h3>
              <p>Convert speech to text and respond with meaningful answers.</p>
            </article>
            <article className={styles.card}>
              <h3>Text Queries</h3>
              <p>Handle text-based inputs with accurate intent parsing.</p>
            </article>
            <article className={styles.card}>
              <h3>Scalability</h3>
              <p>Backend built with Node.js & MongoDB for future growth.</p>
            </article>
          </div>
        </section>

        {/* Project Focus */}
        <section id="project" className={styles.section}>
          <h2 className={styles.sectionTitle}>Project Vision</h2>
          <div className={styles.projectWrap}>
            <div className={styles.projectText}>
              <p>
                The AI Assistant is focused on being an everyday digital helper for users, with
                simple design and efficient responses. The project can be expanded to support{" "}
                <b>User access AI tool, educational help, and productivity tools</b> in the future.
              </p>
            </div>
            <div className={styles.projectCard}>
              <h3>Highlights</h3>
              <ul>
                <li>Natural Language Understanding</li>
                <li>Clean & responsive UI</li>
                <li>Fast backend APIs</li>
              </ul>
            </div>
          </div>
        </section>

      </main>
       <Footer />
    </> 
  );
}
