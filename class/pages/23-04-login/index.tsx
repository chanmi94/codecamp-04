import { ChangeEvent, useContext, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../src/commons/types/generated/types";
import { GlobalContext } from "../_app";
import { useRouter } from "next/router";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;
export default function LoginPage() {
  const { setMyAccesToken } = useContext(GlobalContext);
  const router = useRouter();
  const [myEamil, setMyEmail] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER); //onClickLogin 부분

  function onChangeMyEmail(event: ChangeEvent<HTMLInputElement>) {
    setMyEmail(event.target.value);
  }

  function onChangeMyPassword(event: ChangeEvent<HTMLInputElement>) {
    setMyPassword(event.target.value);
  }
  async function onCliCKLogin() {
    //async  await 해주기
    const result = await loginUser({
      variables: {
        email: myEamil,
        password: myPassword,
      },
    });
    localStorage.setItem(
      "accessToken",
      result.data?.loginUser.accessToken || ""
    );
    setMyAccesToken?.(result.data?.loginUser.accessToken || "");
    // 여기서 setAccesToken 필요! (글로벌 스테이트에..)

    //const result=await axios.get("koreanjson.com/post/1") 이러한 방식으로 원하는 곳에서
    //useQuery 필요!!
    //const result = fetchUserLoggedIn()
    //setUserInfo(result.data?.fetchUserLoggedIn)

    //로그인 성공된 페이지로 이동시키기
    router.push("/23-05-login-success");
  }
  return (
    // <LoginForm>
    <>
      이메일: <input type="text" onChange={onChangeMyEmail} />
      비밀번호: <input type="password" onChange={onChangeMyPassword} />
      <button onClick={onCliCKLogin}>로그인하기</button>
    </>
  );
}
