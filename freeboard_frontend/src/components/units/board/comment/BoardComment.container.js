import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import BoardDetailUI from "./BoardComment.presenter";
import { useQuery, useMutation } from "@apollo/client";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  CREATE_BOARDCOMMENT,
  // FETCH_BOARDCOMMENTS,
} from "./BoardDetail.queries";

export default function BoardDetail() {
  const router = useRouter();
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoardComment] = useMutation(CREATE_BOARDCOMMENT);

  // const { data } = useQuery(FETCH_BOARDCOMMENTS, {
  //   variables: {
  //     fetchBoardComments: {
  //       boardId: router.query.boardId,
  //     },
  //   },
  // });
  const [myWriter, setMyWriter] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setMyContents] = useState("");

  // const [myWriterError, setMyWriterError] = useState("");
  // const [myPasswordError, setMyPasswordError] = useState("");
  // const [myTitleError, setMyTitleError] = useState("");
  // const [myContentsError, setMyContentsError] = useState("");
  // const { data } = useQuery(FETCH_BOARD, {
  //   variables: { boardId: router.query.boardId },
  // });

  // function onClickMoveToList() {
  //   router.push("/boards");
  // }

  // function onClickMoveToUpdate() {
  //   router.push(`/boards/${router.query.boardId}/edit`);
  // }
  function onChangeMyWriter(event) {
    setMyWriter(event.target.value);
    if (event.target.value !== "") {
      setMyWriterError("");
    }

    if (
      event.target.value !== "" &&
      myTitle !== "" &&
      myContents !== "" &&
      myPassword !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeMyPassword(event) {
    setMyPassword(event.target.value);
    if (event.target.value !== "") {
      setMyPasswordError("");
    }

    if (
      myWriter !== "" &&
      myTitle !== "" &&
      myContents !== "" &&
      event.target.value !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeMyTitle(event) {
    setMyTitle(event.target.value);
    if (event.target.value !== "") {
      setMyTitleError("");
    }

    if (
      myWriter !== "" &&
      event.target.value !== "" &&
      myContents !== "" &&
      myPassword !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeMyContents(event) {
    setMyContents(event.target.value);
    if (event.target.value !== "") {
      setMyContentsError("");
    }

    // if(myWriter !== "" && myTitle !== "" && event.target.value !== "" && myPassword !== ""){
    //   setIsActive(true)
    // } else {
    //   setIsActive(false)
    // }
  }

  async function onClickSubmit() {
    if (!myWriter) {
      setMyWriterError("작성자를 입력해주세요.");
    }
    if (!myPassword) {
      setMyPasswordError("비밀번호를 입력해주세요.");
    }

    if (!myContents) {
      setMyContentsError("내용을 입력해주세요.");
    }
    if (myWriter && myPassword && myContents) {
      const result = await createBoardComment({
        variables: {
          createBoardCommentInput: {
            boardId: router.query.boardId,
            writer: myWriter,
            password: myPassword,
            contents: myContents,
          },
        },
      });
      router.push(`/boards/${result.data.createBoardComment._id}`);
    }
  }

  // async function onClickDelete() {
  //   try {
  //     await deleteBoard({ variables: { boardId: router.query.boardId } });
  //     alert("게시물이 삭제되었습니다.");
  //     router.push("/boards");
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // }

  return (
    <BoardDetailUI
      // data={data}
      // onClickMoveToList={onClickMoveToList}
      // onClickMoveToUpdate={onClickMoveToUpdate}
      // onClickDelete={onClickDelete}
      // onChangeMyWriter={onChangeMyWriter}
      // onChangeMyPassword={onChangeMyPassword}
      // onChangeMyTitle={onChangeMyTitle}
      // onChangeMyContents={onChangeMyContents}
      onClickSubmit={onClickSubmit}
    />
  );
}
