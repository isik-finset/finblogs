// routes
import Router from './routes';

// theme
import ThemeProvider from './theme';

// components
import ScrollToTop from './components/ScrollToTop';
import { ProgressBarStyle } from './components/ProgressBar';
import Navbar from './components/Navbar';

// ----------------------------------------------------------------------


export default function App() {

  // setGlobal State
  // create useAuth hook to substitute const { isAuth } = useContext(TokenContext);


  // const { isAuth } = useAuth();

  // init protected routes
  // const routes = useRoutes(Router(isAuth))


  return (
    <ThemeProvider>
      <ProgressBarStyle />
      <ScrollToTop />
      <Navbar />
      <Router />
    </ThemeProvider>
  );
}
