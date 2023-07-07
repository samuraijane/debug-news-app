import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="y-wrap">
        <nav>
          <NavLink to="/">US</NavLink>
          <NavLink to="world">World</NavLink>
          <NavLink to="politics">Politics</NavLink>
          <NavLink to="business">Business</NavLink>
          <NavLink to="health">Health</NavLink>
          <NavLink to="entertainment">Entertainment</NavLink>
          <NavLink to="travel">Travel</NavLink>
          <NavLink to="sports">Sports</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header; // default means unnamed export
