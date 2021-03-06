import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../pages/_app";

export const withAuth = (Component: any) => (props: any) => {
  const router = useRouter();
  // const { accessToken } = useContext(GlobalContext);

  useEffect(() => {
    if (!localStorage.getItem("refreshToken")) {
      alert("로그인 한 사람만 입장 가능합니다 로그인을 먼저해주세요");
      router.push("/login");
    }
  }, []);

  return <Component {...props} />;
};
