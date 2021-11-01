import { MyDiv }from '../../styles/emotion'
import { MyInput }from '../../styles/emotion'

export default function EmotionPage(){ //자바스크립트 쓰는 곳 




    return ( //jsx리액트 전용html <> Frgement 임 ..
        <> 
           <MyDiv>안녕하세요~~</MyDiv>
            이메일: <MyInput type="text"></MyInput><br />
            비밀번호: <MyInput type="text"></MyInput><br /> 
            나의이미지: <img src="/images/lotto.png"/>
            {/* <MyDiv>로그인</MyDiv>
            아이디<br/>
            <MyInput type="text"></MyInput><br />
            비밀번호<br/>
            <MyInput type="text"></MyInput>
             */}

        </>


    )

 

         


  


}
