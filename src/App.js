/* eslint-disable */

import styled from 'styled-components';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './Pages/blog';
import BSE from './Pages/BSE';
import SYJ from './Pages/SYJ';
import JY from './Pages/jy';
import KNH from './Pages/KNH';
import KSJ from './Pages/ksj';
import Welcome from '/Welcome';

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
function App() {
  return (
    <div>
      <Routes>
        <Route path='/Blog' element={<Blog />} />
        <Route path='/' element={<Welcome />} />
        <Route path='BSE' element={<BSE />} />
        <Route path='JY' element={<JY />} />
        <Route path='KNH' element={<KNH />} />
        <Route path='SYJ' element={<SYJ />} />
        <Route path='KSJ' element={<KSJ />} />
      </Routes>
    </div>
  );
}
export default App;
