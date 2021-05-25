import React from 'react';

function ViewProject() {
  return (
    <div>
      <div className="opened">
        <div className="imageside">
          <img src={project.activeProject.desktop} alt="desktopimg" />
        </div>
        <div className="infoside">
          <h2>{project.activeProject.project_name}</h2>
          <h3>{project.activeProject.project_type}</h3>
          <h4>Description: {project.activeProject.project_description}</h4>
          <h4>Stack: {project.activeProject.stackused}</h4>
          <button>{project.activeProject.website}</button>
          <div></div>
        </div>
      </div>
      <h2>Click on a project to see more info</h2>
    </div>
  );
}

export default ViewProject;
