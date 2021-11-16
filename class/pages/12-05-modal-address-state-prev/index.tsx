import DaumPostcode from "react-daum-postcode";
import { useState } from "react";
import { Modal, Button } from "antd";

//https://www.npmjs.com/package/react-daum-postcode
//yarn add react-daum-postcode
export default function ModalAddressPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [myAddress, setMyAddress] = useState("");
  const [myZonecode, setMyZonecode] = useState("");
  const [myAddressDetail, setMyAddressDetail] = useState("");

  //onToggleModel 개념알기.
  const onToggleModel = () => {
    setIsModalVisible((prev) => !prev);
  };
  const handleComplete = (data: any) => {
    // console.log(data);
    setMyAddress(data.address);
    setMyZonecode(data.zonecode);
    setIsModalVisible((prev) => !prev);
  };

  return (
    <>
      <Button onClick={onToggleModel}>우편번호검색</Button>
      <div>
        내주소: {myAddress}
        {myAddressDetail}
      </div>
      <div>내우편번호: {myZonecode}</div>
      {isModalVisible && (
        <Modal visible={true} onOk={onToggleModel} onCancel={onToggleModel}>
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
