  import BoardWriteUI from './Write.presenter';
  import { useState } from 'react'
  import { useMutation } from "@apollo/client";
  import { useRouter } from 'next/router'
  import { CREATE_BOARD ,UPDATE_BOARD } from "./Write.queries"
  
  export default function BoardWrite(props) {
    const [myQqq, setIsActive] =useState(false)
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
    const [updateBoard]=useMutation(UPDATE_BOARD)


    function onChangeMyWriter(event) {
      setMyWriter(event.target.value);
      if (event.target.value !== "") {
        setMyWriterError("");
      }

      if(event.target.value !== "" && myTitle !== "" && myContents !== "" && myPassword !== ""){
        setIsActive(true)
      } else {
        setIsActive(false)
      }
    }
  
    function onChangeMyPassword(event) {
      setMyPassword(event.target.value);
      if (event.target.value !== "") {
        setMyPasswordError("");
      }

      if(myWriter !== "" && myTitle !== "" && myContents !== "" && event.target.value !== ""){
        setIsActive(true)
      } else {
        setIsActive(false)
      }
    }
  
    function onChangeMyTitle(event) {
      setMyTitle(event.target.value);
      if (event.target.value !== "") {
        setMyTitleError("");
      }

      if(myWriter !== "" && event.target.value !== "" && myContents !== "" && myPassword !== ""){
        setIsActive(true)
      } else {
        setIsActive(false)
      }
    }
  
    function onChangeMyContents(event) {
      setMyContents(event.target.value);
      if (event.target.value !== "") {
        setMyContentsError("");
      }

      if(myWriter !== "" && myTitle !== "" && event.target.value !== "" && myPassword !== ""){
        setIsActive(true)
      } else {
        setIsActive(false)
      }
    }
  
    async function onClickSubmit() {
      if (!myWriter) {
        setMyWriterError("작성자를 입력해주세요.");
      }
      if (!myPassword) {
        setMyPasswordError("비밀번호를 입력해주세요.");
      }
      if (!myTitle) {
        setMyTitleError("제목을 입력해주세요.");
      }
      if (!myContents) {
        setMyContentsError("내용을 입력해주세요.");
      }
      if (myWriter && myPassword && myTitle && myContents) {
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
    async function xxx(){
        // alert("수정하기 버튼을 누르셨습니다!")
      const result = await updateBoard({
          variables:{
            updateBoardInput:{
              writer:myWriter, title:myTitle, contents:myContents
            }  }
      })
      console.log(result)       
      // router.push(`/boards/${router.query._Id}`)
      router.push(`/boards/list`)
      
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
     
       ggg={props.isEdit}
       xxx={xxx}
       zzz={onClickSubmit}

       />
      )
    }