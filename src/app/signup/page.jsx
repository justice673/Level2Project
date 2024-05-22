"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/navigation";
import emailjs from '@emailjs/browser';
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setcPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    errorUsername: "",
    errorEmail: "",
    errorPassword: "",
  });
  const router = useRouter();

  const sendEmail = (e) => {
    e.preventDefault();
    const notyf = new Notyf();

  emailjs
    .sendForm('service_gtcv669', 'template_21mnu1p', form.current, {
      publicKey: 'ar4vfSfs4iZUIb_7t',
    })
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
};

  const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(name, email, password);
      let valid = true;
      
      sendEmail();n
    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
     };

    if (!name) {
      setErrorMessage((prev) => ({
        ...prev,
        errorUsername: "Username is required",
      }));
      valid = false;
    } else {
      setErrorMessage((prev) => ({ ...prev, errorUsername: "" }));
    }

    if (!email || !validateEmail(email)) {
      setErrorMessage((prev) => ({
        ...prev,
        errorEmail: "Valid email is required",
      }));
      valid = false;
    } else {
      setErrorMessage((prev) => ({ ...prev, errorEmail: "" }));
    }

    if (password !== cPassword) {
      setErrorMessage((prev) => ({
        ...prev,
        errorPassword: "Passwords do not match",
      }));
      valid = false;
    } else {
      setErrorMessage((prev) => ({ ...prev, errorPassword: "" }));
    }

    if (!valid) return;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      if (res.status === 400) {
        notyf.error("User already exists");
      } else if (res.status === 201) {
        notyf.success("Account created");
        router.push("/login?success=Account has been created");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.formcontainer}>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            id="name"
            placeholder="Name"
          />
          <p>{errorMessage.errorUsername}</p>

          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            id="email"
            placeholder="email@gmail.com"
          />

          <p>{errorMessage.errorEmail}</p>
          <div className={styles.inputIcon}>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="********"
              />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className={styles.iconButton}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
          </div>

          <div className={styles.inputIcon}>
            <input
              value={cPassword}
              onChange={(e) => setcPassword(e.target.value)}
              type={showCPassword ? "text" : "password"}
              id="confirm-password"
              placeholder="********"
              />
            <button
              type="button"
              onClick={() => setShowCPassword(!showCPassword)}
              className={styles.iconButton}
            >
              <FontAwesomeIcon icon={showCPassword ? faEyeSlash : faEye} />
            </button>
          </div>
          <p>{errorMessage.errorPassword}</p>

          <button type="submit" className={styles.submitbtn}>
            SIGN UP
          </button>
        </form>
        <div className={styles.separator}>
          <span>or sign up with </span>
        </div>
        <div className={styles.sociallogin}>
          <button className={styles.facebook}>
            <FontAwesomeIcon icon={faFacebookF} /> Facebook
          </button>
          <button className={styles.google}>
            <FontAwesomeIcon icon={faGoogle} /> Google
          </button>
        </div>
        <p>
          Already have an account? <Link href={"/login"}>Log in</Link>
        </p>
      </div>
    </div>
  );
}
