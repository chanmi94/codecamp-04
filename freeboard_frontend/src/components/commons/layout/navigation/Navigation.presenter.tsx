import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { MenuItem, Wrapper } from "./Navigation.styles";
import { ILayoutNavigationUIProps } from "./Navigation.types";

export default function NavigationUI(props: ILayoutNavigationUIProps) {
  return (
    <Wrapper>
      <MenuItem id="/boards" onClick={props.onClickMenu}>
        자유게시판
      </MenuItem>
      <>|</>
      <MenuItem id="/market" onClick={props.onClickMenu}>
        상품게시판
      </MenuItem>
      <>|</>
      <MenuItem id="/mypages" onClick={props.onClickMenu}>
        마이페이지
      </MenuItem>
      <>|</>
      <MenuItem id="/openapi" onClick={props.onClickMenu}>
        강아쥐
      </MenuItem>
      <>|</>
      <MenuItem id="/market/cart" onClick={props.onClickMenu}>
        장바구니
      </MenuItem>
    </Wrapper>
  );
}

//style={{ color: "black", fontSize: "29px" }}
