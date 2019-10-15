import React, {Fragment} from 'react';
import styled from 'styled-components';

const CountryTile = styled.div``;

function CountryComponent({code, name, currency, phone}) {
    return (
        <Fragment>
            <p>{code}</p>
            <p>{name}</p>
            <p>{currency}</p>
            <p>{phone}</p>
        </Fragment>
    )
}

export default CountryComponent;