import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";
import { IBoardComment } from "../../../../commons/types/generated/types";

export interface IMarketCommentWriteProps {
  isEdit?: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  el?: IBoardComment;
}

export interface IMarketCommentWriteUIProps {
  onChangeMyWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeMyPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeMyContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeStar: (value: number) => void;
  onClickWrite: () => void;
  onClickUpdate: () => void;
  isEdit?: boolean;
  el?: IBoardComment;
  myContents: string;
}
