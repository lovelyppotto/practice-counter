import './App.css'
import { useState, useRef } from 'react'
import Result from './component/Result'
import Controller from './component/Controller'

function App() {
  // State 만들기
  const [ count, setCount ] = useState(0)
  // 자식 컴포넌트에서 받아올 value 지정
  const handleSetCount = (value) => {
    setCount(count + value)
  }
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Result count={count}/>
      </section>
      <section>
        {/* 이벤트 핸들러 함수를 Props로 전달 */}
        <Controller handleSetCount={handleSetCount}/>
      </section>
    </div>
  );
}

export default App;
