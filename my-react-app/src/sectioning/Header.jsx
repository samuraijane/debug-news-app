import React, { useState, useEffect } from "react";
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
  object-fit: fixed;
`;

const BurgerIcon = styled(FaBars)`
  font-size: 24px;
  color: #fff;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

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
`;
export default Header;
