import { Home } from 'components/HomePage/HomePage';
import React from 'react';
import GlobalStyle from 'styles/global-styles';
import { Nav } from './components/Navbar/Navbar';

/**
 * Render an <Application> component.
 *
 * @return {JSX.Element}
 */

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Home />
    </>
  );
}
export default App;
