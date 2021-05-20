import React, { useState } from 'react';
import styled from 'styled-components';
import { ProjectList } from './ProjectList';

const StyledProjects = styled.div`
  margin-right: 1rem;
  height: 85vh;
  background: grey;
  display: grid;
  grid-template-rows: auto 1fr;
  .topside {
    border: 1px solid red;
  }
  p {
    font-size: 1.5rem;

    :hover {
      cursor: pointer;
      text-transform: uppercase;
      font-weight: bold;
    }
  }
  .isactive {
    border-bottom: 1px solid black;
    text-transform: uppercase;
    font-weight: bold;
  }
`;

function Projects() {
  const [project, setProject] = useState({
    activeProject: { name: 'Click on a Project to see more' },
    projects: ProjectList,
  });

  function handleClick(index) {
    setProject({ ...project, activeProject: project.projects[index] });
  }

  function toggleActiveStyles(index) {
    if (project.projects[index] === project.activeProject) {
      return 'isactive';
    } else {
      return null;
    }
  }

  return (
    <StyledProjects>
      <h1>
        Still working on this...{' '}
        <span role="img" aria-label="smile">
          😅
        </span>
      </h1>
      <div className="topside">
        <h3>{project.activeProject.name}</h3>
      </div>
      <div>
        {project.projects.map((elements, index) => (
          <p
            className={toggleActiveStyles(index)}
            key={index}
            role="presentation"
            onClick={() => handleClick(index)}
          >
            {elements.name}
          </p>
        ))}
      </div>
    </StyledProjects>
  );
}

export default Projects;
