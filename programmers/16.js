//11/23 문제1.내적
//길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다.
//a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.
function solution(a, b) {
  let answer = 0;
  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}
