import React, { useState } from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import GlobalStyles from "../components/GlobalStyles";

const HeaderContainer = styled.header`
  background-color: blue;
  padding: 10px;
  color: blue;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 100px;
  height: auto;
`;

const BurgerIcon = styled(FaBars)`
  font-size: 24px;
  color: #fff;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 5px;

  &:hover {
    text-decoration: underline;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #333;
  padding: 10px;
  display: none;
  flex-direction: column;
`;

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <HeaderContainer>
      <GlobalStyles />
      <div className="y-wrap">
        <Nav>
          <Logo src="images/customlogo.JPG" alt="Logo" />
          <BurgerIcon onClick={toggleDropdown} />
          <NavLinks>
            <NavLink href="/headlines">Headlines</NavLink>
            <NavLink href="/world">World</NavLink>
            <NavLink href="/politics">Politics</NavLink>
            <NavLink href="/business">Business</NavLink>
            <NavLink href="/health">Health</NavLink>
            <NavLink href="/entertainment">Entertainment</NavLink>
            <NavLink href="/travel">Travel</NavLink>
            <NavLink href="/sports">Sports</NavLink>
            <NavLink href="/profile">Profile</NavLink>
            <NavLink href="/account">Account</NavLink>
          </NavLinks>
        </Nav>
        <DropdownMenu style={{ display: isDropdownOpen ? "flex" : "none" }}>
          <NavLink href="/headlines">Headlines</NavLink>
          <NavLink href="/world">World</NavLink>
          <NavLink href="/politics">Politics</NavLink>
          <NavLink href="/business">Business</NavLink>
          <NavLink href="/health">Health</NavLink>
          <NavLink href="/entertainment">Entertainment</NavLink>
          <NavLink href="/travel">Travel</NavLink>
          <NavLink href="/sports">Sports</NavLink>
          <NavLink href="/profile">Profile</NavLink>
          <NavLink href="/account">Account</NavLink>
        </DropdownMenu>
      </div>
    </HeaderContainer>
  );
};

export default Header;
