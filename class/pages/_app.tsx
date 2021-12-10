//emotion으로 글로벌 스타일주기.....
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
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
import { getAccesToken } from "../src/commons/libraries/getAccessToken";
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
    if (localStorage.getItem("refreshToken")) getAccesToken(setMyAccesToken);
  }, []);

  const uploadLink = createUploadLink({
    uri: "https://backend04.codebootcamp.co.kr/graphql", //1. 12/10 로그인 관련 https로 변경!
    headers: {
      authorization: `Bearer ${myAccesToken}`, //로그인관련
    },
    credentials: "include",
  });

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      //1.토큰만료 에러캐치
      for (const err of graphQLErrors) {
        //2.refreshToken으로 accessToken 재발급 받기 => restoreAccessToken
        if (err.extensions?.code === "UNAUTHENTICATED") {
          const newAccessToken = getAccesToken(setMyAccesToken);

          //3. 기존에 실패한 요청 다시 재요청하기
          operation.setContext({
            headers: {
              ...operation.getContext().headers,
              authorization: `Bearer ${getAccesToken(setMyAccesToken)}`,
            },
          });
          return forward(operation);
        }
      }
    }
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as any]),
    cache: new InMemoryCache(),
  });

  return (
    <>
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
