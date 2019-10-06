import React from 'react';
import styled from 'styled-components';

const NavBar = styled.div`
    background: deeppink;
    height: 50px;
    display: grid;
    grid-tempate-columns: 100px 100px 1fr;

    p.logo {
        color: #fff;
        font-family: "Roboto", sans-serif;
        font-size: 20px;
        padding: 12px 0 0 12px;
        margin: 0;
        grid-column: 1/2;
    }
    p.countries {
        color: #fff;
        font-family: "Roboto", sans-serif;
        font-size: 20px;
        padding: 12px 0 0 12px;
        margin: 0;
        grid-column: 3/4;
    }
`;


const NavComponent = () => {
    return (
        <NavBar>
            <p className="logo">GlobeTrotter Home</p>
            <p className="countries">Countries</p>
        </NavBar>
    )
};

export default NavComponent;