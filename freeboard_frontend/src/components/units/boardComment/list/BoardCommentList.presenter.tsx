import BoardCommentListUIItem from "./BoardCommentList.presenterItem";
import { IBoardCommentListUIProps } from "./BoardCommentList.types";
import InfiniteScroll from "react-infinite-scroller";
import { Wrapper } from "./BoardCommentList.styles";
import { useMutation, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_BOARD_COMMENTS } from "./BoardCommentList.queries";
export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS);

  function onLoadMore() {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data?.fetchBoardComments.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchBoardComments)
          return { fetchBoardComments: [...prev.fetchBoardComments] };

        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult?.fetchBoardComments,
          ],
        };
      },
    });
  }

  return (
    <Wrapper>
      <InfiniteScroll
        pageStart={0}
        loadMore={onLoadMore}
        hasMore={true}
        useWindow={false}
      >
        {props.data?.fetchBoardComments.map((el) => (
          <BoardCommentListUIItem key={el._id} el={el} />
        ))}
      </InfiniteScroll>
    </Wrapper>
  );
}
