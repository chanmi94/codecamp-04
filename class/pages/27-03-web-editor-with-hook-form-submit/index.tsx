import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
// import ReactQuill from "react-quill";   <- 애가 dynamic import임
import "react-quill/dist/quill.snow.css";
//react를 next에서 쓰기위해
import dynamic from "next/dynamic";
import { IMutation } from "../../src/commons/types/generated/types";
import { useRouter } from "next/router";
import { Modal } from "antd";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

interface FormValues {
  writer: string;
  password: string;
  title: string;
  contents: string;
}

export default function WebEditorReactHookFormSubmitPage() {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);
  const { handleSubmit, register, setValue, trigger } = useForm({
    mode: "onChange",
  });
  function handleChange(value: string) {
    console.log(value);

    //register로 등록하지 않고, 강제로 값을 넣어주는 기능 !!
    setValue("contents", value === "<p><br></p>" ? "" : value);
    //onChange 됐는지 안됐는지 react-hook-form에 알려주는 기능 !!
    trigger("contents");
  }

  async function onClickSubmit(data: FormValues) {
    //createBoard Mutation 요청!!
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
          },
        },
      });
      console.log(result);
      router.push(`27-04-web-editor-detail/${result.data?.createBoard._id}`);
    } catch (error) {
      Modal.error(error.message);
    }
  }
  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자:
      <input type="text" {...register("writer")} />
      <br />
      비밀번호:
      <input type="password" {...register("password")} />
      <br />
      제목:
      <input type="text" {...register("title")} />
      <br />
      내용:
      <ReactQuill onChange={handleChange} />
      <br />
      <button>등록하기</button>
    </form>
  );
}
