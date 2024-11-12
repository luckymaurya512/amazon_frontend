import React from 'react';

const NavbarBanner = ({ onSidebarToggle }) => {
  return (
    <div className="navbar-menu flex items-center py-2 bg-[#232f3e] text-white text-[14px] font-normal border-b border-[#282828] h-[30px]">
      <ul className="flex space-x-4">
        <li className='cursor-pointer hover:border-white'>
          <span
            onClick={() => onSidebarToggle(true)}
            className="cursor-pointer hover:border hover:rounded-sm p-[5px] text-[14px]"
          >
            All
          </span>
        </li  >
        <li className='cursor-pointer hover:border-white hover:rounded-sm' >Fresh</li>
        <li className='cursor-pointer hover:border-white'>MX Player</li>
        <li className='cursor-pointer hover:border-white'>Sell</li>
        <li className='cursor-pointer hover:border-white'>Best Sellers</li>
        <li className='cursor-pointer hover:border-white'>Today's Deals</li>
        <li className='cursor-pointer hover:border-white'>Mobiles</li>
        <li className='cursor-pointer hover:border-white'>Electronics</li>
        <li className='cursor-pointer hover:border-white'>Home & Kitchen</li>
        <li className='cursor-pointer hover:border-white'>Customer Service</li>
        <li className='cursor-pointer hover:border-white'>Prime</li>
        <li className='cursor-pointer hover:border-white'>Amazon Pay</li>
        <li className='cursor-pointer hover:border-white'>New Releases</li>
        <li className='cursor-pointer hover:border-white'>Fashion</li>
        <li className='cursor-pointer hover:border-white'>Car & Motorbike</li>
        <li className='cursor-pointer hover:border-white'>Computers</li>
      </ul>
    </div>
  );
};

export default NavbarBanner;
