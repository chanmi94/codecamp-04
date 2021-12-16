import { gql, useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../src/commons/types/generated/types";

export const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

export default function OptimisticUiPage() {
  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: "61bab53b717be5002baa75a6" },
    }
  );
  function onClickOptimisticUi() {
    //여기서 좋아요 증가시키는 mutation
    likeBoard({
      //순서 1.
      variables: { boardId: "61bab53b717be5002baa75a6" },
      //   refetchQueries: [
      //     {
      //       query: FETCH_BOARD,
      //       variables: { boardId: "61baae29717be5002baa7548" },
      //     },
      //   ],
      optimisticResponse: {
        //순서 2.
        likeBoard: (data?.fetchBoard.likeCount || 0) + 1,
      },
      update(cache, { data }) {
        console.log(data);
        //순서 3.
        //위에 data랑 달라융
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "61bab53b717be5002baa75a6" },
          data: {
            fetchBoard: {
              _id: "61bab53b717be5002baa75a6",
              __typename: "Board",
              likeCount: data?.likeBoard,
            },
          },
        });
      },
    });
  }
  return (
    <>
      <div>좋아요 갯수{data?.fetchBoard.likeCount}</div>
      <button onClick={onClickOptimisticUi}>좋아요 올리기!!</button>
    </>
  );
}
