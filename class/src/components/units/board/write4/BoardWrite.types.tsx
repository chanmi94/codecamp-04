import { ChangeEvent } from "react";

export interface IBoardWriteProps{
    isEdit:boolean
    data?: any
}


export interface IBoardWriteUIProps{
    aaa: (event: ChangeEvent<HTMLInputElement>)=>void
    bbb: (event: ChangeEvent<HTMLInputElement>)=>void   
    ccc: (event: ChangeEvent<HTMLInputElement>)=>void
    zzz: ()=>void
    qqq: boolean
    ggg: boolean
    xxx: ()=>void
    data:any
}

export interface IBoardStyleProps{
    qqq:boolean
}