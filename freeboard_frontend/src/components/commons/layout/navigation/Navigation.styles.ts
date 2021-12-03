import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 50px;
  background-color: #5729ff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: white;
  max-width: 1200px;
  margin: 30px auto;
`;

export const MenuItem = styled.div`
  margin: 0px 60px;
  cursor: pointer;

  :hover {
    color: orange;
  }
`;
