import { useCallback, useMemo, useState } from "react";
import MemoizationPresenterPage from "./presenter";

export default function MemoizationContainerPage() {
  console.log("컨테이너가 렌더링 됩니다");
  let countLet = 0;
  const [countState, setCountState] = useState(0);

  const randomValue = useMemo(() => {
    return () => {
      setCountState((prev) => prev + 1);
    };
  }, []);
  console.log(randomValue);

  const onClickCountLet = useCallback(() => {
    console.log(countLet + 1);
    countLet += 1; // countLet = countLet + 1;
  }, []);

  const onClickCountState = useCallback(() => {
    // console.log(countState + 1);
    setCountState((prev) => prev + 1); //그때그때 꺼내와
  }, []);
  //,[] 앤 멀까요 ?의존성 배열
  return (
    <>
      <div>===========</div>
      <div>여긴 컨테이너~</div>

      <div>카운트(let): {countLet}</div>
      <button onClick={onClickCountLet}>카운트(let) +1 올리기</button>

      <div>카운트(state): {countState}</div>
      <button onClick={onClickCountState}>카운트(state) +1 올리기</button>
      <div>===========</div>
      <MemoizationPresenterPage countState={countState} />
    </>
  );
}
