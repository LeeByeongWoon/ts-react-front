import React from 'react';
import styled from 'styled-components';
import { shadow, theme } from 'lib/styleUtil';
import { Link } from 'react-router-dom';

const Positioner = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
`;
const ShadowedBox = styled.div`
    width: 500px;
    ${shadow(2)}
`;

const LogoWrapper = styled.div`
    background: ${theme(7)};
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Logo = styled(Link)`
    color: white;
    font-family: 'Rajdhami';
    font-weight: bold;
    font-size: 2.4rem;
    letter-spacing: 5px;
    text-decoration: none;
`

const Contents = styled.div`
    background: white;
    padding: 2rem;
    height: auto;
`;

function AuthWrapper({ children }: { children: React.ReactNode }) {
    return (
        <Positioner>
            <ShadowedBox>
                <LogoWrapper>
                    <Logo to='/'>TOYPAGE</Logo>
                </LogoWrapper>
                <Contents>
                    {children}
                </Contents>
            </ShadowedBox>
        </Positioner>
    )
}

export default AuthWrapper;