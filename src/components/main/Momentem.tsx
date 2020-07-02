import React from 'react';
import styled from 'styled-components';
import img from 'Img/backgroundImg.jpg'

const MomentemContainer = styled.div`
    width: 100%;
    height: 100%;
    
    display:flex;
    flex-flow:column;

    font-size: 1.25rem;
    font-weight: bold;
    color: #fff;
    user-select: none;
    justify-content:center;
    align-items: center;
    /*image*/
    background: url(${img});
    background-size: cover;
    `;

function Momentem({ children }: { children: React.ReactNode }) {
    return (
        <MomentemContainer>
            {children}
        </MomentemContainer>
    )
}

export default Momentem;