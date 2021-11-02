//배열의 선언과 할당
//문제1. 주어진 변수 fruits에 "사과","바나나","파인애플"을 담아주세요.

let fruits = []

fruits=["사과", "바나나", "파인애플"]

//배열의 기능
//문제2.let fruits = ["사과", "바나나", "파인애플"]

let newFruits = []

newFruits.push=fruits[fruits.length-1]

//문제3. 학생들의 이름이 담긴  students 배열이 있습니다.
//배열에서 2번 째 요소까지의 데이터들을 뽑아 새로운 배열을 만드세요.
//배열나누기 slice는 ()를 사용해야함
let students = ["철수", "영희", "훈이", "짱구", "유리"]

let newArr=students.slice(0,3)


//문제4. 주어진 fruits 배열의 모든 요소에 "맛있는"이라는 문자열을 추가하세요
let fruits = ["사과", "바나나"]

fruits[0] = "맛있는"+ fruits[0]
fruits[1] = "맛있는"+ fruits[1]

//객체의 선언과 할당
//주어진 student 객체에 name이라는 키를 만들고, '철수를'할당하세요
let student = {}

student.name="철수"

//객체의 키&값 추가
//student와 school 두 개의 객체가 있습니다.
//student 객체에 school이라는 객체를 할당해야 합니다.

const student = {
	name: "철수",
	age: 8,
};

const school = {
	name: "다람쥐초등학교",
	teacher: "다람이",
}

student.school= school

























