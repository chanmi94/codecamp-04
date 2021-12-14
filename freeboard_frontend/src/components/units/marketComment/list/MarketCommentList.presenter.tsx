// import BoardCommentListUIItem from "./BoardCommentList.presenterItem";

import InfiniteScroll from "react-infinite-scroller";
import { Wrapper } from "./MarketCommentList.styles";
import { useMutation, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_USED_ITEM_QUESTIONS } from "./MarketCommentList.queries";
import MarketCommentListUIItem from "./MarketCommentList.presenterItem";
export default function MarketCommentListUI(props) {
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USED_ITEM_QUESTIONS);

  function onLoadMore() {
    if (!data) return;
    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemQuestions.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditemQuestions)
          return { deleteUseditemQuestion: [...prev.fetchUseditemQuestions] };

        return {
          deleteUseditemQuestion: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult?.fetchUseditemQuestions,
          ],
        };
      },
    });
  }

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={onLoadMore}
      hasMore={true}
      useWindow={false}
    >
      <Wrapper>
        {props.data?.fetchUseditemQuestions.map((el) => (
          <MarketCommentListUIItem key={el._id} el={el} />
        ))}
      </Wrapper>
    </InfiniteScroll>
  );
}
