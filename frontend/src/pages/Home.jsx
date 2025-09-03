import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
// import TextAssistant from "./TextAssistant";
// import VoiceAssistant from "./VoiceAssistant";
import styles from "/public/css/home.module.css";

// import "swiper/css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const reviews = [
  {
    text: "Angel Assistant helped me with my college projects in seconds. Very smooth experience.",
    name: "Harpal singh",
    job: "Web Dev",
    stars: 5,
    img: "/public/i1-removebg-preview.png",
  },
  {
    text: "Voice recognition is awesome, feels like talking to a real person.",
    name: "Chiku jadhav",
    job: "Developer",
    stars: 3.5,
    img: "/public/i1-removebg-preview.png",
  },
  {
    text: "Simple and useful, Recommended for any work.",
    name: "Angel",
    job: "Tester",
    stars: 4,
    img: "/public/i1-removebg-preview.png",
  },
];


export default function Home() {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage(

      alert('You have successfully joined our community! But to unlock premium features and full access, you need to get a membership.')
    );

    setEmail(""); // clear input
  };

  return (

    //     <>
    //       {/* Header */}

    //        <header className="chat-header">
    //                <div className="logo">
    //                  <img src="/public/logoPS.png" alt="logo" />
    //                </div>
    //                <nav className="nav-links">
    //                  {/* <a href="#"><li>Register</li></a> */}
    //                  <Link to='/' >Home</Link>
    //                  <Link to='/register' >Register</Link>
    //                  <Link to='/login' >Login</Link>
    //                  {/* <a href="login.html"><li>Login</li></a> */}
    //                  {/* <a href="#"><li>Start As Guest</li></a> */}
    //                </nav>
    //              </header>

    //       {/* Home Section */}

    //     <section className="home" id="home">
    //       <div className="row">
    //         {/* Left Content */}
    //         <div className="content">
    //           <h3>Books Feed Your Soul</h3>
    //           <p>
    //             Exercise to the body is the same as reading to the mind.
    //             <br />
    //             Prepare to enter the incredible world of literature.
    //           </p>
    //           <a href="#populer" className="btn">
    //             Shop Now !
    //           </a>
    //         </div>

    //         <div>

    //         </div>
    //       </div>
    //     </section>

    //       {/* About Section */}
    //       <section id="about" className="about">
    //         <div className="container">
    //           <h1>WHY CHOOSE US?</h1>
    //           <div className="row">
    //             <div className="image">
    //               <img src="/public/i1.jpeg" alt="About" />
    //             </div>
    //             <div className="content">
    //               <h3>Best Book Store in the World</h3>
    //               <p>
    //                 We have the books from the best authors of the world with their
    //                 latest works that will captivate your senses.
    //               </p>
    //               <div className="icons-container">
    //                 <div className="icons">
    //                   <i className="fas fa-shield"></i>
    //                   <span>Safe Delivery</span>
    //                 </div>
    //                 <div className="icons">
    //                   <i className="fas fa-wallet"></i>
    //                   <span>Easy Payments</span>
    //                 </div>
    //                 <div className="icons">
    //                   <i className="fas fa-headset"></i>
    //                   <span>24/7 Service</span>
    //                 </div>
    //               </div>
    //               <a href="/404Error" className="btn">
    //                 Learn More
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //       </section>

    // {/* --------------- */}

    //     <section id="member" className="member">
    //       <div className="container">
    //         <h1>BECOME A MEMBER!</h1>
    //         <div className="row">
    //           {/* Left Content */}
    //           <div className="content">
    //             <h3>
    //               Join Our <span>Member</span> And <br />
    //               Get Notify For <span>New Updates!</span>
    //             </h3>
    //             <p>
    //               By being a member of our community you will get coupons of up to
    //               <strong> 40%</strong>. You can also refer our website to others
    //               and for each successful referral you will get a coupon of{" "}
    //               <strong>₹50</strong> for the purchasing.
    //             </p>
    //             <p>
    //               Get notified when we have offers available for grab and don’t miss
    //               it.
    //             </p>

    //             {/* Form */}
    //             <form onSubmit={handleSubmit}>
    //               <input
    //                 type="email"
    //                 placeholder="Enter your email..."
    //                 className="box"
    //                 required
    //                 value={email}
    //                 onChange={(e) => setEmail(e.target.value)}
    //               />
    //               <input type="submit" value="Get Notify" className="btn" />
    //               <a href="./member.html" className="btn">
    //                 Join Member
    //               </a>
    //             </form>
    //           </div>

    //           {/* Right Image */}
    //           <div className="image">
    //             <img src="/public/3.png" alt="Membership" />
    //           </div>
    //         </div>
    //       </div>
    //     </section>


    // {/* ------------------- */}

    //       {/* 🔹 AI Assistants Section */}
    //       <section id="ai-assistants" className="assistants">
    //         <h2>AI Assistants</h2>
    //         <p>Use Text Assistant or Voice Assistant to interact with Angel.</p>
    //         <div className="assistant-grid">
    //           <div className="assistant-box">
    //             <TextAssistant />
    //           </div>
    //           <div className="assistant-box">
    //             <VoiceAssistant />
    //           </div>
    //         </div>
    //       </section>


    // {/* ----- */}
    //   <section className="reviews" id="reviews">
    //       <h1>Client's Reviews</h1>
    //       <Swiper spaceBetween={20} slidesPerView={2} loop={true} autoplay={{ delay: 2500 }}>
    //         {reviews.map((review, i) => (
    //           <SwiperSlide key={i} className="box">
    //             <i className="fas fa-quote-left quote"></i>
    //             <p>{review.text}</p>
    //             <div className="content">
    //               <div className="info">
    //                 <div className="name">{review.name}</div>
    //                 <div className="job">{review.job}</div>
    //                 <div className="stars">
    //                   {Array.from({ length: 5 }, (_, index) => {
    //                     if (index < Math.floor(review.stars)) {
    //                       return <i key={index} className="fas fa-star"></i>;
    //                     } else if (
    //                       review.stars % 1 !== 0 &&
    //                       index === Math.floor(review.stars)
    //                     ) {
    //                       return <i key={index} className="fas fa-star-half-alt"></i>;
    //                     } else {
    //                       return <i key={index} className="far fa-star"></i>;
    //                     }
    //                   })} 
    //                 </div>
    //               </div>
    //               <div className="image">
    //                 <img src={review.img} alt={review.name} />
    //               </div>
    //             </div>
    //           </SwiperSlide>
    //         ))}
    //       </Swiper>
    //     </section>
    // {/* -------- */}


    //       {/* Footer */}
    //      <Footer />
    //     </>


    <>

      {/* Header */}
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

      {/* Home Section */}
      <section className={styles.home} id="home">
        <div className={styles.row}>
          <div className={styles.content}>
            I'M <h1>𝙰𝚗𝚐𝚎𝚕
            </h1>
            <h3>Your Personal AI Assistant</h3>
            <p>
              {/* Talk, chat & get instant help with our smart assistant. */}
              Chat or talk with Angel and get instant answers.
              <br />
              ✅ Voice Commands for hands-free
              ✅ Text Assistance for quick chats   <br />
              ✅ Fast, reliable & always available
              ✅ 24/7 Availability
              <br />
              {/* Smart Voice Commands
              ✅ Instant Text Assistance
              <br />
              ✅ Easy & Fast Response */}
            </p>
            <a href="/" className={styles.btn}>
              <Link to="/register">Voice Assistant</Link>

            </a>
            <a href="/" className={styles.btn}>
              <Link to="/register">Text Assistant</Link>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.about}>
        <div className={styles.container}>
          <h1>Why Choose Angel AI?</h1>
          <div className={styles.row}>
            <div className={styles.image}>
              <img src="/i1-removebg-preview.png" alt="About" />
            </div>
            <div className={styles.content}>
              <h3>To provide a simple, reliable and smart AI assistant for everyone.</h3>
              <p>Angel AI is always for you — making conversations smarter, faster, and safer.</p>
               <p>Angel delivers quick and reliable answers so you can focus on what matters most.</p>
               <p>Always Available, Anytime Whether day or night, Angel is here..</p>
              <div className={styles["icons-container"]}>
                <div className={styles.icons}>
                  <i className="fas fa-shield"></i>
                  <span>Secure Conversation</span>
                </div>
                <div className={styles.icons}>
                  <i className="fas fa-wallet"></i>
                  <span>Easy & Accurate Responses</span>
                </div>
                <div className={styles.icons}>
                  <i className="fas fa-headset"></i>
                  <span>24/7 Service Availability.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="member" className={styles.member}>
        <div className={styles.container}>
          <h1>BECOME A MEMBER!</h1>
          <div className={styles.row}>
            <div className={styles.content}>
              <h3>
                Join Our <span>community</span> And <br />
                Get Notified For <span>New Updates!</span>
              </h3>

              <a href="" className={styles.btn}>
                <Link to="/member" >Join Member</Link>
              </a>

              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className={styles.box}
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input type="submit" value="Get Notify" className={styles.btn} />
              </form>

              {message && <p className={styles.success}>{message}</p>}
            </div>

            <div className={styles.image}>
              <img src="/4-removebg-preview.png" alt="Membership" />
            </div>
          </div>
        </div>
      </section>



      {/* AI Assistants Section */}
      {/* <section id="ai-assistants" className={styles.assistants}>
        <h2>Dear Angel - AI Assistants</h2>
        <p>Use Text Assistant or Voice Assistant to interact with Angel.</p>
        <div className={styles["assistant-grid"]}>
          <div className={styles["assistant-box"]}>
            <img src="/public/Screenshot 2025-08-27 200858.png" />
          </div>
          <div className={styles["assistant-box"]}>
            <img src="/public/Screenshot 2025-08-27 200936.png" />
          </div>
        </div> */}

 <section id="ai-assistants" className={styles.assistants}>
