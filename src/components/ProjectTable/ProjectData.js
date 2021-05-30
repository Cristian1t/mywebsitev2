import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { BasicTable } from './BasicTable';

export default function ProjectData() {
  return (
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
                projectTech
                projectImage {
                  gatsbyImageData(layout: CONSTRAINED)
                }
              }
            }
          }
        }
      `}
      render={(data) => <BasicTable mydata={data.projects.edges} />}
    />
  );
}
