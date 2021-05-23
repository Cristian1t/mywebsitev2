import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

export const LayoutStyles = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 22% auto;
  grid-template-rows: 10% auto;
  grid-gap: 2rem;
  margin: 0;
  padding: 0;
  @media (max-width: 768px) {
    grid-template-columns: auto;
    grid-template-rows: 0.2fr 0.2fr auto;
    grid-gap: 1rem;
  }
  @media (max-width: 425px) {
    grid-template-columns: auto;
    grid-template-rows: 0.2fr 0.2fr auto;
    grid-gap: 1rem;
  }
`;
// const Onmobilestyle = styled.div`
//   @media (min-width: 768px) {
//     display: none;
//   }
// `;

function Layout({ children }) {
  return (
    <LayoutStyles>
      <Sidebar />
      <Navbar />
      <main>{children}</main>
    </LayoutStyles>
  );
}

export default Layout;
