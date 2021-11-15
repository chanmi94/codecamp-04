//11/15 문제 1. 문자열 내 p와 y의 개수
//대문자와 소문자가 섞여있는 문자열 s가 주어집니다.
// 에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.
//예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.
function solution(s) {
  var count_p = 0;
  var count_y = 0;

  for (var i = 0; i < s.length; i++) {
    if (s[i] === "p" || s[i] === "P") {
      count_p++;
    } else if (s[i] === "y" || s[i] === "Y") {
      count_y++;
    }
  }

  return count_p === count_y ? true : false;
}
//s=s.toLowerCase(); 문자열 전체를 소문자로 변환
//s=s.toUpperCase(); 문자열 전체를 대문자로 변환

//문제2. 이상한 문자 만들기
//문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다.
//각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.
function solution(s) {
  var answer = "";

  let idx = 0; //단어별로 인덱스 값을 저장하는 역할
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      //공백이라면 그냥 공백을 넣어준다.
      answer += " ";
      idx = 0; //idx를 0으로 초기화
    } else {
      answer +=
        idx % 2 === 0
          ? //짝수 인덱스라면 대문자 추가
            s[i].toUpperCase()
          : //홀수 인덱스라면 소문자 추가
            s[i].toLowerCase();
      idx++;
    }
  }
  return answer;
}
