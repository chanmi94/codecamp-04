import Head from "next/head";
import { request, gql } from "graphql-request";

export default function MarketsPage(props) {
  return (
    <>
      <Head>
        <meta property="og:title" content={props.fetchUseditem.name} />
        {/* <meta property="og:url" content="http://mingmarket.shop" /> */}

        <meta property="og:description" content={props.fetchUseditem.remarks} />
        <meta property="og:image" content={props.fetchUseditem.images[0]} />
      </Head>
      <div>안녕하세요!! 상품입니다!!</div>;
    </>
  );
}

const FETCH_USEDTIEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      name
      remarks
      images
    }
  }
`;
//사이드렌더링
export const getServerSideProps = async (context) => {
  const result = await request(
    "https://backend04.codecamp.co.kr/graphql",
    FETCH_USEDTIEM,
    { useditemId: context.query.useditemId }
  );

  return {
    props: {
      fetchUseditem: {
        name: result.fetchUseditem.name,
        remarks: result.fetchUseditem.remarks,
        images: result.fetchUseditem.images[0],
      },
    },
  };
};
