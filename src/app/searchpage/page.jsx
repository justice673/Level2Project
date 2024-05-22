"use client";
import React, { useState, useEffect, useContext } from "react";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import { petContext } from "@/components/Context";
import { CartContext } from "@/components/CartContext";
import Image from "next/image";

export default function Page() {
  const [favorite, setFavorite] = useContext(petContext);
  const [cart, setCart] = useContext(CartContext);
  const [pets, setPets] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/posts");
        const data = await response.json();
        setPets(data);
      } catch (error) {
        console.error("Error fetching Recommended pets:", error);
      }
    };
    fetchPets();
  }, []);

  const addToFavorites = (item) => {
    const liked = favorite.find((items) => items._id === item._id);
    if (liked) {
      alert("Already in Favorite");
    } else {
      setFavorite((prev) => [...prev, item]);
      alert("Added to Favorite");
    }
  };

  const addToCart = (item) => {
    const inCart = cart.find((items) => items._id === item._id);
    if (inCart) {
      alert("Already in Cart");
    } else {
      setCart((prev) => [...prev, item]);
      alert("Added to Cart");
    }
  };

  const filteredItems = pets.filter((item) =>
    item.title?.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className={styles.main}>
        <img src="/images/hp-big.webp" alt="" />
        <div className={styles.search}>
          <input
            type="search"
            name=""
            id=""
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search Kittens, Puppies etc."
          />
        </div>
        <div className={styles.text}>
          <h1>
            Find your new best <span> friend </span>
          </h1>
        </div>
      </div>
      <div className={styles.container}>
        {filteredItems.map((pet, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.seperate}>
              <div className={styles.title1}>
                <h2>{pet.title}</h2>
              </div>
              <label class="container1" onClick={() => addToFavorites(pet)}>
                <input type="checkbox" />
                <div class="checkmark">
                  <svg viewBox="0 0 256 256">
                    <rect fill="none" height="256" width="256"></rect>
                    <path
                      d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                      strokeWidth="20px"
                      stroke="#000"
                      fill="none"
                    ></path>
                  </svg>
                </div>
              </label>
            </div>
            <Image
              src={pet.image}
              alt={pet.name}
              width={300}
              height={200}
              style={{ objectFit: "cover" }}
              className={styles.imageContainer}
            />
            <p>
              <strong>Name:</strong> {pet.name}
            </p>
            <p>
              <strong>Description:</strong> {pet.description}
            </p>
            <p>
              <strong>Breed:</strong> {pet.breed}
            </p>
            <p>
              <strong>Age:</strong> {pet.age}
            </p>
            <p>
              <strong>Price:</strong> {pet.Price}
            </p>
            <button class="CartBtn" onClick={() => addToCart(pet)}>
              <span class="IconContainer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                  fill="rgb(17, 17, 17)"
                  class="cart"
                >
                  <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                </svg>
              </span>
              <p class="text">Add to Cart</p>
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
