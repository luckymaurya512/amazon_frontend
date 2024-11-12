import React from 'react';
import HeadphoneCard from './HeadphoneCard';
import Products from './Products';

export default function Body({ data }) {
  return (
    <div className="body bg-gray-200 p-4 flex flex-wrap justify-evenly gap-4">
      {[...Array(5)].map((_, index) => (
        <HeadphoneCard key={index} />
      ))}
      
      {Products.map((product, index) => (
        <Card key={index} product={product} />
      ))}
    </div>
  );
}

const Card = ({ product }) => {
  return (
    <div className="card w-[280px] h-[480px] bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center transition-transform duration-300 ease-in-out hover:transform hover:translate-y-[-5px] hover:shadow-lg">
      <img src={product.imageUrl} alt={product.name} className="w-full h-[200px] object-cover rounded-md" />
      <h3 className="name text-lg font-semibold mt-4 text-gray-800 w-[250px] truncate">{product.name}</h3>
      <div className="mt-4 flex flex-col items-center">
        <span className="actual-price text-red-500 text-lg line-through">${product.actualPrice}</span>
        <span className="discounted-price text-green-500 text-lg mt-1">${product.discountedPrice}</span>
      </div>
      <div className="mt-4 text-sm text-blue-500">flat {product.discountPercentage}% off</div>
      <div className="mt-2 text-sm text-yellow-500">Star rating: {product.rating}</div>
      <button className="add-to-cart w-full bg-yellow-400 text-black py-2 mt-4 rounded-full transition-colors duration-300 hover:bg-orange-400">
        Add to Cart
      </button>
    </div>
  );
};
