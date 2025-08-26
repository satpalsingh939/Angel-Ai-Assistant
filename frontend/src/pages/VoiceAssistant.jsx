// import React, { useState, useRef } from 'react';
// import { api } from '../api';

// export default function VoiceAssistant() {
//   const [listening, setListening] = useState(false);
//   const [transcript, setTranscript] = useState('');
//   const [reply, setReply] = useState('');
//   const recognitionRef = useRef(null);

//   function init() {
//     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//     if (!SpeechRecognition) {
//       alert('Your browser does not support SpeechRecognition API. Use Chrome/Edge on desktop.');
//       return null;
//     }
//     const rec = new SpeechRecognition();
//     rec.lang = 'en-US';
//     rec.interimResults = false;
//     rec.maxAlternatives = 1;
//     rec.onresult = (e) => {
//       const text = Array.from(e.results).map(r=>r[0].transcript).join(' ');
//       setTranscript(text);
//       sendToServer(text);
//     };
//     rec.onend = ()=> setListening(false);
//     recognitionRef.current = rec;
//     return rec;
//   }

//   function start() {
//     let rec = recognitionRef.current || init();
//     if (!rec) return;
//     setReply('');
//     setTranscript('');
//     setListening(true);
//     rec.start();
//   }

//   function stop() {
//     recognitionRef.current?.stop();
//     setListening(false);
//   }

//   async function sendToServer(text) {
//     const res = await api('/api/assist/voice', { method: 'POST', body: JSON.stringify({ message: text }) });
//     if (res.reply) {
//       setReply(res.reply);
//       // speak response
//       if ('speechSynthesis' in window) {
//         const ut = new SpeechSynthesisUtterance(res.reply);
//         window.speechSynthesis.speak(ut);
//       }
//     }
//   }

//   return (
//     <div className='card'>
//       <h3>Voice Assistant</h3>
//       <p>Press Start and speak. The recognized text will be sent to backend and assistant reply will be spoken back (if supported).</p>
//       <div>
//         <button onClick={start} disabled={listening}>Start</button>
//         <button onClick={stop} disabled={!listening}>Stop</button>
//       </div>
//       <p><strong>Transcript:</strong> {transcript}</p>
//       <p><strong>Assistant:</strong> {reply}</p>
//     </div>
//   );
// }

  // 🔹 Local Command Handling (same as your finalAns)
  // function finalAns(message) {
  //   let response = "";
  //   if (message.includes("what is your name")) response = "My name is Angel, I'm your virtual assistant";
  //   else if (message.includes("hello")) response = "Hello sir, how can I help you?";
  //   else if (message.includes("how are you")) response = "I am fine, what about you sir?";
  //   else if (message.includes("open youtube")) { response = "Opening YouTube..."; window.open("https://www.youtube.com", "_blank"); }
  //   else if (message.includes("open google")) { response = "Opening Google..."; window.open("https://www.google.com", "_blank"); }
  //   else if (message.includes("what time is it")) {
  //     const d = new Date();
  //     response = `The time is ${d.getHours()}:${d.getMinutes()}`;
  //   }
  //   else response = `This is what I found on Google about ${message}`;

  //   setReply(response);
  //   speak(response);

  //   // Optional: Backend call
  //   // sendToServer(message);
  // }

  // // 🔹 Backend API call (optional)
  // async function sendToServer(text) {
  //   const res = await api('/api/assist/voice', { method: 'POST', body: JSON.stringify({ message: text }) });
  //   if (res.reply) {
  //     setReply(res.reply);
  //     speak(res.reply);
  //   }
  // }



// ------------------------

import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "/public/css/voiceAssistant.module.css";
import Footer from "../components/Footer";

