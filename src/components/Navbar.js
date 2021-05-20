import { Link } from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';

const StyledNavbar = styled.div`
  background: white;
  border-radius: 20px;
  box-shadow: 3px 4px 4px 2px rgba(0, 0, 0, 0.25);
  margin-top: 1.5rem;
  margin-right: 1rem;
  display: grid;
  align-content: center;
  .navitems {
    font-size: 1.5rem;
    margin-right: 3rem;
    list-style: none;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
    li {
      padding: 1rem;
      :hover {
        background: ${({ theme }) => theme.color.background};
        border-radius: 20px 20px 0 0;
        cursor: pointer;
      }
    }
    a {
      width: auto;
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
      return 'isactive';
    } else {
      return null;
    }
  }

  function toggleActive(index) {
    changeState({ ...appState, activeObject: appState.objects[index] });
  }
  return (
    <StyledNavbar>
      <ul className="navitems">
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
            <li className={toggleActiveStyles(index)}>{elements.name}</li>
          </Link>
        ))}
      </ul>
    </StyledNavbar>
  );
}

export default Navbar;
