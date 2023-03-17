import * as yup from "yup";

export const schemaLogin = yup.object({
  email: yup.string().required("Insira seu email").email("Email inválido"),
  password: yup.string().required("Insira sua senha"),
});
