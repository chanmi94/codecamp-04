import ProductDetail from "../../../src/components/units/market/detail/ProductDetail.container";
import MarketCommentWrite from "../../../src/components/units/marketComment/write/MarketCommentWrite.container";
import MarketCommentList from "../../../src/components/units/marketComment/list/MarketCommentList.container";
export default function ProductDetailUI() {
  return (
    <>
      <ProductDetail />
      <MarketCommentWrite />
      <MarketCommentList />
    </>
  );
}
