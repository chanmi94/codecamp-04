import axios from "axios";
import { useState } from "react";

export default function CallbackPromisAsyncAwaitPage() {
  const [myCallback, setMyCallback] = useState([]);
  const [myPromise, setMyPromise] = useState([]);
  const [myAsyncAwait, setMyAsyncAwait] = useState([]);
  function onClickCallback() {
    const ccc = new XMLHttpRequest();
    ccc.open("get", "http://numbersapi.com/random?min=1&max=200");
    ccc.send();
    ccc.addEventListener("load", (res: any) => {
      const num = res.target.response.split(" ")[0];

      const aaa = new XMLHttpRequest();
      aaa.open("get", `http://koreanjson.com/posts/${num}`);
      aaa.send();
      aaa.addEventListener("load", (res: any) => {
        const userId = JSON.parse(res.target.response).UserId;

        const aaa2 = new XMLHttpRequest();
        //prettier-ignore
        aaa2.open("get",`http://koreanjson.com/posts?userID=${userId}`);
        aaa2.send();
        aaa2.addEventListener("load", (res) => {
          const result = JSON.parse(res.target.response);
          setMyCallback(result);
        });
      });
    });
  }

  //new Promis((resolve, reject)=>{
  //       외부에 요청하기 또는 비동기 작업하기
  //       if(성공) resolve ()
  //       if(실패) reject ()
  //   })

  function onClickPromis() {
    console.log("이것은 1번입니다");
    axios
      .get("http://numbersapi.com/random?min=1&max=200")
      .then((res) => {
        console.log("이것은 3번입니다");
        const num = res.data.split(" ")[0];
        return axios.get(`http://koreanjson.com/posts/${num}`);
      })
      .then((res) => {
        const userId = res.data.userId;
        //prettier-ignore
        return axios.get(`http://koreanjson.com/posts?userID=${userId}`);
      })
      .then((res) => {
        setMyPromise(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("이것은 2번입니다");
  }

  //하나가 끝나야 요청함~
  async function onClickAsyncAwait() {
    const result1 = await axios.get(
      "http://numbersapi.com/random?min=1&max=200"
    );
    const num = result1.data.split(" ")[0];

    const res2 = await axios.get(`http://koreanjson.com/posts/${num}`);
    const userId = res2.data.UserId;

    const res3 = await axios.get(
      `http://koreanjson.com/posts?userID=${userId}`
    );
    setMyAsyncAwait(res3.data);
  }
  return (
    <>
      <h1>콜백과 친구들</h1>
      <div>
        결과:
        {myCallback.map((el: any) => (
          <div key={el.title}>{el.title}</div>
        ))}
      </div>
      <button onClick={onClickCallback}>Callback 요청하기!!</button>
      <div>
        결과:
        {myPromise.map((el: any) => (
          <div key={el.title}>{el.title}</div>
        ))}
      </div>
      <button onClick={onClickPromis}>Promise 요청하기!!</button>
      <div>
        결과:
        {myAsyncAwait.map((el: any) => (
          <div key={el.title}>{el.title}</div>
        ))}
      </div>
      <button onClick={onClickAsyncAwait}>AsyncAwait 요청하기!!</button>
    </>
  );
}