<h2>Meet Your Angel AI Assistants</h2>
<p>Choose how you want to interact —  speak with <strong>Virtual Angel</strong> or chat with <strong>Angel Chatbot</strong>.</p>

<div className={styles["assistant-grid"]}>
  <div className={styles["assistant-box"]}>
    <h3>Virtual Angel</h3>
    <p>Speak naturally and let Angel respond with voice-powered AI assistant.</p>
    <img src="/Screenshot 2025-08-30 210809.png" alt="Virtual Angel" />
  </div>

  <div className={styles["assistant-box"]}>
    <h3>Angel Chatbot</h3>
    <p>Text and chat with Angel to get instant answers and assistant.</p>
    <img src="/Screenshot 2025-08-30 211212.png" alt="Angel Chatbot" />
  </div>
</div>




      </section>

      {/* Reviews */}
      <section className={styles.reviews} id="reviews">
        <h1>Client's Reviews</h1>

        <div className={styles.reviewsContainer}>
          {reviews.map((review, i) => (
            <div key={i} className={styles.reviewBox}>
              <i className="fas fa-quote-left quote"></i>
              <p>{review.text}</p>
              <div className={styles.content}>
                <div className={styles.info}>
                  <div className={styles.name}>{review.name}</div>
                  <div className={styles.job}>{review.job}</div>
                  <div className={styles.stars}>
                    {Array.from({ length: 5 }, (_, index) => {
                      if (index < Math.floor(review.stars)) {
                        return <i key={index} className="fas fa-star"></i>;
                      } else if (review.stars % 1 !== 0 && index === Math.floor(review.stars)) {
                        return <i key={index} className="fas fa-star-half-alt"></i>;
                      } else {
                        return <i key={index} className="far fa-star"></i>;
                      }
                    })}
                  </div>
                </div>
                <div className={styles.image}>
                  <img src={review.img} alt={review.name} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div id="contactU"> </div>
      {/* Footer */}
      < Footer />
    </>

  );
}
