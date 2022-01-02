import { signInWithGoogle } from "../_app";

function login() {
  return (
    <>
      <button onClick={signInWithGoogle}>로그인하기</button>
      {/* <h1>{localStorage.getItem("name")}</h1>
      <h1>{localStorage.getItem("email")}</h1>
      <img src={localStorage.getItem("profilePic")} /> */}
    </>
  );
}

export default login;
