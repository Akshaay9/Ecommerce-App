import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import  RoutingContextProvider  from './Contexts/RoutingContext/routingContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <RoutingContextProvider>
      <App />
      </RoutingContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
