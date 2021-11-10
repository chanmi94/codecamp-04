import { useRouter } from 'next/router'
import BoardDetailUI from './BoardDetail.presenter'
import { FETCH_BOARD} from './BoardDetail.queries'
import { useMutation } from "@apollo/client"
import { useQuery } from '@apollo/client'



export default function BoardDetail(){
    const router = useRouter()
  
    const { data } = useQuery(FETCH_BOARD, {
    

      variables: { boardId: router.query.boardId },
    })

    function GoList() {
       
          
          router.push(`/boards/list`)
        
    }
    function BoardEdit() {
        
      router.push(`/boards/${router.query.boardId}/edit`)
}
    


 
    return (
              <BoardDetailUI data={data}
                   GoList={GoList}
                   BoardEdit={BoardEdit} 
              />
           )

}
