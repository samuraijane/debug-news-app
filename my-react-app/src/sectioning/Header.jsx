import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "../components/GlobalStyles";

const HeaderContainer = styled.header`
  background-color: blue;
  padding: 10px;
  color: #fff;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  return (
    <HeaderContainer>
      <GlobalStyles />
      <div className="y-wrap">
        <Nav>
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
