import {gql, useMutation, useQuery} from '@apollo/client'
import styled from'@emotion/styled'
import BoardListUI from './Boardlist.presenter'
import 'bootstrap/dist/css/bootstrap.css';

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
  

    return(
        <BoardListUI data={data}
       
        />
       
        
    )

}