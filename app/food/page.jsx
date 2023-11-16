'use client';
import { getFood } from '../data';
import React, { useState } from 'react';
// import '';
export default function Food() {
  const [randomFood, setRandomFood] = useState(null);
  // console.log('data is', data);

  const handleClick = async () => {
    const foodie = await getFood();
    const randomIndex = Math.floor(Math.random() * foodie.length);
    setRandomFood(foodie[randomIndex]);
  };

  return (
    <button
      className="p-16 my-16 bg-red-600 rounded-full text-3xl text-white font-bold"
      onClick={handleClick}
    >
      <p>{randomFood ? randomFood.name : 'كبسي عليي'}</p>
    </button>
  );
}
