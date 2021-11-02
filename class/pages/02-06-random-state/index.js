import { useState } from 'react';

export default function RandomStatePage(){

    const[random,setRandom] = useState("000000")

    function rrr(){
        setRandom(String(Math.floor(Math.random()*1000000)).padStart(6, "0"))
    }

    return(
        <>

        <div>{random}</div>
        <button onClick={rrr}>인증번호전송</button>
        </>
    )

}
