import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { ProjectContext } from './ProjectContext';

const StyledView = styled.div`
  display: grid;
  grid-template-rows: 0.5fr 1fr;
  justify-content: center;
  @media (min-width: 769px) {
    grid-template-columns: 1fr 0.8fr;
    grid-template-rows: auto;
  }
  .image {
    border: 3px solid black;
    display: grid;
    max-width: 80%;
    margin: 0 auto;
    img {
    }
  }
  .infosection {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 2rem;
    @media (min-width: 679px) {
      margin-right: 1.5rem;
      font-size: 1.5rem;
    }
    h2 {
      text-align: center;
      padding: 0;
      margin: 0;
      text-decoration: underline;
      text-transform: uppercase;
    }
    h3,
    h4 {
      text-align: center;
      padding: 0;
      margin: 0;
    }
    .links {
      display: flex;
      justify-content: space-around;
      margin-bottom: 1rem;
      a {
        text-decoration: none;
        color: inherit;
        border: 1px solid black;
        border-radius: 1rem;
        padding: 0.5rem;
        background: ${({ theme }) => theme.color.details2};
      }
    }
  }
`;

function ViewProject() {
  const { activeProject } = useContext(ProjectContext);

  if (activeProject !== undefined) {
    const image = getImage(activeProject.projectImage);
    return (
      <StyledView>
        <div className="image">
          <GatsbyImage image={image} alt={activeProject.projectName} />
        </div>
        <div className="infosection">
          <h2>{activeProject.projectName}</h2>
          <h3>{activeProject.projectDescription}</h3>
          <h4>{activeProject.projectTech.join(' / ')}</h4>
          <div className="links">
            <a
              href={activeProject.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>
            <a
              href={activeProject.gitUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
        </div>
      </StyledView>
    );
  } else {
    return (
      <h2 style={{ textAlign: 'center' }}>
        Click on a project to see more info
      </h2>
    );
  }
}

export default ViewProject;
