import { IQuery } from "../../../../commons/types/generated/types";
import { ChangeEvent } from "react";
export interface IBoardListUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  onClickMoveToBoardDetail: () => void;
  onClickMoveToBoardNew: () => void;
}
export interface IBoardListProps {}
