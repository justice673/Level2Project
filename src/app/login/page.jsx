import React from 'react';
import styles from './page.module.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

const Page = () => {
  return (
    <>
    <Navbar/>
    <div>
    <div className={styles.logincontainer}>
      <h2>Log In</h2>
      <form>
          <input type="email" name="email" placeholder='Email' required className={styles.inputstyle}/>
          <input type="password" name="password" placeholder='Password' required className={styles.inputstyle}/>
        <button type="submit"  style={{ backgroundColor: 'skyblue', color: 'white' }} className={styles.buttonstyle}>LOG IN</button>
      </form>
      <a href="#">Forgot password?</a>
      <div className={styles.separator}>
          <span>or log in with</span>
      </div>
      <button  style={{ backgroundColor: '#3b5998', color: 'white' }} className={styles.buttonstyle}>Facebook </button>
      <button  style={{ backgroundColor: 'white', color: 'grey', border: '1px solid #ddd' }} className={styles.buttonstyle}>Google</button>
      <p>Need an account? <a href="/signup">Sign up</a></p>
    </div>
    </div>
    <Footer/>
    </>

  );
};

export default Page;
