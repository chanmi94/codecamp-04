//반복문
//문제1. 숫자더하기
//입력되는 수에 따라 0부터 해당 수까지의 합을 구하려고 합니다.

function sum(num){
    let sum=0;
    for(let i=1; i<=num; i++){
    sum += i;
    }
    return sum;
}

//문제2. 특정 문자열 세기
//문자열에서 "a"가 몇 번 등장하는지 횟수를 구하는 함수를 만들려고 합니다.
//반복문을 이용해 "a"의 등장 횟수를 변수 "count"에 할당하세요.

function countLetter(str) {
    let count = 0
    for (let i=0; i< str.length; i++){
        if(str[i] === "a" || str[i] ==="A" ){
            count++
        }
    }
    return(count);
}

//문제3. 문자열 삽입
//num을 입력받아 1부터 num의 값까지 각각의 숫자 사이에 "-"이 들어간 문자열을 만들어야 합니다. 
//num이 3일 경우에는 "1-2-3"입니다.

function makeNumber(num) {
    let str ='';
    for(let i=1; i<=num; i++){
        str = str + i
        if(i !==num){
            str =str + '-'}      
    }
    console.log(str)
}

//문제4.홀수 문자열
//num을 입력받아 1부터 num까지의 숫자 중 홀수로 구성된 문자열을 만들어야 합니다.
//num에 5일 경우에는 "135"입니다.

function makeOdd(num){
    let str ='';

    for(let i=1;i<=num; i++){
        if(i%2 ===1){
            str=str+i
        }
    }
    console.log(str)
}

//문제5. 가장 큰수 찾기
//str은 무작위 숫자인 문자열입니다.  해당 문자열에서 가장 큰 수를 구하는 함수를 만들어야 합니다.
//만약 str에 "12345"가 들어온다면 "5"를 나타내야 합니다.
function bigNum(str){
    let biggest = 0;

    for(let i=0; i<str.length; i++){
        if(Number(str[i])>biggest){
            biggest=Number(str[i])
        }
    }
    return String(biggest)
}