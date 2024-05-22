import React from 'react';
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.mainContainer}>
    <div className={styles.main}>
        <div className={styles.footer}>
            <ul>
                <h5>DOGS & PUPPIES</h5>
            </ul>
        </div>
        <div className={styles.footer}>
            <ul>
                <h5>CATS & KITTENS</h5>
            </ul>
        </div>
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