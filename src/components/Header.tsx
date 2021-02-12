import React from "react";
import styled from "styled-components";

const HeadContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
  padding: 25px;
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
`;

const NavBar = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const NavItem = styled.li`
  list-style: none;
  margin: 0 15px;
  font-family: Montserrat, sans-serif;
  font-weight: bold;
  font-size: 1.2rem;

  &:hover {
    cursor: pointer;
  }

  a {
    color: #082842;
    text-decoration: none;
    display: inline-block;
    padding: 15px 20px;
    position: relative;
  }

  a:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #34bebd;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  a:hover:after {
    width: 100%;
    left: 0;
  }
`;

function Header() {
  return (
    <HeadContainer>
      <img src="/assets/vouchlogo.svg" />
      <NavBar>
        <NavItem active>
          <a>change log</a>
        </NavItem>
        {/*         <NavItem>
          <a>dev blog</a>
        </NavItem> */}
      </NavBar>
    </HeadContainer>
  );
}

export default Header;
