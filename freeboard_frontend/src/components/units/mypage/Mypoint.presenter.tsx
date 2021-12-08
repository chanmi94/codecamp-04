import Head from "next/head"; //head를 사용하기위하여 해줘야함
import { Wrapper } from "./Mypoint.styles";

export default function MypointUI(props) {
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
          나의 포인트 : {props.data?.fetchUserLoggedIn.userPoint.amount}
        </div>
        <button onClick={props.onClickPayment}>충전하기</button>
      </Wrapper>
    </>
  );
}
