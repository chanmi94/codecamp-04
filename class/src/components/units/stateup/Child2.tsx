export default function Child1(props) {
  return (
    <>
      <div>자식1 카운트: {props.count}</div>
      <button onClick={props.onClickCounter}>카운트올리기</button>
    </>
  );
}
