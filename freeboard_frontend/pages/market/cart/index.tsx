import { useEffect, useState } from "react";
import { IUseditem } from "../../../src/commons/types/generated/types";

export default function BasketLoggedInPage() {
  const [basketItems, setBasketItems] = useState([]);

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
    setBasketItems(baskets);
  }, []);

  return (
    <>
      <h1>비회원으로 담은 나만의 장바구니!!</h1>
      {basketItems.map((el: IUseditem, index) => (
        <div key={el._id}>
          <span>{index + 1}</span>
          <span>{el.name}</span>
          <span>{el.price}</span>
        </div>
      ))}
    </>
  );
}
