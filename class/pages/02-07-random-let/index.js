export default function RandomLetPage(){

    function rrr(){

    let random = String(Math.floor(Math.random()*1000000)).padStart(6, "0")
    document.getElementById("qqq").innerText=random

}

return(
    <>
        <div  id="qqq">000000</div>
        <button  onClick={rrr}>인증번호전송</button>
    </>

)

}