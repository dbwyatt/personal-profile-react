import { useState } from 'react';
import projects from './Projects.json';

export type ProjectsType = {
  url: string;
  title: string;
  description: string;
  img: string;
}[];

export default function useProjects(): ProjectsType {
  const [projectData] = useState(projects);
  return projectData;
}
