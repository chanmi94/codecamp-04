import { useMutation } from "@apollo/client";
import { ChangeEvent, useContext, useState } from "react";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../src/commons/types/generated/types";
import { gql } from "@apollo/client";
import { useRouter } from "next/router";
import { GlobalContext } from "../_app";
import styled from "@emotion/styled";

const LoginForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50vh;
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
`;
const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function Login() {
  const { setMyAccesToken } = useContext(GlobalContext);
  const router = useRouter();

  const [myEmail, setMyEmail] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  function onChangeMyEmail(event: ChangeEvent<HTMLInputElement>) {
    setMyEmail(event.target.value);
  }

  function onChangeMyPassword(event: ChangeEvent<HTMLInputElement>) {
    setMyPassword(event.target.value);
  }

  async function onCliCKLogin() {
    const result = await loginUser({
      variables: {
        email: myEmail,
        password: myPassword,
      },
    });
    setMyAccesToken(result.data?.loginUser.accessToken);
    router.push("/boards");
  }

  return (
    <>
      <LoginForm>
        <Form>
          {" "}
          <label>로그인</label>
          <label>Email</label>
          <input type="text" onChange={onChangeMyEmail} />
          <label>Password</label>
          <input type="password" onChange={onChangeMyPassword} />
          <button onClick={onCliCKLogin}>로그인</button>
        </Form>
      </LoginForm>
    </>
  );
}
