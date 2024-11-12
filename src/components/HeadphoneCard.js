import React from 'react';
import boat from "../assets/boat.jpg";
import boult from "../assets/boult.jpg";
import noise from "../assets/noise.jpg";
import zebronics from "../assets/zebronics.jpg";

const HeadphoneCard = () => {
  return (
    <div className="bg-white p-4 w-[280px] h-[335px] flex flex-col justify-center">
      <h2 className="text-lg font-medium mb-4">Starting ₹149 | Headphones</h2>
      
      <div className="flex flex-wrap gap-4">
        <div className="w-[45%] text-center">
          <img src={boat} alt="boAt" className="w-full h-auto rounded-md" />
          <p className="text-sm mt-2">Starting ₹249 | boAt</p>
        </div>
        
        <div className="w-[45%] text-center">
          <img src={boult} alt="Boult" className="w-full h-auto rounded-md" />
          <p className="text-sm mt-2">Starting ₹349 | Boult</p>
        </div>
        
        <div className="w-[45%] text-center">
          <img src={noise} alt="Noise" className="w-full h-auto rounded-md" />
          <p className="text-sm mt-2">Starting ₹649 | Noise</p>
        </div>
        
        <div className="w-[45%] text-center">
          <img src={zebronics} alt="Zebronics" className="w-full h-auto rounded-md" />
          <p className="text-sm mt-2">Starting ₹149 | Zebronics</p>
        </div>
      </div>
      
      <a href="google.com" className="text-blue-600 text-sm mt-4 block hover:underline">See all offers</a>
    </div>
  );
};

export default HeadphoneCard;
