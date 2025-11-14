import React  from 'react';
import DynamicTitle from '../DynamicTitle';
import { createGlobalStyle } from 'styled-components';

  function App() {
    return (
      <>
        <GlobalStyles />
        <DynamicTitle />
      </>
    );
  }

  const GlobalStyles = createGlobalStyle`
    body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: sans-serif;
    }
  `;

export default App;