import React from 'react';

const CartSummary = ({ itemCount, subtotal }) => {
  return (
    <div className="m-6 p-4 w-[280px] h-[264px] bg-white shadow-md flex flex-col justify-between">
      <div>
        <h2 className="font-semibold text-xl">Subtotal ({itemCount} items):</h2>
        <p className="font-bold text-lg">₹{subtotal.toFixed(2)}</p>
      </div>
      <button className="bg-yellow-400 text-black py-2 px-4 rounded mt-4">
        Proceed to Buy
      </button>
    </div>
  );
};

export default CartSummary;
