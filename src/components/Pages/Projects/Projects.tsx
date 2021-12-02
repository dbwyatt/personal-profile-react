import React from 'react';
import useProjects from 'hooks/useProjects';
import Project from './Project';

export default function Projects() {
  const projects = useProjects();

  return (
    <div id="projects" className="page">
      <h2 className="page-header">
        Projects
        <br />
        <small>All made with some TLC</small>
      </h2>
      <ul>
        {projects.map((project) => (
          <Project
            key={project.url}
            url={project.url}
            title={project.title}
            description={project.description}
            img={project.img}
          />
        ))}
      </ul>
    </div>
  );
}
