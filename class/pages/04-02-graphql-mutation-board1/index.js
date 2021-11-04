import {useMutation,gql} from '@apollo/client'
import { useState } from 'react'

const CREATE_BOARD =gql`
    mutation{
        createBoard(writer: "철수", title: "밥", contents:"머먹지")
        {
        _id
        number
        message
        }
    }
`

export default function GraphqlMutatuonBoard1Page(){
    const [createBoard]= useMutation(CREATE_BOARD )
    const[aaa, setAaa] =useState("안녕하세요")
    async function zzz(){

        const result = await createBoard()
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