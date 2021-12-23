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

import SearchAddr from "../../../commons/address/SearchAddr.container";
import KakaoMap from "../../../commons/kakaomap/map.container";
import { IProductWriteUIProps } from "./ProductWrite.types";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function ProductWriteUI(props: IProductWriteUIProps) {
  useEffect(() => {
    const script = document.createElement("script"); // <script></script>
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=24fb8341979c5189c9b0cafe2eb7e586&libraries=services";
    document.head.appendChild(script); // head에 script를 넣음

    // https://apis.map.kakao.com/web/documentation/#load
    // query string: 위 사이트에서 autoload=false를 넣으라고 했는데 뒤에 appkey도 넣어야 하기에 중간에 &을 넣어 합쳐준다.

    // script가 로드 된 후 실행
    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(37.48481, 126.89663), // 지도의 중심좌표.
          level: 5, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new window.kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(
          // `구로구`,
          `${props.myAddress}`,
          function (result: any, status: any) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              // 결과값으로 받은 위치를 마커로 표시합니다
              const marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });

              // 인포윈도우로 장소에 대한 설명을 표시합니다
              const infowindow = new window.kakao.maps.InfoWindow({
                content:
                  '<div style="width:150px;text-align:center;padding:6px 0;">직거래 장소</div>',
              });
              infowindow.open(map, marker);

              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              map.setCenter(coords);
            }
          }
        );
      });
    };
  }, [props.myAddress]);

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
          <button onClick={props.onToggleModal}>우편번호 검색</button>
          <div>
            {props.isOpen && (
              <Modal
                title="우편번호 검색"
                visible={true}
                onOk={props.onToggleModal}
                onCancel={props.onToggleModal}
                // style={{ backgroundColor: "yellow" }}
              >
                <DaumPostcode onComplete={props.handleComplete} />
              </Modal>
            )}
            <div id="map" style={{ width: "500px", height: "400px" }}></div>
          </div>
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
