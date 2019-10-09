import React, {Fragment} from 'react';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import NavComponent from './NavComponent';


const ALL_COUNTRIES_QUERY = gql`
  {
    countries {
      name
      code
    }
  }
`;


function CountriesComponent () {
      const {data, error, loading} = useQuery(ALL_COUNTRIES_QUERY);
   if (loading) console.log('data is loading');
   if (error) console.log('error when getting data');

   return (
    <Fragment>
        <NavComponent />
      {data &&
        data.countries.map(({name, code}) => (
          <p key={code}>
            {name}
          </p>
        ))}
    </Fragment>
  );
}

export default CountriesComponent;