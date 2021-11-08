  import WriteDetailUI from './Writedetail.presenter';
  import { useQuery, gql } from '@apollo/client'
  import { useRouter } from 'next/router'
  
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
  
  export default function WriteDetail() {
    const router = useRouter()
    const { data } = useQuery(FETCH_BOARD, {
        variables: { boardId: router.query.boardId },
    });
  
    return (
       <WriteDetailUI data={data}
           
         />
    );
  }
  