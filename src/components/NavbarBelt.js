import React from 'react';
// import './NavbarBelt.css';
import amazonLogo from '../assets/amazon_logo2.png';
import location from '../assets/location-48.svg';
import search from '../assets/search.svg';
import India from '../assets/india.svg';
import cart from '../assets/cart.png';

const NavbarBelt = () => {
  return (
    <div className='bg-[#131921] flex w-full h-14 text-white box-border justify-evenly'>
      <div className='flex items-center gap-1 hover:border hover:border-solid hover:border-white hover:rounded-sm'>
        <div className='w-28 h-10 p-2 cursor-pointer flex items-center '>
          <a href='/'><img className='w-full h-full ml-3' src={amazonLogo} alt='amazon-logo' /></a>
          <span className='text-white ml-3 mb-2 pr-1'>.in</span>
        </div>
      </div>
      <div className='hover:border hover:border-solid hover:rounded-sm flex items-center p-1 pl-0 cursor-pointer rounded'>
        <img src={location} alt="location-icon" className="h-4 mr-1 mt-3 invert" />
        <div className='flex flex-col'>
          <p className='text-[#c0cccc] text-xs m-0'>Deliver to <br />
            <span className='text-sm font-bold text-white'>Roorkee 247667</span>
          </p>
        </div>
      </div>
      <div className='flex items-center border-none rounded overflow-hidden w-1/2'>
        <select className='border-none p-2 h-10 bg-[#d4d4d4] cursor-pointer w-[51px] rounded-l-lg text-black text-[12px] '>
          <option className='text-[14px] text-black bg-white' >All</option>
          <option>Electronics</option>
          <option>Mobiles</option>
          <option>Books</option>
          <option>Fashion</option>
          <option>Home & Kitchen</option>
          <option>Appliances</option>
          <option>Gift Cards</option>
          <option>Deals</option>
          <option>Prime</option>
          <option>Customer Service</option>
          <option>Computers & Accessories</option>
        </select>
        <input type="text" className='items-center justify-center h-10 w-[724px] rounded-none' placeholder="Search Amazon.in" />
        <button className='p-2 h-10 w-12 rounded-r-lg bg-[#febd69]'>
          <img src={search} className='h-6' alt='search-btn' />
        </button>
      </div>
      <div className='p-2 flex items-center cursor-pointer hover:border hover:border-solid hover:border-white hover:rounded-sm'>
        <img src={India} alt='india-flag' className='h-4 mr-1' />
        <span className='text-white'>EN</span>
      </div>
      <div className='p-2 flex items-center cursor-pointer hover:border-solid hover:border-white hover:rounded-sm hover:text-white'>
        <a href='/signin' className='text-xs text-white flex flex-col'>
          <span>Hello, sign in</span>
          <span className='font-bold text-sm'>Account & Lists</span>
        </a>
      </div>
      <div className='flex items-center cursor-pointer hover:border hover:border-solid hover:border-white hover:rounded-sm p-2'>
        <p className='text-xs text-white'>
          Returns <br />
          <span className='font-bold text-sm'>& Orders</span>
        </p>
      </div>
      <div className='flex font-bold items-center cursor-pointer hover:border hover:border-solid hover:border-white hover:rounded-sm p-2'>
        <img src={cart} alt='cart-icon' className='h-6 invert transform scale-x-[-1]' />
        <a href='/cart' className='text-white ml-1'>Cart</a>
      </div>
    </div>
  );
}

export default NavbarBelt;
