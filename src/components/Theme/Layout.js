import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

export const LayoutStyles = styled.div`
  padding: 0;
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.3fr auto 2.4fr;
  gap: 0.5em;
  .div1 {
    grid-area: 1 / 1 / 2 / 2;
  }
  .div2 {
    grid-area: 2 / 1 / 3 / 2;
  }
  .div3 {
    grid-area: 3 / 1 / 4 / 2;
  }
  @media (min-width: 769px) {
    grid-template-columns: minmax(220px, auto) 1fr;
    grid-template-rows: auto 1fr;
    grid-gap: 1rem;
    overflow: hidden;
    .div1 {
      grid-area: 1 / 1 / 6 / 2;
    }
    .div2 {
      grid-area: 1 / 2 / 2 / 3;
    }
    .div3 {
      grid-area: 2 / 2 / 6 / 3;
    }
  }
`;

function Layout({ children }) {
  return (
    <LayoutStyles>
      <Helmet>
        <meta name="viewport" content="width=device-width, shrink-to-fit=no" />
      </Helmet>
      <Sidebar className="div1" />
      <Navbar className="div2" />
      <main className="div3">{children}</main>
    </LayoutStyles>
  );
}

export default Layout;
