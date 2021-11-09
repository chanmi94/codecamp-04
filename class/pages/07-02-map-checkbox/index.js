import {gql, useMutation, useQuery} from '@apollo/client'
import styled from'@emotion/styled'

const FETCH_BOARDS =gql`
    query{
        fetchBoards{
            number
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

const Row=styled.div`
    display: flex;
    flex-direction: row; //:default 값

`
const Column =styled.div`
    width: 20%;
`

export default function MapCheckboxPage(){
    const{data} = useQuery(FETCH_BOARDS) //data [{number:1, writer:...},{...},{...}]
    const[deleteBoard]=useMutation(DELETE_BOARDS)
    
    
    async function onClickDelete(){
      try{
        await deleteBoard({
            variables:{number: Number(event.target.id)},
            refetchQueries:[{query: FETCH_BOARDS}]
        })
        }catch(err){
            alert(erorr.message)
        }
    }


    return(
        <div> 
           {data?.fetchBoards.map((el,index)=>(
               <Row key={el.number}>
                   <Column> <input type="checkbox"/></Column>
                   <Column>{index+1}</Column>
                   <Column>{el.writer}</Column>
                   <Column>{el.title}</Column>
                   <Column>{el.createdAt}</Column>
                   <Column>
                       <button id={el.number}onClick={onClickDelete}>삭제하기</button>
                   </Column>
               </Row>
               
           ))}  
        </div>
       
        
    )

}