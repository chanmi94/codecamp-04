import { useRouter } from "next/router";
import ProductDetailUI from "./ProductDetail.presenter";
import { useQuery, useMutation } from "@apollo/client";
import {
  FETCH_USEDITEM,
  DELETE_USEDITEM,
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  TOGGLE_USED_ITEM_PICK,
} from "./ProductDetail.queries";
import {
  IMutation,
  IMutationDeleteUseditemArgs,
  IQuery,
} from "../../../../commons/types/generated/types";

const ProductDetail = () => {
  const router = useRouter();
  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );
  const { data } = useQuery<Pick<IQuery, "fetchUseditem">>(FETCH_USEDITEM, {
    variables: { useditemId: String(router.query.useditemId) },
  });
  const [deleteUseditem] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USEDITEM);

  async function onClickDelete() {
    confirm("정말로 삭제하시겠습니까?");

    try {
      await deleteUseditem({
        variables: { useditemId: String(router.query.useditemId) },
      });
      alert("게시물이 삭제되었습니다.");
      router.push("/market");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  }

  function onClickMoveToList() {
    router.push("/market");
  }

  function onClickMoveToUpdate() {
    router.push(`/market/${router.query.useditemId}/edit`);
  }

  async function onClickMoveBuy() {
    try {
      const result = await createPointTransactionOfBuyingAndSelling({
        variables: {
          useritemId: router.query.useditemId,
        },
      });
      alert("구매완료");
      console.log(result);
    } catch (error) {
      alert("마이페이지에서 포인트를 충전해주세요");
    }
  }

  async function onClickWishList() {
    try {
      const result = await toggleUseditemPick({
        variables: { useditemId: String(router.query.useditemId) },
      });
      alert("찜완료");
      console.log(result);
    } catch (error) {
      error instanceof Error && error.message;
    }
  }

  return (
    <ProductDetailUI
      data={data}
      onClickDelete={onClickDelete}
      onClickMoveToList={onClickMoveToList}
      onClickMoveToUpdate={onClickMoveToUpdate}
      onClickMoveBuy={onClickMoveBuy}
      onClickWishList={onClickWishList}
    />
  );
};
export default ProductDetail;
