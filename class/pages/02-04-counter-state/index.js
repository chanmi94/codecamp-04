import{useState}from'react'

export default function CounterStatePage(){

    const [qqq, setQqq] = useState(0)// set붙여줘야함

    function zzz(){
        setQqq(qqq+1)

    }
    return(
        <>
            <div>{qqq}</div>
            <button onClick={zzz}>카운트증가!!</button>
        </>
    )
}