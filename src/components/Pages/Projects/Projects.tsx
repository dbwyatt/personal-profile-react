/* eslint-disable max-len */
import React, { LegacyRef } from 'react';
import useProjects from 'hooks/useProjects';
import Project from './Project';

type Props = {
  divRef: LegacyRef<HTMLDivElement>
};

export default function Projects({ divRef }: Props) {
  const projects = useProjects();

  return (
    <div ref={divRef} id="projects" className="page">
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
