export default function MapElPage() {
  // 기본방법(화살표함수)
  //   ["철수", "영희", "훈이"].map((el, index) => {
  //     console.log("el", el);
  //     console.log("index", index);
  //     return "";
  //   });

  //기본방법(그냥함수)
  //   ["철수", "영희", "훈이"].forEach(function (el, index) {
  //     console.log("el", el);
  //     console.log("index", index);
  //   });

  //3. 매개변수 바꿔서 해보기
  //   ["철수", "영희", "훈이"].map((asdf, qwer) => {
  //     console.log("asdf", asdf);
  //     console.log("qwer", qwer);
  //   });

  //4.el과 index 바꾸기
  ["철수", "영희", "훈이"].map((index, el) => {
    console.log("index", index);
    console.log("el", el);
  });

  return <></>;
}

//.map 말고 forEach 가면 반복만하고싶을때이다. 타입스크립트 에러 해결
