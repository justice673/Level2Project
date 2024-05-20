import React from 'react';
import styles from './page.module.css'
import Navbar from '@/components/Navbar/Navbar';

export default function page() {
  return (
    <>
    <Navbar/>
    <div className={styles.main}> 
      <img src="/images/hp-big.webp" alt="" />
    <div className={styles.search}>
        <input type="search" name="" id="" placeholder='Search Kittens,Puppies etc.' />
    </div>
    <div className={styles.text}>
      <h1>Find your new best <span> friend </span></h1>
      </div>
    </div>
    </>
  )
}
