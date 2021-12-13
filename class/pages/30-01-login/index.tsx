import { ChangeEvent, useContext, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { IMutation } from "../../src/commons/types/generated/types";
import { GlobalContext } from "../_app";
import { useRouter } from "next/router";
const LOGIN_USER = gql`
  mutation loginUserExample($email: String!, $password: String!) {
    loginUserExample(email: $email, password: $password) {
      accessToken
    }
  }
`;

//app 볼것
export default function LoginPage() {
  const router = useRouter();
  const { setMyAccesToken } = useContext(GlobalContext);
  const [myEmail, setMyEmail] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [loginUserExample] =
    useMutation<Pick<IMutation, "loginUserExample">>(LOGIN_USER);
  function onChangeMyEmail(event: ChangeEvent<HTMLElement>) {
    setMyEmail(event.target.value);
  }
  function onChangeMyPassword(event: ChangeEvent<HTMLElement>) {
    setMyPassword(event.target.value);
  }
  async function onClickLogin() {
    const result = await loginUserExample({
      variables: {
        email: myEmail,
        password: myPassword,
      },
    });
    localStorage.setItem("refreshToken", "true");
    setMyAccesToken?.(result.data?.loginUserExample.accessToken || "");
    router.push("/30-02-login-success");
  }
  return (
    <>
      이메일:
      <input type="text" onChange={onChangeMyEmail} />
      비밀번호:
      <input type="password" onChange={onChangeMyPassword} />
      <button onClick={onClickLogin}>로그인하기!!</button>
    </>
  );
}
