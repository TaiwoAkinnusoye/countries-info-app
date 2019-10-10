import React, {Fragment} from 'react';
// import NavComponent from './NavComponent';
// import LoadingComponent from './LoadingComponent';


function CountriesComponent ({countries}) {

   return (
    <Fragment>
        <p>
            {countries.name}
        </p>
    </Fragment>
  );
}

export default CountriesComponent;