import React, {Fragment} from 'react';
import styled from 'styled-components';

const CountryCard = styled.div`
    border: 1px solid #ffffff;
    color: #FFFFFF;
    font-family: 'Rubik', sans-serif;
    padding: 0 0 20px 20px;
    background: #130377;
    cursor: pointer;

    :hover {
        background: #FFFFFF;
        color: #130377;
    }

    div.country-code p {
        text-align: center;
        font-size: 60px;
        font-weight: 600;
    }

    div.country-continent h6 {
        margin: 0;
        font-weight: 100;
        letter-spacing: 0.1rem;
        color: #8f7efc;
        font-size: 10px;
    }

    
    div.country-continent p {
        font-size: 20px;
        margin: 0;
        padding: 0 0 10px 0;

    }
    
    div.country-name h6  {
        margin: 0;
        font-weight: 100;
        letter-spacing: 0.1rem;
        color: #8f7efc;
        font-size: 10px;
    }


    div.country-name  p {
        font-size: 24px;
        padding: 0 0 10px 0;
        margin: 0;
    }

    div.country-languages h6 {
        margin: 0;
        font-weight: 100;
        letter-spacing: 0.1rem;
        color: #8f7efc;
        font-size: 10px;
    }

    div.country-languages span {
        font-size: 15px;
        padding: 0 0 0;
        margin: 0;
    }
`;


function CountriesComponent ({countries}) {

   return (
    <Fragment>
        <CountryCard>
            <div className="country-code">
            <p>{countries.code} </p>
            </div>
            <div className="country-name">
            <h6>COUNTRY</h6>
            <p>{countries.name} </p>
            </div>
            <div className="country-continent">
            <h6>CONTINENT</h6>
            <p>{countries.continent.name}</p>
            </div>
            <div className="country-languages">
                <h6>LANGUAGES</h6>
            {countries.languages.map(language => (
                <span key={language.name}>{language.name} | </span>
            ))}
            </div>
        </CountryCard>
    </Fragment>
  );
}

export default CountriesComponent;