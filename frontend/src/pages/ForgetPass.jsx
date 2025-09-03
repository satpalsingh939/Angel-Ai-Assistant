import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "/public/css/formatPass.module.css";
import Footer from "../components/Footer";

export default function ForgetPassword() {
    const [step, setStep] = useState(1); // 1 = email verify, 2 = new password
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [msg, setMsg] = useState("");
    const nav = useNavigate(); 

    async function verifyEmail(e) {
        e.preventDefault();
        try {
            // const res = await fetch("http://localhost:5000/api/auth/emailFind", {
            const res = await fetch("https://angel-ai-assistant.onrender.com/api/auth/emailFind", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });
            const data = await res.json();
            if (res.ok) {
                alert("Email verified! Please enter new password.");
                setStep(2); // ✅ email mil gaya to next step dikhayenge
                // setMsg("Email verified! Please enter new password.");
            } else {
                alert(data.message);
            }
        } catch (err) {
            alert("Something went wrong");
            console.error(err);
            // setMsg("Something went wrong");
        }
    }

    async function updatePassword(e) {
        e.preventDefault();
        try {
            // const res = await fetch("http://localhost:5000/api/auth/forgetPass", {
            const res = await fetch("https://angel-ai-assistant.onrender.com/api/auth/forgetPass", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, newPassword }),
            });
            const data = await res.json();
            if (res.ok) {
                // setMsg("Password updated successfully!");
                alert("Password updated successfully!");
                setTimeout(() => nav("/login"), 2000);
            } else {
                setMsg(data.message);
            }
        } catch (err) {
            alert("Something went wrong");
            console.error(err);
            // setMsg("Something went wrong");
        }
    }

    return (
        <>
            <header className={styles["chat-header"]}>
                <div className={styles.logo}>
                    <img src="/logoPS.png" alt="logo" />
                </div>
                <nav className={styles["nav-links"]}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    {/* <Link to="#contactU">Contact</Link> */}
                    <a href="#contactU">Contact</a>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/member">Member</Link>
                </nav>
            </header>

            <div className={styles.formatContainer}>
                <div className={styles.formatCard}>
                    <div className={styles.cardBody}>
                        <h4>Reset Password</h4>

                        {step === 1 && (
                            <form className={styles.form} onSubmit={verifyEmail}>
                                <div className={styles.formGroup}>
                                    <input
                                        type="email"
                                        className={styles.formControl}
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <button className={styles.btnColor} type="submit">
                                    Verify Email
                                </button>
                                {msg && <p className={styles.errorText}>{msg}</p>}
                            </form>
                        )}

                        {step === 2 && (
                            <form className={styles.form} onSubmit={updatePassword}>
                                <div className={styles.formGroup}>
                                    <input
                                        type="password"
                                        className={styles.formControl}
                                        placeholder="Enter new password"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <button className={styles.btnColor} type="submit">
                                    Update Password
                                </button>
                                {msg && <p className={styles.errorText}>{msg}</p>}
                            </form>
                        )}
                    </div>
                </div>
            </div>
            <Footer />

        </>
    );
}
