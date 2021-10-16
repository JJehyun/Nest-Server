import { Cat, CatType } from "./app.model";
import { Router } from "express";
import {
  createCat,
  deleteCat,
  readAll,
  updateCat,
  updatePartialCat,
} from "./cats.service";
const router = Router();
// 하나의 고양이 조회하는 방법 하나의 local의 [{},{},{},{}]
router.get("/cats/:id", readAll);
//새로운 고양이 추가하기
router.post("/cats", createCat);
//특정고양이 전체 정보 수정하기
router.put("/cats/:id", updateCat);
//특정 고양이 특정 정보만 수정하기//구조 분해 할당 중복된 데이터가 있으면 마지막의 key값을 데이터로 사용 한다.
router.patch("/cats/:id", updatePartialCat);
//특정 고양이만 데이터 삭제하기 //filter 조건에 맞지 않은 목록만 return 받기!!
router.delete("/cats/:id", deleteCat);
export default router;
