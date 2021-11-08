import BoardWriteUI from "./BoardWrite.presenter"
import {useMutation} from '@apollo/client'
import { useState } from 'react'
import { CREATE_BOARD } from "./BoardWrite.queries"



export default function BoardWrite(){
    const [myQqq, setMyQqq] =useState(false)
    
    const [myWriter, setMyWriter] =useState("")
    const [myTitle, setMyTitle] =useState("")
    const [myContents, setMyContents] =useState("")
    const [createBoard]= useMutation(CREATE_BOARD )



    function onChangeMyWriter(event){
        
        setMyWriter(event.target.value)
        onChangeButton()
    }
    function onChangeMyTitle(event){
        setMyTitle(event.target.value)
        onChangeButton()
    }
    function onChangeMyContents(event){
        setMyContents(event.target.value)
        onChangeButton()
    }
    function onChangeButton(){
        if(myWriter !=="" && myTitle !=="" && myContents!==""){
            setMyQqq(true)
        }
        
        
    }
   
    async function zzz(){
        
        const result = await createBoard({
            variables: { writer: myWriter, title:myTitle,contents: myContents}
        })
        console.log(result.data.createBoard.message)
        
    }
    return(
        <BoardWriteUI aaa={onChangeMyWriter}
         bbb={onChangeMyTitle}
         ccc={onChangeMyContents}
         qqq={myQqq}
         zzz={zzz}
         />
    )
}