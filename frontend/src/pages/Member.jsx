import React from "react";
import styles from "/public/css/member.module.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function MembershipPage() {
  // Function for button click
  const handleMembershipClick = (plan) => {
    alert(
      `⚠️ ${plan} Membership process update hona baki hai!\n\n` +
      `👉 Abhi ke liye aap Free Trial wala pack access kar sakte ho.\n` +
      `🚀 New features jaldi hi add kiye jayenge. Sorry for that!`
    );
  };

  const handleMembershipF = (plan) => {
    alert(  
      `🎉 You have selected the ${plan} Membership!\n\n` +
      `👉 Create your account and enjoy your free access pack.\n`
    );
  };

  return (
    <>
      <header className={styles["chat-header"]}>
        <div className={styles.logo}>
          <img src="/public/logoPS.png" alt="logo" />
        </div>
        <nav className={styles["nav-links"]}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>

      <section className={styles.main}>
        <h1 className={styles.title}>Choose Your Membership</h1>

        <div className={styles.container}>
          {/* Free Plan */}
          <div className={styles.blk1}>
            <h2 className={styles.blk1T}>Free Member</h2>
            <p className={styles.price}>₹0 / month</p>
            <ul className={styles.features}>
              <li>✅ Join community & get updates</li>
              <li>✅ Limited Chat Access</li>
              <li>✅ Limited Voice Assistant</li>
              <li>❌ No Developer support</li>
            </ul>
            <button
              className={styles.btn}
              onClick={() => handleMembershipF("Free")}
            >
              Start Free
            </button>
          </div>

          {/* Premium Plan */}
          <div className={styles.blk2}>
            <h2 className={styles.blk1T}>Premium Member</h2>
            <p className={styles.price}>₹499 / month</p>
            <ul className={styles.features}>
              <li>✅ Unlimited Chat + Voice Assistant</li>
              <li>✅ Early access to new AI tools</li>
              <li>✅ Premium support (priority)</li>
              <li>✅ Advanced access</li>
            </ul>
            <button
              className={styles.btn}
              onClick={() => handleMembershipClick("Premium")}
            >
              Get Premium
            </button>
          </div>

          {/* Pro Plan */}
          <div className={styles.blk3}>
            <h2 className={styles.blk1T}>Pro Member</h2>
            <p className={styles.price}>₹999 / month</p>
            <ul className={styles.features}>
              <li>✅ Everything in Premium</li>
              <li>✅ Full customization</li>
              <li>✅ Unlimited access to all features</li>
              <li>✅ Developer Support</li>
            </ul>
            <button
              className={styles.btn}
              onClick={() => handleMembershipClick("Pro")}
            >
              Go Pro
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
