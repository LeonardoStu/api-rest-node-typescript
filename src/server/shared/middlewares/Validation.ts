import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { ObjectSchema, ValidationError } from "yup";

type TPropert = "body" | "header" | "params" | "query";

type TGetSchema = <T extends object>(
  schemas: ObjectSchema<T>
) => ObjectSchema<T>;

type TALLSchemas = Record<TPropert, ObjectSchema<any>>;

type TGetAllSchemas = (getschema: TGetSchema) => Partial<TALLSchemas>;

type TValidation = (getAllSchemas: TGetAllSchemas) => RequestHandler;

export const Validation: TValidation =
  (getAllSchemas) => async (req, res, next) => {
    const schemas = getAllSchemas((schema) => schema);

    const errorsResult: Record<string, Record<string, string>> = {};

    Object.entries(schemas).forEach(([key, schema]) => {
      try {
        schema.validateSync(req[key as TPropert], { abortEarly: false });
      } catch (err) {
        const yupError = err as ValidationError;
        const errors: Record<string, string> = {};

        yupError.inner.forEach((error) => {
          if (!error.path) return;
          errors[error.path] = error.message;
        });

        errorsResult[key] = errors;
      }
    });

    if (Object.entries(errorsResult).length === 0) {
      return next();
    } else {
      return res.status(StatusCodes.BAD_REQUEST).json({ errors: errorsResult });
    }
  };
