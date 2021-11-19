import {
  Header,
  Img,
  InnerWrapper,
  InnerButton,
  Wrapper,
} from "./Header.styles";

export default function HeaderUI() {
  return (
    <>
      <Header>
        <InnerWrapper>
          <Img src="img/logo.png"></Img>
          <Wrapper>
            <InnerButton>로그인</InnerButton>
            <InnerButton>회원가입</InnerButton>
          </Wrapper>
        </InnerWrapper>
      </Header>
    </>
  );
}
