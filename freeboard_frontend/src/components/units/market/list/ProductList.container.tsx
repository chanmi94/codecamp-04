import { useQuery } from "@apollo/client";
import ProductWriteUI from "./ProductList.presenter";
import {
  FETCH_USED_ITEMS,
  FETCH_USED_ITEMS_SEARCH,
} from "./ProductList.queries";
import { useState } from "react";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
  IUseditem,
} from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";

export default function ProductList() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

  //   const { data: dataITemsCount, refetch: refetchItemsCount } = useQuery<

  // (FETCH_USED_ITEMS_SEARCH);
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

  // function onChangeKeyword(value: string) {
  //   setKeyword(value);
  // }
  return (
    <ProductWriteUI
      data={data}
      // keyword={keyword}
      // onChangeKeyword={onChangeKeyword}
      onClickMoveToBProductNew={onClickMoveToBProductNew}
      onClickMoveToProductDetail={onClickMoveToProductDetail}
      onLoadMore={onLoadMore}
      onclickBasket={onclickBasket}
    />
  );
}
