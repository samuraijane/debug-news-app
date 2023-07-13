
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

  @media (max-width: 768px) {
    display: none;
  }
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

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  }
`;

const DropdownLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 5px;

  &:hover {
    text-decoration: underline;
  }
`;

  padding-right: 100px;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-right: 15px;
  font-size: 14px;

  &:last-child {
    margin-right: 0;
  }
`;
const Logo = styled.img`
 width: 100px;
 height: 75px;
 padding-bottom: 20px;
`


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      <GlobalStyles />
      <div className="y-wrap">
        <Nav>

          <Logo src="images/customlogo.JPG" alt="Logo" />
          <BurgerIcon onClick={toggleMenu} />
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
        {isOpen && (
          <DropdownMenu isOpen={isOpen}>
            <DropdownLink href="/headlines">Headlines</DropdownLink>
            <DropdownLink href="/world">World</DropdownLink>
            <DropdownLink href="/politics">Politics</DropdownLink>
            <DropdownLink href="/business">Business</DropdownLink>
            <DropdownLink href="/health">Health</DropdownLink>
            <DropdownLink href="/entertainment">Entertainment</DropdownLink>
            <DropdownLink href="/travel">Travel</DropdownLink>
            <DropdownLink href="/sports">Sports</DropdownLink>
            <DropdownLink href="/profile">Profile</DropdownLink>
            <DropdownLink href="/account">Account</DropdownLink>
          </DropdownMenu>
        )}

        <Logo src="/images/customlogo.JPG" alt="Logo" />
        <div>
          <NavLink to="/headlines">Headlines</NavLink>
          <NavLink to="/world">World</NavLink>
          <NavLink to="/politics">Politics</NavLink>
          <NavLink to="/business">Business</NavLink>
          <NavLink to="/health">Health</NavLink>
          <NavLink to="/entertainment">Entertainment</NavLink>
          <NavLink to="/travel">Travel</NavLink>
          <NavLink to="/sports">Sports</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/account">Account</NavLink>
          </div>
        </Nav>

      </div>
    </HeaderContainer>
  );
};

export default Header;
