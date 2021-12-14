import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationCreateUseditemQuestionArgs,
  IMutationUpdateBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_USED_ITEM_QUESTIONS } from "../list/MarketCommentList.queries";
import MarketCommentWriteUI from "./MarketCommentWrite.presenter";
import {
  CREATE_USED_ITEM_QUESTION,
  UPDATE_BOARD_COMMENT,
} from "./MarketCommentWrite.queries";
// import { IBoardCommentWriteProps } from "./BoardCommentWrite.types";

export default function MarketCommentWrite(props) {
  const router = useRouter();

  const [myContents, setMyContents] = useState("");

  const [createUseditemQuestion] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USED_ITEM_QUESTION);
  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);

  // function onChangeMyUser(event: ChangeEvent<HTMLInputElement>) {
  //   setMyUser(event.target.value);
  // }

  // function onChangeMyPassword(event: ChangeEvent<HTMLInputElement>) {
  //   setMyUseditem(event.target.value);
  // }

  function onChangeMyContents(event: ChangeEvent<HTMLTextAreaElement>) {
    setMyContents(event.target.value);
  }

  async function onClickWrite() {
    try {
      await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: {
            contents: myContents,
          },
          useditemId: String(router.query.useditemId),
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query.useditemId },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  }

  // async function onClickUpdate() {
  //   if (!myContents) {
  //     alert("내용이 수정되지 않았습니다.");
  //     return;
  //   }
  //   if (!myPassword) {
  //     alert("비밀번호가 입력되지 않았습니다.");
  //     return;
  //   }

  //   try {
  //     if (!props.el?._id) return;
  //     await updateBoardComment({
  //       variables: {
  //         updateBoardCommentInput: { contents: myContents },
  //         password: myPassword,
  //         boardCommentId: props.el?._id,
  //       },
  //       refetchQueries: [
  //         {
  //           query: FETCH_BOARD_COMMENTS,
  //           variables: { boardId: router.query.boardId },
  //         },
  //       ],
  //     });
  //     props.setIsEdit?.(false);
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // }

  return (
    <MarketCommentWriteUI
      onChangeMyContents={onChangeMyContents}
      onClickWrite={onClickWrite}
      myContents={myContents}
    />
  );
}
