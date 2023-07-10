import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="y-wrap">
        <nav>
          <Link to="/headlines">Headlines</Link>

          <Link to="/world">World</Link>
          <Link to="/politics">Politics</Link>
          <Link to="/business">Business</Link>
          <Link to="/health">Health</Link>
          <Link to="/entertainment">Entertainment</Link>
          <Link to="/travel">Travel</Link>
          <Link to="/sports">Sports</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/account">Account</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header; // default means unnamed export
