import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import { theme } from './styles/theme';

const AppContainer = styled.div`
  scroll-behavior: smooth;
  padding-top: 70px; /* Ajustez cette valeur en fonction de la hauteur de votre Navbar */
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Navbar />
        <Home id="home" />
        <Projects id="projects" />
        <About id="about" />
        <Contact id="contact" />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
