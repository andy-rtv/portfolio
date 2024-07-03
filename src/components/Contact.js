import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
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

const Contact = ({ id }) => {
  return (
    <ContactContainer id={id}>
      <Title>Contact Me</Title>
      <p style={{ textAlign: 'center' }}>Here is how you can contact me.</p>
    </ContactContainer>
  );
};

export default Contact;
