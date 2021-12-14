import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      images
    }
  }
`;
export default function ImageUploadPreviewPage() {
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);
  const [myFile, setMyFile] = useState("");
  const [imageUrl, setImgUrl] = useState("");
  function onChangeFile(event) {
    const file = event.target.files[0];
    console.log(file);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      console.log(data.target.result);
      setImgUrl(data.target?.result);
      setMyFile(file);
    };
  }

  async function onClickSubmit() {
    let myImageUrl = "";
    //1.파일업로드
    if (myFile) {
      const result1 = await uploadFile({
        variables: {
          file: myFile,
        },
      });
      myImageUrl = result1.data?.uploadFile.url || "";
    }
    //2.업로드된 파일로 게시물등록
    const result2 = await createBoard({
      variables: {
        createBoardInput: {
          writer: "영희2",
          password: "1234",
          title: "안녕하세요~~",
          contents: "이미지업로드연습중이에요!",
          images: [myImageUrl],
        },
      },
    });
  }

  return (
    <>
      <img src={imageUrl} />
      <input type="file" onChange={onChangeFile} />
      <button onClick={onClickSubmit}>등록하기</button>
    </>
  );
}
