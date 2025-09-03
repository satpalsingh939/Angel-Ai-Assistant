// import React, { useState } from 'react';
// import { api } from '../api';

// export default function TextAssistant() {
//   const [message, setMessage] = useState('');
//   const [history, setHistory] = useState([]);
//   const [busy, setBusy] = useState(false);

//   async function send(e) {
//     e && e.preventDefault();
//     if (!message) return;
//     setBusy(true);
//     const res = await api('/api/assist/text', { method: 'POST', body: JSON.stringify({ message }) });
//     setBusy(false);
//     if (res.reply) {
//       setHistory(h => [...h, { role: 'user', text: message }, { role: 'assistant', text: res.reply }]);
//       setMessage('');
//     } else {
//       setHistory(h => [...h, { role:'assistant', text: 'No reply (check console/back-end)' }]);
//     }
//   }

//   return (
//     <div className='card'>
//       <h3>Text Assistant</h3>
//       <form onSubmit={send}>
//         <input style={{width:'80%'}} value={message} onChange={e=>setMessage(e.target.value)} placeholder='Type your question...' />
//         <button type='submit'>{busy ? 'Thinking...' : 'Send'}</button>
//       </form>
//       <div style={{marginTop:12}}>
//         {history.map((m,i)=>(<div key={i}><strong>{m.role}:</strong> {m.text}</div>))}
//       </div>
//     </div>
//   );
// }

// ------------------------------------------

// import React, { useState } from 'react';
// import { api } from '../api';
// import { FaImage, FaArrowUp, FaUser } from "react-icons/fa";

// export default function TextAssistant() {
//   const [message, setMessage] = useState('');
//   const [history, setHistory] = useState([]);
//   const [busy, setBusy] = useState(false);
//   const [file, setFile] = useState(null);

//   async function send(e) {
//     e && e.preventDefault();
//     if (!message && !file) return;
//     setBusy(true);
//     try {
//       const res = await api('/api/assist/text', { 
//         method: 'POST', 
//         body: JSON.stringify({ message }) 
//       });
//       setBusy(false);
//       if (res.reply) {
//         setHistory(h => [
//           ...h,
//           { role: 'user', text: message, file },
//           { role: 'assistant', text: res.reply }
//         ]);
//         setMessage('');
//         setFile(null);
//       } else {
//         setHistory(h => [...h, { role:'assistant', text: 'No reply (check console/back-end)' }]);
//       }
//     } catch (err) {
//       console.error(err);
//       setBusy(false);
//       setHistory(h => [...h, { role:'assistant', text: 'Error sending message' }]);
//     }
//   }

//   return (
//     <div className="min-h-screen flex flex-col bg-neutral-800 text-white font-[Luxurious Roman]">
//       {/* Header */}
//       <header className="flex justify-between items-center p-3 border-2 mb-2 bg-gradient-to-r from-red-500/70 to-blue-500/50 border-image-[linear-gradient(40deg,red,blue,rgb(6,51,231))]">
//         <div className="ml-2">
//           <img src="/logoPS.png" alt="logo" className="w-16 h-10 cursor-pointer hover:scale-105 transition" />
//         </div>
//         <a href="../AngelVoiceAI/voiceAssistant.html" className="px-3 py-2 shadow bg-transparent border border-gray-700 rounded-lg hover:tracking-wide transition">
//           Virtual Angel
//         </a>
//         <nav className="flex gap-4 mr-3">
//           <a href="#"><li>Register</li></a>
//           <a href="login.html"><li>Login</li></a>
//           <a href="#"><li>Start As Guest</li></a>
//         </nav>
//       </header>

//       {/* Chat Box */}
//       <div className="flex-1 w-[90%] mx-auto p-6 bg-neutral-800 border border-red-500 overflow-y-auto space-y-4 rounded-lg">
//         {history.length === 0 && (
//           <div className="aiBox flex items-start gap-2">
//             <img src="../AngelVoiceAI/image/a1-removebg-preview (1).png" alt="AI" className="w-12 h-12 rounded-full" />
//             <div className="aiMsg p-3 rounded-[40px] shadow bg-gradient-to-r from-red-500/70 to-blue-500/50">
//               Hello! How can I help you?
//             </div>
//           </div>
//         )}

