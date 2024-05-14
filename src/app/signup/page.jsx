"use client";
import React, { useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';

export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setcPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showCPassword, setShowCPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className={styles.pageContainer}>
        <div className={styles.formcontainer}>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setName(e.target.value)}
                    type="text" id="name" placeholder='Name' required />

                <input onChange={(e) => setEmail(e.target.value)}
                    type="email" id="email" placeholder='email@gmail.com' required />

                <div className={styles.inputIcon}>
                    <input onChange={(e) => setPassword(e.target.value)}
                        type={showPassword ? "text" : "password"} id="password" placeholder='********' required />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className={styles.iconButton}>
                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                    </button>
                </div>

                <div className={styles.inputIcon}>
                    <input onChange={(e) => setcPassword(e.target.value)}
                        type={showCPassword ? "text" : "password"} id="confirm-password" placeholder='********' required />
                    <button type="button" onClick={() => setShowCPassword(!showCPassword)} className={styles.iconButton}>
                        <FontAwesomeIcon icon={showCPassword ? faEyeSlash : faEye} />
                    </button>
                </div>

                <button type="submit" className={styles.submitbtn}>SIGN UP</button>
            </form>
            <div className={styles.separator}>
                <span>or sign up with </span>
            </div>
            <div className={styles.sociallogin}>
                <button className={styles.facebook}><FontAwesomeIcon icon={faFacebookF} /> Facebook</button>
                <button className={styles.google}><FontAwesomeIcon icon={faGoogle} /> Google</button>
            </div>
            <p>Already have an account? <Link href={"/login"}>Log in</Link></p>
        </div>
        </div>
    );
}
