import './Controller.css'

const Controller = ({handleSetCount}) => {
  return (
    <div className="buttons">
        <button onClick={() => handleSetCount(-1)}>-1</button>
        {/* 
          화살표 함수를 사용하는 이유
          = 클릭 이벤트가 발생했을 때만 실행되도록 하기 위해서!
            ( 함수의 실행 시점 제어 )

          onClick={function(){ handleSetCount(-1) } 과 동일한 코드
        */}
        <button onClick={() => handleSetCount(-10)}>-10</button>
        <button onClick={() => handleSetCount(-100)}>-100</button>
        <button onClick={() => handleSetCount(100)}>+100</button>
        <button onClick={() => handleSetCount(10)}>+10</button>
        <button onClick={() => handleSetCount(1)}>+1</button>
        {/* 
          <button onClick={handleSetCount(1)}>+1</button> 
          자바스크립트는 함수명에 괄호를 붙이게 되면 그 즉시 함수가 실행됨
          
          따라서, 위와 같은 방식으로 작성시 렌더링이 될 때마다 바로 실행된다
          => 무한으로 계속 1씩 증가하게 됨

          onClick={setCount(count + 1)} 과 동일한 코드 
        */}
    </div>
  );
}
export default Controller;
