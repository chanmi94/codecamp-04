import { ChangeEventHandler, MouseEventHandler } from "react";
import { IQuery } from "./../../../../../../class/src/commons/types/generated/types.d";
export interface IMyProfileUiProps {
  onClickUpdateUserName: MouseEventHandler<HTMLElement> | undefined;
  onChangeName: ChangeEventHandler<HTMLInputElement> | undefined;
  onClickResetPassword: MouseEventHandler<HTMLElement> | undefined;
  onChangeCheckPassword: ChangeEventHandler<HTMLInputElement> | undefined;
  onChangePassword: ChangeEventHandler<HTMLInputElement> | undefined;
}
