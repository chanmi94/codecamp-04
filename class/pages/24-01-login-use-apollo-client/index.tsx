import { ChangeEvent, useContext, useState } from "react";
import { gql, useApolloClient, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../src/commons/types/generated/types";
import { GlobalContext } from "../_app";
import router, { useRouter } from "next/router";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      picture
    }
  }
`;

export default function LoginPage() {
  const { setMyAccesToken, setMyUserInfo } = useContext(GlobalContext);
  const router = useRouter();
  const [myEamil, setMyEmail] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER); //onClickLogin 부분

  //12/02 1
  const client = useApolloClient();

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
    const accessToken = result.data?.loginUser.accessToken || "";
    localStorage.setItem("accessToken", accessToken);
    setMyAccesToken?.(accessToken);
    // 여기서 setAccesToken 필요! (글로벌 스테이트에..)

    //const result=await axios.get("koreanjson.com/post/1") 이러한 방식으로 원하는 곳에서
    //useQuery 필요!!
    //12/02 2  (위에 result가 있어서 resultUserInfo 입력해줌)
    const resultUserInfo = await client.query({
      query: FETCH_USER_LOGGED_IN,
      context: {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      },
    });
    setMyUserInfo(resultUserInfo.data.fetchUserLoggedIn);

    //로그인 성공된 페이지로 이동시키기
    router.push("/24-02-login-success");
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
