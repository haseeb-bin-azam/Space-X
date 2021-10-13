import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloProvider} from '@apollo/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import * as swDev from './serviceWorker';
// import 'bootstrap/dist/css/bootstrap.min.css';
import getApolloClient from './apolloClient';

const client =  getApolloClient().then((client:any) => {
  if (client) {
    ReactDOM.render(
      <React.StrictMode>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </React.StrictMode>,
      document.getElementById('root')
    );
  }
})


reportWebVitals();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// serviceWorker.register()
// swDev.register();
