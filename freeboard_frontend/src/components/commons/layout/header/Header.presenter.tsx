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
        <InnerLogo onClick={props.onClickLogo}>π MING MARKET</InnerLogo>
        {data?.fetchUserLoggedIn._id ? (
          <div>
            <span> {data?.fetchUserLoggedIn.name}λ νμν©λλ€!</span>
            <InnerButton onClick={props.onClickToLogout}>λ‘κ·Έμμ</InnerButton>
          </div>
        ) : (
          <div>
            <InnerButton onClick={props.onClickMoveToLogin}>λ‘κ·ΈμΈ</InnerButton>
            <InnerButton onClick={props.onClickMoveToSignUp}>
              νμκ°μ
            </InnerButton>
          </div>
        )}
      </InnerWrapper>
    </Wrapper>
  );
}
