export default function Child2(props) {
  return (
    <>
      <div>자식2 카운트: {props.count}</div>
      <button onClick={props.onClickCounter}>카운트올리기</button>
    </>
  );
}
