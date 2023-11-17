import React from "react";

const Header = () => {
  return (
    <nav className="bg-green-800 p-4">
      <div>
        <div className=" md:flex space-x-4">
          <a href="#" className="text-white">
            Home
          </a>
          <a href="#" className="text-white">
            About
          </a>
          <a href="#" className="text-white">
            Services
          </a>
          <a href="#" className="text-white">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
