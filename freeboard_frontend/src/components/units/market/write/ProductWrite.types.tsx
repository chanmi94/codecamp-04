import { ChangeEvent, MouseEvent,Dispatch,SetStateAction } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IProductWriteProps {
  isEdit?: boolean;
  data?: any;
  setPropsAddress:any;
}

export interface IProductWriteUIProps {
  // myWriterError: string;
  // myPasswordError: string;
  // myTitleError: string;
  // myContentsError: string;
  onChangeMyName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeMyContents: (event: ChangeEvent<HTMLInputElement>) => void;
  // onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeMyRemarks: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeMyPrice: (event: ChangeEvent<HTMLInputElement>) => void;
  // setPropsAddress: any;
  onClickSubmit: () => void;
  onClickUpdate: () => void;
  onClickAddressSearch?: () => void;
  onCompleteAddressSearch?: (data: any) => void;
  onChangeFileUrls: (fileUrls: string, index: number) => void;
  isActive?: boolean;
  isEdit?: boolean;
  isOpen: boolean;
  data?: Pick<IQuery, "fetchUseditem">;
  zipcode?: string;
  address?: string;
  myAddress?: string;
  addressDetail?: string;
  fileUrls: string[];
  // setPropsAddress:string;
  setPropsAddress: Dispatch<SetStateAction<string>>
  
  // handleChange: (value: string) => void;
  // onToggleModal: () => void;
  // handleComplete: (data: any) => void;

