import { Header, Img, InnerWrapper, InnerButton } from "./Header.styles";

export default function HeaderUI() {
  return (
    <>
      <Header>
        <InnerWrapper>
          <Img src="img/logo.png"></Img>
          <div>
            <InnerButton>로그인</InnerButton>
            <InnerButton>회원가입</InnerButton>
          </div>
        </InnerWrapper>
      </Header>
    </>
  );
}
