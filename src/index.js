import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MensNewDropProductListsFunction } from './Contexts/ProductListContext/MensNewDropProductListing';
import  RoutingContextFunction  from './Contexts/RoutingContext/routingContextProvider';

ReactDOM.render(
  <React.StrictMode>
    

    <MensNewDropProductListsFunction>
      {/* for Mens New Drop products Listing */}

      <RoutingContextFunction>
        {/* for routing */}

      <App />
      </RoutingContextFunction>
    </MensNewDropProductListsFunction>
  </React.StrictMode>,
  document.getElementById('root')
);
