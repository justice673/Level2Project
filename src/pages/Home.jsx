import React from 'react';
import styles from './Home.module.css';
import Image from 'next/image';


const Home = () => {
  return (
    <div className={styles.imagecontainer}>
        <Image 
        src="public/images/hp-big.webp"
        alt=""
        fill={true}
        />
    </div>
  )
}

export default Home