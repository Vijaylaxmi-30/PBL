import React from "react";
import styles from "../styles/Login.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.registrationBox}>
        <button className={styles.closeButton}>&times;</button>
        <h2 className={styles.title}>Registration</h2>
        <div className={styles.inputContainer}>
          <input type="text" placeholder="Name" className={styles.input} />
          <span className={styles.icon}><i className="fas fa-user"></i></span>
        </div>
        <div className={styles.inputContainer}>
          <input type="email" placeholder="Email" className={styles.input} />
          <span className={styles.icon}><i className="fas fa-envelope"></i></span>
        </div>
        <div className={styles.inputContainer}>
          <input type="password" placeholder="Password" className={styles.input} />
          <span className={styles.icon}><i className="fas fa-lock"></i></span>
        </div>
        <div className={styles.checkboxContainer}>
          <input type="checkbox" id="terms" className={styles.checkbox} />
          <label htmlFor="terms">I Agree to the Terms & Conditions</label>
        </div>
        <button className={styles.registerButton}>Register</button>
        <p className={styles.loginLink}>Already have an account? <a href="/login">Login</a></p>
      </div>
    </div>
  );
};

export default Login;
