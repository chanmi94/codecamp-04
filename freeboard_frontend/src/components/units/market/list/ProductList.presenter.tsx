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
import Searchbars01 from "../../../commons/searchbars/01/Searchbars01.container";
import { v4 as uuidv4 } from "uuid";
import InfiniteScroll from "react-infinite-scroller";
export default function BoardListUI(props) {
  return (
    <Wrapper>
      {/* <Searchbars01
        refetch={props.refetch}
        // refetchItemsCount={props.refetchItemsCount}
        onChangeKeyword={props.onChangeKeyword}
      />   */}
      <Button onClick={props.onClickMoveToBProductNew}>
        <PencilIcon src="/images/board/list/write.png" />
        상품 등록하기
      </Button>
      <TableTop />
      <InfiniteScroll
        pageStart={0}
        loadMore={props.onLoadMore}
        hasMore={true}
        useWindow={false}
      >
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
              <Image src={`https://storage.googleapis.com/${el.images?.[0]}`} />
            </ColumnBasic>
            <ColumnBasic> {el.price}</ColumnBasic>
            <Button onClick={props.onclickBasket(el)}>장바구니담기</Button>
            {/* <ColumnBasic>{getDate(el.createdAt)}</ColumnBasic> */}
          </Row>
        ))}
      </InfiniteScroll>
      <TableBottom />
      <Footer></Footer>
    </Wrapper>
  );
}
