<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> test
import React, { useState, useEffect } from "react";
=======
import React, { useState } from "react";
>>>>>>> 28a6c9a (pushing code changes)
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import GlobalStyles from "../components/GlobalStyles";

 

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
        setIsDropdownOpen(false);
      } else {
        setIsMobile(false);
        setIsDropdownOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <HeaderContainer>
      <GlobalStyles />
      <div className="y-wrap">
        <Nav>
          <Logo src="images/customlogo.JPG" alt="Logo" />
          {isMobile ? (
            <>
              <BurgerIconWrapper>
                <BurgerIcon onClick={toggleDropdown} />
              </BurgerIconWrapper>
              <NavLinks isOpen={isDropdownOpen}>
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
            </>
          ) : (
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
          )}
        </Nav>
<<<<<<< HEAD
=======
      </div>
      {isDropdownOpen && <div style={{ height: "200px" }}></div>}
    </HeaderContainer>
  );
};

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
<<<<<<< HEAD
  object-fit: fixed;
=======
>>>>>>> 28a6c9a (pushing code changes)
`;

const BurgerIcon = styled(FaBars)`
  font-size: 24px;
<<<<<<< HEAD
  color: #fff;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`

=======
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
>>>>>>> test
      </div>
    </HeaderContainer>
  );
};
>>>>>>> 28a6c9a (pushing code changes)

<<<<<<< HEAD
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
  object-fit: fixed;
`;

const BurgerIcon = styled(FaBars)`
  font-size: 24px;
  color: #fff;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`


=======
>>>>>>> test
const BurgerIconWrapper = styled.div`
  display: flex;
  align-items: center;
`;




const NavLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    background-color: blue;
    padding: 10px;
    width: 100%;
    z-index: 1;
  }
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 5px;
`
export default Header;
