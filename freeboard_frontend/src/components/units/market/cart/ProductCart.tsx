import { useEffect, useState } from "react";
import { IUseditem } from "../../../../commons/types/generated/types";
import { Wrapper, Card, Image, Title } from "./ProductCart.style";
export default function BasketLoggedInPage() {
  const [basketItems, setBasketItems] = useState([]);

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
    setBasketItems(baskets);
  }, []);

  return (
    <>
      <Title>장바구니 목록</Title>
      <Wrapper>
        {basketItems.map((el: IUseditem, index) => (
          <Card key={el._id}>
            <Image src={`https://storage.googleapis.com/${el.images?.[0]}`} />
            <span>상품명: {el.name}</span>

            <span>가격: {el.price}</span>
          </Card>
        ))}
      </Wrapper>
    </>
  );
}
