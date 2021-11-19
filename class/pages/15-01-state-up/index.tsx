import Child2 from "../../src/components/units/stateup/Child1";
import Child1 from "../../src/components/units/stateup/Child2";
import { useState } from "react";

export default function StatePage() {
  const [count, setCount] = useState(0);

  function onClickCounter() {
    setCount((prev) => prev + 1);
  }
  return (
    <>
      <Child1 count={count} onClickCounter={onClickCounter} />
      <div>======================</div>
      <Child2 count={count} onClickCounter={onClickCounter} />
    </>
  );
}
