import Head from "next/head";

export default function BoardsPage() {
  return (
    <>
      <Head>
        <meta property="og:title" content="나만의 사이트" />
        <meta property="og:url" content="http://mingmarket.shop" />
        {/* <meta property="og:image"  content="http://mingmarket.shop"/> */}
        <meta property="og:description" content="안녕하세요 환영해" />
      </Head>
      <div>안녕하세요!! 게시판입니다!!</div>;
    </>
  );
}
