
// import React, { useState, useRef, useEffect } from "react";
// import { Link } from "react-router-dom";
// import styles from "/public/css/voiceAssistant.module.css";
// import Footer from "../components/Footer";

// export default function AngelAssistant() {
//   const [listening, setListening] = useState(false);
//   const [transcript, setTranscript] = useState("");
//   const [reply, setReply] = useState("");
//   const recognitionRef = useRef(null);

//   // ✅ Init SpeechRecognition
//   function init() {
//     const SpeechRecognition =
//       window.SpeechRecognition || window.webkitSpeechRecognition;
//     if (!SpeechRecognition) {
//       alert(
//         "Your browser does not support SpeechRecognition API. Use Chrome/Edge on desktop."
//       );
//       return null;
//     }
//     const rec = new SpeechRecognition();
//     rec.lang = "en-US";
//     rec.interimResults = false;
//     rec.maxAlternatives = 1;

//     rec.onresult = (e) => {
//       const text = Array.from(e.results)
//         .map((r) => r[0].transcript)
//         .join(" ");
//       setTranscript(text);
//       finalAns(text.toLowerCase());
//     };

//     rec.onend = () => setListening(false);
//     recognitionRef.current = rec;
//     return rec;
//   }

//   // ✅ Start Listening
//   function start() {
//     let rec = recognitionRef.current || init();
//     if (!rec) return;
//     setReply("");
//     setTranscript("");
//     setListening(true);
//     rec.start();
//   }

//   // ✅ Stop Listening
//   function stop() {
//     recognitionRef.current?.stop();
//     setListening(false);
//   }

//   // ✅ Speak Function
//   function speak(text) {
//     if ("speechSynthesis" in window) {
//       const ut = new SpeechSynthesisUtterance(text);
//       ut.lang = "en-GB";
//       window.speechSynthesis.speak(ut);
//     }
//   }

//   // ✅ Greeting on Load
//   useEffect(() => {
//     let hrs = new Date().getHours();
//     if (hrs >= 0 && hrs < 12) speak("Good Morning Sir");
//     else if (hrs >= 12 && hrs < 18) speak("Good Afternoon Sir");
//     else speak("Good Evening Sir");
//   }, []);

//   // ✅ Local + API responses
//   function finalAns(message) {
//     let response = "";

//     if (message.includes("what is your name"))
//       response = "My name is Angel, I'm your virtual assistant";
//     else if (message.includes("hello"))
//       response = "Hello sir, how can I help you?";
//     else if (message.includes("how are you"))
//       response = "I am fine, what about you sir?";
//     else if (message.includes("open youtube")) {
//       response = "Opening YouTube...";
//       window.open("https://www.youtube.com", "_blank");
//     } else if (message.includes("open google")) {
//       response = "Opening Google...";
//       window.open("https://www.google.com", "_blank");
//     } else if (message.includes("what time is it")) {
//       const d = new Date();
//       response = `The time is ${d.getHours()}:${d.getMinutes()}`;
//     } else {
//       sendToServer(message);
//       return;
//     }

//     setReply(response);
//     speak(response);
//   }

//   // ✅ Backend API call
//   async function sendToServer(text) {
//     try {
//       const res = await fetch("http://localhost:5000/api/assist/voice", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "x-auth-token": localStorage.getItem("token"),
//         },
//         body: JSON.stringify({ message: text }),
//       });

//       const data = await res.json();
//       if (data.reply) {
//         setReply(data.reply);
//         speak(data.reply);
//       } else {
//         setReply("Sorry, I didn't get any response from server.");
//       }
//     } catch (err) {
//       console.error("Voice API error:", err);
//       setReply("Error connecting to assistant server.");
//     }
//   }

//   return (
//     <div>
//       {/* 🔹 Header */}
//       <header className={styles.header}>
//         <div className={styles.logo}>
//           <img src="/public/logoPS.png" alt="logo" />
//         </div>
//         <a href="/text" className={styles.headA}>
//           <button className={styles.btnSecondary}>Angel Chatbot</button>
//         </a>
//         <nav className={styles.nav}>
//           <Link to="/">Home</Link>
//           <Link to="/about">About</Link>
//           <Link to="/member">Member</Link>
//           <Link to="/profile">Profile</Link>
//         </nav>
//       </header>

