import React from 'react';
import { ComponentProvider } from './src/components/Theme/ComponentContext';
import Layout from './src/components/Theme/Layout';
import Theme from './src/components/Theme/Theme';

// what goes on every page
export function wrapPageElement({ element, props }) {
  // eslint-disable-next-line
  return <Layout {...props}>{element}</Layout>;
}

// what goes on the root
export function wrapRootElement({ element }) {
  return (
    <ComponentProvider>
      <Theme>{element}</Theme>
    </ComponentProvider>
  );
}
