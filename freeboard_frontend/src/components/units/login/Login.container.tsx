import { useMutation } from "@apollo/client";
import { ChangeEvent, useContext, useState } from "react";
import { useRouter } from "next/router";
import { GlobalContext } from "../../../../pages/_app";
import { LOGIN_USER } from "./Login.queries";

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
    localStorage.setItem(
      "accessToken",
      result.data?.loginUser.accessToken || ""
    );

    setMyAccesToken?.(result.data?.loginUser.accessToken);
    router.push("/boards");
  }

  return (
    <LoginPageUI
      onChangeMyEmail={onChangeMyEmail}
      onChangeMyPassword={onChangeMyPassword}
      onCliCKLogin={onCliCKLogin}
    />
  );
}
