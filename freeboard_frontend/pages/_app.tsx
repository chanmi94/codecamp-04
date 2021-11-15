import '../styles/globals.css'
import{ApolloClient, ApolloProvider, InMemoryCache}from '@apollo/client'
//apollo docs home에 가면 여러개있음..
//react docs도 있음..
function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: 'http://backend04.codebootcamp.co.kr/graphql',
    //apollo는 임시저장이 있음 inmemorycache 내컴퓨터에 저장
    cache: new InMemoryCache()
  })


  return (
    <ApolloProvider client={client}>
    <Component {...pageProps} />  
    </ApolloProvider>
  )
}


export default MyApp