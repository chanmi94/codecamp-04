//11/10 문제1. String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, 
//solution을 완성하세요. seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.
//seoul은 길이 1 이상, 1000 이하인 배열입니다.
// seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
// "Kim"은 반드시 seoul 안에 포함되어 있습니다

function solution(seoul) {
    let findKim=seoul.indexOf("Kim");
    return '김서방은 ' + findKim + '에 있다';
}
 // return `김서방은 ${x}에 있다`

//문제2. 문자열다루기 기본
//문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 
//예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다
function solution(s) {
    return(s.length ===4||s.length===6) && s==parseInt(s)
  
}

//parseInt
//ex) '0.5' === 0
//소수를 출력해도 해당 소수점은 다 자르고 정수만 나온다.
//문자열 내에 숫자 말고도 문자가 섞여있어도 숫자만 그대로 출력해주는 기능이 있다.

//문제3. 약수의 합
 function solution(n) {
    let answer = 0;
    for(let i=1; i<= n; i++){
        if(n % i === 0){
            answer += i 
        }
    }
    return answer;
}