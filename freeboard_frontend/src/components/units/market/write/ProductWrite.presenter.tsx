import {
  Address,
  ButtonWrapper,
  Contents,
  ImageWrapper,
  InputWrapper,
  Label,
  OptionWrapper,
  Password,
  RadioButton,
  RadioLabel,
  SearchButton,
  Subject,
  SubmitButton,
  Title,
  Price,
  Wrapper,
  Product,
  WriterWrapper,
  Summary,
  Youtube,
  Zipcode,
  ZipcodeWrapper,
  UploadButton,
  Error,
} from "./ProductWrite.styles";
import { v4 as uuidv4 } from "uuid";
import Uploads01 from "../../../commons/uploads/01/Uploads01.container";

export default function ProductWriteUI(props) {
  return (
    <>
      <Wrapper>
        <WriterWrapper>
          <InputWrapper>
            <Label>상품명</Label>
            <Product
              type="text"
              placeholder="상품명을 적어주세요."
              onChange={props.onChangeMyName}
            />
          </InputWrapper>
        </WriterWrapper>
        <InputWrapper>
          <Label>한줄요약</Label>
          <Summary
            type="text"
            placeholder="상품을 한줄요약해주세요."
            onChange={props.onChangeMyRemarks}
          />
        </InputWrapper>
        <InputWrapper>
          <Label>상품설명</Label>
          <Contents
            placeholder="상품을 설명해주세요."
            onChange={props.onChangeMyContents}
          />
        </InputWrapper>
        <InputWrapper>
          <Label>판매가격</Label>
          <Price
            type="text"
            placeholder="판매가격을 입력해주세요."
            name="price"
            onChange={props.onChangeMyPrice}
          />
        </InputWrapper>
        <ImageWrapper>
          <Label>사진첨부</Label>
          {props.fileUrls.map((el, index) => (
            <Uploads01
              key={uuidv4()}
              index={index}
              fileUrl={el}
              defaultFileUrl={props.data?.fetchBoard.images?.[index]}
              onChangeFileUrls={props.onChangeFileUrls}
            />
          ))}
        </ImageWrapper>
        <OptionWrapper>
          <Label>메인설정</Label>
          <RadioButton type="radio" id="youtube" name="radio-button" />
          <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
          <RadioButton type="radio" id="image" name="radio-button" />
          <RadioLabel htmlFor="image">사진</RadioLabel>
        </OptionWrapper>
        <SubmitButton onClick={props.onClickSubmit}>등록하기</SubmitButton>
      </Wrapper>
    </>
  );
}
