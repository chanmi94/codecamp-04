import ProductWrite from "../../../src/components/units/market/write/ProductWrite.container";
import { withAuth } from "../../../src/components/commons/hocs/withAuth";
function ProductNewPage() {
  return <ProductWrite setPropsAddress={undefined} />;
}
export default withAuth(ProductNewPage);
