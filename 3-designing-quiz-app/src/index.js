import React from "react";
import { createRoot } from "react-dom/client";
import styled from "styled-components";
import QuestionContainer from '../src/components/QuestionContainer'

const Container  = styled.div`
  padding-top: 22px;
  padding-left: 18px;
  padding-right: 17px;
  width: 720px;
  margin: auto;
  @media (max-width: 480px) {
   width: auto;
  }
`;
const Header = styled.h1`
  font-size: 36px;
`
const App = () => {
  return (
    <Container id="container">
      <Header id="header">Quiz</Header>
      <div id="question-list">
          <QuestionContainer/>
      </div>
      <div id="footer">
        <Header>You score: 15 points</Header>
      </div>  
    </Container>
  );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
