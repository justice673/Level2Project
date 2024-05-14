import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { FaHeart } from "react-icons/fa6";

const Navbar = () => {
  const links = [
    {name:'Sign Up', href:'/signup'},
    {name:'Log In', href:'/login'}
  ];
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h3 style={{ color: "#87CEEB", marginLeft: 20, fontFamily:'moderat-medium'}}>PETOPIACENTER</h3>
        {/* <div className={styles.containerDropdown}>ALL ABOUT PETS</div> */}
        <div className={styles.likeIcon}><FaHeart /></div>
        <div className={styles.containerLinks}>
          {links.map((link,index) => (
            <Link href={link.href} className={styles.link} key={index}>{link.name}</Link>
          ))}
        </div>
      </div>
      <div className={styles.headerDropdown}>
        <ul>
          <li className={styles.dropdown1}>ADOPT OR GET INVOLVED</li>
          <li className={styles.dropdown2}>DOGS & PUPPIES </li>
          <li className={styles.dropdown3}>CATS & KITTENS</li>
          <li className={styles.dropdown4}>OTHER TYPES OF PETS
          <ul>
            <li>Birds</li>
            <li>Rabbits</li>
            <li>Reptiles</li>
            <li>Guinea Pigs</li>
            <li>Horses</li>
          </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
