import { ChangeEvent, MouseEvent } from "react";
export interface ILoginPageUI {
  onChangeMyEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeMyPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onCliCKLogin: () => void;
}
