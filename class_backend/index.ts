// console.log("Hello world!!");
//여기는 지금 백엔드야 지금 여기서 db랑 연결할거야 오케이 ?
import { createConnection } from "typeorm";
import { ApolloServer, gql } from "apollo-server";
import Board from "./Board.mysql";

//graphql 쿼리
const myTypeDefs = gql`
  input CreateBoardInput {
    writer: String
    title: String!
    age: Int
  }

  type AAA {
    number: Int
    writer: String
    title: String
    age: Int
  }

  type Query {
    fetchBoards: [AAA]
  }
  type Mutation {
    # 주석처리 createBoard(writer: String, title: String, age: Int): String
    createBoard(createBoardInput: CreateBoardInput!): String
    deleteBoard(number: Int!): String
  }
`;
//logic은 resolvers 에..
const myResolvers = {
  Query: {
    fetchBoards: async () => {
      //데이터베이스에서 게시물데이터 꺼내오기
      const result = await Board.find({ where: { deleteAt: null } });
      console.log(result);
      return result;
    },
  },
  Mutation: {
    // loginCheck: (parent:any, args: any)=>{

    // },
    deleteBoard: (_: any, args: any) => {
      Board.update({ number: args.number }, { deleteAt: new Date() });
      return "게시물 삭제되었다";
    },

    createBoard: async (_: any, args: any) => {
      //데이터베이스에서 게시물데이터 등록하기

      //1번째 방법
      // await Board.insert({
      //   title: "안녕하세요 테스트입니다.",
      //   writer: "흰둥이",
      //   age: 8,
      // });

      //2번째 방법
      // await Board.insert({
      //   title: args.title,
      //   writer: args.writer,
      //   age: args.age,
      // });

      //3번째 방법 스프레드 처리
      await Board.insert({
        ...args.createBoardInput,
        // title: args.createBoardInput.title,
        // writer: args.createBoardInput.writer,
        // age: args.createBoardInput.age,
      });

      return "게시물등록에 성공하였습니다!!";
    },
  },
};

//1. 아폴로서버 설정
const server = new ApolloServer({
  typeDefs: myTypeDefs,
  resolvers: myResolvers,
});

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

    //기다리는것
    server.listen({ port: 4000 });
  })
  .catch((error) => {
    //연결 실패시 실행하기!
    console.log(error);
  });
