import { LoginForm, Form, FormInput } from "./Login.styles";
import { ILoginPageUI } from "./Login.types";

export default function LoginPageUI(props: ILoginPageUI) {
  return (
    <>
      <LoginForm>
        <Form>
          {" "}
          <label>로그인</label>
          <label>Email</label>
          <FormInput type="text" onChange={props.onChangeMyEmail} />
          <label>Password</label>
          <FormInput type="password" onChange={props.onChangeMyPassword} />
          <button onClick={props.onCliCKLogin}>로그인</button>
        </Form>
      </LoginForm>
    </>
  );
}