//       {/* 🔹 Angel Section */}
//       <div className={styles.boxM}>
//         <img
//           src="/public/a1-removebg-preview (1)a.png"
//           alt="Angel"
//           className={styles.angelImg}
//         />

//         {/* <h3>
//             Hello I'm <i> <span className={styles.sp1}>Angel</span> </i>, Your{" "}
//           <i><span className={styles.sp2}>Virtual Assistant</span>  </i>
//           </h3> */}
//         <h3>
//           Hello I'm  <span className={styles.sp1}>Angel</span> , Your{" "}
//           <span className={styles.sp2}>Virtual Assistant</span>
//         </h3>


//         {/* 🔹 Mic Controls */}
//         <div className={styles.micSection}>
//           {!listening ? (
//             <button className={styles.btnPrimary} onClick={start}>
//               <img
//                 src="/public/img.svg"
//                 alt="mic"
//                 className={styles.micI}
//               />  Start Talking with Angel
//             </button>
//           ) : (
//             <button className={styles.btnPrimary} onClick={stop}>
//               ⏹ Stop Talking
//             </button>
//           )}
//         </div>

//         {/* 🔹 Transcript & Reply */}
//         <p>
//           <strong>You Said:</strong> {transcript}
//         </p>
//         <p>
//           <strong>Angel:</strong> {reply}
//         </p>
//       </div>

//       {/* 🔹 Footer */}
//       <Footer />
//     </div>
//   );
// }


// ------------------------------





import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "/public/css/voiceAssistant.module.css";
import Footer from "../components/Footer";

export default function AngelAssistant() {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [reply, setReply] = useState("");

  const [loading, setLoading] = useState(false);

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
      sendToServer(text.toLowerCase());  // 👈 Direct backend call
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

  async function sendToServer(text) {
  try {
    setLoading(true);
    // const res = await fetch("http://localhost:5000/api/assist/voice", {
     const res = await fetch("https://angel-ai-assistant.onrender.com/api/assist/voice", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ message: text }),
    });

    const data = await res.json();

    if (data.reply) {
      if (data.reply.startsWith("OPEN_URL::")) {
        let url = data.reply.replace("OPEN_URL::", "");
        window.open(url, "_blank"); 
        setReply(`Opening ${url}`);
        speak("Opening it now");
      } 
      else if (data.reply.startsWith("OPEN_APP::")) {
        let app = data.reply.replace("OPEN_APP::", "");
        setReply(`Trying to open ${app}`);
        speak(`Trying to open ${app}`);
      } 
      else {
        setReply(data.reply);
        speak(data.reply);
      }
    } else {
      setReply("Sorry, I didn't get any response from server.");
    }
  } catch (err) {
    console.error("Voice API error:", err);
    setReply("Error connecting to assistant server.");
  } finally {
    setLoading(false);
  }
}


  return (
    <div>
      {/* 🔹 Header */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src="/logoPS.png" alt="logo" />
        </div>
        <a href="/text" className={styles.headA}>
          <button className={styles.btnSecondary}> <Link to="/voice">Angel Chatbot</Link></button>
        </a>

        <nav className={styles.nav}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/member">Member</Link>
          <Link to="/profile">Profile</Link>
        </nav>
      </header>

      {/* 🔹 Angel Section */}
      <div className={styles.boxM}>
        <img
          src="/a1-removebg-preview (1)a.png"
          alt="Angel"
          className={styles.angelImg}
        />

        <h3>
          Hello I'm <span className={styles.sp1}>Angel</span>, Your{" "}
          <span className={styles.sp2}>Virtual Assistant</span>
        </h3>

        {/* 🔹 Mic Controls */}
        <div className={styles.micSection}>
          {/* {!listening ? (
            <button className={styles.btnPrimary} onClick={start}>
              <img
                src="/public/img.svg"
                alt="mic"
                className={styles.micI}
              />{" "}
              Start Talking with Angel
            </button>
          ) : (
            <button className={styles.btnPrimary} onClick={stop}>
              ⏹ Stop Talking
            </button>
          )} */}


          {!listening ? (
            <button className={styles.btnPrimary} onClick={start} disabled={loading}>
              {loading ? (
                <span className={styles.loader}></span>  
              ) : (
                <>
                  <img src="/img.svg" alt="mic" className={styles.micI} />
                  Start Talking with Angel
                </>
              )}
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
