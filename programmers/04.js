//조건문 실전 적용-점수에 따른 등급
//문제1.입력되는 score에 따라 알맞은 등급을 적어야 합니다.
//100~90 → "A",89~80 → "B", 79~70 → "C", 69~60 → "D", 59점 이하는 "F"
//100점 초과나 0점 미만은 "잘못된 점수입니다"라는 문구를 띄워주세요.

function grade(score){
     
    if(score>=90 && score <=100){
       console.log("A") 
    }
    else if(score>=80 && score<=89){
       console.log("B")  
    }
    else if(score>=70 && score<=79){
        console.log("c")  
    }
    else if(score>=60 && score<=69){
        console.log("d")  
    }
    else if(score<=59){
        console.log("F")  
    }
    else if(score>100 || score<0){
        console.log("잘못된 점수입니다.")  ;
    }   
}
//축약 코드!! 
function grade(score){
     
    if(score>100 || score<0){
        console.log("잘못된 점수입니다.")  
    }      
    else if(score>=90 ){
       console.log("A") 
    }
    else if(score>=80){
       console.log("B")  
    }
    else if(score>=70 ){
        console.log("c")  
    }
    else if(score>=60){
        console.log("d")  
    }
    else if(score<=59){
        console.log("F")  
    }    
}

//마이페이지
//문제2.오른쪽 myShooping은 내가 구매한 목록을 보여주고 있습니다.
//해당 목록에서 "의류"를 구매한 횟수와 총 금액을 나타내고, 
//"의류"를 구매한 횟수에 따라 등급을 나타내세요.
//등급표 "0~2"  ⇒ Bronze, "3~4" ⇒ Silver, 5이상 ⇒ Gold
    
    const myShopping = [
        { category: "과일", price: 12000　},
        { category: "의류", price:10000　 },
        { category: "의류", price: 20000　},
        { category: "장난감", price: 9000 },
        { category: "과일", price: 5000　 },
        { category: "의류", price: 10000  },
        { category: "과일", price: 8000　　},
        { category: "의류", price: 7000　　},
        { category: "장난감", price: 5000  },
        { category: "의류", price: 10000　 },
    ]
    
    let count =0;
    let amount= 0;
    let grade="";

    for(let i=0; i<myShopping.length; i++){
       if(myShopping[i].category === "의류"){
            count +=1;
            amount += myShopping[i].price 

            if(count >=0 && count <=2){
                grade="Bronze"
            }
            else if(count >=3 && count <=4){
                grade="Silver"
            }
            else if(count >= 5){
                grade="Gold"
            }          
        }   
    }
    console.log(`의류를 구매한 횟수는 총 ${count}회 금액은 ${amount}원이며 등급은 ${grade}입니다.` )
