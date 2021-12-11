import {
  Contents,
  InputWrapper,
  Label,
  OptionWrapper,
  RadioButton,
  RadioLabel,
  Title,
  Price,
  Wrapper,
  Product,
  WriterWrapper,
  Summary,
  Error,
  ImageWrapper,
} from "./ProductWrite.styles";
import { Modal, Radio, Upload } from "antd";
import { useEffect, useState } from "react";
import DaumPostcode from "react-daum-postcode";
import { v4 as uuidv4 } from "uuid";
import Dompurify from "dompurify";
import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
import dynamic from "next/dynamic";
import Head from "next/head";
import Address from "../../../commons/address/address.container";

declare const window: typeof globalThis & {
  kakao: any;
};

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
export default function ProductWriteUI(props) {
  return (
    <>
      <Wrapper>
        <Title>{props.isEdit ? "상품 수정" : "상품 등록"}</Title>
        <WriterWrapper>
          <InputWrapper>
            <Label>상품명</Label>
            <Product
              type="text"
              placeholder="상품명을 적어주세요."
              onChange={props.onChangeMyName}
              defaultValue={props.data?.fetchUseditem?.name}
            />
          </InputWrapper>
        </WriterWrapper>
        <InputWrapper>
          <Label>한줄요약</Label>
          <Summary
            type="text"
            placeholder="상품을 한줄요약해주세요."
            onChange={props.onChangeMyRemarks}
            defaultValue={props.data?.fetchUseditem?.remarks}
          />
        </InputWrapper>
        <InputWrapper>
          <Label>상품설명</Label>
          <Contents
            placeholder="상품을 설명해주세요."
            onChange={props.onChangeMyContents}
            defaultValue={props.data?.fetchUseditem?.contents}
          />
          {/* <Contents>
            <ReactQuill
              onChange={props.handleChange}
              defaultValue={props.data?.fetchUseditem?.contents}
            />
          </Contents> */}
        </InputWrapper>
        <InputWrapper>
          <Label>판매가격</Label>
          <Price
            type="number"
            placeholder="판매가격을 입력해주세요."
            name="price"
            onChange={props.onChangeMyPrice}
            defaultValue={Number(props.data?.fetchUseditem?.price)}
          />
        </InputWrapper>
        <InputWrapper>
          {/* <Label>거래위치</Label>
          <div id="map" style={{ width: "500px", height: "400px" }}></div> */}
        </InputWrapper>
        <ImageWrapper>
          <Label>사진첨부</Label>
          {props.fileUrls.map((el, index) => (
            <Uploads01
              key={uuidv4()}
              index={index}
              fileUrl={el}
              defaultFileUrl={props.data?.fetchUseditem.images?.[index]}
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
        {/* <ButtonWrapper>
          <SubmitButton> */}
        <div>
          {props.isEdit && (
            <button onClick={props.onClickUpdate}>수정하기</button>
          )}
          {!props.isEdit && (
            <button onClick={props.onClickSubmit}>등록하기</button>
          )}
        </div>
        {/* </SubmitButton>
        </ButtonWrapper> */}
      </Wrapper>
    </>
  );
}
