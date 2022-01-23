import { Button } from "antd";
import Head from "next/head"; //head를 사용하기위하여 해줘야함
import { useState } from "react";
import { Wrapper } from "./Mypoint.styles";

export default function MypointUI(props: any) {
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <Wrapper>
        <div>
          <select
            id="amount-select"
            onChange={props.onClickSelectPoint}
            value={props.SelectedPoint}
          >
            <option value="">--충전할 금액을 선택해주세요--</option>

            {props.selectList.map((el: any) => (
              <option key={el} value={el}>
                {el}포인트
              </option>
            ))}
          </select>
          <Button onClick={props.onClickPayment}>충전하기</Button>
          <br />
          나의 포인트 : {props.data?.fetchUserLoggedIn.userPoint.amount}원{" "}
        </div>
      </Wrapper>
    </>
  );
}
