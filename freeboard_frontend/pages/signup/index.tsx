import React, { useState } from "react";
// import AppLayout from "../components/AppLayout";
import Head from "next/head";
import { Form, Input, Checkbox, Button } from "antd";

const Signup = () => {
  const [id, setId] = useState("");
  const [nick, setNick] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [term, setTerm] = useState(false);

  const onSubmit = () => {};

  const onChangeId = (e) => {
    setId(e.target.value);
  };

  const onChangeNick = (e) => {
    setNick(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangePasswordCheck = (e) => {
    setPasswordCheck(e.target.value);
  };

  const onChangeTerm = (e) => {
    setTerm(e.target.value);
  };

  return (
    <>
      <Head>
        <title>NodeBird</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.25.3/antd.min.css"
        />
      </Head>
      {/* <AppLayout> */}
      <Form onSubmit={onSubmit} style={{ padding: 10 }}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <Input name="user-id" value={id} required onChange={onChangeId} />
        </div>
        <div>
          <label htmlFor="user-nick">닉네임</label>
          <br />
          <Input
            name="user-nick"
            value={nick}
            required
            onChange={onChangeNick}
          />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input
            name="user-password"
            type="password"
            value={password}
            required
            onChange={onChangePassword}
          />
        </div>
        <div>
          <label htmlFor="user-password-check">비밀번호체크</label>
          <br />
          <Input
            name="user-password-check"
            type="password"
            value={passwordCheck}
            required
            onChange={onChangePasswordCheck}
          />
        </div>
        <div>
          <Checkbox name="user-term" value={term} onChange={onChangeTerm}>
            성공을 향해 한발자씩 걸어나갈것을 동의합니다.
          </Checkbox>
        </div>
        <div>
          <Button type="primary">가입하기</Button>{" "}
          {/* // button type="submit"하려면 htmlType="submit"라고해야함 */}
        </div>
      </Form>
      {/* </AppLayout> */}
    </>
  );
};

export default Signup;
