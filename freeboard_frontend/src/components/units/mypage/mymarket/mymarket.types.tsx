import { IQuery } from "../../../../commons/types/generated/types";

export interface IMyMarketUI {
  data?: Pick<IQuery, "fetchUseditemsISold">;
  isPickList?: any;
  onClickMyProductList: () => void;
  onClickMyPickList: () => void;
}
