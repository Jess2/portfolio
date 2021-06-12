import React from 'react';
import styled from 'styled-components';
import { ProjectCard } from './projectCard';
import projectListData from './projectListData';

export const ProjectList = () => {
  return (
    <StyledProjectList>
      {projectListData.map((project, index) => {
        return (
          <li key={index}>
            <ProjectCard imageSrc={project.imageSrc} title={project.title} description={project.description} />
          </li>
        );
      })}
    </StyledProjectList>
  );
};

const StyledProjectList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`;
