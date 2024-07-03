import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.section`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const Title = styled.h1`
  position: relative;
  z-index: 1;
  text-align: center;
  margin-top: 20%;
`;

const Projects = ({ id }) => {
  return (
    <ProjectsContainer id={id}>
      <Title>Projects</Title>
    </ProjectsContainer>
  );
};

export default Projects;
