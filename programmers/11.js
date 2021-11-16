//11/16 문제1. 자연수 뒤집어 배열로 만들기
//자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요.
//예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.
function solution(n) {
  var answer = [];
  //숫자 타입의 데이터를 문자열 타입으로 변환
  n = String(n);

  for (let i = 0; i < n.length; i++) {
    answer.push(Number(n[i]));
  }
  //배열을 뒤집어줘야함
  answer.reverse();
  return answer;
}

//문제2. 나누어 떨어지는 숫자 배열
//array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
//divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.
//제한사항
//arr은 자연수를 담은 배열입니다.
//정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
//divisor는 자연수입니다.
//array는 길이 1 이상인 배열입니다.
function solution(arr, divisor) {
  const answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i]);
    }
  }
  //빈 배열일 경우를 조건식으로 삼항연산자 사용

  return answer.length === 0
    ? [-1] //빈 배열일 경우 배열에 -1을 담아서 리턴
    : answer.sort((a, b) => a - b); //데이터가 있을 경우 오름차순으로 정렬해서 리턴
}
