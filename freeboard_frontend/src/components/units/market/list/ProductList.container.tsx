import { useQuery } from "@apollo/client";
import ProductWriteUI from "./ProductList.presenter";
import { FETCH_USED_ITEMS } from "./ProductList.queries";
import { useState } from "react";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
  IUseditem,
} from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";

export default function ProductList() {
  const router = useRouter();

  const [startPage, setStartPage] = useState(1);

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS, { variables: { page: 0 } });

  function onClickMoveToBProductNew() {
    router.push(`/market/new `);
  }

  function onClickMoveToProductDetail(event) {
    router.push(`/market/${event.currentTarget.id}`);
  }

  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditems)
          return {
            fetchUseditems: [...prev.fetchUseditems],
          };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult?.fetchUseditems,
          ],
        };
      },
    });
  };

  const onclickBasket = (el: IUseditem) => () => {
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
  return (
    <ProductWriteUI
      data={data}
      // startPage={startPage}
      // setStartPage={setStartPage}
      onClickMoveToBProductNew={onClickMoveToBProductNew}
      onClickMoveToProductDetail={onClickMoveToProductDetail}
      onLoadMore={onLoadMore}
      onclickBasket={onclickBasket}
    />
  );
}
