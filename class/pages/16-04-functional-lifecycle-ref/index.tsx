import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
export default function MyLifecyclePage() {
  const router = useRouter();
  //초기값 null 줘야함
  const inputRef = useRef<HTMLInputElement>(null);
  const [count, setCount] = useState(0);

  //lifecycle을 3개를 하나로 합침
  //componentDidMount와 동일
  //[]은 의존성 배열이다. dependency array 즉 저 배열에 의존하고 있다.
  //머하나라도 바뀌면 다시실행 componentdIdupdate임

  //componentDidMount와 동일
  useEffect(() => {
    console.log("마운트됨!!");
    inputRef.current?.focus();

    //componentWillUnmount와 동일
    return () => {
      console.log("잘가요");
    };
  }, []);

  //componentDidUpdate와 동일
  useEffect(() => {
    console.log("수정됨");
  });

  function onClickCounter() {
    setCount((prev) => prev + 1);
  }
  function onClickMove() {
    router.push("/");
  }
  return (
    <>
      <input type="text" ref={inputRef} />
      <div>현재카운트:{count}</div>
      <button onClick={onClickCounter}>카운트올리기</button>
      <button onClick={onClickMove}>페이지 이동하기!! </button>
    </>
  );
}
