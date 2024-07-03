import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
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

const About = ({ id }) => {
  return (
    <AboutContainer id={id}>
      <Title>About Me</Title>
      <p style={{ textAlign: 'center' }}>Some information about me.</p>
    </AboutContainer>
  );
};

export default About;
