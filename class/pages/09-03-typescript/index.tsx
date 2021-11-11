import { Profiler } from "react";

export function TypescriptPage(){

    //문자타입-타입추론
    let aaa = "안녕하세요"
   


    //숫자타입
    let ccc: any =5
    //문자타입
    let bbb:string;
    bbb = "반갑습니다." 
    

    ccc = "dfadsf"

    let ddd: number[]=[1,2,3,4,5]
    let eee: string[]=["a","b","c","d"]
    let fff: number[] | string[]=[1,2,3,4,5]
    fff=["a","b","c"]
    let ggg: (number|string)[]=[1,"b",2,"c"]

    //객체타입
    interface IProfile{
        name: string
        age: number|string  
        school: string

    }

    let Profile:IProfile ={
        name:"철수",
        age:8,
        school:"다람쥐초등학교"
    }
    Profile.age ="8살"
    
    return(
        <div>타입스크립트 연습</div>

    )
}