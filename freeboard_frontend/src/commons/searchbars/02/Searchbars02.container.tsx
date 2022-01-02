import { ChangeEvent } from "react";
import Searchbars01UI from "./Searchbars02.presenter";
import { ISearchbars02Props } from "./Searchbars02.types";
import _ from "lodash";
import Searchbars02UI from "./Searchbars02.presenter";

export default function Searchbars02(props: ISearchbars02Props) {
  const getDebounce = _.debounce((data) => {
    props.refetch({ search: data });
    // props.refetchBoardsCount({ search: data });
    props.onChangeKeyword(data);
  }, 200);

  function onChangeSearchbar(event: ChangeEvent<HTMLInputElement>) {
    getDebounce(event.target.value);
  }

  return <Searchbars02UI onChangeSearchbar={onChangeSearchbar} />;
}
