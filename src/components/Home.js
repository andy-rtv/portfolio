import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.section`
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

const SubTitle = styled.h2`
  position: relative;
  z-index: 1;
  text-align: center;
`;

const Home = ({ id }) => {
  return (
    <HomeContainer id={id}>
      <Title>Hello, I'm Andy RTV</Title>
      <SubTitle>I can make you some websites, mobile apps, APIs.</SubTitle>
    </HomeContainer>
  );
};

export default Home;
