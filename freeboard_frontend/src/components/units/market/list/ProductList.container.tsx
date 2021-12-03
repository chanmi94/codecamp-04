import { useMutation, useQuery } from "@apollo/client";
import ProductWriteUI from "./ProductList.presenter";
import { FETCH_USED_ITEMS } from "./ProductList.queries";
import { useState, ChangeEvent } from "react";
import {
  IMutation,
  IMutationCreateUseditemArgs,
} from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";

export default function ProductList(props) {
  const router = useRouter();
  const { data, refetch } = useQuery(FETCH_USED_ITEMS);

  function onClickMoveToBProductNew(event) {
    router.push(`/market/new ${event.target.id}`);
  }
  return (
    <ProductWriteUI
      data={data}
      onClickMoveToBProductNew={onClickMoveToBProductNew}
    />
  );
}
