import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { FaHeart } from "react-icons/fa6";

const Navbar = () => {
  const links = [
    { name: "Sign Up", href: "/signup" },
    { name: "Log In", href: "/login" },
  ];
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Link href={"/"}>
        <h3
          style={{
            color: "#87CEEB",
            paddingLeft: 20,
            fontFamily: "moderat-medium",
          }}
        >
          PETOPIACENTER
        </h3>
        </Link>
        {/* <div className={styles.containerDropdown}>ALL ABOUT PETS</div> */}
        <div className={styles.like}>
          <Link href={"/favorite"}>
          <div className={styles.likeIcon}>
            <FaHeart />
          </div>
          </Link>
          <Link href={"/cart"}>
          <div className={styles.cartIcon}>
          <button class="button">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" stroke-linejoin="round" stroke-linecap="round" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke="skyblue" class="icon">
          <circle r="1" cy="21" cx="9"></circle>
          <circle r="1" cy="21" cx="20"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
      </button>
          </div>
          </Link>
          <div className={styles.containerLinks}>
            {/* {links.map((link,index) => (
            <Link href={link.href} className={styles.link} key={index}>{link.name}</Link>
          ))} */}
            <div class="container">
              <div class="toggle">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.menu}>
        <div className={styles.return}>
        <div className={styles.text}>
       <h2>Menu</h2>
       </div>
       <button class="button">
      <span class="X"></span>
      <span class="Y"></span>
      </button>
      </div>
       <div className={styles.headerDropdown}>
        <ul>
          <li className={styles.dropdown1}>DOGS & PUPPIES </li>
          <li className={styles.dropdown2}>CATS & KITTENS</li>
          <li className={styles.dropdown3}>
            OTHER TYPES OF PETS
            <ul>
              <li>Parrots</li>
              <li>Guinea Pigs</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className={styles.enter}>
       {links.map((link,index) => (
            <Link href={link.href} className={styles.link} key={index}>{link.name}</Link>
          ))}
          </div>
      </div>
      
    </div>
  );
};

export default Navbar;
