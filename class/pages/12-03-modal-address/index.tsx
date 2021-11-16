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
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };
  //onchange setMyAddressDetail 만들기
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleComplete = (data: any) => {
    // console.log(data);
    setMyAddress(data.address);
    setMyZonecode(data.zonecode);
    setIsModalVisible(false);
  };

  return (
    <>
      <Button onClick={showModal}>우편번호검색</Button>
      <div>
        내주소: {myAddress}
        {myAddressDetail}
      </div>
      <div>내우편번호: {myZonecode}</div>
      {isModalVisible && (
        <Modal visible={true} onOk={handleOk} onCancel={handleCancel}>
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
