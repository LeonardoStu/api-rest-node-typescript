import { Request, Response } from "express";

export const create = (req: Request, res: Response) => {
  return res.send('Create')
}