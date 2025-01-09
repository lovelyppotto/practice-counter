import { useState, useRef } from "react";
import Result from './Result'
import './Controller.css'

const Controller = () => {
  const [count, setCount] = useState(0)
  const countRef = useRef()

  const onClickHandler = (e) => {
    const id = e.target.id
    // e.target.value 의 타입이 String이므로 숫자 형변환 필요
    const value = Number(e.target.value)

    switch (id) {
      case "first":
        setCount(value - 1)
        break
      case "second":
        setCount(value - 10)
        break
      case "third":
        setCount(value - 100)
        break
      // 여기서 e.target.value 사용시 더하기연산이 문자열로 이루어짐
      // 문자열 뺄셈 연산은 없지만 더하기 연산이 있어서 발생하는 문제
      case "forth":
        setCount(value + 100)
        break
      case "fifth":
        setCount(value + 10)
        break
      case "sixth":
        setCount(value + 1)
        break
      default : 
        break
    } 
  }

  return (
    <div>
        <Result count={count} />
      <div className="buttons">
          <button ref={countRef} value={count} id="first" onClick={onClickHandler}>-1</button>
          <button ref={countRef} value={count} id="second" onClick={onClickHandler}>-10</button>
          <button ref={countRef} value={count} id="third" onClick={onClickHandler}>-100</button>
          <button ref={countRef} value={count} id="forth" onClick={onClickHandler}>+100</button>
          <button ref={countRef} value={count} id="fifth" onClick={onClickHandler}>+10</button>
          <button ref={countRef} value={count} id="sixth" onClick={onClickHandler}>+1</button>
      </div>
    </div>
  );
}
export default Controller;
