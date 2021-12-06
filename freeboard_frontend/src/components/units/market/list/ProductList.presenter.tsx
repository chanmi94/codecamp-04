import { getDate } from "../../../../commons/libraries/utils";
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
  TextToken,
  ImageWrapper,
  Image,
} from "./ProductList.styles";
import Paginations01 from "../../../commons/paginations/01/Paginations01.container";
import Searchbars01 from "../../../commons/searchbars/01/Searchbars01.container";
import { v4 as uuidv4 } from "uuid";

export default function BoardListUI(props) {
  return (
    <Wrapper>
      <TableTop />
      <Row>
        <ColumnHeaderBasic>번호</ColumnHeaderBasic>
        <ColumnHeaderTitle>제목</ColumnHeaderTitle>
        <ColumnHeaderBasic>작성자</ColumnHeaderBasic>
        <ColumnHeaderBasic>날짜</ColumnHeaderBasic>
      </Row>
      {props.data?.fetchUseditems.map((el, index) => (
        <Row key={el._id}>
          <ColumnBasic>{index + 1}</ColumnBasic>
          <ColumnTitle id={el._id} onClick={props.onClickMoveToProductDetail}>
            {el.name
              .replaceAll(props.keyword, `@#$%${props.keyword}@#$%`)
              .split("@#$%")
              .map((el) => (
                <TextToken key={uuidv4()} isMatched={props.keyword === el}>
                  {el}
                </TextToken>
              ))}
          </ColumnTitle>
          <ColumnBasic>
            {props.data?.fetchUseditems.images
              ?.filter((el: string) => el)
              .map((el: string) => (
                <Image key={el} src={`https://storage.googleapis.com/${el}`} />
              ))}
          </ColumnBasic>
          <ColumnBasic> {el.price}</ColumnBasic>
          {/* <ColumnBasic>{getDate(el.createdAt)}</ColumnBasic> */}
        </Row>
      ))}

      <TableBottom />
      <Footer>
        <Paginations01
          refetch={props.refetch}
          count={props.count}
          startPage={props.startPage}
          setStartPage={props.setStartPage}
        />
        <Button onClick={props.onClickMoveToBProductNew}>
          <PencilIcon src="/images/board/list/write.png" />
          상품 등록하기
        </Button>
      </Footer>
    </Wrapper>
  );
}
