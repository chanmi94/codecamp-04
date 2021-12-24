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

import { IProductWriteUIProps } from "./ProductWrite.types";
import MapPage from "../../../commons/map/Map.container";

export default function ProductWriteUI(props: IProductWriteUIProps) {
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
          <Label>거래장소</Label>
          <MapPage setPropsAddress={props.setPropsAddress} />
        </InputWrapper>
        <ImageWrapper>
          <Label>사진첨부</Label>
          {props.fileUrls.map((el: string, index: number) => (
            <Uploads01
              key={uuidv4()}
              index={index}
              fileUrl={el}
              defaultFileUrl={props.data?.fetchUseditem.images?.[index]}
              onChangeFileUrls={props.onChangeFileUrls}
            />
          ))}
        </ImageWrapper>

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
