import { SetStateAction } from "react";
import { Dispatch } from "react";
import { GraphQLClient } from "graphql-request";
import { gql } from "@apollo/client";

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;

export async function getAccesToken(
  setMyAccesToken: Dispatch<SetStateAction<string>>
) {
  try {
    const graphQlClinet = new GraphQLClient(
      "https://backend04.codebootcamp.co.kr/graphql",
      {
        credentials: "include",
      }
    );
    const result = await graphQlClinet.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken.accessToken;
    setMyAccesToken(newAccessToken);
    return newAccessToken;
  } catch (error) {
    console.log(error.message);
  }
}
