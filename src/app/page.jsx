// pages/index.js
"use client";
import { useState, useEffect } from 'react';

export default function Home() {
  const [petfinderData, setPetfinderData] = useState(null);
  const [vetstreetData, setVetstreetData] = useState(null);

  useEffect(() => {
    // Fetch data from Petfinder API
    fetch('https://api.petfinder.com/v2/animals')
      .then(response => response.json())
      .then(data => setPetfinderData(data))
      .catch(error => console.error('Error fetching data from Petfinder API:', error));

    // Fetch data from Vetstreet API
    fetch('https://api.vetstreet.com/v2/pets')
      .then(response => response.json())
      .then(data => setVetstreetData(data))
      .catch(error => console.error('Error fetching data from Vetstreet API:', error));
  }, []);

  return (
    <div>
      <h1>Petfinder Data:</h1>
      {petfinderData ? (
        <pre>{JSON.stringify(petfinderData, null, 2)}</pre>
      ) : (
        <p>Loading Petfinder data...</p>
      )}

      <h1>Vetstreet Data:</h1>
      {vetstreetData ? (
        <pre>{JSON.stringify(vetstreetData, null, 2)}</pre>
      ) : (
        <p>Loading Vetstreet data...</p>
      )}
    </div>
  ); 
}
