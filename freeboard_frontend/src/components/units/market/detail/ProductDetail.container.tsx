import { useRouter } from "next/router";
import ProductDetailUI from "./ProductDetail.presenter";
import { useQuery, useMutation } from "@apollo/client";
import { FETCH_USEDITEM, DELETE_USEDITEM } from "./ProductDetail.queries";
import {
  IMutation,
  IMutationDeleteUseditemArgs,
  IQuery,
} from "../../../../commons/types/generated/types";

const ProductDetail = () => {
  const router = useRouter();
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

  console.log(data);
  return (
    <ProductDetailUI
      data={data}
      onClickDelete={onClickDelete}
      onClickMoveToList={onClickMoveToList}
      onClickMoveToUpdate={onClickMoveToUpdate}
    />
  );
};
export default ProductDetail;
