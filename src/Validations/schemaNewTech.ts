import * as yup from "yup";

export const schemaNewTech = yup.object({
  title: yup.string().required("Insira o nome da tech!"),
  status: yup.string().required("Selecione o status!"),
});
