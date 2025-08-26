// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function Register() {
//   const [name,setName]=useState(''); const [email,setEmail]=useState(''); const [password,setPassword]=useState('');
//   const [msg,setMsg]=useState('');
//   const nav = useNavigate();
//   async function submit(e){ e.preventDefault();
//     const res = await fetch('http://localhost:5000/api/auth/register', {
//       method:'POST', headers:{ 'Content-Type':'application/json' }, body: JSON.stringify({ name, email, password })
//     });
//     const data = await res.json();
//     if (data.token) { localStorage.setItem('token', data.token); nav('/text'); }
//     else setMsg(data.message || 'Error');
//   }
//   return (
//     <div className='card'>
//       <h3>Register</h3>
//       <form onSubmit={submit}>
//         <input placeholder='Name' value={name} onChange={e=>setName(e.target.value)} /><br/>
//         <input placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)} /><br/>
//         <input placeholder='Password' type='password' value={password} onChange={e=>setPassword(e.target.value)} /><br/>
//         <button type='submit'>Register</button>
//       </form>
//       <p>{msg}</p>
//     </div>
//   );
// }




// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import feather from "feather-icons";
// import "/public/css/register.css";
// import Footer from "../components/Footer";

// export default function Register() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [msg, setMsg] = useState("");
//   const nav = useNavigate();

//   async function submit(e) {
//     e.preventDefault();
//     try {
//       const res = await fetch("http://localhost:5000/api/auth/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, email, password }),
//       });

