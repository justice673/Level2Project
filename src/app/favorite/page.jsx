"use client";
import React, { useContext } from "react";
import styles from "./page.module.css";
import { FaHeart } from "react-icons/fa6";
import { petContext } from "@/components/Context";
import Image from "next/image";

export default function Page() {
  const [favorite, setFavorite] = useContext(petContext);

  const deleteFavorite = (id) => {
    const findIndex = favorite.findIndex(pet => pet._id === id);
    if (findIndex !== -1) {
      const updatedFavorite = [
        ...favorite.slice(0, findIndex),
        ...favorite.slice(findIndex + 1)
      ];
      setFavorite(updatedFavorite);
    }
  };

  return (
    <>
      <div className={styles.nav}>
        <div className={styles.container}>
          <h3
            style={{
              color: "#fff",
              paddingLeft: 20,
              fontFamily: "moderat-medium",
            }}
          >
            PETOPIACENTER
          </h3>
        </div>
        <div className={styles.likeIcon}>
          <FaHeart />
        </div>
      </div>
      <div className={styles.main}>
        <img src="/images/hp-big.webp" alt="" />
        <div className={styles.search}>
          <input
            type="search"
            placeholder="Search Kittens, Puppies etc."
          />
        </div>
      </div>
      <div className={styles.container1}>
        {favorite.map(item => (
          <div key={item._id} className={styles.cart}>
            <h1>{item.name}</h1>
            <Image src={item.image} width={100} height={100} alt={item.name} />
            <p><strong>Name:</strong> {item.name}</p>
            <p><strong>Description:</strong> {item.description}</p>
            <p><strong>Breed:</strong> {item.breed}</p>
            <p><strong>Age:</strong> {item.age}</p>
            <p><strong>Price:</strong> {item.Price}</p>
            <button onClick={() => deleteFavorite(item._id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
}
