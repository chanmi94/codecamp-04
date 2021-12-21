import { IQuery } from "./../../../../../../class/src/commons/types/generated/types.d";
export interface IProductDetailUIProps {
  data?: Pick<IQuery, "fetchUseditem">;
  onClickMoveBuy: () => void;
  onClickWishList: () => void;
  onClickMoveToList: () => void;
  onClickMoveToUpdate: () => void;
  onClickDelete: () => void;
}
