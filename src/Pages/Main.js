import { useLoaderData } from 'react-router-dom';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; //css import

const GlobalStyle = createGlobalStyle`
  body{
  background: rgba(110, 223, 248, 0.5);
  height: 100vh;
  
}
`;

const Title = styled.div`
  font-size: 5rem;
  text-align: center;
  color: darkblue;
`;

const MainWrap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const ToDo = styled.div``;

const Input = styled.input`
  width: 35rem;
  height: 3rem;
  border-radius: 1rem;
  background: rgba(255, 131, 131, 1);
  text-align: center;
  margin-top: 5rem;
  margin-left: 7rem;
`;

// const  = styled.div``;

const TodoDiv = styled.div`
  width: 86rem;
  height: 43rem;
  margin-left: 10rem;
  margin-top: 1rem;
  background: white;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 1);
`;

function Main() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <GlobalStyle />
      <MainWrap>
        <Title>FRM</Title>
        <TodoDiv>
          <ToDo>
            <Input />
          </ToDo>
        </TodoDiv>
        <div>
          {/* {/* <Calander onChange={onChange} value={value} />
        {/* <div className='text-gray-500 mt-4'>} */}
        </div>
      </MainWrap>
    </div>
  );
}

export default Main;
