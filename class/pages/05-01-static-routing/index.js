import{useRouter}from 'next/router'   //리액트 업글 버전


export default function StaticRoutingPage(){
    const router = useRouter()

    function onClickMove(){
        router.push('/05-02-static-routed')


    }

    return(
        <button onClick={onClickMove}>페이지이동하기!!!</button>
    )
}