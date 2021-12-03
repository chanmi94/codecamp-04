import { useMutation } from "@apollo/client";
import ProductWriteUI from "./ProductList.presenter";
import { FETCH_USED_ITEMS } from "./ProductList.queries";
import { useState, ChangeEvent } from "react";
import {
  IMutation,
  IMutationCreateUseditemArgs,
} from "../../../../commons/types/generated/types";

export default function ProductList(props) {
  // const router = useRouter();
  const [myName, setMyName] = useState("");
  const [myRemarks, setMyRemarks] = useState("");
  const [myContents, setMyContents] = useState("");
  const [myPrice, setMyPrice] = useState("");

  const [fetchUseditems] = useMutation(FETCH_USED_ITEMS);

  function onChangeMyName(event: ChangeEvent<HTMLInputElement>) {
    setMyName(event.target.value);
  }

  function onChangeMyRemarks(event: ChangeEvent<HTMLInputElement>) {
    setMyRemarks(event.target.value);
  }

  function onChangeMyContents(event: ChangeEvent<HTMLInputElement>) {
    setMyContents(event.target.value);
  }

  function onChangeMyPrice(event: ChangeEvent<HTMLInputElement>) {
    setMyPrice(event.target.value);
  }

  return (
    <ProductWriteUI
      onChangeMyName={onChangeMyName}
      onChangeMyRemarks={onChangeMyRemarks}
      onChangeMyContents={onChangeMyContents}
      onChangeMyPrice={onChangeMyPrice}
      onClickSubmit={onClickSubmit}
    />
  );
}
