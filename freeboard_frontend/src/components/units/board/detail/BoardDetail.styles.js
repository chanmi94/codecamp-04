import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
`;

export const CardWrapper = styled.div`
  border: 1px solid black;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 20px;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled.img`
  margin-right: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Writer = styled.div``;

export const CreatedAt = styled.div``;

export const Body = styled.div`
  width: 100%;
  min-height: 800px;
`;

export const Title = styled.h1`
  padding-top: 80px;
`;

export const Contents = styled.div`
  padding-top: 40px;
  padding-bottom: 120px;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
`;

export const Button = styled.button`
  width: 179px;
  height: 45px;
  background-color: white;
  border: 1px solid gray;
  margin: 0px 12px;
  cursor: pointer;

  :hover {
    background-color: gold;
    border-color: white;
  }
`;

export const WriterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-top: 50px;
`;

export const Password = styled.input`
  width: 180px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const InputWrapper = styled.div`
  padding-top: 40px;
`;

export const CommentWriter = styled.input`
  width: 180px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const CommentContents = styled.input`
  width: 1200px;
  height: 161px;
  padding-left: 16px;
  padding: 14px;
  border: 1px solid #bdbdbd;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
`;
export const SubmitButton = styled.button`
  width: 179px;
  height: 52px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
`;
