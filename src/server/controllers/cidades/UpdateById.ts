import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { Validation } from "../../shared/middlewares";

interface IParamProps {
  id?: number
}
interface IBodyProps {
    nome: string,
}

export const UpdateByIdValidation = Validation((getschema) => ({
  params: getschema<IParamProps>(
    yup.object().shape({
      id: yup.number().integer().required().moreThan(0),
    })
  ),
  body: getschema<IBodyProps>(
    yup.object().shape({
        nome: yup.string().required().min(3),
    })
  ),
}));

export const updateById = async (
  req: Request<IParamProps, {}, IBodyProps>,
  res: Response
) => {
  console.log(req.params);
  console.log(req.body);

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Não implementado por update");
};
