import { useQuery, gql, useMutation } from "@apollo/client";
import Password from "antd/lib/input/Password";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function ApolloCacheStatePage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickDelete = (boardId: string) => () => {
    deleteBoard({
      variables: { boardId },
      //update는 함수 제공됨 아폴로 독스에 있음
      update(cache, { data }) {
        const deletedId = data.deletBord; //삭제된 게시글 ID (플레이그라운드 확인)

        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              //1. 기존의 fetchBoards 10r개에서 방금 삭제한 id를 제외한 9개를 만들기
              //2. 그렇ㄱ ㅔ만들어진 9개의 새로운 fetchBoards데이터를 ㅈ돌려주기
              //외워 그냥
              const newFetchBoards = prev.filter(
                (el) => readField("_id", el) !== deletedId
              ); //기존데이터가 10개가있었다. 여기서 삭제된 데이터를 뺴주면

              return { ...newFetchBoards };
              // return 변화될 데이터 (fetchBoards)
            },
          },
        });
      },
    });
  };
  function onClickSubmit() {
    //등록하기
    createBoard({
      variables: {
        createBoardInput: {
          writer: "영희",
          password: "1234",
          title: "제목입니다~",
          contents: "내용입니다~",
        },
      },
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              return [data.createBoard, ...prev]; //기존꺼 나열

              // return 변경될 데이터 -fetchBoards
            },
          },
        });
      },
    });
  }
  return (
    <>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <span>{el.contents}</span>
          <button onClick={onClickDelete(el._id)}>삭제하기</button>
        </div>
      ))}

      <button onClick={onClickSubmit}>등록하기</button>
    </>
  );
}
