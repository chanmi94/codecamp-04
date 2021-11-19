import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BESTS } from "./BoardList.queries";
import { useRouter } from "next/router";

export default function BoardList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARDS);
  const { data: data2 } = useQuery(FETCH_BESTS);

  function onClickMoveToBoardNew() {
    router.push("/boards/new");
  }

  function onClickMoveToBoardDetail(event) {
    router.push(`/boards/${event.target.id}`);
  }

  return (
    <BoardListUI
      data={data}
      data2={data2}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
    />
  );
}
