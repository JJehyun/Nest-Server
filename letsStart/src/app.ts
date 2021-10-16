import * as express from "express";
import catRoute from "./cats/cats.route";

class Server {
  //생성되는 변수
  public app: express.Application;
  constructor() {
    //처음 무조건 생성되는 변수
    const app: express.Express = express(); // app 서버 역활
    this.app = app;
  }
  private setRoute() {
    //라우터 연결하는 부분
    this.app.use(catRoute);
  }
  private setMiddleware() {
    //미들웨어 실행 부분
    this.app.use(express.json());
    this.setRoute();
  }
  public listen() {
    //서버 동작하게 하는 부분
    this.app.listen(3000, () => {
      this.setMiddleware();
      console.log(`server is on http://localhost:3000...`);
    });
  }
}

function init() {
  const server = new Server();
  server.listen();
}

init();
