// import React from 'react'
import Card from './Card'
import Amritsar from "./assets/Amritsar.jpg";
import Manali from "./assets/Best-Time-to-Visit-Kullu-Manali.jpg";
import Kashmir from "./assets/Manali_City.jpg";
import TajMahal from "./assets/tajMAhal.jpg";

const TrendingPage = () => {

  const destinations = [
    { image: Amritsar, title: "Amritsar", description: "This is the description of card 1." },
    { image: Manali, title: "Manali", description: "This is the description of card 2." },
    { image: Kashmir, title: "Kashmir", description: "This is the description of card 3." },
    { image: TajMahal, title: "Taj Mahal", description: "This is the description of card 4." },

  ];
  return (
    <>
    <div className=" py-5 bg-gray-300">
      <h2 className="text-2xl mb-5 text-center">Trending Destinations</h2>
      <div className="flex overflow-x-scroll space-x-5 px-5 justify-between">
        {destinations.map((dest, index) => (
            <Card key={index} {...dest} />
        ))}
      </div>
    </div>
    </>
  )
}

export default TrendingPage
