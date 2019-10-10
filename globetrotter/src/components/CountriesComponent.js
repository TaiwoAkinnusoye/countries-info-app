import React, {Fragment} from 'react';


function CountriesComponent ({countries}) {

   return (
    <Fragment>
        <div className="country-card">
            <div className="country-code">
            <p>{countries.code}, </p>
            </div>
            <div className="country-name">
            <p>{countries.name}, </p>
            </div>
            <div className="country-languages">
            {countries.languages.map(language => (
                <span key={language.name}>{language.native}, </span>
            ))}
            </div>
            <div className="country-continent">
            <p>{countries.continent.name}</p>
            </div>
        </div>
    </Fragment>
  );
}

export default CountriesComponent;