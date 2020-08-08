import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from 'lib/styleUtil';

const BorderedButton = styled(Link)`
    font-weight: 600;
    color: ${theme(6)};
    border: 1px solid ${theme(6)};
    padding: 0.5rem;
    padding-bottom: 0.4rem;
    cursor: pointer;
    border-radius: 2px;
    text-decoration: none;
    transition: .2s all;

    &:hover {
        background: ${theme(6)};
        color: white;
    }
    &:active {
        /* 마우스 클릭시 아래로 미세하게 움직임  & 그림자 */
        transform: translateY(3px);
    }


`;

function LoginButton() {
    return (
        <BorderedButton to="/auth/login">
            로그인 / 가입
        </BorderedButton>
    )
}

export default LoginButton;