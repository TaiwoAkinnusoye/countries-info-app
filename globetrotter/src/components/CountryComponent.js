import React, {Fragment} from 'react';
import styled from 'styled-components';

const CountryBox = styled.div`
    width: 450px;
    height: 400px;
    margin: 0 auto;
    border-top: 10px solid aquamarine;
    border-bottom: 10px solid green;
    border-left: 10px solid green;
    border-right: 10px solid aquamarine;
    border-radius: 10px;
`;

function CountryComponent({code, name, currency, phone}) {
    return (
        <Fragment>
            <CountryBox>
            <div className="info">
            <p>{code}</p>
            <p>{name}</p>
            <p>{currency}</p>
            <p>{phone}</p>
            </div>
            </CountryBox>
        </Fragment>
    )
}

export default CountryComponent;