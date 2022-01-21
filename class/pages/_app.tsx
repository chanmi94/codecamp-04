//emotion으로 글로벌 스타일주기.....
import * as Sentry from "@sentry/nextjs";
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
import { ChakraProvider } from "@chakra-ui/react";
import { createContext, useEffect, useState } from "react";
import { getAccesToken } from "../src/commons/libraries/getAccessToken";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
//찬미야 니키보드 좋다.

import { useRouter } from "next/router";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyxVLveHqFlLxF0fSjDmsrTiuYOma1VI0",
  authDomain: "baker-town.firebaseapp.com",
  projectId: "baker-town",
  storageBucket: "baker-town.appspot.com",
  messagingSenderId: "32593744544",
  appId: "1:32593744544:web:6d8555c1988dd947baafc5",
};

Sentry.init({
  dsn: "https://ac103acafd5e4777ba2938b466913727@o1091873.ingest.sentry.io/6109516",
});

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);

export const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};
//firebase 회원가입
export function signup(email: any, password: any) {
  try {
    return createUserWithEmailAndPassword(auth, email, password);
  } catch {
    alert("이미 가입된 이메일입니다!");
  }
}
//firebase로그인
export function signin(email: any, password: any) {
  try {
    return signInWithEmailAndPassword(auth, email, password);
  } catch {
    alert("이미 중복된 이메일입니다!");
  }
}
//custom hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);
  return currentUser;
}
//logout
export function logout() {
  return signOut(auth);
}
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
