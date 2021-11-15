import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS } from "./BoardList.queries";
import { useRouter } from "next/router";
import { ChangeEvent } from "react";
import { IBoardListProps } from "./BoardList.types";

export default function BoardList(props: IBoardListProps) {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARDS);

  function onClickMoveToBoardNew() {
    router.push("/boards/new");
  }

  function onClickMoveToBoardDetail(event: ChangeEvent<HTMLInputElement>) {
    router.push(`/boards/${event.target.id}`);
  }

  return (
    <BoardListUI
      data={data}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
    />
  );
}
