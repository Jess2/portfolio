import React from 'react';
import { Route } from 'react-router-dom';
import { GlobalStyle } from 'styles/global-style';
import { theme } from 'styles/theme';
import { ThemeProvider } from 'styled-components';
import Main from 'pages/main';
import Contact from 'pages/contact';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Route path="/" exact component={Main} />
      <Route path="/contact" exact component={Contact} />
    </ThemeProvider>
  );
}

export default App;
