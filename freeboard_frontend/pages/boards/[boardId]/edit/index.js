import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.container";
import {gql,useQuery} from '@apollo/client'
import { useRouter } from 'next/router'

const FETCH_BOARD =gql`
    query fetchBoard($boardId: ID!) {
      fetchBoard(boardId: $boardId) {
          writer
          title
          contents

        }
    }

`

export default function BoardsEditPage() {

  
  
  return <BoardWrite isEdit={true} />;
}
