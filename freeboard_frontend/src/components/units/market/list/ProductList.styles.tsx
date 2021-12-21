import styled from "@emotion/styled";
import { ITextTokenProps } from "../../board/list/BoardList.types";

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;

  margin: 30px auto;
  /* margin-top: 80px; */
  margin-bottom: 80px;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  width: 300px;
  border: 1px solid #c9c6c6;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  margin: 30px auto;
`;

export const TextToken = styled.span`
  color: ${(props: ITextTokenProps) => (props.isMatched ? "red" : "black")};
`;

export const Product = styled.div`
  font-size: 20px;
  text-align: center;
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

export const ProductCreateButton = styled.button`
  margin: 30px auto;
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
  height: 300px;
  width: 300px;
  margin-bottom: 30px;
  border: 0.5px solid #c9c6c6;
`;
export const SearchWrapper = styled.div`
  display: flex;
`;
export const SearchBox = styled.input`
  /* width: 282px; */
  /* width: 1200px;
  display: flex; */
  width: 564px;
  height: 52px;
  background: #f2f2f2;
  border: none;
  /* padding-left: 20px;
  margin-right: 20px; */
  margin: 30px auto;
`;

export const HeaderWrapper = styled.div`
  width: 1200px;
  /* display: flex; */
  margin: 30px auto;
`;

// export const SearchButton = styled.div`
//   width: 1200px;
//   display: flex;
//   margin: 30px auto;
// `;
