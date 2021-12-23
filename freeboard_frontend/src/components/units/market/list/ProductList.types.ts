import { SetStateAction } from "react";
import { ChangeEvent, MouseEvent } from "react";
import { Dispatch } from "react";
import { ApolloQueryResult } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
  IUseditem,
} from "./../../../../commons/types/generated/types.d";

export interface IProductListUIProps {
  data?: Pick<IQuery, "fetchUseditems">;
  onClickBasket: (el: IUseditem) => () => void;
  onLoadMore: () => void;
  onClickMoveToBProductNew: () => void;
  onClickMoveToProductDetail: (event: MouseEvent<HTMLDivElement>) => void;
  refetch: (
    variables: Partial<IQueryFetchUseditemsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditems">>>;
  keyword: string;
  count?: number;
}

export interface ITextTokenProps {
  isMatched: boolean;
}
