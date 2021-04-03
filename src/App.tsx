import React from 'react';
import { Route } from 'react-router-dom';
import Main from 'pages/main';
import Contact from 'pages/contact';

function App() {
  return (
    <>
      <Route path="/" exact component={Main} />
      <Route path="/contact" exact component={Contact} />
    </>
  );
}

export default App;
