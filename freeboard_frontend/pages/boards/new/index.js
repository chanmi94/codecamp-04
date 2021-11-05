//export default 해서 만들기!!  () 게시물 등록 껍데기 만들고 padding 줘 padding  사진은  빈모양으로 만 회색으로 전체감싸기
//flex 사용할것 띠용 .....빈칸 높이  가로는 좋은데 높이는 주면 안댐 피그마 길이보기 색깔..
 import {
  Address,
  ButtonWrapper,
  Contents,
  ImageWrapper,
  InputWrapper,
  Label,
  OptionWrapper,
  Password,
  RadioButton,
  RadioLabel,
  SearchButton,
  Subject,
  SubmitButton,
  Title,
  Wrapper,
  Writer,
  WriterWrapper,
  Youtube,
  Zipcode,
  ZipcodeWrapper,
  Err,
  UploadButton
} from "../../../../freeboard_frontend/styles/emotion";

  import {useMutation,gql} from '@apollo/client'
  import { useState } from 'react'

  const CREATE_BOARD =gql`
    mutation createBoard($createBoardInput: CreateBoardInput! ){
      createBoard(createBoardInput:$createBoardInput){
        _id
        writer
        title
        contents
      }
    }
  `
  export default function BoardsNewPage() {

    const[createBoard] =useMutation(CREATE_BOARD)

    const[myWriter, setMyWriter]=useState("")
    const[myPassword, setMyPassword]=useState("")
    const[myTitle, setMyTitle]=useState("")
    const[myContents, setMyContents]=useState("")
    const[writerError, setWriterError]= useState("")
    const[passwordError, setPasswordError]= useState("")
    const[subjectError, setSubjectError]= useState("")
    const[contentsError, setContentsError]= useState("")
    
    
    function onChangeMyWriter(event){
        
      setMyWriter(event.target.value)

  }
    function onChangeMyPassword(event){
        
      setMyPassword(event.target.value)

  }

    function onChangeMyTitle(event){
          
      setMyTitle(event.target.value)

  }
    function onChangeMyContents(event){
        
      setMyContents(event.target.value)

  }


      async function submit(){

        if(myWriter.length < 1){
          setWriterError("한글자 이상 입력해주세요")
          return
        }
        
        if(myPassword.length < 4){
        setPasswordError("네글자 이상 입력해주세요")
          return
        }

        if(myTitle.length < 5){
          setSubjectError("다섯글자 이상 입력해주세요")
            return  
        }

        if(myContents.length < 5){
          setContentsError("다섯글자 이상 입력해주세요")
           return
        }


        const result = await createBoard({
          variables:{
            createBoardInput: {
              writer: myWriter,
              password : myPassword,
              title: myTitle,
              contents: myContents
            }
          }
        })
        console.log(result)
      }
        
    
    return (

      <Wrapper>
        <Title>게시판 등록</Title>
        <WriterWrapper>
          <InputWrapper>
            <Label>작성자</Label>
            <Writer type="text" placeholder="이름을 적어주세요." onChange={onChangeMyWriter}/>
             <Err>{writerError}</Err> 
          </InputWrapper>
          <InputWrapper>
            <Label>비밀번호</Label>
            <Password type="password" placeholder="비밀번호를 적어주세요."   onChange={onChangeMyPassword}/>
            <Err>{passwordError}</Err> 
          </InputWrapper>
        </WriterWrapper>
        <InputWrapper>
          <Label>제목</Label>
          <Subject type="text" placeholder="제목을 작성해주세요." onChange={onChangeMyTitle}/>
           <Err>{subjectError}</Err> 
        </InputWrapper>
        <InputWrapper>
          <Label>내용</Label>
          <Contents placeholder="내용을 작성해주세요."  onChange={onChangeMyContents}/>
          <Err>{contentsError}</Err> 
        </InputWrapper>
        <InputWrapper>
          <Label>주소</Label>
          <ZipcodeWrapper>
            <Zipcode placeholder="07250" readOnly />
            <SearchButton>우편번호 검색</SearchButton>
          </ZipcodeWrapper>
          <Address readOnly />
          <Address />
        </InputWrapper>
        <InputWrapper>
          <Label>유튜브</Label>
          <Youtube placeholder="링크를 복사해주세요."/>
        </InputWrapper>
        <ImageWrapper>
          <Label>사진첨부</Label>
          <UploadButton>
            <>+</>
            <>Upload</>
          </UploadButton>
          <UploadButton>
            <>+</>
            <>Upload</>
          </UploadButton>
          <UploadButton>
            <>+</>
            <>Upload</>
          </UploadButton>
        </ImageWrapper>
        <OptionWrapper>
          <Label>메인설정</Label>
          <RadioButton type="radio" id="youtube" name="radio-button" />
          <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
          <RadioButton type="radio" id="image" name="radio-button" />
          <RadioLabel htmlFor="image">사진</RadioLabel>
        </OptionWrapper>
        <ButtonWrapper>
          <SubmitButton onClick={submit}>등록하기</SubmitButton>
        </ButtonWrapper>
      </Wrapper>
    )
    
   }
   
  
  