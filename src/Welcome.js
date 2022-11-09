/* eslint-disable */

import styled from 'styled-components';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './Pages/blog';
import BSE from './Pages/BSE';
import SYJ from './Pages/SYJ';
import JY from './Pages/jy';

const MainWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 25rem;
  align-items: center;
  flex-direction: column;
  display: flex;
  text-align: center;
  background-color: darkblue;
`;

const Title = styled.div`
  color: darkorange;
  width: 100%;
  font-size: 8rem;
`;
const Name = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 1.5rem;
  position: relative;
  bottom: 12rem;
  font-family: 'Raleway', sans-serif;
`;
const Names = styled.div`
  padding: 5rem;
`;
function Welcome() {
  let navigate = useNavigate();

  return (
    <div>
      <div>
        <MainWrap>
          <Title>
            <h1>FRM-Team</h1>
          </Title>
          <Name>
            <Names
              onClick={() => {
                navigate('/BSE');
              }}
            >
              {' '}
              BSE
            </Names>
            <Names
              onClick={() => {
                navigate('/SYJ');
              }}
            >
              SYJ
            </Names>
            <Names
              onClick={() => {
                navigate('/KSJ');
              }}
            >
              KSJ
            </Names>
            <Names
              onClick={() => {
                navigate('/KNH');
              }}
            >
              KNH
            </Names>
            <Names
              onClick={() => {
                navigate('/LJY');
              }}
            >
              LJY
            </Names>

            <div></div>
          </Name>
        </MainWrap>
      </div>
    </div>
  );
}

//function Modal (props)

export default Welcome;
