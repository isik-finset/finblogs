// mock api
import './api/index';

// scroll bar
import 'simplebar/src/simplebar.css';

import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

//
import App from './App';


// providers
import TokenProvider from './providers'

// ----------------------------------------------------------------------

ReactDOM.render(
  <HelmetProvider>
    <BrowserRouter>
      {/* // context provider should go in here */}
      <TokenProvider>
        <App />
      </TokenProvider>
      {/* // context provider should go in here */}
    </BrowserRouter>
  </HelmetProvider>,
  document.getElementById('root')
);
