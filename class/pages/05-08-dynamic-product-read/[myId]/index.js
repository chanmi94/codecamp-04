import { useRouter } from "next/router" 
import{ useQuery, gql }from '@apollo/client' //usemutation이랑 차이점 알기

//gql은 주석이#이다.


const FETCH_PRODUCT =gql`
    query fetchProduct($productId: ID ){
        fetchProduct(productId: $productId){
        seller
        name
        detail
        price
        }
    }
`

export default function DynamicProductReadPage(){
    const router =useRouter()

    const { data } =useQuery(FETCH_PRODUCT, {
        variables:{productId:router.query.myId}
    }) //이름이 무조건 정해져있다 {}써야해, 구조분해할당

    return(
        <>
        <div>나의 상품 아이디: {data?.router.query.myId}</div>
        <div>판매자:{data?.fetchProduct.seller}</div>
        <div>상품명:{data?.fetchProduct.name}</div>
        <div>상품상세:{data?.fetchProduct.detail}</div>
        <div>상품가격:{data?.fetchProduct.price}</div>
        </>

    )
    //?.: 옵셔널체이닝
}