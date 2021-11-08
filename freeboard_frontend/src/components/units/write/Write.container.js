  import BoardWriteUI from './Write.presenter';
  import { useState } from 'react'
  import { useMutation } from "@apollo/client";
  import { useRouter } from 'next/router'
  import { CREATE_BOARD } from "./Write.queries"
  
  export default function BoardWrite() {
    const [myQqq, setMyQqq] =useState(false)
    const router = useRouter()
    const [myWriter, setMyWriter] = useState("");
    const [myPassword, setMyPassword] = useState("");
    const [myTitle, setMyTitle] = useState("");
    const [myContents, setMyContents] = useState("");
  
    const [myWriterError, setMyWriterError] = useState("");
    const [myPasswordError, setMyPasswordError] = useState("");
    const [myTitleError, setMyTitleError] = useState("");
    const [myContentsError, setMyContentsError] = useState("");
  
    const [createBoard] = useMutation(CREATE_BOARD);
  
    function onChangeMyWriter(event) {
      setMyWriter(event.target.value);
      if(event.target.value !=="" && myTitle !=="" && myContents!==""){
        setMyQqq(true) 
        setMyWriterError("");
      }
      else {
        setMyQqq(false)
      }
    }
  
    function onChangeMyPassword(event) {
      setMyPassword(event.target.value);
      if (event.target.value !== "") {
        setMyPasswordError("");
      }else {
        setMyQqq(false)
      }
    }
  
    function onChangeMyTitle(event) {
      setMyTitle(event.target.value);
      if(myWriter !=="" && event.target.value !=="" && myContents!==""){
        setMyQqq(true)
      }else {
        setMyQqq(false)
      }
    }
  
    function onChangeMyContents(event) {
      setMyContents(event.target.value);
      if(myWriter !=="" && myTitle !=="" && event.target.value!==""){
        setMyQqq(true)
      }else {
        setMyQqq(false)
      }
    }
  
    async function onClickSubmit() {
      if (myWriter === "") {
        setMyWriterError("작성자를 입력해주세요.");
      }
      if (myPassword === "") {
        setMyPasswordError("비밀번호를 입력해주세요.");
      }
      if (myTitle === "") {
        setMyTitleError("제목을 입력해주세요.");
      }
      if (myContents === "") {
        setMyContentsError("내용을 입력해주세요.");
      }
      if (myWriter !== "" && myPassword !== "" && myTitle !== "" && myContents !== "") {
        const result = await createBoard({ 
          variables: { 
            createBoardInput: { 
              writer: myWriter,
              password: myPassword,
              title: myTitle,
              contents: myContents
            }
          }
        });
        router.push(`/boards/${result.data.createBoard._id}`)
      }
    }
    return(
      <BoardWriteUI aaa={onChangeMyWriter}
       bbb={onChangeMyPassword}
       ccc={onChangeMyTitle}
       ddd={onChangeMyContents}
       myWriterError={myWriterError}
       myPasswordError={myPasswordError}
       myTitleError={myTitleError}
       myContentsError={myContentsError}
       qqq={myQqq}
       onClickSubmit={onClickSubmit}
       />
      )
    }