import { IQueryFetchUseditemsArgs } from "./../../types/generated/types.d";
import { ApolloQueryResult } from "@apollo/client";
import { ChangeEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../types/generated/types";

export interface ISearchbars02Props {
  refetch: (
    variables: Partial<IQueryFetchUseditemsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditems">>>;
  // refetchBoardsCount: (
  //   variables: Partial<IQueryFetchuseditemcouArgs>
  // ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchus">>>;
  onChangeKeyword: (value: string) => void;
}

export interface ISearchbars02UIProps {
  onChangeSearchbar: (event: ChangeEvent<HTMLInputElement>) => void;
}
