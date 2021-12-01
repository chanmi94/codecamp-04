import BoardList from "../../src/components/units/board/list/BoardList.container";
import { withAuth } from "../../src/components/commons/hocs/withAuth";
const BoardsPage = () => {
  return <BoardList />;
};
export default withAuth(BoardsPage);
