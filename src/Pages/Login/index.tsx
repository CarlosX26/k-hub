import { useContext } from "react";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

import { schemaLogin } from "../../Validations/schemaLogin";
import Logo from "../../Components/Logo";
import Loading from "../../Components/Loading";

import { UserContext } from "../../Contexts/UserContext";

import { ButtonPrimary, ButtonNavigate } from "../../Styles/Buttons";
import { FormPrimary } from "../../Styles/Forms";
import { BoxInputPassword, BoxInputPrimary } from "../../Styles/Inputs";
import { TextPrimary, TitleSecondary } from "../../Styles/Typography";
import LoginStyled from "./style";
import { iFormDataLogin } from "./types";

export const Login = () => {
  const { seePassword, setSeePassword, loading, loginUser } =
    useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormDataLogin>({
    resolver: yupResolver(schemaLogin),
  });
  return (
    <>
      <LoginStyled>
        <Logo />

        <FormPrimary
          animate={{ scale: [0, 1], opacity: [0, 1] }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onSubmit={handleSubmit(loginUser)}
        >
          <TitleSecondary>Login</TitleSecondary>

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

          <ButtonPrimary>Entrar</ButtonPrimary>

          <TextPrimary weight={700} color="--color-grey-1">
            Ainda não possui uma conta?
          </TextPrimary>

          <ButtonNavigate to="/register">Cadastre-se</ButtonNavigate>
        </FormPrimary>
      </LoginStyled>
      {loading && <Loading />}
    </>
  );
};
