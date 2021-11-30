import { Global } from "@emotion/react";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import "antd/dist/antd.css";
import Layout from "../src/components/commons/layout";
import { createUploadLink } from "apollo-upload-client";
import { AppProps } from "next/dist/shared/lib/router/router";
import { globalStyles } from "../src/commons/styles/globalStyles";
// import "bootstrap/dist/css/bootstrap.min.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createContext, useState } from "react";
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
    <GlobalContext.Provider value={myValue}>
      <ApolloProvider client={client}>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
