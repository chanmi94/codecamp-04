import { useQuery } from "@apollo/client";
import { Button } from "antd";

import { FETCH_USER_LOGGEDIN } from "./myprofile.queries";

import {
  Wrapper,
  Title,
  InputWrapper,
  Label,
  Input,
  ButtonWrapper,
  NameWrapper,
  UploadWrapper,
  Button2,
} from "./myprofile.styles";

export default function MyProfileUI(props) {
  const { data } = useQuery(FETCH_USER_LOGGEDIN);
  return (
    <>
      <Wrapper>
        <Title>비밀번호 변경</Title>
        <InputWrapper>
          <Label>현재 비밀번호</Label>
          <Input type="password" />
        </InputWrapper>
        <InputWrapper>
          <Label>새 비밀번호</Label>
          <Input type="password" onChange={props.onChangePassword} />
        </InputWrapper>
        <InputWrapper>
          <Label>새 비밀번호 확인</Label>
          <Input type="password" onChange={props.onChangeCheckPassword} />
        </InputWrapper>

        <Button2
          name="비밀번호 변경하기"
          onClick={props.onClickResetPassword}
        />

        <NameWrapper>
          <Title>내 이름 변경</Title>
          <InputWrapper>
            <Label>변경 할 이름</Label>
            <Input type="text" onChange={props.onChangeName} />
          </InputWrapper>

          <Button2 name="이름 변경하기" onClick={props.onClickUpdateUserName} />
        </NameWrapper>
      </Wrapper>
    </>
  );
}
