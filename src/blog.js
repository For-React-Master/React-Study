import './App.css';
import styled from 'styled-components';
import { useState } from 'react';

const Contents = styled.div`
  padding-left: 20px;
  text-align: left;
  border-bottom: 1px solid grey;
`;

const MODALCSS = styled.div`
  margin-top: 20px;
  padding: 20px;
  background: #eee;
  text-align: left;
`;
function App() {
  let [글제목, 글제목변경] = useState(['part1', 'part2', 'part3']);
  let [내용, 내용변경] = useState([
    'jsx and state',
    'componet and props',
    'Utilze index',
  ]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);

  return (
    <div>
      <Contents>
        {글제목.map(function (a, i) {
          return (
            <div>
              <h4
                onClick={() => {
                  setModal(true);
                }}
              >
                {글제목[i]}
              </h4>
              <p>{내용[i]}</p>
            </div>
          );
        })}
      </Contents>

      {/* {
        modal == true ? <Modal_1></Modal_1> : null
      } */}
      <Modal_1></Modal_1>
    </div>
  );
}

function Modal_1(props) {
  <div>
    <h4>{props.글제목[props.title]}</h4>
    <p>
      1. **레이아웃 만들 때 쓰는 JSX 문법 3개** -JSX 안에서는 class 대신에
      className이라고 써야함 -변수 선언 후 h4 사이에 중괄호 변수 작성 줄괄호 ex
      let post = ‘강남 우동 맛집’; -변수 넣을 때는 중괄호 ⇒ 데이터바인딩은
      중괄호 -font-size 아니고 fontSize라고 써야함
    </p>
  </div>;
}

function Modal_2(props) {
  <div>
    <h4>{props.글제목[props.title]}</h4>

    <p>
      컴포넌트는 언제 쓰는 가? 1 - 반복적인 html 축약할 때 2 - 큰 페이지들 3 -
      자주 변경되는 것들
    </p>
  </div>;
}

function Modal_3(props) {
  <div>
    <h4>{props.글제목[props.title]}</h4>
    <p>
      input 에 뭔가 입력시 코드를 실행하려면** 유저가 input에 뭔가 입력시 코드를
      실행해주고 싶을 때가 많습니다. 그러고 싶으면 onChange 아니면 onInput
      이벤트핸들러를 부착하면 됩니다.
    </p>
  </div>;
}

export default App;
