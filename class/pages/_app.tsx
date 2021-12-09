//emotion으로 글로벌 스타일주기.....
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globerlStyles";
import "antd/dist/antd.css";
import { AppProps } from "next/dist/shared/lib/router/router";
import Layout from "../src/components/commons/layout";
import { createUploadLink } from "apollo-upload-client";
// import Head from "next/head";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createContext, useEffect, useState } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADsI9kUMtG6YqLhwvl6OcQlcHAwmq1Scg",
  authDomain: "codecamp-75562.firebaseapp.com",
  projectId: "codecamp-75562",
  storageBucket: "codecamp-75562.appspot.com",
  messagingSenderId: "1026243356333",
  appId: "1:1026243356333:web:b727add9f6871b814c8824",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

//apollo docs home에 가면 여러개있음..
//react docs도 있음..
// eslint-disable-next-line react/prop-types

export const GlobalContext = createContext(null); //로그인관련
function MyApp({ Component, pageProps }: AppProps) {
  const [myAccesToken, setMyAccesToken] = useState(""); //로그인관련
  const [myUserInfo, setMyUserInfo] = useState({}); //로그인관련
  const myValue = {
    //로그인관련
    accessToken: myAccesToken,
    setMyAccesToken: setMyAccesToken,
    userInfo: myUserInfo,
    setMyUserInfo: setMyUserInfo,
  };

  //12/1
  if (typeof window !== "undefined") {
    //브라우져라면 !== 쓰기
  }
  if (process.browser) {
  }
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken") || "";
    if (accessToken) setMyAccesToken(accessToken);
  }, []);

  const uploadLink = createUploadLink({
    uri: "http://backend04.codebootcamp.co.kr/graphql",
    headers: {
      authorization: `Bearer ${myAccesToken}`, //로그인관련
    },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as any]),
    //apollo는 임시저장이 있음 inmemorycache 내컴퓨터에 저장
    cache: new InMemoryCache(),
  });

  return (
    <>
      {/* <Head> 모든페이지에서 카카오맵을 다운받아서 비효율적임.
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=24fb8341979c5189c9b0cafe2eb7e586"
        ></script>
      </Head> */}
      <GlobalContext.Provider value={myValue}>
        <ApolloProvider client={client}>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </GlobalContext.Provider>
    </>
  );
}

export default MyApp;
