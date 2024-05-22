"use client";
import React, { useState } from 'react';
import styles from './page.module.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Notyf } from "notyf";
import "notyf/notyf.min.css";


const Page = () => {
  const navigation = useRouter()
  const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");
    
    const handleSubmit = async (e) => {
      e.preventDefault()
      // console.log("hepesd");
      
      
      const notyf = new Notyf()
      
      try {
        const res = await fetch("api/auth/authentication", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });
        console.log(res.status);
        if (res.status === 200) { 
          navigation.push("/")
          notyf.success("Succesfully Logged in")
        } else if (res.status === 400) {
          return notyf.error("user does not exist")
        }
      } catch (error) {
        console.log(error);
      }
    };
  return (
    <>
    <Navbar/>
    <div>
    <div className={styles.logincontainer}>
      <div className={styles.closeButton}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
          <line x1="0" y1="0" x2="20" y2="20" stroke="skyblue" stroke-width="6"/>
          <line x1="20" y1="0" x2="0" y2="20" stroke="skyblue" stroke-width="6"/>
        </svg>
      </div>                
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
          <input type="email" name="email" value={email} placeholder='Email' required className={styles.inputstyle} onChange={(e)=>setEmail(e.target.value)} />
          <input type="password" name="password" value={password} placeholder='Password' required className={styles.inputstyle} onChange={(e)=>setPassword(e.target.value)}/>
        <button type="submit"  style={{ backgroundColor: 'skyblue', color: 'white' }} className={styles.buttonstyle}>LOG IN</button>
      </form>
      <a href="#">Forgot password?</a>
      <div className={styles.separator}>
          <span>or log in with</span>
      </div>
      <button  style={{ backgroundColor: '#3b5998', color: 'white' }} className={styles.buttonstyle}>Facebook </button>
      <button  style={{ backgroundColor: 'white', color: 'grey', border: '1px solid #ddd' }} className={styles.buttonstyle}>Google</button>
      <p>Need an account? <Link href={"/signup"}>Sign up</Link></p>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default Page;
