import { useMutation, gql } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { IMutation, IMutationCreateProductArgs } from '../../src/commons/types/generated/types'

const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!){
        createProduct(seller: $seller, createProductInput: $createProductInput){
            _id
            number
            message
        }
    }
`
export default function GraphqlMUtationProductPage(){
    const router = useRouter()
    const[mySeller, setMySeller] = useState("")
    const[myName, setMyName] = useState("")
    const[MyDetail, setMyDetail] = useState("")
    const[MyPrice, setMyPrice] = useState("")
    const [createProduct] = useMutation<Pick<IMutation, 'createProduct'>,IMutationCreateProductArgs>(CREATE_PRODUCT)
    function onChangeMyWriter(event){
        setMySeller(event.target.value)
    }
    function onChangeMyTitle(event){
        setMyName(event.target.value)
    }
    function onChangeMyContents(event){
        setMyDetail(event.target.value)
    }
    function onChangeMyPrice(event){
        setMyPrice(event.target.value)
    }
    async function zzz (){
        try {
            const result = await createProduct({
                variables: {
                    seller : mySeller,
                    createProductInput:{
                        name: myName,
                        detail: MyDetail,
                        price: Number(MyPrice)
                    }
                }
            })
            console.log(result)
            result.data?.createProduct?._id
            // router.push('/05-08-dynamic-product-read/'+result.data.createProduct._id) // 가장 기초
            router.push(`/05-08-dynamic-product-read/${result.data?.createProduct?._id}`) //템플릿 리터럴
            // router.push('/05-08-dynamic-product-read/${result.data.createProduct._id}') //잘못된 표기+
        } catch(error){
            console.log(error.message
                )
        }
    }
    return(
        <>
            판매자:<input type="text" onChange={onChangeMyWriter}/>
            상품명:<input type="text" onChange={onChangeMyTitle}/>
            상품내용:<input type="text" onChange={onChangeMyContents}/>
            상품가격:<input type="text" onChange={onChangeMyPrice}/>
            <button onClick={zzz}>상품 등록하기!! </button>
        </>
    )
}