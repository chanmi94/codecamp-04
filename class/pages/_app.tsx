//emotion으로 글로벌 스타일주기.....
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globerlStyles";
import "antd/dist/antd.css";
import { AppProps } from "next/dist/shared/lib/router/router";
import Layout from "../src/components/commons/layout";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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
function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "http://backend04.codebootcamp.co.kr/graphql",
    //apollo는 임시저장이 있음 inmemorycache 내컴퓨터에 저장
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
