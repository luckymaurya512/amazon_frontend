import React from 'react';
import NavbarBanner from './NavbarBanner';
import NavbarBelt from './NavbarBelt';

const Navbar = ({ onSidebarToggle }) => {
  return (
    <div className="navbar">
      <NavbarBelt />
      <NavbarBanner onSidebarToggle={onSidebarToggle} />
    </div>
  );
};

export default Navbar;
