import React from 'react';
import { Helmet } from 'react-helmet';
import { BasicTable } from './ProjectTable/BasicTable';

const About = () => {
  return (
    <div>
      <Helmet>
        <title>Cristian Turmacu || About</title>
      </Helmet>
      <h1>
        Still working on this... trying React Table{' '}
        <span role="img" aria-label="smile">
          😅
        </span>
      </h1>
      <BasicTable />
    </div>
  );
};

export default About;
