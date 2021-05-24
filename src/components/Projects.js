import React from 'react';
import { Helmet } from 'react-helmet';
import { BasicTable } from '../components/ProjectTable/BasicTable';

function Projects() {
  return (
    <div>
      <Helmet>
        <title>Cristian Turmacu || Projects</title>
      </Helmet>
      <BasicTable />
    </div>
  );
}

export default Projects;
