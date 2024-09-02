import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { Validation } from "../../shared/middlewares";

interface ICidade {
  nome: string;
}

interface IFilter {
  filter?: string;
}

export const createValidation = Validation((getschema) => ({
  body: getschema<ICidade>(
    yup.object().shape({
      nome: yup.string().required().min(3),
    })
  ),
  query: getschema<IFilter>(
    yup.object().shape({
      filter: yup.string().required().min(3),
    })
  ),
}));

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
  console.log(req.body);

  return res.send("create");
};
