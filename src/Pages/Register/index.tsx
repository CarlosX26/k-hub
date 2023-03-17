import { useContext } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { motion } from "framer-motion";

import Logo from "../../Components/Logo";
import Loading from "../../Components/Loading";
import { schemaRegister } from "../../Validations/schemaRegister";

import { UserContext } from "../../Contexts/UserContext";

import { ButtonNavigate, ButtonPrimary } from "../../Styles/Buttons";
import { FormPrimary } from "../../Styles/Forms";
import { TextPrimary, TitleSecondary } from "../../Styles/Typography";
import { BoxInputPassword, BoxInputPrimary } from "../../Styles/Inputs";
import RegisterStyled from "./style";
import { iFormDataRegister } from "./types";

export const Register = () => {
  const { seePassword, setSeePassword, loading, registerUser } =
    useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<iFormDataRegister>({
    resolver: yupResolver(schemaRegister),
  });

  return (
    <>
      <RegisterStyled>
        <motion.div
          animate={{ scale: [0, 1], opacity: [0, 1] }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="boxHeaderForm"
        >
          <Logo />

          <ButtonNavigate to="/">Voltar</ButtonNavigate>
        </motion.div>
        <FormPrimary
          animate={{ scale: [0, 1], opacity: [0, 1] }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onSubmit={handleSubmit(registerUser)}
        >
          <TitleSecondary>Crie sua conta</TitleSecondary>

          <TextPrimary weight={400} color="--color-grey-1">
            Rapido e grátis, vamos nessa
          </TextPrimary>

          <BoxInputPrimary>
            <input placeholder="Nome" type="text" {...register("name")} />
            <span>Nome</span>
          </BoxInputPrimary>
          <small>{errors.name?.message}</small>

          <BoxInputPrimary>
            <input placeholder="Email" type="text" {...register("email")} />
            <span>Email</span>
          </BoxInputPrimary>
          <small>{errors.email?.message}</small>

          <BoxInputPassword>
            <input
              placeholder="Senha"
              type={seePassword ? "text" : "password"}
              {...register("password")}
            />
            <span>Senha</span>
            {seePassword ? (
              <IoMdEyeOff
                onClick={() => setSeePassword((prevState) => !prevState)}
              />
            ) : (
              <IoMdEye
                onClick={() => setSeePassword((prevState) => !prevState)}
              />
            )}
          </BoxInputPassword>
          <small>{errors.password?.message}</small>

          <BoxInputPassword>
            <input
              placeholder="Confirmar Senha"
              type={seePassword ? "text" : "password"}
              {...register("confirmPassword")}
            />
            <span>Confirmar senha</span>
            {seePassword ? (
              <IoMdEyeOff
                onClick={() => setSeePassword((prevState) => !prevState)}
              />
            ) : (
              <IoMdEye
                onClick={() => setSeePassword((prevState) => !prevState)}
              />
            )}
          </BoxInputPassword>
          <small>{errors.confirmPassword?.message}</small>

          <BoxInputPrimary>
            <input placeholder="Bio" type="text" {...register("bio")} />
            <span>Bio</span>
          </BoxInputPrimary>
          <small>{errors.bio?.message}</small>

          <BoxInputPrimary>
            <input placeholder="Contato" type="text" {...register("contact")} />
            <span>Contato</span>
          </BoxInputPrimary>
          <small>{errors.contact?.message}</small>

          <select {...register("course_module")}>
            <optgroup label="Selecionar módulo">
              <option value="Primeiro módulo (Introdução ao Frontend)">
                I - Primeiro módulo (Introdução ao Frontend)
              </option>
              <option value="Segundo módulo (Frontend Avançado)">
                II - Segundo módulo (Frontend Avançado)
              </option>
              <option value="Terceiro módulo (Introdução ao Backend)">
                III - Terceiro módulo (Introdução ao Backend)
              </option>
              <option value="Quarto módulo (Backend Avançado)">
                IV - Quarto módulo (Backend Avançado)
              </option>
            </optgroup>
          </select>

          <ButtonPrimary enabled={isDirty} disabled={!isDirty}>
            Cadastrar
          </ButtonPrimary>
        </FormPrimary>
      </RegisterStyled>

      {loading && <Loading />}
    </>
  );
};
