//export default 해서 만들기!!  () 게시물 등록 껍데기 만들고 padding 줘 padding  사진은  빈모양으로 만 회색으로 전체감싸기
//flex 사용할것 띠용 .....빈칸 높이  가로는 좋은데 높이는 주면 안댐 피그마 길이보기 색깔..
import {AddressSearch, Address,Adress3, AddressBorder1,Content, NameDiv,AllDiv,Writter,Password,WritterPassword,Img,Title,MyDiv,Address2,Url,Main,Name,Button } from "../../../../freeboard_frontend/styles/emotion";


export default function NewPage(){

    return(
      <AllDiv>  
        <MyDiv>게시물 등록</MyDiv>

        <WritterPassword>
        <div>작성자</div>
        <Writter type="text"placeholder="이름을 적어주세요"></Writter>
        비밀번호 
        <Password type="password"placeholder="비밀번호를 적어주세요"></Password>
        </WritterPassword>
        
        <NameDiv>
        제목<br></br>
        <Name type="text" placeholder="제목을 작성해주세요"></Name>
        </NameDiv>
        
        <Content>
        내용 <br></br>
        <Title type="text" placeholder="내용을 작성해주세요"></Title>
        </Content>

        <AddressBorder1>
          주소<br></br>
         <Address type="text" placeholder= "07250"></Address>
         <AddressSearch type="text" placeholder= "우편번호 검색"></AddressSearch>
        </AddressBorder1>
                
                 <div>
                    <Adress3 type="text"></Adress3>
                    <Adress3 type="text"></Adress3>
                </div>
        유튜브
        <Url type="text" placeholder="링크를 복사해주세요"></Url>
        사진첨부
        <Img></Img>  <Img></Img>  <Img></Img>
        메인설정
       
            <Main type="radio"/>유튜브
            <Main type="radio"/>사진

            
         
            <button> 등록하기</button>
         
        </AllDiv>
      

    )

}