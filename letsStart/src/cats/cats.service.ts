import { Cat, CatType } from "./app.model";
import { Request, Response } from "express";

//service 생성하기
export const readAll = (req: Request, res: Response) => {
  try {
    const param = req.params;
    const cat = Cat.find((array) => {
      return array.id === param.id;
    });
    res.status(200).send({
      success: true,
      data: {
        cat,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error,
    });
  }
};
//새로운 고양이 추가하기
export const createCat = (req: Request, res: Response) => {
  try {
    const data = req.body;
    Cat.push(data);
    res.status(200).send({
      success: true,
      data: {},
      Cat: { data },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error,
    });
  }
};
//특정고양이 전체 정보 수정하기
export const updateCat = (req: Request, res: Response) => {
  try {
    const param = req.params;
    const body = req.body;
    let result;
    Cat.forEach((cat) => {
      if (cat.id === param.id) {
        cat = body;
        result = cat;
      }
    });
    res.status(200).send({
      success: true,
      data: {
        result,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error,
    });
  }
};
//특정 고양이 특정 정보만 수정하기//구조 분해 할당 중복된 데이터가 있으면 마지막의 key값을 데이터로 사용 한다.
export const updatePartialCat = (req: Request, res: Response) => {
  try {
    const param = req.params;
    const body = req.body;
    let result;
    Cat.forEach((cat) => {
      if (cat.id === param.id) {
        cat = { ...cat, ...body };
        result = cat;
      }
    });
    res.status(200).send({
      success: true,
      data: {
        result,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error,
    });
  }
};
//특정 고양이만 데이터 삭제하기 //filter 조건에 맞지 않은 목록만 return 받기!!
export const deleteCat = (req: Request, res: Response) => {
  try {
    const param = req.params;
    const newCats = Cat.filter((cat) => cat.id !== param.id);
    res.status(200).send({
      success: true,
      data: {
        newCats,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error,
    });
  }
};
