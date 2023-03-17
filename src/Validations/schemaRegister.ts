import * as yup from "yup";

export const schemaRegister = yup.object({
  name: yup.string().required("Insira seu nome"),
  email: yup.string().required("Insira seu email").email("email inválido"),
  password: yup
    .string()
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
    .matches(/[a-z]/, "Deve conter ao menos 1 letra minuscula")
    .matches(/(\d)/, "Deve conter ao menos um número")
    .matches(/(\W)|_/, "Deve conter um caracter especial")
    .matches(/.{8,}/, "Deve ter no minimo 8 digitos")
    .required("Insira sua senha"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Senha não confere"),
  bio: yup.string().required("Insira sua bio"),
  contact: yup.string().required("Insira uma opção de contato"),
  course_module: yup.string().required("Insira seu módulo atual"),
});
