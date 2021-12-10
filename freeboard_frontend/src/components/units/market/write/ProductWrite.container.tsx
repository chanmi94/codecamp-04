import { useMutation } from "@apollo/client";
import ProductWriteUI from "./ProductWrite.presenter";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./ProductWrite.queries";
import { useState, ChangeEvent, useEffect } from "react";
import { useRouter } from "next/router";
import { IMyUpdateUseditemInput } from "./ProductWrite.types";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

declare const window: typeof globalThis & {
  kakao: any;
};

export default function ProductWrite(props) {
  const router = useRouter();

  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  // const router = useRouter();
  const [myName, setMyName] = useState("");
  const [myRemarks, setMyRemarks] = useState("");
  const [myContents, setMyContents] = useState("");
  const [myPrice, setMyPrice] = useState("");

  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);

  function onChangeMyName(event: ChangeEvent<HTMLInputElement>) {
    setMyName(event.target.value);

    if (
      event.target.value !== "" &&
      myName !== "" &&
      myRemarks !== "" &&
      myContents !== "" &&
      myPrice !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeMyRemarks(event: ChangeEvent<HTMLInputElement>) {
    setMyRemarks(event.target.value);

    if (
      event.target.value !== "" &&
      myName !== "" &&
      myRemarks !== "" &&
      myContents !== "" &&
      myPrice !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeMyContents(event: ChangeEvent<HTMLInputElement>) {
    setMyContents(event.target.value);

    if (
      event.target.value !== "" &&
      myName !== "" &&
      myRemarks !== "" &&
      myContents !== "" &&
      myPrice !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeMyPrice(event: ChangeEvent<HTMLInputElement>) {
    setMyPrice(event.target.value);

    if (
      event.target.value !== "" &&
      myName !== "" &&
      myRemarks !== "" &&
      myContents !== "" &&
      myPrice !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeFileUrls(fileUrl: string, index: number) {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  }

  useEffect(() => {
    if (props.data?.fetchUseditem.images?.length) {
      setFileUrls([...props.data?.fetchUseditem.images]);
    }
  }, [props.data]);

  async function onClickSubmit(event) {
    const result = await createUseditem({
      variables: {
        createUseditemInput: {
          name: myName,
          remarks: myRemarks,
          contents: myContents,
          price: Number(myPrice),
          images: fileUrls,
        },
      },
    });
    router.push(`/market`);
  }

  async function onClickUpdate() {
    const myUpdateUseditemInput = {
      name: myName,
      remarks: myRemarks,
      contents: myContents,
      price: Number(myPrice),
      images: fileUrls,
    };

    try {
      await updateUseditem({
        variables: {
          useditemId: router.query.useditemId,

          updateUseditemInput: myUpdateUseditemInput,
        },
      });
      router.push(`/market/${router.query.useditemId}`);
    } catch (error) {
      alert("오류다");
    }
  }

  function handleChange(value: string) {
    console.log(value);
  }

  useEffect(() => {
    const script = document.createElement("script"); // <script></script>
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=593bb17803d800ca368cf511e3bcea13"; // 쿼리 스트링(물음표 뒤에다가 적어주는것 키=값)
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(
            37.48488609990317,
            126.89664918104833
          ),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);

        // 마커가 표시될 위치입니다
        // const markerPosition = new window.kakao.maps.LatLng(
        //   37.48488609990317,
        //   126.89664918104833
        // );

        // // 마커를 생성합니다
        // const marker = new window.kakao.maps.Marker({
        //   position: markerPosition,
        // });

        // // 마커가 지도 위에 표시되도록 설정합니다
        // marker.setMap(map);
        // 지도를 클릭한 위치에 표출할 마커입니다
        const marker = new window.kakao.maps.Marker({
          // 지도 중심좌표에 마커를 생성합니다
          position: map.getCenter(),
        });
        // 지도에 마커를 표시합니다
        marker.setMap(map);

        // 지도에 클릭 이벤트를 등록합니다
        // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent) {
            // 클릭한 위도, 경도 정보를 가져옵니다
            const latlng = mouseEvent.latLng;

            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);

            // const message =
            //   "클릭한 위치의 위도는 " + latlng.getLat() + " 이고, ";
            // message += "경도는 " + latlng.getLng() + " 입니다";

            // const resultDiv = document.getElementById("clickLatlng");
            // resultDiv.innerHTML = message;
          }
        );
      });
    };
  }, []);

  return (
    <ProductWriteUI
      onChangeMyName={onChangeMyName}
      onChangeMyRemarks={onChangeMyRemarks}
      onChangeMyContents={onChangeMyContents}
      onChangeMyPrice={onChangeMyPrice}
      onChangeFileUrls={onChangeFileUrls}
      fileUrls={fileUrls}
      onClickSubmit={onClickSubmit}
      data={props.data}
      isEdit={props.isEdit}
      isOpen={isOpen}
      onClickUpdate={onClickUpdate}
      handleChange={handleChange}
    />
  );
}
