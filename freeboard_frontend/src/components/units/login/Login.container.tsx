import { useMutation } from "@apollo/client";
import { ChangeEvent, useContext, useState } from "react";
import { useRouter } from "next/router";
import { GlobalContext } from "../../../../pages/_app";
import { LOGIN_USER, LOGOUT_USER } from "./Login.queries";

import LoginPageUI from "./Login.presenter";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../commons/types/generated/types";

export default function LoginPage(props) {
  const { setMyAccesToken } = useContext(GlobalContext);
  const router = useRouter();

  const [myEmail, setMyEmail] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [logoutUser] = useMutation(LOGOUT_USER);
  const [loginUserExample] =
    useMutation<Pick<IMutation, "loginUserExample">>(LOGIN_USER);

  function onChangeMyEmail(event: ChangeEvent<HTMLInputElement>) {
    setMyEmail(event.target.value);
  }

  function onChangeMyPassword(event: ChangeEvent<HTMLInputElement>) {
    setMyPassword(event.target.value);
  }

  async function onCliCKLogin() {
    const result = await loginUserExample({
      variables: {
        email: myEmail,
        password: myPassword,
      },
    });

    const onCliCKLogout = async () => {
      await logoutUser;
      localStorage.removeItem("isLoggesIn");
      setMyAccesToken("");
      alert("로그아웃하였습니다.");
    };

    // localStorage.setItem(
    //   "accessToken",
    //   result.data?.loginUserExample.accessToken || ""
    // );
    localStorage.setItem("refreshToken", "true");
    setMyAccesToken?.(result.data?.loginUserExample.accessToken || "");
    router.push("/boards");
  }

  return (
    <LoginPageUI
      onChangeMyEmail={onChangeMyEmail}
      onChangeMyPassword={onChangeMyPassword}
      onCliCKLogin={onCliCKLogin}
      // onCliCKLogout={onCliCKLogout}
    />
  );
}
