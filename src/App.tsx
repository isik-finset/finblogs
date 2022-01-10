// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';

// components
import ScrollToTop from './components/ScrollToTop';
import { ProgressBarStyle } from './components/ProgressBar';

// react
import React, { useContext } from 'react'

// react-router-dom
import { useRoutes } from 'react-router-dom';
import { TokenContext } from './providers';


// ----------------------------------------------------------------------



export default function App() {

  // setGlobal State
  // create useAuth hook to substitute const { isAuth } = useContext(TokenContext);


  const { isAuth } = useContext(TokenContext);

  // init protected routes
  const routes = useRoutes(Router(isAuth))


  return (
    <ThemeProvider>
      <ProgressBarStyle />
      <ScrollToTop />
      {routes}
    </ThemeProvider>
  );
}
