import {
  InnerButton,
  InnerLogo,
  InnerWrapper,
  Wrapper,
  MenuItem,
} from "./Header.styles";
import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";
interface IProps {
  onClickLogo: () => void;
  onClickMoveToLogin: () => void;
}

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
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

        <div>
          {data?.fetchUserLoggedIn.name}님
          <InnerButton onClick={props.onClickMoveToLogin}>로그인</InnerButton>
          <InnerButton onClick={props.onClickMoveToSignUp}>
            회원가입
          </InnerButton>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
}
