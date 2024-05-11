import React from 'react';
import  styles from './page.module.css';

export default function SignUp() {
  return (
    <div className={styles.formcontainer}>
      <h2>Sign Up</h2>
      <form>
        <input type="text" id="name" placeholder='Name' required />

        <input type="email" id="email" placeholder='email@gmail.com' required />

        <input type="password" id="password" placeholder='********' required />

        <input type="password" id="confirm-password" placeholder='********' required />

        <button type="submit" className={styles.submitbtn}>SIGN UP</button>
      </form>
      <div className={styles.separator}>
         <span>or sign up with </span>
      </div>
      <div className={styles.sociallogin}>
        <button className={styles.facebook}>Facebook</button>
        <button className={styles.google}>Google</button>
      </div>
      <p>Already have an account? <a href="/login">Log in</a></p>
    </div>
  );
}
