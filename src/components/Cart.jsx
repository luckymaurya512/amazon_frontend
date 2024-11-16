import React from "react";
import Products from './Products';
import addButton from '../assets/add-button.svg';
import deleteBtn from '../assets/delete.svg';
import fulfilled from '../assets/amazonfulfilled.png';


export default function Cart() {
  return (
    <div className="flex flex-row bg-[#EAEDED]" >
      <div className="cart-container p-5 mx-6 my-6 bg-white max-w-[1164px] shadow-md">
        <h1 className="shopping-cart text-3xl font-semibold text-gray-900 mb-1 pb-1">Shopping Cart</h1>
        <p className="deselect text-sm font-light text-blue-600 cursor-pointer mb-5 hover:underline hover:text-orange-600">
          Deselect all items
        </p>
        <hr />
        <div className="cart-items mt-5 w-full">
          {Products.map((product, index) => (
            <CartItem key={index} product={product} />
          ))}
        </div>
      </div>
      <div className="m-6 p-2 w-[280px] ml-0 h-[264px] bg-white flex flex-col">
        <div className="flex flex-col">

        <div className="h-3  bg-[#067D62] p-2 pr-5 m-3 rounded-lg"></div>
        <span>₹499</span>
        </div>
      </div>

    </div>
  );
}

const CartItem = ({ product }) => {
  const { imageUrl, name, description, discountedPrice, actualPrice, discountPercentage } = product;

  return (
    <div className="cart-item flex justify-between py-3 border-b border-gray-200 items-center w-full ">
      <input type="checkbox" className="checkbox w-4 h-4 cursor-pointer" />
      <img src={imageUrl} alt={name} className="cart-image w-[220px] h-[220px] object-cover rounded-lg mr-5" />
      <div className="cart-details flex flex-col w-1/2">
        <h3 className="mx-0 px-0 cart-name text-lg font-semibold my-1">{description}</h3>
        <p className="instock text-sm font-normal text-green-600 mt-1">In stock</p>
        <p className="free-delivery text-sm font-normal text-black mt-1">FREE delivery Tue, 12 Nov available at checkout</p>
        <img className="fulfilled my-1 h-4 w-16" src={fulfilled} alt="fulfilled" />
        <div className="cart-quantity flex items-center justify-between border border-gray-200 w-[100px] h-[33px]">
          <button className="quantitybtndlt border-none cursor-pointer">
            <img className="dltitem h-[15px] pl-2" src={deleteBtn} alt="delete" />
          </button>
          <p className="quantity">1</p>
          <button className="quantitybtnadd border-none cursor-pointer">
            <img className="additem h-[15px] pr-2" src={addButton} alt="add" />
          </button>
        </div>
      </div>
      <div className="price flex flex-col justify-evenly px-3">
        <div className="limited text-xs font-bold text-red-700">
          <button className="discountbtn bg-red-700 text-white py-1 px-2 text-sm font-medium rounded cursor-pointer">
            {discountPercentage}% off
          </button> 
          Limited time deal
        </div>
        <p className="cart-price text-lg font-semibold text-black mb-2">${discountedPrice}</p>
        <span className="Mrptext text-xs font-normal text-black">
          M.R.P.:<span className="mrp line-through text-black text-xs">${actualPrice}</span>
        </span>
      </div>
    </div>
  );
};
