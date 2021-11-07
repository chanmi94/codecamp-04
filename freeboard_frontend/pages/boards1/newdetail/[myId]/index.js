import { useRouter } from "next/router" 
import{ useQuery, gql }from '@apollo/client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faLink,faMapMarkerAlt,faThumbsUp,faThumbsDown} from "@fortawesome/free-solid-svg-icons";
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
  UploadButton,
  Image,ContentsDetail,Video,Thumb
  } from "../../../../styles/emotion";

const FETCH_BOARD =gql`
    query fetchBoard($boardId: ID! ){
        fetchBoard(boardId: $boardId){
            _id
            writer
            title
            contents
        }
    }
`

export default function DynamicBoardReadPage(){
    const router =useRouter()

    const { data } =useQuery(FETCH_BOARD, {
        variables:{boardId:router.query.myId}
    })
    console.log(data)
    return(
     
     <Wrapper>
        
        
         <InputWrapper>
    
            <div><FontAwesomeIcon icon={faUser}/>작성자:{data?.fetchBoard.writer}</div>
              
              <FontAwesomeIcon icon={faLink}/>
              <FontAwesomeIcon icon={faMapMarkerAlt}/>
              
              <hr></hr>
       
         </InputWrapper>      
         <InputWrapper>         
            <div>제목:{data?.fetchBoard.title}</div>  
         </InputWrapper>
         <Image></Image>
         <InputWrapper>
            <ContentsDetail>
               <div>내용:{data?.fetchBoard.contents}</div>
            </ContentsDetail>
        </InputWrapper>
        <Video></Video>
        <InputWrapper>
          <Thumb>
              <FontAwesomeIcon icon={faThumbsUp}/>
              <FontAwesomeIcon icon={faThumbsDown}/>
          </Thumb>    
        </InputWrapper>
        </Wrapper>
    )
    
}