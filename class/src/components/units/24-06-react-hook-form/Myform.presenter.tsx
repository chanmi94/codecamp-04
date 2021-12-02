import Button01 from "../../commons/buttons/01/Button01";
import Input01 from "../../commons/inputs/Input01";

export default function MyformUI(props) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickLogin)}>
      이메일 : <Input01 aaa="text" bbb={props.register("myEmail")} />
      {/* 이메일: <input type="text" {...props.register("myEmail")} /> */}
      <div>{props.formState.errors.myEmail?.message}</div>
      비밀번호 : <Input01 aaa="password" bbb={props.register("myPassword")} />
      {/* 비밀번호: <input type="password" {...props.register("myPassword")} /> */}
      <div>{props.formState.errors.myPassword?.message}</div>
      <Button01
        type="submit"
        name="로그인하기"
        isValid={props.formState.isValid}
      />
      {/* <button isValid={props.formState.isValid}>로그인하기</button> */}
      {/* <button type="button" onClick={onClickMove}>목록으로 이동하기</button> */}
      {/* <button type="reset">초기화하기</button> */}
    </form>
  );
}
