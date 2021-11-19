import { getDate } from "../../../../commons/libraries/utils";
import { gql, useQuery } from "@apollo/client";
import { useState, MouseEvent } from "react";

import {
  FETCH_BOARDS,
  FETCH_BOARDS_COUNT,
} from "../../board/list/BoardList.queries";

import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";
import {
  Wrapper,
  TableTop,
  TableBottom,
  Row,
  ColumnHeaderBasic,
  ColumnHeaderTitle,
  ColumnBasic,
  ColumnTitle,
  Footer,
  PencilIcon,
  Button,
  PageNation,
  WriterWrapper,
  Column,
} from "./BoardList.styles";

export default function BoardListUI(props: any) {
  const [startPage, setStartPage] = useState(1);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, {
    variables: { page: startPage },
  });
  const { data: dataBoardsCount } =
    useQuery<Pick<IQuery, "fetchBoardsCount">>(FETCH_BOARDS_COUNT);
  //있을 때만 나오게~
  const lastPage =
    (dataBoardsCount && Math.ceil(dataBoardsCount?.fetchBoardsCount / 10)) || 0;
  function onClickPage(event: MouseEvent<HTMLSpanElement>) {
    if (event.target instanceof Element)
      refetch({ page: Number(event.target.id) });
  }

  function onClickNextPage() {
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
  }
  function onClickPrevPage() {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
  }

  return (
    <Wrapper>
      {props.data2?.fetchBoardsOfTheBest.map((el, index) => (
        <WriterWrapper>
          <Column>{index + 1}</Column>
          <Column>{el?.writer}</Column>
          <Column>{el?.title}</Column>
          <Column>{el?.createdAt}</Column>
        </WriterWrapper>
      ))}
      <TableTop />
      <Row>
        <ColumnHeaderBasic>번호</ColumnHeaderBasic>
        <ColumnHeaderTitle>제목</ColumnHeaderTitle>
        <ColumnHeaderBasic>작성자</ColumnHeaderBasic>
        <ColumnHeaderBasic>날짜</ColumnHeaderBasic>
      </Row>
      <TableBottom />
      {data?.fetchBoards?.map((el, index) => (
        <Row key={el._id}>
          <ColumnBasic>{index + 1}</ColumnBasic>
          <ColumnTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>
            {el.title}
          </ColumnTitle>
          <ColumnBasic>{el.writer}</ColumnBasic>
          <ColumnBasic>{getDate(el.createdAt)}</ColumnBasic>
        </Row>
      ))}
      <PageNation>
        <span onClick={onClickPrevPage}>이전</span>
        {new Array(10).fill(1).map(
          (_, index) =>
            startPage + index <= lastPage && (
              <span
                key={startPage + index}
                onClick={onClickPage}
                id={String(startPage + index)}
                style={{ margin: "10px", cursor: "pointer" }}
              >
                {startPage + index}
              </span>
            )
        )}
        <span onClick={onClickNextPage}>다음</span>
      </PageNation>
      <Footer>
        <Button onClick={props.onClickMoveToBoardNew}>
          <PencilIcon src="/images/board/list/write.png" />
          게시물 등록하기
        </Button>
      </Footer>
    </Wrapper>
  );
}
