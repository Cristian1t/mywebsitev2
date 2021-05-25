import React from 'react';
import { Helmet } from 'react-helmet';
import { BasicTable } from '../components/ProjectTable/BasicTable';
import ProjectData from './ProjectTable/ProjectData';

function Projects() {
  return (
    <div>
      <Helmet>
        <title>Cristian Turmacu || Projects</title>
      </Helmet>
      <ProjectData />
      <BasicTable />
    </div>
  );
}

export default Projects;
