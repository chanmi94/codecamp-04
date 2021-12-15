import { getDate } from "../../../../commons/libraries/utils";
import {
  Wrapper,
  Card,
  ProductCreateButton,
  PencilIcon,
  Product,
  Button,
  TextToken,
  Image,
  HeaderWrapper,
  SearchBox,
  SearchButton,
} from "./ProductList.styles";
import Searchbars01 from "../../../commons/searchbars/01/Searchbars01.container";
import { v4 as uuidv4 } from "uuid";
import InfiniteScroll from "react-infinite-scroller";
export default function BoardListUI(props) {
  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={props.onLoadMore}
      hasMore={true}
      useWindow={false}
    >
      <ProductCreateButton onClick={props.onClickMoveToBProductNew}>
        <PencilIcon src="/images/board/list/write.png" />
        상품 등록하기
      </ProductCreateButton>
      <HeaderWrapper>
        <SearchBox
          type="text"
          placeholder="제품을 검색해주세요"
          onChange={props.onChangeSearch}
        />
        <button onClick={props.onClickSearch} name="검색">
          검색
        </button>
      </HeaderWrapper>
      <Wrapper>
        {props.data?.fetchUseditems.map((el, index) => (
          <Card key={el._id}>
            {/* <div>{index + 1}</div> */}
            <Product id={el._id} onClick={props.onClickMoveToProductDetail}>
              <Image src={`https://storage.googleapis.com/${el.images?.[0]}`} />
              상품명:
              {el.name
                .replaceAll(props.keyword, `@#$%${props.keyword}@#$%`)
                .split("@#$%")
                .map((el) => (
                  <TextToken key={uuidv4()} isMatched={props.keyword === el}>
                    {el}
                  </TextToken>
                ))}{" "}
              <div>가격: {el.price}원</div>
            </Product>
            <Button onClick={props.onclickBasket(el)}>장바구니담기</Button>
          </Card>
        ))}
      </Wrapper>
    </InfiniteScroll>
  );
}
