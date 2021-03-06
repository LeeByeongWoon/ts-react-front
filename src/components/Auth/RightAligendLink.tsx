import React from "react";
import oc from "open-color";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Aligner = styled.div`
  margin-top: 1rem;
  text-align: right;
`;

const StyledLink = styled(Link)`
  color: ${oc.gray[6]};
  &:hover {
    color: ${oc.gray[7]};
  }
`;
function RightAligendLink({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <Aligner>
      <StyledLink to={to}>{children}</StyledLink>
    </Aligner>
  );
}
export default RightAligendLink;
