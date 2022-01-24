import { useMutation, gql } from "@apollo/client";
import { ChangeEvent, useContext, useState } from "react";
import {
  IMutation,
  IMutationCreateUserArgs,
  IMutationLoginUserArgs,
} from "../../src/commons/types/generated/types";

import { useRouter } from "next/router";
import { GlobalContext } from "../_app";
import styled from "@emotion/styled";

const SignupForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60vh;
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
`;
const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      email
      name
    }
  }
`;

export default function Login() {
  // const { setMyAccesToken } = useContext(GlobalContext);

  const router = useRouter();
  const [myName, setMyName] = useState("");
  const [myEmail, setMyEmail] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  function onChangeMyEmail(event: ChangeEvent<HTMLInputElement>) {
    setMyEmail(event.target.value);
  }

  function onChangeMyName(event: ChangeEvent<HTMLInputElement>) {
    setMyName(event.target.value);
  }

  function onChangeMyPassword(event: ChangeEvent<HTMLInputElement>) {
    setMyPassword(event.target.value);
  }

  async function onClickSignUp() {
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            email: myEmail,
            password: myPassword,
            name: myName,
          },
        },
      });
    } catch (error) {
      // console.log(error.message);
    }
    confirm("회원가입을 축하드립니다.");
    router.push("/login");
  }

  return (
    <>
      <SignupForm>
        <Form>
          {" "}
          <label>회원가입</label>
          <label>Email</label>
          <input type="text" onChange={onChangeMyEmail} />
          <label>Password</label>
          <input type="password" onChange={onChangeMyPassword} />
          <label>이름</label>
          <input type="text" onChange={onChangeMyName} />
          <button onClick={onClickSignUp}>회원가입</button>
        </Form>
      </SignupForm>
    </>
  );
}
