import styled from "@emotion/styled";
import CardGroup from "react-bootstrap/Card";
import Card from "react-bootstrap/Card";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 30px auto;
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

  height: 100px;
  line-height: 52px;
  border-bottom: 1px solid gray;
  :hover {
    color: blue;
  }
`;

export const TextToken = styled.span`
  color: ${(props: ITextTokenProps) => (props.isMatched ? "red" : "black")};
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
  :hover {
    color: blue;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  height: 90px;
  width: 90px;
  margin-bottom: 30px;
`;

export const CardWrapper = styled(Card)`
  display: flex;

  width: 240px;
  height: 400px;
  margin: 30px auto;
`;
