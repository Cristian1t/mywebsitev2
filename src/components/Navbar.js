import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import About from './About';
import Contact from './Contact';
import Hero from './Hero';
import Projects from './Projects';
import { ComponentContext } from './Theme/ComponentContext';

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
    .isactive {
      background: ${({ theme }) => theme.color.details2};
      border-radius: 20px 20px 0 0;
      font-weight: bold;
    }
  }
`;

function Navbar() {
  const { setComponent } = useContext(ComponentContext);
  const [appState, changeState] = useState({
    activeObject: { id: 1, name: 'Home', componentname: <Hero /> },
    objects: [
      { id: 1, name: 'Home', componentname: <Hero /> },
      { id: 2, name: 'Projects', componentname: <Projects /> },
      { id: 3, name: 'About', componentname: <About /> },
      { id: 4, name: 'Contact', componentname: <Contact /> },
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

  useEffect(() => {
    setComponent(appState.activeObject.componentname);
  });
  return (
    <StyledNavbar>
      <ul className="navitems">
        {appState.objects.map((elements, index) => (
          <li
            key={index}
            className={toggleActiveStyles(index)}
            onClick={() => {
              toggleActive(index);
            }}
            onKeyDown={() => {
              toggleActive(index);
            }}
            role="presentation"
          >
            {elements.name}
          </li>
        ))}
      </ul>
    </StyledNavbar>
  );
}

export default Navbar;