//         {history.map((m, i) => (
//           m.role === 'user' ? (
//             <div key={i} className="flex justify-end">
//               <div className="userMsg max-w-[70%] p-3 rounded-[40px] shadow bg-gradient-to-r from-red-500/70 to-blue-500/50">
//                 {m.text}
//                 {m.file && (
//                   <img src={URL.createObjectURL(m.file)} alt="uploaded" className="mt-2 rounded-xl w-40" />
//                 )}
//               </div>
//               <FaUser className="text-3xl ml-2 mt-2" />
//             </div>
//           ) : (
//             <div key={i} className="flex items-start gap-2">
//               <img src="../AngelVoiceAI/image/a1-removebg-preview (1).png" alt="AI" className="w-12 h-12 rounded-full" />
//               <div className="aiMsg max-w-[70%] p-3 rounded-[40px] shadow bg-gradient-to-r from-red-500/70 to-blue-500/50">
//                 {m.text}
//               </div>
//             </div>
//           )
//         ))}
//       </div>

//       {/* Input Box */}
//       <form onSubmit={send} className="w-[90%] mx-auto h-[15%] flex items-center justify-center gap-2 p-2 border border-blue-500 rounded-lg mt-2">
//         <input
//           type="text"
//           className="flex-1 h-12 px-4 rounded-full shadow bg-gradient-to-r from-red-500/70 to-blue-500/50 outline-none border-none text-white placeholder-white"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           placeholder="Message.."
//         />
//         <label className="cursor-pointer">
//           <FaImage className="text-xl" />
//           <input type="file" hidden accept="image/*" onChange={(e)=> setFile(e.target.files[0])} />
//         </label>
//         <button type="submit" className="w-12 h-12 rounded-full border-t-2 border-b-2 border-red-600 border-b-blue-800 flex items-center justify-center">
//           {busy ? "..." : <FaArrowUp />}
//         </button>
//       </form>

//       {/* Footer */}
//       <footer className="bg-gradient-to-r from-red-500/70 to-blue-500/50 text-center p-3 mt-3">
//         <p>&copy; 2025 Angel Chatbot | Created by Satpal</p>
//         <div className="flex justify-center gap-4 mt-2">
//           <a href="#"><i className="fab fa-facebook"></i></a>
//           <a href="#"><i className="fab fa-x-twitter"></i></a>
//           <a href="#"><i className="fab fa-instagram"></i></a>
//         </div>
//       </footer>
//     </div>
//   );
// }

// ------------------

