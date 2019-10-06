import React, {Fragment} from 'react';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import SliderComponent from './components/SliderComponent/SliderComponent';


const ALL_COUNTRIES_QUERY = gql`
  {
    countries {
      name
      code
    }
  }
`;

function App() {
  // const {data, error, loading} = useQuery(ALL_COUNTRIES_QUERY);
  //  if (loading) console.log('data is loading');
  //  if (error) console.log('error when getting data');

  //  return (
  //   <Fragment>
  //     {data &&
  //       data.countries.map(({name, code}) => (
  //         <p key={code}>
  //           {name}
  //         </p>
  //       ))}
  //   </Fragment>
  // );

  return (
    <SliderComponent />
  )
}

export default App;
