import { StaticQuery, graphql } from 'gatsby';
import React, { useContext } from 'react';
import { ComponentContext } from '../Theme/ComponentContext';

const ProjectData = () => {
  return (
    <div>
      <StaticQuery
        query={graphql`
          {
            projects: allContentfulProject {
              edges {
                node {
                  projectId
                  projectName
                  projectDescription
                  siteUrl
                  gitUrl
                }
              }
            }
          }
        `}
        render={(data) => {
          console.log(data);
        }}
      />
    </div>
  );
};

export default ProjectData;
