import { Button } from "antd";
import {
  Wrapper,
  WrapperHeader,
  ProductMenu,
  BuyMenu,
  RowName,
  ColumnName,
  Row,
  Column,
  ColumnTitle,
  ColumnSoldOut,
  MenuWrapper,
  SearchWrapper,
  WishList,
  WrapperBody,
  BuyColumnTitle,
} from "./mymarket.styles";
import { FETCH_USED_ITEMS_I_BOUGHT } from "./mymarket.queries";
import { useQuery } from "@apollo/client";
export default function MyMarketUI(props: any) {
  const { data: buyData } = useQuery(FETCH_USED_ITEMS_I_BOUGHT);
  return (
    <>
      <Wrapper>
        <WrapperHeader>
          <MenuWrapper>
            <ProductMenu
              onClick={props.onClickMyProductList}
              isPickList={props.isPickList}
            >
              나의 상품
            </ProductMenu>
            <BuyMenu
              onClick={props.onClickMyPickList}
              isPickList={props.isPickList}
            >
              구매 목록
            </BuyMenu>
          </MenuWrapper>
        </WrapperHeader>
        {!props.isPickList ? (
          <WrapperBody>
            <RowName>
              <ColumnTitle>상품명</ColumnTitle>
              <ColumnSoldOut>판매여부</ColumnSoldOut>
              <ColumnName>판매가격</ColumnName>
              <ColumnName>날짜</ColumnName>
            </RowName>
            {props.data?.fetchUseditemsISold.map((el, index) => (
              <Row key={el._id}>
                <ColumnTitle>{el.name}</ColumnTitle>
                <ColumnSoldOut>{el?.buyer?.name && "판매완료"}</ColumnSoldOut>
                <Column>{el.price.toLocaleString("ko-KR")}원</Column>
                <Column>{el.createdAt.slice(0, 10)}</Column>
              </Row>
            ))}
          </WrapperBody>
        ) : (
          <WrapperBody>
            <RowName>
              <BuyColumnTitle>상품명</BuyColumnTitle>
              <ColumnName>구매가격</ColumnName>
              <ColumnName>판매자</ColumnName>
              <ColumnName>구매일자</ColumnName>
            </RowName>
            {buyData?.fetchUseditemsIBought?.map((el, index) => (
              <Row key={el._id}>
                <BuyColumnTitle>{el.name}</BuyColumnTitle>
                <Column>￦ {el.price.toLocaleString("ko-KR")}원</Column>
                <Column>{el.seller.name}</Column>
                <Column>{el.soldAt.slice(0, 10)}</Column>
              </Row>
            ))}
          </WrapperBody>
        )}
      </Wrapper>
    </>
  );
}
