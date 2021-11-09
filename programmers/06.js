//11/09 문제1.정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.
//제한 조건  num은 int 범위의 정수입니다. 0은 짝수입니다.

    function solution(num){
        return num%2 === 0 ? 'Even' : 'Odd'
    }

//문제2. 평균구하기
//정수를 담고 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.
//제한 조건 arr은 길이 1 이상, 100 이하인 배열입니다.
//arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.

    function solution(arr){
        let answer = 0;
        for(let i=0; i<arr.length; i++){
         answer += arr[i];
         }
         return answer/arr.length; 
    }

 //문제3. 가운데 글자 가져오기  
 //단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.
 //제한 사항 s는 길이가 1 이상, 100이하인 스트링입니다.
    function solution(s){
        return s.substr(Math.ceil(s.length/2)-1,s.length%2===0? 2:1)
    }


    // 1) substr()은 문자열에서 특정 부분을 잘라낼 때 쓰인다. 

    // -> substr(시작위치 , 자를 길이)

    // 2) 시작위치는 Math.ceil(s.length / 2) -1 -> 문자의 길이를 반으로 나눈 후 Math.ceil()로 올림 하고, 1을 뺴준다.

    // 3) 자를 길이는  

    // 짝수

    // -> 문자의 길이를 반으로 나누고 나머지가 0일 때 길이는 2

    // 홀수

    // -> 문자의 길이를 반으로 나누고 나머지가 0일 때 길이는 1