import styled from "@emotion/styled"
import {IBoardStyleProps} from '../write4/BoardWrite.types'
  
export const MyInput =styled.input`
    
`
export const MyButton =styled.button`
    background-color:grey;
    background-color: ${(props:IBoardStyleProps)=> props.qqq ===true 
                    && "yellow" };
    font-size: 30px;
`    
