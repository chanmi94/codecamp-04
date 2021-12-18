import { InnerButton, InnerLogo, InnerWrapper, Wrapper } from "./Header.styles";
import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";
interface IProps {
  onClickLogo: () => void;
  onClickMoveToLogin: () => void;
  onClickToLogout: () => void;
  onClickMoveToSignUp: () => void;
}

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
      picture
    }
  }
`;

export default function HeaderUI(props: IProps) {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  return (
    <Wrapper>
      <InnerWrapper>
        <InnerLogo onClick={props.onClickLogo}>🎁 Ming</InnerLogo>
        {data?.fetchUserLoggedIn._id ? (
          <div>
            <span> {data?.fetchUserLoggedIn.name}님 환영합니다!</span>
            <InnerButton onClick={props.onClickToLogout}>로그아웃</InnerButton>
          </div>
        ) : (
          <div>
            <InnerButton onClick={props.onClickMoveToLogin}>로그인</InnerButton>
            <InnerButton onClick={props.onClickMoveToSignup}>
              회원가입
            </InnerButton>
          </div>
        )}
      </InnerWrapper>
    </Wrapper>
  );
}
