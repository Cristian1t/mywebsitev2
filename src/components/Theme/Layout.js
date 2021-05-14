import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

export const LayoutStyles = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 22% auto;
  grid-template-rows: 10% auto;
  grid-gap: 2rem;
  margin: 0;
  padding: 0;
`;

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
