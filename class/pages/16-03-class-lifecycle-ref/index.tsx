import { Component, createRef } from "react";
import MyComponent from "../../src/components/units/classcomponent";
import Router from "next/router";
interface IState {
  count: number;
}
export default class MyLifecyclePage extends Component {
  //여기서 ref는 tag에 접근할때 ,createRef리액트에서 제고앻줌
  inputRef = createRef<HTMLInputElement>(); //HTMLInputElement 타입스크립트 지정

  state: IState = {
    count: 0,
  };

  componentDidMount() {
    console.log("마운트됨!!");
    this.inputRef.current?.focus();
    //인풋찾아서 포커스 깜박거리기
  }
  componentDidUpdate() {
    console.log("수정됨!!");
  }
  componentWillUnmount() {
    console.log("잘가요!!");
  }

  onClickCounter = () => {
    //state가 한 객체로 묶여있음.
    // = ()=> 화살표함수 써야함 외우기
    console.log(this.state.count);
    this.setState((prev: IState) => ({
      count: prev.count + 1,
    }));
  };
  onClickMove() {
    Router.push("/");
  }

  render() {
    return (
      <>
        <input type="text" ref={this.inputRef} />
        <div>현재카운트:{this.state.count}</div>
        <button onClick={this.onClickCounter}>카운트올리기</button>
        <button onClick={this.onClickMove}>페이지 이동하기!! </button>
        <MyComponent count={this.state.count} />
      </>
    );
  }
}
