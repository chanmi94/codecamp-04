import { useMutation } from "@apollo/client";
import ProductWriteUI from "./ProductWrite.presenter";
import { CREATE_USED_ITEM } from "./ProductWrite.queries";
import { useState, ChangeEvent, useEffect } from "react";
import {
  IMutation,
  IMutationCreateUseditemArgs,
} from "../../../../commons/types/generated/types";

export default function ProductWrite(props) {
  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  // const router = useRouter();
  const [myName, setMyName] = useState("");
  const [myRemarks, setMyRemarks] = useState("");
  const [myContents, setMyContents] = useState("");
  const [myPrice, setMyPrice] = useState("");

  const [createUseditem] = useMutation(CREATE_USED_ITEM);

  function onChangeMyName(event: ChangeEvent<HTMLInputElement>) {
    setMyName(event.target.value);
  }

  function onChangeMyRemarks(event: ChangeEvent<HTMLInputElement>) {
    setMyRemarks(event.target.value);
  }

  function onChangeMyContents(event: ChangeEvent<HTMLInputElement>) {
    setMyContents(event.target.value);
  }

  function onChangeMyPrice(event: ChangeEvent<HTMLInputElement>) {
    setMyPrice(event.target.value);
  }

  function onChangeFileUrls(fileUrl: string, index: number) {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  }

  useEffect(() => {
    if (props.data?.fetchBoard.images?.length) {
      setFileUrls([...props.data?.fetchBoard.images]);
    }
  }, [props.data]);

  async function onClickSubmit() {
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
    console.log(result);
  }

  return (
    <ProductWriteUI
      onChangeMyName={onChangeMyName}
      onChangeMyRemarks={onChangeMyRemarks}
      onChangeMyContents={onChangeMyContents}
      onChangeMyPrice={onChangeMyPrice}
      onChangeFileUrls={onChangeFileUrls}
      fileUrls={fileUrls}
      onClickSubmit={onClickSubmit}
    />
  );
}
