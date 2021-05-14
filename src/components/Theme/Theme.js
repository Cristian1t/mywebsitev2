import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { GlobalStyles } from './GlobalStyles';

const mainTheme = {
  color: {
    details2: '#00ADB5',
    details: '#222831',
    text: '#393E46',
    background: '#EEEEEE',
  },
  fonts: {
    header: 'Nunito',
    copy: 'Fira Code',
  },
};

function Theme({ children }) {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyles />
      <Normalize />
      {children}
    </ThemeProvider>
  );
}

export default Theme;
