// import React, { useState } from "react";
// import "/public/css/footer.module.css"
// export default function Footer() {
//   const [form, setForm] = useState({ email: "", message: "" });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Contact form submitted:", form);
//     alert("Message sent successfully!");
//     setForm({ email: "", message: "" });
//   };

//   return (
//     <footer className="footer" id="footer">
//       <div className="main-content">
//         {/* Left Section */}
//         <div className="left box">
//           <h2>About us</h2>
//           <div className="content">
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
//               corporis nostrum? Quam fugiat provident veniam totam rerum eaque
//               culpa molestiae ullam eveniet natus incidunt.
//             </p>
//             <p>
//               Voluptas reprehenderit ipsam quas, quasi odio totam vel fuga! Illo
//               sunt harum excepturi quis culpa atque, soluta est modi omnis.
//             </p>
//             <div className="social">
//               <a href="#footer"><span className="fab fa-facebook-f"></span></a>
//               <a href="#footer"><span className="fab fa-twitter"></span></a>
//               <a href="#footer"><span className="fab fa-instagram"></span></a>
//               <a href="#footer"><span className="fab fa-youtube"></span></a>
//             </div>
//           </div>
//         </div>


//  {/* Right Section */}
//         <div className="right box">
//           <h2>Contact us</h2>
//           <div className="content">
//             <form onSubmit={handleSubmit}>
//               <div className="email">
//                 <div className="text">Email</div>
//                 <input
//                   type="email"
//                   placeholder="Email address..."
//                   required
//                   value={form.email}
//                   onChange={(e) => setForm({ ...form, email: e.target.value })}
//                 />
//               </div>
//               <div className="msg">
//                 <div className="text">Message</div>
//                 <input
//                   type="text"
//                   placeholder="Your message..."
//                   required
//                   value={form.message}
//                   onChange={(e) => setForm({ ...form, message: e.target.value })}
//                 />
//               </div>
//               <div className="btn">
//                 <button type="submit">Send</button>
//               </div>
//             </form>
//           </div>
//         </div>



//         {/* Center Section */}
//         <div className="center box">
//           <h2>Address</h2>
//           <div className="content">
//             <div className="place">
//               <span className="fas fa-map-marker-alt"></span>
//               <span className="text">Gurugram, India</span>
//             </div>
//             <div className="phone">
//               <span className="fas fa-phone-alt"></span>
//               <span className="text">+91 8977906116</span>
//             </div>
//             <div className="email">
//               <span className="fas fa-envelope"></span>
//               <span className="text">BookEngineABC@gmail.com</span>
//             </div>
//           </div>
//         </div>


//       </div>

//       {/* Bottom Footer */}
//       <div className="bottom">
//         <span className="credit">
//           Copyright <span className="far fa-copyright"></span> 2023
//         </span>
//         <span>
//           <a href="https://github.com/chetannihith">chetannihith</a> | All rights reserved.
//         </span>
//       </div>
//     </footer>
//   );
// }


import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import styles from "/public/css/footer.module.css";

export default function Footer() {
  const [form, setForm] = useState({ email: "", message: "" });



  async function submit(e) {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });

      // const data = await res.json();
      // if (data.token) {
      //   localStorage.setItem("token", data.token);
      //   nav("/voice"); // redirect to VoiceAssistance.jsx
      // } else {
      //   setMsg(data.message || "Error");
      // }
    } catch (err) {
      console.error(err);
      setMsg("Something went wrong");
    }
  }


  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", form);
    alert("Message sent successfully!");
    setForm({ email: "", message: "" });
  };

  return (
    <footer className={styles.footer} id="footer">
      <div className={styles["main-content"]}>

        {/* Left Section */}
        <div className={`${styles.left} ${styles.box}`}>
          <h2>About us</h2>
          <div className={styles.content}>
            <p>
              “Built with ❤️ by Satpal Singh Jadhav,
              Angel Assistant is an AI-powered text & voice assistant designed to make your tasks easier. Whether you need instant answers, help with daily queries, or simple conversation, Angel is always here to help.”
            </p>
            <p>
              Mission: <br />
              “To provide a simple, reliable and smart AI assistant for everyone.” <br />

              Vision: <br />
              “Making AI accessible and helpful for daily life.”
            </p>
            {/* <div className={styles.social}>
              <a href="#footer"><span className="fab fa-facebook-f"></span></a>
              <a href="#footer"><span className="fab fa-twitter"></span></a>
              <a href="#footer"><span className="fab fa-instagram"></span></a>
              <a href="#footer"><span className="fab fa-youtube"></span></a>
            </div> */}

            <div className={styles.social}>
              <a href="#footer"><FaFacebookF /></a>
              <a href="#footer"><FaLinkedin /></a>
              <a href="#footer"><FaInstagram /></a>
              <a href="#footer"><FaGithub /></a>
            </div>


          </div>
        </div>

        {/* Right Section */}
        <div className={`${styles.right} ${styles.box}`}>
          <h2>Contact us</h2>
          <div className={styles.content}>
            <form onSubmit={handleSubmit}>
              <div className={styles.email}>
                <div className={styles.text}>Email</div>
                <input
                  type="email"
                  placeholder="Email address..."
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div className={styles.msg}>
                <div className={styles.text}>Message</div>
                <input
                  type="text"
                  placeholder="Your message..."
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>
              <div className={styles.btn}>
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>

        {/* Center Section */}
        <div className={`${styles.center} ${styles.box}`}>
          <h2>Address</h2>
          <div className={styles.content}>
            <div className={styles.email}>
              <span ></span>
              <span className={styles.text}>@ Angel AI Assistant</span>
            </div>
            <div className={styles.place}>
              <span ></span>
              <span className={styles.text}><MdLocationOn /> Indore, Madhya Pardesh</span>
            </div>
            <div className={styles.phone}>
              <span ></span>
              <span className={styles.text}><FiPhone /> Phone: +91-7224925007</span>
            </div>
            <div className={styles.email}>
              <span ></span>
              <span className={styles.text}><MdEmail /> Email: satpalsinghjadhav5@gmail.com</span>
            </div>
            <div className={styles.email}>
              <span ></span>
              <span className={styles.text}><MdEmail /> Email: angelassist@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className={styles.bottom}>
        <span className={styles.credit}>
          {/* Copyright <span className="far fa-copyright"></span> 2023 */}
          © 2025 Angel Assistant.
        </span>
        <span>
          <a href="https://github.com/chetannihith">satpalsingh939</a> | All rights reserved.
        </span>
      </div>
    </footer>
  );
}
