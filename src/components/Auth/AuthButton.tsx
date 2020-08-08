import React from "react";
import styled from "styled-components";
import { shadow, theme } from "lib/styleUtil";

const Wrapper = styled.div`
  margin-top: 1rem;
  padding-top: 0.6rem;
  padding-bottom: 0.5rem;

  background: ${theme(6)};
  color: white;

  text-align: center;
  font-size: 1.25rem;
  font-weight: 500;

  cursor: pointer;
  user-select: none;
  transition: 0.2s all;

  &:hover {
    background: ${theme(5)};
    ${shadow(0)}
  }
  &:active {
    background: ${theme(7)};
  }
`;

function AuthButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
}

export default AuthButton;