import React, { useState } from 'react';
import { api } from '../api';
import { FaImage, FaArrowUp, FaUser } from "react-icons/fa";
import styles from '/public/css/TextAssistant.module.css';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function TextAssistant() {
  const [message, setMessage] = useState('');
  const [history, setHistory] = useState([]);
  const [busy, setBusy] = useState(false);
  const [file, setFile] = useState(null);

  async function send(e) {
    e && e.preventDefault();
    if (!message && !file) return;
    setBusy(true);
    try {
      const res = await api('/api/assist/text', {
        method: 'POST',
        body: JSON.stringify({ message })
      });
      setBusy(false);
      if (res.reply) {
        setHistory(h => [
          ...h,
          { role: 'user', text: message, file },
          { role: 'assistant', text: res.reply }
        ]);
        setMessage('');
        setFile(null);
      } else {
        setHistory(h => [...h, { role: 'assistant', text: 'No reply (check console/back-end)' }]);
      }
    } catch (err) {
      console.error(err);
      setBusy(false);
      setHistory(h => [...h, { role: 'assistant', text: 'Error sending message' }]);
    }
  }

  // return (
  //   <div className="chat-container">
  //     {/* Header */}
  //     <header className="chat-header">
  //       <div className="logo">
  //         <img src="/public/logoPS.png" alt="logo" />
  //       </div>
  //       <a href="/voice" className="header-link">
  //         Virtual Angel
  //       </a>
  //       <nav className="nav-links">
  //         {/* <a href="#"><li>Register</li></a> */}
  //         <Link to='/' >Home</Link>
  //         <Link to='/register' >Register</Link>
  //         <Link to='/login' >Login</Link>
  //         {/* <a href="login.html"><li>Login</li></a> */}
  //         {/* <a href="#"><li>Start As Guest</li></a> */}
  //       </nav>
  //     </header>

  //     {/* Chat Box */}
  //     <div className="chat-box">
  //       {history.length === 0 && (
  //         <div className="aiBox">
  //           <img src="/public/a1-removebg-preview (1)a.png" alt="AI" />
  //           <div className="aiMsg">
  //             Hello! How can I help you?
  //           </div>
  //         </div>
  //       )}

  //       {history.map((m, i) => (
  //         m.role === 'user' ? (
  //           <div key={i} className="user-row">
  //             <div className="userMsg">
  //               {m.text}
  //               {m.file && (
  //                 <img src={URL.createObjectURL(m.file)} alt="uploaded" className="uploaded-img" />
  //               )}
  //             </div>
  //             <FaUser className="user-icon" />
  //           </div>
  //         ) : (
  //           <div key={i} className="aiBox">
  //             <img src="/public/a1-removebg-preview (1)a.png" alt="AI" />
  //             <div className="aiMsg">{m.text}</div>
  //           </div>
  //         )
  //       ))}
  //     </div>

  //     {/* Input Box */}
  //     <form onSubmit={send} className="input-box">
  //       <input
  //         type="text"
  //         className="input-text"
  //         value={message}
  //         onChange={(e) => setMessage(e.target.value)}
  //         placeholder="Message.."
  //       />
  //       <label className="file-label">
  //         <FaImage className="file-icon" />
  //         <input type="file" hidden accept="image/*" onChange={(e)=> setFile(e.target.files[0])} />
  //       </label>
  //       <button type="submit" className="send-btn">
  //         {busy ? "..." : <FaArrowUp />}
  //       </button>
  //     </form>

  //     {/* Footer */}
  //     {/* <footer className="chat-footer">
  //       <p>&copy; 2025 Angel Chatbot | Created by Satpal</p>
  //       <div className="footer-links">
  //         <a href="#"><i className="fab fa-facebook"></i></a>
  //         <a href="#"><i className="fab fa-x-twitter"></i></a>
  //         <a href="#"><i className="fab fa-instagram"></i></a>
  //       </div>
  //     </footer> */}

  //     <Footer />
  //   </div>
  // );


  return (
    <div className={styles.chatContainer}>
      {/* Header */}
      <header className={styles.chatHeader}>
        <div className={styles.logo}>
          <img src="/logoPS.png" alt="logo" />
        </div>
        <a href="/voice" className={styles.headerLink}>Virtual Angel</a>
        <nav className={styles.navLinks}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/member">Member</Link>
          <Link to="/profile">Profile</Link>
        </nav>
      </header>

      {/* Chat Box */}
      <div className={styles.chatBox}>
        {history.length === 0 && (
          <div className={styles.aiBox}>
            <img src="/a1-removebg-preview (1)a.png" alt="AI" />
            <div className={styles.aiMsg}>Hello! How can I help you?</div>
          </div>
        )}

        {history.map((m, i) =>
          m.role === "user" ? (
            <div key={i} className={styles.userRow}>
              <div className={styles.userMsg}>
                {m.text}
                {m.file && (
                  <img
                    src={URL.createObjectURL(m.file)}
                    alt="uploaded"
                    className={styles.uploadedImg}
                  />
                )}
              </div>
              <FaUser className={styles.userIcon} />
            </div>
          ) : (
            <div key={i} className={styles.aiBox}>
              <img src="/a1-removebg-preview (1)a.png" alt="AI" />
              <div className={styles.aiMsg}>{m.text}</div>
            </div>
          )
        )}
      </div>

      {/* Input Box */}
      <form onSubmit={send} className={styles.inputBox}>
        <input
          type="text"
          className={styles.inputText}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message..."
        />
        <label className={styles.fileLabel}>
          <FaImage className={styles.fileIcon} />
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </label>
        <button type="submit" className={styles.sendBtn}>
          {busy ? "..." : <FaArrowUp />}
        </button>
      </form>

      <Footer />
    </div>
  );

}



