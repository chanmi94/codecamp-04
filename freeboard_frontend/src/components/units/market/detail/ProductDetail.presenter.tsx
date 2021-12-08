import { Tooltip } from "antd";
import {
  ButtonWrapper,
  Contents,
  ImageWrapper,
  InputWrapper,
  Label,
  OptionWrapper,
  RadioButton,
  RadioLabel,
  SearchButton,
  SubmitButton,
  Price,
  Wrapper,
  Product,
  WriterWrapper,
  Summary,
  Error,
  Image,
  Button,
  BottomWrapper,
} from "./ProductDetail.styles";
import { v4 as uuidv4 } from "uuid";
import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
import { IUseditem } from "../../../../commons/types/generated/types";

import Dompurify from "dompurify";
const ProductDetailUI = (props) => {
  return (
    <Wrapper>
      <WriterWrapper>
        <InputWrapper>
          <Label>상품명</Label>
          <Product>{props.data?.fetchUseditem.name}</Product>
        </InputWrapper>
      </WriterWrapper>
      <InputWrapper>
        <Label>한줄요약</Label>
        <Summary>{props.data?.fetchUseditem.remarks}</Summary>
      </InputWrapper>
      <InputWrapper>
        <Label>상품설명</Label>
        {process.browser ? (
          <Contents
            dangerouslySetInnerHTML={{
              __html: Dompurify.sanitize(
                String(props.data?.fetchUseditem.contents)
              ),
            }}
          />
        ) : (
          <Contents />
        )}
        {/* <Contents>{props.data?.fetchUseditem.contents}</Contents> */}
      </InputWrapper>
      <InputWrapper>
        <Label>판매가격</Label>
        <Price>{props.data?.fetchUseditem.price}</Price>
      </InputWrapper>
      <ImageWrapper>
        <Label>사진첨부</Label>
        {props.data?.fetchUseditem.images
          ?.filter((el: string) => el)
          .map((el: string) => (
            <Image key={el} src={`https://storage.googleapis.com/${el}`} />
          ))}
      </ImageWrapper>
      <OptionWrapper>
        <Label>메인설정</Label>
        <RadioButton type="radio" id="youtube" name="radio-button" />
        <RadioLabel htmlFor="youtube">사진1</RadioLabel>
        <RadioButton type="radio" id="image" name="radio-button" />
        <RadioLabel htmlFor="image">사진2</RadioLabel>
      </OptionWrapper>
      <BottomWrapper>
        <Button onClick={props.onClickMoveBuy}>구매하기</Button>
        <Button onClick={props.onClickMoveToList}>목록으로</Button>
        <Button onClick={props.onClickMoveToUpdate}>수정하기</Button>
        <Button onClick={props.onClickDelete}>삭제하기</Button>
      </BottomWrapper>
    </Wrapper>
  );
};

export default ProductDetailUI;
