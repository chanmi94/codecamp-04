import { useMutation, useQuery } from "@apollo/client";
import ProductWriteUI from "./ProductList.presenter";
import { FETCH_USED_ITEMS } from "./ProductList.queries";
import { useState, ChangeEvent } from "react";
import {
  IMutation,
  IMutationCreateUseditemArgs,
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";

export default function ProductList() {
  const router = useRouter();
  // const { data, refetch } = useQuery(FETCH_USED_ITEMS);

  const [startPage, setStartPage] = useState(1);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS, { variables: { page: startPage } });

  function onClickMoveToBProductNew() {
    router.push(`/market/new `);
  }

  function onClickMoveToProductDetail(event) {
    router.push(`/market/${event.currentTarget.id}`);
  }

  return (
    <ProductWriteUI
      data={data}
      startPage={startPage}
      refetch={refetch}
      setStartPage={setStartPage}
      onClickMoveToBProductNew={onClickMoveToBProductNew}
      onClickMoveToProductDetail={onClickMoveToProductDetail}
    />
  );
}
