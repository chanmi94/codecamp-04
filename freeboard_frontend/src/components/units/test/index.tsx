import Head from "next/head";
import { useEffect } from "react";

//빨간줄 없애기~
declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapPage() {
  // useEffect(() => {
  //   const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
  //   const options = {
  //     //지도를 생성할 때 필요한 기본 옵션
  //     center: new window.kakao.maps.LatLng(
  //       37.48533582343564,
  //       126.90151946398382
  //     ), //지도의 중심좌표.
  //     level: 3, //지도의 레벨(확대, 축소 정도)
  //   };

  //   const map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
  // }, []);
  const mapContainer = document.getElementById("map"), // 지도를 표시할 div
    mapOption = {
      center: new daum.maps.LatLng(37.537187, 127.005476), // 지도의 중심좌표
      level: 5, // 지도의 확대 레벨
    };

  //지도를 미리 생성
  const map = new daum.maps.Map(mapContainer, mapOption);
  //주소-좌표 변환 객체를 생성
  const geocoder = new daum.maps.services.Geocoder();
  //마커를 미리 생성
  const marker = new daum.maps.Marker({
    position: new daum.maps.LatLng(37.537187, 127.005476),
    map: map,
  });
  function sample5_execDaumPostcode() {
    const daum.Postcode({
        oncomplete: function(data) {
            var addr = data.address; // 최종 주소 변수

            // 주소 정보를 해당 필드에 넣는다.
            document.getElementById("sample5_address").value = addr;
            // 주소로 상세 정보를 검색
            geocoder.addressSearch(data.address, function(results, status) {
                // 정상적으로 검색이 완료됐으면
                if (status === daum.maps.services.Status.OK) {

                  const result = results[0]; //첫번째 결과의 값을 활용

                    // 해당 주소에 대한 좌표를 받아서
                    const coords = new daum.maps.LatLng(result.y, result.x);
                    // 지도를 보여준다.
                    mapContainer.style.display = "block";
                    map.relayout();
                    // 지도 중심을 변경한다.
                    map.setCenter(coords);
                    // 마커를 결과값으로 받은 위치로 옮긴다.
                    marker.setPosition(coords)
                }
            });
        }
    }).open();
}

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=24fb8341979c5189c9b0cafe2eb7e586"
        ></script>
        <script
          type="text/javascript"
          src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
        ></script>
      </Head>

      <div id="map" style={{ width: "500px", height: "400px" }}></div>
    </>
  );
}
