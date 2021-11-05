import { useRouter } from "next/router" 
import{ useQuery, gql }from '@apollo/client'
import {
  Wrapper,
  Title,
  InputWrapper,
  WriterWrapper,
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
        <Title>게시판 등록</Title>
        <WriterWrapper>
        <InputWrapper>
            <div>나의 게시물 아이디: {router.query.myId}</div>
          </InputWrapper>
          <InputWrapper>
            
            <div>작성자:{data?.fetchBoard.writer}</div>
            
          </InputWrapper>
          
        </WriterWrapper>
        <InputWrapper>
          
          <div>제목:{data?.fetchBoard.title}</div>
           
        </InputWrapper>
        <InputWrapper>
          
          <div>내용:{data?.fetchBoard.contents}</div>
          
        </InputWrapper>
    
      </Wrapper>


    )
   
}
