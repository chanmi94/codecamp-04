import { withAuth } from "../../src/components/commons/hocs/withAuth";
import MyMarket from "../../src/components/units/mypage/mymarket/mymarket.container";
import Mypoint from "../../src/components/units/mypage/Mypoint.container";

const PaymentPage = () => {
  return (
    <>
      <Mypoint />
      <MyMarket />
    </>
  );
};
export default withAuth(PaymentPage);
