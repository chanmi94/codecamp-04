import { useQuery } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../src/commons/types/generated/types";
import { gql } from "@apollo/client";

const FETCH_BOARDS = gql`
  query fetchBoards($search: String) {
    fetchBoards(search: $search) {
      _id
      writer
      title
    }
  }
`;

export default function SearchPage() {
  const [mySearch, setMysearch] = useState("");
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardArgs
  >(FETCH_BOARDS);
  function onchangeSearch(event: ChangeEvent<HTMLInputElement>) {
    setMysearch(event.target.value);
  }

  function onClickSearch() {
    //이아이는 검색어 찾아주는거

    //mySearch 키워드로 fetchBoards 요청하기!!
    refetch({ search: mySearch });
  }

  return (
    <>
      <h1>검색페이지!!!</h1>
      검색어 입력 : <input type="text" onChange={onchangeSearch} />
      <button onClick={onClickSearch}>검색</button>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ paddingRight: "50px" }}>{el.writer}</span>
          <span style={{ paddingRight: "50px" }}>{el.title}</span>
          <span style={{ paddingRight: "50px" }}>{el.createdAt}</span>
        </div>
      ))}
    </>
  );
}
