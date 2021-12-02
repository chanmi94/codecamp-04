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
        <SubmitButton onClick={props.onClickSubmit}>등록하기</SubmitButton>
      </Wrapper>
    </>
  );
}
