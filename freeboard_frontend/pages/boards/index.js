import { useRouter } from "next/router"
import { useQuery, gql } from '@apollo/client'

const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!){
        fetchBoard(boardId: $boardId){
            _id
            writer
            title
            contents
        }
    }
`

export default function DynamicProductReadPage(){
    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD, { variables: { _id: Number(router.query.boardId) } })

    // console.log(data) // 자바스크립트 주석

    return (
        <>
            <div>나의 게시글 번호: {router.query._id}</div>
            <div>작성자: {data?.fetchBoard.writer}</div>
            <div>제목: {data?.fetchBoard.title}</div>
            <div>내용: {data?.fetchBoard.contents}</div>
            <button onClick={()=>router.push(`/boards/${router.query.boardId}/edit`)}>수정하기로 이동</button>
        </>
    )

}