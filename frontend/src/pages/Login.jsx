// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function Login() {
//   const [email,setEmail]=useState(''); const [password,setPassword]=useState(''); const [msg,setMsg]=useState('');
//   const nav = useNavigate();
//   async function submit(e){ e.preventDefault();
//     const res = await fetch('http://localhost:5000/api/auth/login', {
//       method:'POST', headers:{ 'Content-Type':'application/json' }, body: JSON.stringify({ email, password })
//     });
//     const data = await res.json();
//     if (data.token) { localStorage.setItem('token', data.token); nav('/text'); }
//     else setMsg(data.message || 'Error');
//   }
//   return (
//     <div className='card'>
//       <h3>Login</h3>
//       <form onSubmit={submit}>
//         <input placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)} /><br/>
//         <input placeholder='Password' type='password' value={password} onChange={e=>setPassword(e.target.value)} /><br/>
//         <button type='submit'>Login</button>
//       </form>
//       <p>{msg}</p>
//     </div>
//   );
// }


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import feather from "feather-icons";
import styles from "/public/css/login.module.css";
import Footer from "../components/Footer";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const nav = useNavigate();

  async function submit(e) {
    e.preventDefault();
    try {
      // const res = await fetch("http://localhost:5000/api/auth/login", {
      const res = await fetch("angel-ai-assistant.vercel.app/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }); 

      const data = await res.json();
      if (data.token) {
        localStorage.setItem("token", data.token);
        nav("/voice"); // ✅ redirect to TextAssistant.jsx page
      } else {
        setMsg(data.message || "Invalid credentials");
      }
    } catch (err) {
      console.error(err);
      setMsg("Something went wrong");
    }
  }

  return (

    <>
      {/* Header */}
      <header className={styles["chat-header"]}>
        <div className={styles.logo}>
          <img src="/public/logoPS.png" alt="logo" />
        </div>
        <nav className={styles["nav-links"]}>
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
        </nav>
      </header>

      {/* Login Container */}
      <div className={styles.loginContainer}>
        {/* Left Image */}
        <div className={styles.loginIllustration}>
          <img src="/public/logoPS.png" alt="Login Illustration" />
        </div>

        {/* Login Card */}
        <div className={styles.loginCard}>
          <div className={styles.cardBody}>
            <h4>Sign In</h4>
            <p className={styles.textMuted}>Login to your account !</p>

            <form className={styles.form} onSubmit={submit}>
              {/* Email */}
              <div className={styles.formGroup}>
                <input
                  type="email"
                  className={styles.formControl}
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="off"
                  required
                />
              </div>

              {/* Password */}
              <div className={styles.inputGroup}>
                <input
                  type={showPassword ? "text" : "password"}
                  className={styles.formControl}
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="off"
                  required
                />
                <span
                  className={styles.inputGroupText}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <span
                      dangerouslySetInnerHTML={{
                        __html: feather.icons["eye-off"].toSvg(),
                      }}
                    />
                  ) : (
                    <span
                      dangerouslySetInnerHTML={{
                        __html: feather.icons["eye"].toSvg(),
                      }}
                    />
                  )}
                </span>
              </div>

              {/* Forgot password */}
              <div className={styles.textRight}>
                {/* <a className={styles.textTheme} href="#">
                  Forgot Password?
                </a> */}
                <Link className={styles.textTheme} to="/forgetPass">
                  Forgot Password?
                </Link>
              </div>

              {/* Submit */}
              <button className={styles.btnColorTheme} type="submit">
                Sign In
              </button>

              {/* Error message */}
              {msg && <p className={styles.errorText}>{msg}</p>}

              <p className={styles.switchText}>
                Don't have an account yet?{" "}
                <Link className={styles.textTheme} to="/register">
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>

  );
}





// <>
//   {/* Header */}
//   <header className="chat-header">
//     <div className="logo">
//       <img src="/public/logoPS.png" alt="logo" />
//     </div>
//     <nav className="nav-links">
//       <Link to="/">Home</Link>
//       <Link to="/login">Login</Link>
//     </nav>
//   </header>

//   {/* Login Container */}
//   <div className="login-container">
//     {/* Left Image */}
//     <div className="login-illustration">
//       <img src="/public/logoPS.png" alt="Login Illustration" />
//     </div>

//     {/* Login Card */}
//     <div className="login-card">
//       <div className="card-body">
//         <h4>Sign In</h4>
//         <p className="text-muted">Login to your account !</p>

//         <form className="form" onSubmit={submit}>
//           {/* Email */}
//           <div className="form-group">
//             <input
//               type="email"
//               className="form-control"
//               placeholder="Email"
//               name="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               autoComplete="off"
//               required
//             />
//           </div>

//           {/* Password */}
//           <div className="input-group">
//             <input
//               type={showPassword ? "text" : "password"}
//               className="form-control"
//               placeholder="Password"
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               autoComplete="off"
//               required
//             />
//             <span
//               className="input-group-text"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? (
//                 <span
//                   dangerouslySetInnerHTML={{
//                     __html: feather.icons["eye-off"].toSvg(),
//                   }}
//                 />
//               ) : (
//                 <span
//                   dangerouslySetInnerHTML={{
//                     __html: feather.icons["eye"].toSvg(),
//                   }}
//                 />
//               )}
//             </span>
//           </div>

//           {/* Forgot password */}
//           <div className="text-right">
//             <a className="text-theme" href="#">
//               Forgot Password?
//             </a>
//           </div>

//           {/* Submit */}
//           <button className="btn btn-color-theme" type="submit">
//             Sign In
//           </button>

//           {/* Error message */}
//           {msg && <p className="error-text">{msg}</p>}

//           <p className="switch-text">
//             Don't have an account yet?{" "}
//             <Link className="text-theme" to="/register">
//               Sign Up
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   </div>

//   <Footer />
// </>