import { Row } from "./BoardList.styles";
import { ContentsWrapper } from "./../../boardComment/write/BoardCommentWrite.styles";
import { Card } from "antd";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const TableToplist = styled.div`
  text-align: center;
`;

export const TableTop = styled.div`
  border-top: 2px solid gray;
  margin-top: 20px;
`;

export const TableBottom = styled.div`
  border-bottom: 2px solid gray;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray;

  :hover {
    color: blue;
  }
`;

export const TextToken = styled.span`
  color: ${(props) => (props.isMatched ? "red" : "black")};
`;

export const ColumnHeaderBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnHeaderTitle = styled.div`
  width: 70%;
  text-align: center;
`;

export const ColumnBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnTitle = styled.div`
  width: 70%;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  :hover {
    color: blue;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 50px;
`;

export const PencilIcon = styled.img``;

export const Button = styled.button`
  width: 171px;
  height: 52px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: #f5f2fc;
  }
`;
export const PageNation = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
`;

export const WriterWrapper = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
export const Column = styled.div`
  display: flex;
  justify-content: row;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const BestCard = styled(Card)`
  display: flex;
  flex-direction: Column;
`;

export const CardWrapper = styled.div`
  display: flex;

  justify-content: space-between;
`;