//       const data = await res.json();
//       if (data.token) {
//         localStorage.setItem("token", data.token);
//         nav("/voice"); // redirect to VoiceAssistance.jsx route
//       } else {
//         setMsg(data.message || "Error");
//       }
//     } catch (err) {
//       console.error(err);
//       setMsg("Something went wrong");
//     }
//   }

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   useEffect(() => {
//     feather.replace();
//   }, [showPassword, showConfirmPassword]);

//   return (
//     <>
//       {/* Header */}
//       <header className="chat-header">
//         <div className="logo">
//           <img src="/public/logoPS.png" alt="logo" />
//         </div>
//         <nav className="nav-links">
//           <Link to="/">Home</Link>
//           <Link to="/login">Login</Link>
//         </nav>
//       </header>

//       {/* Page Container */}
//       <div className="register-container">
//         {/* Left Illustration */}
//         <div className="box1">
//           <img src="/public/logoPS.png" alt="illustration" className="illustration" />
//         </div>

//         {/* Register Form */}
//         <div className="card">
//           <div className="card-body">
//             <h4>Sign Up</h4>
//             <p className="text-muted">Create your account for free !</p>

//             <form className="form" onSubmit={submit}>
//               <div className="form-group">
//                 <input
//                   type="text"
//                   className="form-control"
//                   name="username"
//                   id="username"
//                   placeholder="Name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="email"
//                   name="email"
//                   placeholder="Email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </div>

//               {/* Password */}
//               <div className="input-group">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   className="form-control"
//                   placeholder="Password"
//                   id="password"
//                   name="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//                 <span
//                   className="input-group-textR"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   <i data-feather={showPassword ? "eye-off" : "eye"}></i>
//                 </span>
//               </div>

//               {/* Confirm Password */}
//               <div className="input-group">
//                 <input
//                   type={showConfirmPassword ? "text" : "password"}
//                   className="form-control"
//                   placeholder="Confirm Password"
//                   id="passwordConfirm"
//                   name="password2"
//                   required
//                 />
//                 <span
//                   className="input-group-textR"
//                   onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                 >
//                   <i data-feather={showConfirmPassword ? "eye-off" : "eye"}></i>
//                 </span>
//               </div>

//               {/* Submit */}
//               <button className="btn btn-color-theme" type="submit">
//                 Sign Up
//               </button>

//               {msg && <p className="error-text">{msg}</p>}

//               <p className="switch-text">
//                 Already have an account?{" "}
//                 <Link className="text-theme" to="/login">
//                   Sign In
//                 </Link>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }





import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import feather from "feather-icons";
import styles from "/public/css/register.module.css";
import Footer from "../components/Footer";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [msg, setMsg] = useState("");
  const nav = useNavigate();

  async function submit(e) {
    e.preventDefault();

    // ✅ Confirm Password Check
    if (password !== confirmPassword) {
      setMsg("Passwords do not match!");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      if (data.token) {
        localStorage.setItem("token", data.token);
        nav("/voice"); // redirect to VoiceAssistance.jsx
      } else {
        setMsg(data.message || "Error");
      }
    } catch (err) {
      console.error(err);
      setMsg("Something went wrong");
    }
  }

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    feather.replace();
  }, [showPassword, showConfirmPassword]);

  return (
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

    //   {/* Page Container */}
    //   <div className="register-container">
    //     {/* Left Illustration */}
    //     <div className="box1">
    //       <img src="/public/logoPS.png" alt="illustration" className="illustration" />
    //     </div>

    //     {/* Register Form */}
    //     <div className="card">
    //       <div className="card-body">
    //         <h4>Sign Up</h4>
    //         <p className="text-muted">Create your account for free !</p>

    //         <form className="form" onSubmit={submit}>
    //           <div className="form-group">
    //             <input
    //               type="text"
    //               className="form-control"
    //               name="username"
    //               id="username"
    //               placeholder="Name"
    //               value={name}
    //               onChange={(e) => setName(e.target.value)}
    //               required
    //             />
    //           </div>

    //           <div className="form-group">
    //             <input
    //               type="email"
    //               className="form-control"
    //               id="email"
    //               name="email"
    //               placeholder="Email"
    //               value={email}
    //               onChange={(e) => setEmail(e.target.value)}
    //               required
    //             />
    //           </div>

    //           {/* Password */}
    //           <div className="input-group">
    //             <input
    //               type={showPassword ? "text" : "password"}
    //               className="form-control"
    //               placeholder="Password"
    //               id="password"
    //               name="password"
    //               value={password}
    //               onChange={(e) => setPassword(e.target.value)}
    //               required
    //             />
    //             <span
    //               className="input-group-textR"
    //               onClick={() => setShowPassword(!showPassword)}
    //             >
    //               <i data-feather={showPassword ? "eye-off" : "eye"}></i>
    //             </span>
    //           </div>

    //           {/* Confirm Password */}
    //           <div className="input-group">
    //             <input
    //               type={showConfirmPassword ? "text" : "password"}
    //               className="form-control"
    //               placeholder="Confirm Password"
    //               id="passwordConfirm"
    //               name="password2"
    //               value={confirmPassword}
    //               onChange={(e) => setConfirmPassword(e.target.value)}
    //               required
    //             />
    //             <span
    //               className="input-group-textR"
    //               onClick={() => setShowConfirmPassword(!showConfirmPassword)}
    //             >
    //               <i data-feather={showConfirmPassword ? "eye-off" : "eye"}></i>
    //             </span>
    //           </div>

    //           {/* Submit */}
    //           <button className="btn btn-color-theme" type="submit">
    //             Sign Up
    //           </button>

    //           {/* Error Message */}
    //           {msg && <p className="error-text">{msg}</p>}

    //           <p className="switch-text">
    //             Already have an account?{" "}
    //             <Link className="text-theme" to="/login">
    //               Sign In
    //             </Link>
    //           </p>
    //         </form>
    //       </div>
    //     </div>
    //   </div>

    //   <Footer />
    // </>


 <>
      {/* Header */}
       <header className={styles["chat-header"]}>
                  <div className={styles.logo}>
                    <img src="/public/logoPS.png" alt="logo" />
                  </div>
                  <nav className={styles["nav-links"]}>
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                  </nav>
                </header>

      {/* Page Container */}
      <div className={styles.registerContainer}>
        {/* Left Illustration */}
        <div className={styles.box1}>
          <img
            src="/public/logoPS.png"
            alt="illustration"
            className={styles.illustration}
          />
        </div>

        {/* Register Form */}
        <div className={styles.card}>
          <div className={styles.cardBody}>
            <h4>Sign Up</h4>
            <p className={styles.textMuted}>
              Create your account for free !
            </p>

            <form className={styles.form} onSubmit={submit}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  className={styles.formControl}
                  name="username"
                  id="username"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <input
                  type="email"
                  className={styles.formControl}
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password */}
              <div className={styles.inputGroup}>
                <input
                  type={showPassword ? "text" : "password"}
                  className={styles.formControl}
                  placeholder="Password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span
                  className={styles.inputGroupTextR}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: feather.icons[
                        showPassword ? "eye-off" : "eye"
                      ].toSvg(),
                    }}
                  />
                </span>
              </div>

              {/* Confirm Password */}
              <div className={styles.inputGroup}>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className={styles.formControl}
                  placeholder="Confirm Password"
                  id="passwordConfirm"
                  name="password2"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <span
                  className={styles.inputGroupTextR}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: feather.icons[
                        showConfirmPassword ? "eye-off" : "eye"
                      ].toSvg(),
                    }}
                  />
                </span>
              </div>

              {/* Submit */}
              <button className={styles.btnColorTheme} type="submit">
                Sign Up
              </button>

              {/* Error Message */}
              {msg && <p className={styles.errorText}>{msg}</p>}

              <p className={styles.switchText}>
                Already have an account?{" "}
                <Link className={styles.textTheme} to="/login">
                  Sign In
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
