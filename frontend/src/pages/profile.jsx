import React, { useEffect, useState } from "react";
import styles from "/public/css/profile.module.css";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

export default function ProfilePage() {
  const [user, setUser] = useState({ name: "", email: "", bio: "", profilePic: "" });
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  // ✅ Fetch Profile Data
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setLoading(false);
    }

    const fetchProfile = async () => {
      try {
        // const res = await fetch("http://localhost:5000/api/auth/profile", {
        const res = await fetch("https://angel-ai-assistant.onrender.com/api/auth/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        if (res.ok) {
          setUser(data);
          localStorage.setItem("user", JSON.stringify(data));
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [token]);

  if (loading) return <p>Loading...</p>;

  // ✅ Default avatar (first letter of name)
  const firstLetter = user.name ? user.name.charAt(0).toUpperCase() : "?";

  // ✅ Logout
  const handleLogout = async () => {
    try {
      // await fetch("http://localhost:5000/api/auth/logout", {
      await fetch("https://angel-ai-assistant.onrender.com/api/auth/logout", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (err) {
      console.error(err);
    } finally {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/");
    }
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src="/logoPS.png" alt="logo" />
        </div>
        <Link to="/voice" className={styles.headerLink}>
          Virtual Angel
        </Link>
        <Link to="/text" className={styles.headerLink}>
          Angel Chatbot
        </Link>
        {/* <a href="/text" className={styles.headA}>
          <button className={styles.btnSecondary}>Angel Chatbot</button>
        </a> */}
        <nav className={styles.nav}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/member">Member</Link>
        </nav>
      </header>

      <main className={styles.profilePage}>
        <h1 className={styles.title}>Profile</h1>

        <div className={styles.card}>
          <div className={styles.defaultAvatar}>{firstLetter}</div>
          <div className={styles.infoBlock}>
            <p><b>Name:</b> {user.name}</p>
            <p><b>Email:</b> {user.email}</p>
            {/* <p><b>Bio:</b> {user.bio || "No bio added yet"}</p> */}
          </div>
          <button onClick={handleLogout} className={styles.btnLogout}>
            Logout
          </button>

          <button className={styles.btnLogout}>
            <Link to="/forgetPass">Change Password</Link>
          </button>

        </div>
      </main>


      <Footer />
    </>
  );
}
