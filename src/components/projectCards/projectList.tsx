import React from 'react';
import { ProjectCard } from './projectCard';

export const ProjectList = () => {
  return (
    <ul>
      <li>
        <ProjectCard title="프로젝트1" description="프로젝트1 설명입니다" />
        <ProjectCard title="프로젝트2" description="프로젝트2 설명입니다" />
        <ProjectCard title="프로젝트3" description="프로젝트3 설명입니다" />
      </li>
    </ul>
  );
};
