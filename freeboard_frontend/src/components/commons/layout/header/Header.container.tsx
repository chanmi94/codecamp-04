import { useRouter } from "next/router";
import HeaderUI from "./Header.presenter";

export default function Header() {
  const router = useRouter();

  function onClickLogo() {
    router.push("/boards");
  }

  function onClickMoveToLogin() {
    router.push("/login");
  }

  function onClickMoveToSignUp() {
    router.push("/signup");
  }
  return (
    <HeaderUI
      onClickLogo={onClickLogo}
      onClickMoveToLogin={onClickMoveToLogin}
      onClickMoveToSignUp={onClickMoveToSignUp}
    />
  );
}
