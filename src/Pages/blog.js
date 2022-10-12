import styled from 'styled-components';
import { useState } from 'react';

const Contents = styled.div`
  padding-left: 20px;
  text-align: left;
  border-bottom: 1px solid grey;
`;
function App() {
  let [글제목, 글제목변경] = useState(['part1', 'part2', 'part3']);
  let [내용, 내용변경] = useState([
    'jsx and state',
    'componet and props',
    'Utilze index',
  ]);

  return (
    <div>
      <Contents>
        {글제목.map(function (a, i) {
          return (
            <div>
              <h4 onClick={() => {}}>{글제목[i]}</h4>
              <p>{내용[i]}</p>
            </div>
          );
        })}
      </Contents>
    </div>
  );
}

export default App;
