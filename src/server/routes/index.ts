import { Router } from "express";
// import { StatusCodes } from 'http-status-codes'

import { CidadesController } from "../controllers";

const router = Router();

router.get("/", (req, res) => {
  return res.send("Olá dev!");
});

// Pegar todas as cidades
router.get(
  "/cidades",
  CidadesController.getAllValidation,
  CidadesController.getAll
);

// Cria uma cidade
router.post(
  "/cidades",
  CidadesController.createValidation,
  CidadesController.create
);

// Pega uma cidade por um ID
router.get(
  "/cidades/:id",
  CidadesController.getByIdValidation,
  CidadesController.getById
);

// Atualiza os dados de uma cidade por ID
router.put(
  "/cidades/:id",
  CidadesController.UpdateByIdValidation,
  CidadesController.updateById
);

// Excluir cidade por id
router.delete(
  "/cidades/:id",
  CidadesController.deleteByIdValidation,
  CidadesController.deleteById
);

export { router };
