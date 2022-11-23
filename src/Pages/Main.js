import React from 'react';
import { useLoaderData } from 'react-router-dom';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
  background: rgba(110, 223, 248, 0.5);
  height: 100vh;
  
}
`;

const Title = styled.div`
  font-size: 5rem;
  text-align: center;
`;

const MainWrap = styled.div``;
const ToDo = styled.div``;
const Input = styled.input`
  border-radius: 0.3rem;
  background: rgba(255, 131, 131, 1);
`;

const Calander = styled.div``;
// const  = styled.div``;

function Main() {
  return (
    <div>
      <GlobalStyle />
      <MainWrap>
        <Title>FRM</Title>
        <ToDo>
          <Input />
        </ToDo>
        <Calander />
      </MainWrap>
    </div>
  );
}

export default Main;
