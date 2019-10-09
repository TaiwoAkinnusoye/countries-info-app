import React from 'react';
import styled from 'styled-components';

const Loader = styled.div` 
    position: relative;    
    top: 30vh;
    left: 30vw;

`;

function LoadingComponent () {
    return (
        <Loader>
            <img src="/images/earth-loading.gif" alt="Loading" width="auto" height="auto" />
        </Loader>
    )
}

export default LoadingComponent;