import {useMutation,gql} from '@apollo/client'
import { useState } from 'react'

const CREATE_BOARD =gql`
    mutation createBoard($writer: String, $title: String, $contents: String){
        createBoard(writer: $writer, title: $title, contents: $contents){
        _id
        number
        message
        }
    }
`

export default function GraphqlMutatuonBoard2Page(){
    const [createBoard]= useMutation(CREATE_BOARD )
    const[aaa, setAaa] =useState("안녕하세요")
    
    async function zzz(){

        const result = await createBoard({
            variables: { writer:"영희", title:"제목이요!",contents: "내용이요!"}
        })
        console.log(result.data.createBoard.message)
        setAaa(result.data.createBoard.message)
        
    }

    return(
        <>
        <div>{aaa}</div>
        <button onClick={zzz}>Graphql-API 요청하기!!</button>
        </>


    )
        

    
}