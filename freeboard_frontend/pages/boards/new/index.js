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


  import { useState } from 'react'

  export default function BoardsNewPage() {

    const[writer, setWriter] = useState("")
    const[writerError, setwriterError]= useState("")
    const[password, setPassword] = useState("")
    const[passwordError, setPasswordError]= useState("")
    const[subject, setSubject] = useState("")
    const[subjectError, setSubjectError]= useState("")
    const[contents, setContents] = useState("")
    const[contentsError, setContentsError]= useState("")
    const[youtube, setYoutube] = useState("")
    const[youtubeError, setYoutubeError]= useState("")
    
    function aaa(event){
      setWriter(event.target.value)
      
    }

    function ppp(event){
      setPassword(event.target.value)
      
    }

    function sss(event){
      setSubject(event.target.value)
      
    }

    function ttt(event){
      setContents(event.target.value)
      
    }
    function uuu(event){
      setYoutube(event.target.value)
      
    }

    function ccc(){
      
      if(writer.length < 1){
        setwriterError("한글자 이상 입력해주세요")
      }
      
      if(password.length < 4){
        setPasswordError("네글자 이상 입력해주세요")
      }

      if(subject.length < 5){
        setSubjectError("다섯글자 이상 입력해주세요")
      }

      if(contents.length < 5){
        setContentsError("다섯글자 이상 입력해주세요")
      }

      if(youtube.length < 5){
        setYoutubeError("다섯글자 이상 입력해주세요")
      }



   }
    
    return (
      <Wrapper>
        <Title>게시판 등록</Title>
        <WriterWrapper>
          <InputWrapper>
            <Label>작성자</Label>
            <Writer type="text" placeholder="이름을 적어주세요." onChange={aaa}/>
            <Err>{writerError}</Err>
          </InputWrapper>
          <InputWrapper>
            <Label>비밀번호</Label>
            <Password type="password" placeholder="비밀번호를 적어주세요."   onChange={ppp}/>
            <Err>{passwordError}</Err>
          </InputWrapper>
        </WriterWrapper>
        <InputWrapper>
          <Label>제목</Label>
          <Subject type="text" placeholder="제목을 작성해주세요." onChange={sss}/>
          <Err>{subjectError}</Err>
        </InputWrapper>
        <InputWrapper>
          <Label>내용</Label>
          <Contents placeholder="내용을 작성해주세요."  onChange={ttt}/>
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
          <Youtube placeholder="링크를 복사해주세요." onChange={uuu}/>
          <Err>{youtubeError}</Err>
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
          <SubmitButton onClick={ccc}>등록하기</SubmitButton>
        </ButtonWrapper>
      </Wrapper>
    );
    
      }
  
  