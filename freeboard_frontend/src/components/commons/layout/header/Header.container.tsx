import { useRouter } from "next/router";
import { gql, useMutation } from "@apollo/client";
import { useContext } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import HeaderUI from "./Header.presenter";

const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

export default function Header() {
  const router = useRouter();
  const [logoutUser] = useMutation(LOGOUT_USER);
  const { setMyAccesToken } = useContext(GlobalContext);
  function onClickLogo() {
    router.push("/boards");
  }

  function onClickMoveToLogin() {
    router.push("/login");
  }

  function onClickMoveToSignUp() {
    router.push("/signup");
  }

  const onClickToLogout = async () => {
    localStorage.removeItem("refreshToken");
    const result = await logoutUser();
    console.log(result);
    alert("로그아웃 되었습니다.");
    router.push("/login");
  };

  return (
    <HeaderUI
      onClickLogo={onClickLogo}
      onClickMoveToLogin={onClickMoveToLogin}
      onClickMoveToSignUp={onClickMoveToSignUp}
      onClickToLogout={onClickToLogout}
    />
  );
}
