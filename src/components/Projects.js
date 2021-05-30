import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { ProjectProvider } from './ProjectTable/ProjectContext';
import ProjectData from './ProjectTable/ProjectData';
import ViewProject from './ProjectTable/ViewProject';

const StyledProjects = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-gap: 0.5rem;
  @media (min-width: 679px) {
    grid-gap: 2rem;
  }
`;
function Projects() {
  return (
    <StyledProjects>
      <Helmet>
        <title>Cristian Turmacu || Projects</title>
      </Helmet>
      <ProjectProvider>
        <ViewProject />
        <ProjectData />
      </ProjectProvider>
    </StyledProjects>
  );
}

export default Projects;
