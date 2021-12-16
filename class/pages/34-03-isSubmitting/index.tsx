import { ChangeEvent, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;
const inputsInit = {
  writer: "",
  password: "",
  title: "",
  contents: "",
};

export default function IsSubmittingPage() {
  const [inputs, setInputs] = useState(inputsInit);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeInput =
    (name: string) => (event: ChangeEvent<HTMLInputElement>) => {
      setInputs((prev) => ({
        ...prev,

        [name]: event.target.value,
      }));
    };

  async function onClickSubmit() {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            ...inputs,
          },
        },
      });
      console.log(result);
      Modal.confirm({ content: "등록에성공하셨씁니다." });
      //result.push로 다이나믹 라우팅 =>result.data.createBoard._id
    } catch (error) {
      Modal.error({ content: error.message });
    }
  }

  return (
    <>
      작성자: <input type="text" onChange={onChangeInput("writer")} />
      <br />
      비밀번호: <input type="password" onChange={onChangeInput("password")} />
      <br />
      제목: <input type="text" onChange={onChangeInput("title")} />
      <br />
      내용: <input type="text" onChange={onChangeInput("contents")} />
      <button onClick={onClickSubmit}>등록</button>
      <br />
    </>
  );
}
