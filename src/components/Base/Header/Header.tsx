import React from "react";
import { HeaderProps } from "status/types";
import styled from "styled-components";
import { theme, gradient } from "lib/styleUtil";

const Positioner = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0px;
  width: 100%;
`;
const WhiteBackground = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  height: auto;
`
const HeaderContents = styled.div`
  width: 1200px;
  height: 55px;
  display: flex;
  flex-direction: row;
  align-items:center;

  padding-right: 1rem;
  padding-left: 1rem;
`
const Logo = styled.div`
  font-size: 1.4rem;
  letter-spacing: 2px;
  color: ${theme(7)};
  font-family: 'Rajdhani';
`
const Spacer = styled.div`
    flex-grow: 1;
`;
//하단 그라데이션 
const GradientBorder = styled.div`
    height: 3px;
    background:${gradient}
`;

function Header({ children }: HeaderProps) {
  return <Positioner>
    <WhiteBackground >
      <HeaderContents>
        <Logo>TOYPAGE</Logo>
        <Spacer />
        {children}
      </HeaderContents>
    </WhiteBackground>
    <GradientBorder />
  </Positioner>;
}

export default Header;
