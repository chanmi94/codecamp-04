import { ReactChild } from "react";
import styled from "@emotion/styled";
import Header from "./header/Header.container";
import Banner from "./banner/Banner.container";
import Navigation from "./navigation/Navigation.container";
import Footer from "./footer/Footer.container";
import { useRouter } from "next/router";

const Wrapper = styled.div``;

const Body = styled.div``;

const BodyWrapper = styled.div`
  display: flex;
`;

const Siderbar = styled.div`
  width: 200px;
  height: 700px;
  background-color: steelblue;
`;

interface ILayoutProps {
  children: ReactChild;
}
const HIDDEN_HEADERS = ["/12-03-modal-address"]; //배열이니 다른 여러개 써도댐

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router);

  router.asPath;

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);

  return (
    <Wrapper>
      {!isHiddenHeader && <Header />}
      <Banner />
      <Navigation />
      <BodyWrapper>
        <Siderbar>여기는 사이드바입니다.</Siderbar>
        <Body>{props.children}</Body>
      </BodyWrapper>
      <Footer />
    </Wrapper>
  );
}
