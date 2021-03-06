import { useMutation, useQuery } from "@apollo/client";
import ProductWriteUI from "./ProductList.presenter";
import { FETCH_USED_ITEMS } from "./ProductList.queries";
import { ChangeEvent, useState, MouseEvent } from "react";
import {
  IMutation,
  IQuery,
  IQueryFetchUseditemsArgs,
  IUseditem,
} from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";
import ProductListUI from "./ProductList.presenter";

export default function ProductList() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  // const [myKeyword, setMyKeyword] = useState("");
  const [mySearch, setMySearch] = useState("");
  //   const { data: dataITemsCount, refetch: refetchItemsCount } = useQuery<

  // (FETCH_USED_ITEMS_SEARCH);
  const { data, fetchMore, refetch } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS, { variables: { page: 0 } });

  function onClickMoveToBProductNew() {
    router.push(`/market/new `);
  }

  function onClickMoveToProductDetail(event: MouseEvent<HTMLDivElement>) {
    router.push(`/market/${event.currentTarget.id}`);
  }

  function onLoadMore() {
    if (!data) return;
    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditems.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...(fetchMoreResult?.fetchUseditems || []),
          ],
        };
      },
    });
  }

  const onClickBasket = (el: IUseditem) => () => {
    console.log(el);

    //배열로 담아주자
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]") || [];

    //이미 담았는지 체크
    let isExists = false;
    baskets.forEach((basketEl: IUseditem) => {
      if (el._id === basketEl._id) isExists = true;
    });
    if (isExists) {
      alert("이미 장바구니에 담으셨습니다.");
      return;
    }

    const { __typename, ...newEL } = el;

    baskets.push(newEL);

    localStorage.setItem("basket", JSON.stringify(baskets));
  };
  function onChangeSearch(event: ChangeEvent<HTMLInputElement>) {
    setMySearch(event.target.value);
  }

  function onChangeKeyword(value: string) {
    setKeyword(value);
  }

  return (
    <ProductListUI
      data={data}
      onClickMoveToBProductNew={onClickMoveToBProductNew}
      onClickMoveToProductDetail={onClickMoveToProductDetail}
      onLoadMore={onLoadMore}
      onClickBasket={onClickBasket}
      keyword={keyword}
      onChangeKeyword={onChangeKeyword}
      refetch={refetch}
    />
  );
}
