import { useMutation } from "@apollo/client";
import { ChangeEvent } from "react";
import { useState } from "react";
import MyProfileUI from "./myprofile.presenter";
import { RESORT_USER_PASSWORD, UPDATE_USER_INPUT } from "./myprofile.queries";
export default function MyProfile() {
  const [resetUserPassword] = useMutation(RESORT_USER_PASSWORD);
  const [updateUser] = useMutation(UPDATE_USER_INPUT);

  const [myPassword, setMyPassword] = useState("");
  const [myName, setMyName] = useState("");

  const [myCheckPassword, setMyCheckPassword] = useState("");

  function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setMyPassword(event.target.value);
  }

  function onChangeName(event: ChangeEvent<HTMLInputElement>) {
    setMyName(event.target.value);
  }

  function onChangeCheckPassword(event: ChangeEvent<HTMLInputElement>) {
    setMyCheckPassword(event.target.value);
  }

  async function onClickResetPassword() {
    if (myPassword !== myCheckPassword) {
      alert("새 비밀번호와 비밀번호 확인이 일치하지않습니다.");
      return;
    }
    try {
      await resetUserPassword({
        variables: { password: myPassword },
      });
      alert("비밀번호가 수정되었습니다.");
    } catch (error) {
      error instanceof Error && error.message;
    }
  }

  async function onClickUpdateUserName() {
    try {
      await updateUser({
        variables: {
          updateUserInput: {
            name: myName,
          },
        },
      });
      alert(`이름이 ${myName}으로 수정되었습니다.`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <MyProfileUI
      onChangePassword={onChangePassword}
      onChangeCheckPassword={onChangeCheckPassword}
      onChangeName={onChangeName}
      onClickResetPassword={onClickResetPassword}
      onClickUpdateUserName={onClickUpdateUserName}
    />
  );
}
