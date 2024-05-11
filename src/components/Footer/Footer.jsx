import React from 'react';
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.main}>
        <div className={styles.footer}>
            <ul>
                <h5>ADOPT OR GET INVOLVED</h5>
                <li>All Adopt or Get Involved</li>
                <li>Adopting Pets</li>
                <li>Animal Shelters & Rescues</li>
                <li>Other Types of Pets</li>
            </ul>
        </div>
        <div className={styles.footer}>
            <ul>
                <h5>ABOUT DOGS & PUPPIES</h5>
                <li>All About Dogs & Puppies</li>
                <li>Dog Adoption</li>
                <li>Dog Breeds</li>
                <li>Feeding Your Dog</li>
                <li>Dog Behaviour</li>
                <li>Dog Health & Wellness</li>
                <li>Dog Training</li>
                <li>Other Dog Information</li>
            </ul>
        </div>
        <div className={styles.footer}>
            <ul>
                <h5>ABOUT CATS & KITTENS</h5>
                <li>All About Cats & Kittens</li>
                <li>Cat Adoption</li>
                <li>Cat Breeds</li>
                <li>Feeding Your Cat</li>
                <li>Cat behaviour</li>
                <li>Cat Health & Wellness</li>
                <li>Cat Training</li>
                <li>Other Cat Informaion</li>
            </ul>
        </div>
        <div className={styles.conditions}>
            <ul>
                <li>Privacy Policy</li>
                <li>Terms of use</li>
                <li>Cookie Policy</li>
            </ul>
    </div>
        </div>
  )
}

export default Footer