import { useState } from "react";
import { useRef } from "react";
import { logout, signup, useAuth, signin } from "../_app";

export default function App() {
  const [loading, setLoading] = useState(false);
  const currentUser: any = useAuth();
  const emailRef: any = useRef();
  const passwordRef: any = useRef();

  async function handlesSignUp() {
    setLoading(true);
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("이미 가입된 이메일입니다.");
    }
    setLoading(false);
  }

  async function handlesSignIn() {
    setLoading(true);
    try {
      await signin(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("이미 로그인 이메일입니다.");
    }
    setLoading(false);
  }

  async function handlesLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("error!!");
    }
    setLoading(false);
  }

  return (
    <div id="main">
      <div>{currentUser?.uid}</div>
      <div id="fields">
        <input ref={emailRef} placeholder="email" />
        <input ref={passwordRef} type="Password" placeholder="password" />
      </div>

      <button disabled={loading || currentUser} onClick={handlesSignUp}>
        signup
      </button>
      <button disabled={loading || currentUser} onClick={handlesSignIn}>
        singin
      </button>

      <button disabled={loading || !currentUser} onClick={handlesLogout}>
        log out
      </button>
    </div>
  );
}
