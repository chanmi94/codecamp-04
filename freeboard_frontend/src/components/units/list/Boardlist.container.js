import {gql, useMutation, useQuery} from '@apollo/client'
import styled from'@emotion/styled'
import BoardListUI from './Boardlist.presenter'


const FETCH_BOARDS =gql`
    query{
        fetchBoards{
            
            writer
            title
            createdAt
        }
    }
`

const DELETE_BOARDS =gql`
    mutation
        deleteBoard($number:Int){
            deleteBoard(number:$number){
                message
        
        }     
    }
`


export default function BoardDetail(){
    const{data} = useQuery(FETCH_BOARDS) //data [{number:1, writer:...},{...},{...}]
    const[deleteBoard]=useMutation(DELETE_BOARDS)
    // const [fetchBoards] = useMutation(FETCH_BOARDS);
    // const router = useRouter()
    
    // async function onClickDelete(){
    //   try{
    //     await deleteBoard({
    //         variables:{number: Number(event.target.id)},
    //         refetchQueries:[{query: FETCH_BOARDS}]
    //     })
    //     }catch(err){
    //         alert(erorr.message)
    //     }
    // }
    // async function onClickSubmit() {
    //     const result = await fetchBoards({ 
    //         variables: { 
            
    //           }
    //         }
    //       );
    //       router.push(`/boards/${result.data.createBoard._id}`)
        
    // }

    return(
        <BoardListUI data={data}
       
        />
       
        
    )

}