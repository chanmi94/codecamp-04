import { memo } from "react";

function MemoizationPresenterPage(props) {
  console.log("프레젠터가 렌더링 됩니다.!!");
  return (
    <>
      <div>==================</div>
      <div>이것은 프레젠터입니다!!</div>
      <div>==================</div>
    </>
  );
}
export default memo(MemoizationPresenterPage);