export default function AngelAssistant() {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [reply, setReply] = useState("");
  const recognitionRef = useRef(null);

  // ✅ Init SpeechRecognition
  function init() {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert(
        "Your browser does not support SpeechRecognition API. Use Chrome/Edge on desktop."
      );
      return null;
    }
    const rec = new SpeechRecognition();
    rec.lang = "en-US";
    rec.interimResults = false;
    rec.maxAlternatives = 1;

    rec.onresult = (e) => {
      const text = Array.from(e.results)
        .map((r) => r[0].transcript)
        .join(" ");
      setTranscript(text);
      finalAns(text.toLowerCase());
    };

    rec.onend = () => setListening(false);
    recognitionRef.current = rec;
    return rec;
  }

  // ✅ Start Listening
  function start() {
    let rec = recognitionRef.current || init();
    if (!rec) return;
    setReply("");
    setTranscript("");
    setListening(true);
    rec.start();
  }

  // ✅ Stop Listening
  function stop() {
    recognitionRef.current?.stop();
    setListening(false);
  }

  // ✅ Speak Function
  function speak(text) {
    if ("speechSynthesis" in window) {
      const ut = new SpeechSynthesisUtterance(text);
      ut.lang = "en-GB";
      window.speechSynthesis.speak(ut);
    }
  }

  // ✅ Greeting on Load
  useEffect(() => {
    let hrs = new Date().getHours();
    if (hrs >= 0 && hrs < 12) speak("Good Morning Sir");
    else if (hrs >= 12 && hrs < 18) speak("Good Afternoon Sir");
    else speak("Good Evening Sir");
  }, []);

  // ✅ Local + API responses
  function finalAns(message) {
    let response = "";

    if (message.includes("what is your name"))
      response = "My name is Angel, I'm your virtual assistant";
    else if (message.includes("hello"))
      response = "Hello sir, how can I help you?";
    else if (message.includes("how are you"))
      response = "I am fine, what about you sir?";
    else if (message.includes("open youtube")) {
      response = "Opening YouTube...";
      window.open("https://www.youtube.com", "_blank");
    } else if (message.includes("open google")) {
      response = "Opening Google...";
      window.open("https://www.google.com", "_blank");
    } else if (message.includes("what time is it")) {
      const d = new Date();
      response = `The time is ${d.getHours()}:${d.getMinutes()}`;
    } else {
      sendToServer(message);
      return;
    }

    setReply(response);
    speak(response);
  }

  // ✅ Backend API call
  async function sendToServer(text) {
    try {
      const res = await fetch("http://localhost:5000/api/assist/voice", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ message: text }),
      });

      const data = await res.json();
      if (data.reply) {
        setReply(data.reply);
        speak(data.reply);
      } else {
        setReply("Sorry, I didn't get any response from server.");
      }
    } catch (err) {
      console.error("Voice API error:", err);
      setReply("Error connecting to assistant server.");
    }
  }

  return (
    <div>
      {/* 🔹 Header */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src="/public/logoPS.png" alt="logo" />
        </div>
        <a href="/text" className={styles.headA}>
          <button className={styles.btnSecondary}>Angel Chatbox</button>
        </a>
        <nav className={styles.nav}>
          <Link to="/">Home</Link>
          {/* <Link to="/register">Register</Link> */}
          {/* <Link to="/login">Login</Link> */}
        </nav>
      </header>

      {/* 🔹 Angel Section */}
      <div className={styles.boxM}>
        <img
          src="/public/a1-removebg-preview (1)a.png"
          alt="Angel"
          className={styles.angelImg}
        />
        
          {/* <h3>
            Hello I'm <i> <span className={styles.sp1}>Angel</span> </i>, Your{" "}
          <i><span className={styles.sp2}>Virtual Assistant</span>  </i>
          </h3> */}
           <h3>
            Hello I'm  <span className={styles.sp1}>Angel</span> , Your{" "}
          <span className={styles.sp2}>Virtual Assistant</span>  
          </h3>
       

        {/* 🔹 Mic Controls */}
        <div className={styles.micSection}>
          {!listening ? (
            <button className={styles.btnPrimary} onClick={start}>
              <img
          src="/public/img.svg"
          alt="mic"
          className={styles.micI}
        />  Start Talking with Angel
            </button>
          ) : (
            <button className={styles.btnPrimary} onClick={stop}>
              ⏹ Stop Talking
            </button>
          )}
        </div>

        {/* 🔹 Transcript & Reply */}
        <p>
          <strong>You Said:</strong> {transcript}
        </p>
        <p>
          <strong>Angel:</strong> {reply}
        </p>
      </div>

      {/* 🔹 Footer */}
      <Footer />
    </div>
  );
}
