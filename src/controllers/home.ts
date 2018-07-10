import { Request, Response, NextFunction } from "express";

const sleep = async (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

/**
 * GET /
 * Home page.
 */
export const index = (req: Request, res: Response, next: NextFunction) => {
  res.json({ data: "ok" });
};

/**
* GET /async
* async
*/
export const asyncFun = async (req: Request, res: Response, next: NextFunction) => {
  await sleep(3000);
  res.json({ data: "ok" });
};
