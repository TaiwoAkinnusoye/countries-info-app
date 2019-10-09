import React, {Fragment} from 'react';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import NavComponent from './NavComponent';
import LoadingComponent from './LoadingComponent';


const ALL_COUNTRIES_QUERY = gql`
  {
    countries {
        code
    name
    native
    languages {
      name
      native
      rtl
    }
    continent {
      name
    }
  }
    }
`;


function CountriesComponent () {
      const {data, error, loading} = useQuery(ALL_COUNTRIES_QUERY);
   if (loading) return <LoadingComponent />;
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