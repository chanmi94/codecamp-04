import { useQuery } from "@apollo/client";
import ProductWriteUI from "./ProductList.presenter";
import { FETCH_USED_ITEMS } from "./ProductList.queries";
import { useState } from "react";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";

export default function ProductList() {
  const router = useRouter();

  const [startPage, setStartPage] = useState(1);

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS, { variables: { page: startPage } });

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

  return (
    <ProductWriteUI
      data={data}
      startPage={startPage}
      setStartPage={setStartPage}
      onClickMoveToBProductNew={onClickMoveToBProductNew}
      onClickMoveToProductDetail={onClickMoveToProductDetail}
      onLoadMore={onLoadMore}
    />
  );
}
