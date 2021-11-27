import { ReactChild } from "react";
import styled from "@emotion/styled";
import Header from "./header/Header.container";
import Banner from "./banner/Banner.container";
import Navigation from "./navigation/Navigation.container";
import Footer from "./footer/Footer.container";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";

const Wrapper = styled.div``;

const Body = styled.div``;

const BodyWrapper = styled.div`
  /* display: flex; */
`;

const HIDDEN_HEADERS = [
  "/12-05-modal-address-state-prev",
  // ...
];

interface ILayoutProps {
  children: ReactChild;
}
export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router);

  // const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);

  return (
    <Wrapper>
      {/* {!isHiddenHeader && <Header />} */}
      <Header />
      <Banner />
      <Navigation />
      <BodyWrapper>
        <Body>{props.children}</Body>
      </BodyWrapper>
      <Footer />
    </Wrapper>
  );
}
