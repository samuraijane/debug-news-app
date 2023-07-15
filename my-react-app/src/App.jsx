import React, { useState } from "react";
import styled from "styled-components";
import Header from "./sectioning/Header";
import Main from "./sectioning/Main";
import Footer from "./sectioning/Footer";
import Register from "./components/Register";
import Landing from "./components/Landing";
import "./app.css";
import GlobalStyles from "./components/GlobalStyles";

const MobileHeader = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #333;
  color: #fff;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileFooter = styled(Footer)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #333;
  color: #fff;
  font-size: 14px;

  @media (min-width: 768px) {
    display: none;
  }
`;
const MobileMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #333;
  padding: 10px;
  list-style: none;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

const MobileMenuItem = styled.li`
  margin-bottom: 10px;
`;
const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: none;
  color: #fff;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <GlobalStyles />
      <MobileHeader
        isMobileMenuOpen={isMobileMenuOpen}
        onToggleMobileMenu={toggleMobileMenu}
      />
      <Landing />
      <Main />
      <MobileFooter
        isMobileMenuOpen={isMobileMenuOpen}
        onToggleMobileMenu={toggleMobileMenu}
      />
    </>
  );
}
