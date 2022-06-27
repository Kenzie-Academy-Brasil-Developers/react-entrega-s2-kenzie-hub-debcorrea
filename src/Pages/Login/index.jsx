import { StyledContainer, StyledHeader, Title } from "../../Style/global";
import Logo from "../../Assets/Logo.svg";
import {
  BottomContainer,
  InputContainer,
  StyledButton,
  StyledForm,
} from "../../Components/Form/style";
import api from "../../Services/api";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "Mínimo 6 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const login = (user) => {
    api
      .post("/sessions", user)
      .then((res) => {
        localStorage.clear();
        localStorage.setItem("kenzieHubToken", res.data.token);
        localStorage.setItem("kenzieHubId", res.data.user.id);

        toast.success("Login feito com sucesso!");
        
        return history.push("/dashboard");
      })
      .catch(() => toast.error("Opa! Algo deu errado"));
  };

  return (
    <>
      <StyledHeader width={101} height={14} lgWidth={144} lgHeight={20}>
        <img src={Logo} alt="Logo da Kenzie Hub em rosa" />
      </StyledHeader>

      <main>
        <StyledContainer
          width={296}
          lgWidth={369}
          gap={22.83}
          lgGap={28.46}
          paddingH={33.69}
          paddingW={17.65}
          lgPaddingH={42}
          lgPaddingW={22}
        >
          <Title size={14.4} width={39} lgsize={18} lgWidth={49}>
            Login
          </Title>

          <StyledForm
            onSubmit={handleSubmit(login)}
            width={264.66}
            lgWidth={330}
          >
            <InputContainer height={38.5} lgHeight={48} error={!!errors.email}>
              <label htmlFor="email">
                Email {errors.email && <span>- {errors.email.message}</span>}
              </label>

              <input
                id="email"
                placeholder="Digite aqui seu email"
                {...register("email")}
              />
            </InputContainer>

            <InputContainer
              height={38.5}
              lgHeight={48}
              error={!!errors.password}
            >
              <label htmlFor="password">
                Senha{" "}
                {errors.password && <span>- {errors.password.message}</span>}
              </label>

              <input
                id="password"
                type="password"
                placeholder="Digite aqui sua senha"
                {...register("password")}
              />
            </InputContainer>

            <StyledButton
              type="submit"
              height={38.5}
              lgHeight={48}
              background="#ff577f"
              size={12.8}
              lgSize={16}
              color="#ffffff"
            >
              Enviar
            </StyledButton>
          </StyledForm>

          <BottomContainer>
            <span>Ainda não possui uma conta?</span>

            <StyledButton
              onClick={() => history.push("/register")}
              height={38.5}
              lgHeight={48}
              background="#868e96"
              size={12.8}
              lgSize={16}
              color="#f8f9fa"
            >
              Cadastre-se
            </StyledButton>
          </BottomContainer>
        </StyledContainer>
      </main>
    </>
  );
};

export default Login;
