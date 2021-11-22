import { useEffect, useRef, useState } from "react";

export default function UseEffectDependencyArrayPage() {
  console.log("렌더링시작!!");
  const [count, setCount] = useState(0);

  //1번케이스// -최초 1번실행 didMount
  // useEffect(() => {
  //   console.log("최초한번 실행됨!! ");
  // }, []);

  //2번케이스// -의존성배열의 count 감지후 재실행
  // useEffect(() => {
  //   console.log("count가 변경되면 재실행!! ");
  // }, [count]);

  //3번케이스// 최초 렌더링 +1
  // useEffect(() => {
  //   setCount(100);
  // }, []);

  //4번케이스// 무한루프
  // useEffect(() => {
  //   setCount((prev) => prev + 1);
  // }, [count]);

  function onClickCounter() {
    setCount((prev) => prev + 1);
  }

  return (
    <>
      <div>현재카운트:{count}</div>
      <button onClick={onClickCounter}>카운트올리기</button>
    </>
  );
}
