import { useQuery } from "@apollo/client";
import { IconButton } from "@chakra-ui/react";
import { Button } from "antd";

import { FETCH_USER_LOGGEDIN } from "./myprofile.queries";

import {
  Wrapper,
  Title,
  InputWrapper,
  Label,
  Input,
  NameWrapper,
} from "./myprofile.styles";
import { IMyProfileUiProps } from "./myprofile.types";

export default function MyProfileUI(props: IMyProfileUiProps) {
  const { data } = useQuery(FETCH_USER_LOGGEDIN);
  return (
    <>
      <Wrapper>
        <Title>나의 이메일: {data?.fetchUserLoggedIn.email} </Title>
        <Title>나의 이름: {data?.fetchUserLoggedIn.name}님</Title>
        <Title>비밀번호 변경</Title>
        <Label>현재 비밀번호</Label>
        <Input type="password" />
        <Label>새 비밀번호</Label>
        <Input type="password" onChange={props.onChangePassword} />
        <Label>새 비밀번호 확인</Label>
        <Input type="password" onChange={props.onChangeCheckPassword} />
        <Button onClick={props.onClickResetPassword}>비밀번호변경</Button>
        <NameWrapper>
          <Title>내 이름 변경</Title>
          <Label>변경 할 이름</Label>
          <Input type="text" onChange={props.onChangeName} />
          <Button onClick={props.onClickUpdateUserName}>이름변경</Button>
        </NameWrapper>
      </Wrapper>
    </>
  );
}
