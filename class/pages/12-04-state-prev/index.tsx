import { useState } from "react";

export default function StatePrevPage() {
  const [count, setCount] = useState(0);
  function onClictCounter() {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }
  return (
    <>
      <div>현재카운트: {count}</div>
      <button onClick={onClictCounter}>카운트 올리기!!</button>
    </>
  );
}
