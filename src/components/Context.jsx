"use client";
import React, { createContext, useState } from 'react'

export const petContext = createContext()

function Context({children}) {
    const[favorite, setFavorite] = useState(JSON.parse(localStorage.getItem("pet")) || [] )
    console.log(favorite);
    localStorage.setItem("pet", JSON.stringify(favorite))
  return (
    <petContext.Provider value={[favorite, setFavorite]}>
      {children}
    </petContext.Provider>
  )
}

export default Context;