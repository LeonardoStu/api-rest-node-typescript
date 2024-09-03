import * as create from "./Create";
import * as getAll from "./GetAll";
import * as getById from "./GetById";
import * as deleteById from "./DeleteById";
import * as UpdateById from "./UpdateById";

export const CidadesController = {
  ...create,
  ...getAll,
  ...getById,
  ...UpdateById,
  ...deleteById,
};
