// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components

import ScrollToTop from './components/ScrollToTop';
import { ProgressBarStyle } from './components/ProgressBar';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeProvider>
      <ProgressBarStyle />
      <ScrollToTop />
      <Router />
    </ThemeProvider>
  );
}
