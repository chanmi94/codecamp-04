// console.log("Hello world!!");
//여기는 지금 백엔드야 지금 여기서 db랑 연결할거야 오케이 ?
import { createConnection } from "typeorm";

createConnection({
  type: "mysql",
  database: "mysql",
  username: "root",
  password: "codecamp",
  host: "34.64.207.239",
  port: 3312,
  //@ts-ignore
  entities: [__dirname + "/*.mysql.ts"],
  logging: true,
  synchronize: true,
})
  .then(() => {
    //연결 성공시 실행하기!
    console.log("연결완료");
  })
  .catch((error) => {
    //연결 실패시 실행하기!
    console.log(error);
  });
