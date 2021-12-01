export default function HOfPage() {
  const onClickChild = (index) => (event) => {
    console.log(event.target.id);
  };
  //   function onClickChild(event) {
  //     console.log(event.target.id);
  //   }
  return (
    <>
      <h1>HOf 연습 페이지입니당당</h1>
      <div>
        {["철수", "영희", "훈희"].map((el, index) => (
          <div key={el} onClick={onClickChild(index)}>
            {el}
          </div>
        ))}
      </div>
    </>
  );
}

// onClickChild(index)(event);
