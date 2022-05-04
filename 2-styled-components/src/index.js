import React from "react";
import { createRoot } from "react-dom/client";
import styled from 'styled-components';

const App = () => {
  const Header = styled.h1`
    color: red;

    @media (max-width: 480px){
      font-size: 14px;
      color: green;
    }
  `;
 const Hero = styled(Header)`
    font-size: 100px;
    color: blue;
  `;

  return (
  <>
  <Hero>Iam hero</Hero>
  <Header>Hello React</Header>
  </>);
};


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
