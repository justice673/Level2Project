"use client";
import React, { createContext, useState, useEffect } from 'react';

export const petContext = createContext();

function Context({ children }) {
  const [favorite, setFavorite] = useState(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("pet")) || [];
    } else {
      return [];
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("pet", JSON.stringify(favorite));
    }
  }, [favorite]);

  return (
    <petContext.Provider value={[favorite, setFavorite]}>
      {children}
    </petContext.Provider>
  );
}

export default Context;
