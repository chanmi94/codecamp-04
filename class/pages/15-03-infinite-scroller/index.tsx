import { gql, useQuery } from "@apollo/client";
import InfiniteScroll from "react-infinite-scroller";
import styled from "@emotion/styled";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../src/commons/types/generated/types";
export const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;
const Wrapper = styled.div`
  height: 700px;
  overflow: auto;
`;
export default function InfiniteScrollerPage() {
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardArgs
  >(FETCH_BOARDS);

  function onLoadMore() {
    if (!data) return; //데이터가 없으면 리턴

    fetchMore({
      variables: { page: Math.ceil(data?.fetchBoards.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchBoards)
          return { fetchBoards: [...prev.fetchBoards] };

        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult?.fetchBoards],
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
        {data?.fetchBoards.map((el) => (
          <div key={el._id}>
            <span>작성자: {el.writer}</span>
            <span>제목: {el.title}</span>
            <span>내용: {el.contents}</span>
          </div>
        ))}
      </InfiniteScroll>
    </Wrapper>
  );
}
