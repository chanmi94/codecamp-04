import {
  FireFilledIcon,
  Searchbar,
  SearchbarInput,
} from "./Searchbars02.styles";
import { ISearchbars02UIProps } from "./Searchbars02.types";

export default function Searchbars02UI(props: ISearchbars02UIProps) {
  return (
    <Searchbar>
      <FireFilledIcon />
      <SearchbarInput
        placeholder="검색어를 입력해 주세요."
        onChange={props.onChangeSearchbar}
      />
    </Searchbar>
  );
}
