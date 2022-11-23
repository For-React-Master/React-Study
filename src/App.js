/* eslint-disable */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './Pages/blog';
import BSE from './Pages/BSE';
import SYJ from './Pages/SYJ';
import JY from './Pages/jy';
import KNH from './Pages/KNH';
import KSJ from './Pages/ksj';
import Welcome from './Welcome';
import Main from './Pages/Main';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/Blog' element={<Blog />} />
        <Route path='/' element={<Welcome />} />
        <Route path='/BSE' element={<BSE />} />
        <Route path='/JY' element={<JY />} />
        <Route path='/KNH' element={<KNH />} />
        <Route path='/SYJ' element={<SYJ />} />
        <Route path='/KSJ' element={<KSJ />} />
        <Route path='/Main' element={<Main />} />
      </Routes>
    </div>
  );
}
export default App;
