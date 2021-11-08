import {
  Avatar,
  AvatarWrapper,
  Body,
  Button,
  Contents,
  CreatedAt,
  BottomWrapper,
  Header,
  Info,
  Title,
  Wrapper,
  Writer,
  CardWrapper,
  Image
} from "../../../styles/BoardsDetail";
import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'
import WriteDetail from "../../../src/components/units/write/Writedetail.container";

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
      createdAt
    }
  }
`;

export default function BoardDetailUI() {
  const router = useRouter()
  const { data } = useQuery(FETCH_BOARD, {
      variables: { boardId: router.query.boardId },
  });

  return (
    <WriteDetail/>
  );
}
