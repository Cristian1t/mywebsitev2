import { Link } from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';

const StyledNavbar = styled.div`
  display: flex;
  justify-content: center;
  background: white;
  @media (min-width: 769px) {
    border-radius: 2rem;
    margin: 1rem 1rem;
    margin-left: 0;
    box-shadow: 3px 4px 4px 2px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: flex-end;
  }
  .navitems {
    font-size: 1.5rem;
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;

    @media (min-width: 769px) {
      padding-right: 5rem;
    }
    .navlink {
      padding: 1rem;
      @media (min-width: 769px) {
        margin: 0;
      }
      :hover {
        background: ${({ theme }) => theme.color.background};
        border-radius: 20px 20px 0 0;
        cursor: pointer;
      }
    }
    a {
      text-decoration: none;
      color: inherit;
    }
    .isactive {
      background: ${({ theme }) => theme.color.details2};
      border-radius: 20px 20px 0 0;
      font-weight: bold;
    }
  }
`;

function Navbar() {
  const [appState, changeState] = useState({
    activeObject: {
      id: 1,
      name: 'Home',
      linkto: '/',
    },
    objects: [
      { id: 1, name: 'Home', linkto: '/' },
      {
        id: 2,
        name: 'Projects',
        linkto: '/projects',
      },
      { id: 3, name: 'About', linkto: '/about' },
      { id: 4, name: 'Contact', linkto: '/contact' },
    ],
  });

  function toggleActiveStyles(index) {
    if (appState.objects[index] === appState.activeObject) {
      return 'isactive navlink';
    } else {
      return null;
    }
  }

  function toggleActive(index) {
    changeState({ ...appState, activeObject: appState.objects[index] });
  }
  return (
    <StyledNavbar className="div2">
      <div className="navitems">
        {appState.objects.map((elements, index) => (
          <Link
            key={index}
            onClick={() => {
              toggleActive(index);
            }}
            onKeyDown={() => {
              toggleActive(index);
            }}
            role="presentation"
            to={elements.linkto}
          >
            <div className={`${toggleActiveStyles(index)} navlink`}>
              {elements.name}
            </div>
          </Link>
        ))}
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
