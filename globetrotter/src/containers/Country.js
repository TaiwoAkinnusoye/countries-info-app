import React, {Fragment} from 'react';
import gql from 'graphql-tag';
import {useQuery} from '@apollo/react-hooks';
import {useParams} from 'react-router-dom';
import NavComponent from '../components/NavComponent';
import LoadingComponent from '../components/LoadingComponent';
import CountryComponent from '../components/CountryComponent';


const COUNTRY_QUERY = gql`
    query COUNTRY_QUERY($code: String){
        country(code: $code) {
            code
            name
            currency
            phone
        }
    }
`;

function Country (props) {
    let {code} = useParams();
    const {data, error, loading} = useQuery(COUNTRY_QUERY, {
        variables: {code}
    });
    if (loading) return <LoadingComponent />;
    if (error) return console.log(error.message);

    return (
        <Fragment>
            <NavComponent />
                        <CountryComponent {...data.country} />
        </Fragment>
    )

}

export default Country;