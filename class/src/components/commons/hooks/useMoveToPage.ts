import { useState } from "react";
import { useRouter } from "next/router";

type IPage = "/boards" | "/markets" | "/mypage"; //12/13

export function useMoveToPage() {
  const router = useRouter();
  const [visitedPage, setVistedPage] = useState("/"); //12/13

  const moveToPage = (page: IPage) => () => {
    setVistedPage(page); //12/13
    router.push(page);
  };

  return {
    moveToPage,
    visitedPage, //12/13
  };
}
