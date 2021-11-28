//문제1. 최대공약수와 최대공배수
// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

// 제한 사항
// 두 수는 1이상 1000000이하의 자연수입니다.

function solution(n, m) {
  // 최대공약수 : 두 수의 약수 중에서 제일 큰 수
  // 최소공배수 : 두 수의 배수 중에서 제일 작은 수
  let answer = [];

  // 공통되는 약수를 담아주는 배열
  const gcdArr = [];
  // 최대공약수 구하기
  for (let i = 1; i <= m; i++) {
    if (n % i === 0 && m % i === 0) {
      gcdArr.push(i);
    }
  }
  answer[0] = Math.max(...gcdArr);

  // 최소공배수 구하기
  for (let l = m; l <= n * m; l += m) {
    if (l % n === 0) {
      answer[1] = l;
      break;
    }
  }
  return answer;

  // return answer;
}
