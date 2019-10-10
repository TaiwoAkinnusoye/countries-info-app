import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import App from './App';
import Countries from './containers/Countries';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com'
});

ReactDOM.render(<ApolloProvider client={client}>
  <Router>
        <Route exact path='/' component={App} />
    <Route path="/countries" component={Countries} />
  </Router>
  </ApolloProvider>, document.getElementById('root'));



