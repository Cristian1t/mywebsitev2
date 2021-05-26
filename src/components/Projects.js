import React from 'react';
import { Helmet } from 'react-helmet';
import ProjectData from './ProjectTable/ProjectData';

function Projects() {
  return (
    <div>
      <Helmet>
        <title>Cristian Turmacu || Projects</title>
      </Helmet>
      <h2>In development....</h2>
      <ProjectData />
    </div>
  );
}

export default Projects;
