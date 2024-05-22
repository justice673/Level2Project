"use client";
import React, { useContext } from "react";
import styles from "./page.module.css";
import { FaHeart } from "react-icons/fa6";
import { petContext } from "@/components/Context";
import Image from "next/image";

export default function Page() {
  const [cart, setCart] = useContext(petContext);

  const deleteCart = (id) => {
    const updatedCart = cart.filter(item => item._id !== id);
    setCart(updatedCart);
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
    <div className={styles.text}>
            <h1>Cart</h1>
            </div>
      <div className={styles.container1}>
        {cart && cart.map(item => (
          <div key={item._id} className={styles.cart}>
            <h1>{item.name}</h1>
            <Image src={item.image} width={100} height={100} alt={item.name} />
            <p><strong>Name:</strong> {item.name}</p>
            <p><strong>Description:</strong> {item.description}</p>
            <p><strong>Breed:</strong> {item.breed}</p>
            <p><strong>Age:</strong> {item.age}</p>
            <p><strong>Price:</strong> {item.Price}</p>
            <button onClick={() => deleteCart(item._id)}>Delete from Cart</button>
          </div>
        ))}
      </div>
    </>
  );
}
