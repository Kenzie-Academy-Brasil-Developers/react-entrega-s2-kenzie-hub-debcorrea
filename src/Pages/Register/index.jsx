import {
  ButtonContainer,
  StyledContainer,
  StyledHeader,
  Title,
} from "../../Style/global";
import Logo from "../../Assets/Logo.svg";
import {
  InputContainer,
  StyledButton,
  StyledForm,
  StyledSpan,
} from "../../Components/Form/style";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "Mínimo 6 caracteres"),
    confirmPassword: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password")], "Senhas diferentes"),
    bio: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    module: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const login = ({ name, email, password, bio, contact, module }) => {
    const user = { name, email, password, bio, contact, module };
    
    console.log(user);
  };

  return (
    <>
      <StyledHeader
        width={98}
        height={17}
        lgWidth={144}
        lgHeight={20}
        ctWidth={296}
        lgCtWidth={370}
        margin={19.3}
        lgMargin={12.9}
      >
        <img src={Logo} alt="Logo da Kenzie Hub em rosa" />

        <ButtonContainer width={80} height={32} lgWidth={67.5} lgHeight={40.1}>
          <StyledButton
            onClick={() => history.push("/")}
            height={32}
            lgHeight={40.1}
            background="#212529"
            size={9.6}
            lgSize={12}
            color="#f8f9fa"
          >
            Voltar
          </StyledButton>
        </ButtonContainer>
      </StyledHeader>

      <main>
        <StyledContainer
          width={296}
          lgWidth={370}
          gap={17.6}
          lgGap={22}
          paddingH={33.6}
          paddingW={18}
          lgPaddingH={42}
          lgPaddingW={22.5}
        >
          <Title size={14.4} width={101.55} lgsize={18} lgWidth={127}>
            Crie sua conta
          </Title>

          <StyledSpan>Rapido e grátis, vamos nessa</StyledSpan>

          <StyledForm
            onSubmit={handleSubmit(login)}
            width={263.8}
            lgWidth={329.3}
          >
            <InputContainer height={38.4} lgHeight={48} error={!!errors.email}>
              <label htmlFor="name">
                Nome {errors.name && <span>- {errors.name.message}</span>}
              </label>

              <input
                id="name"
                placeholder="Digite aqui seu nome"
                {...register("name")}
              />
            </InputContainer>

            <InputContainer height={38.4} lgHeight={48} error={!!errors.email}>
              <label htmlFor="email">
                Email {errors.email && <span>- {errors.email.message}</span>}
              </label>

              <input
                id="email"
                placeholder="Digite aqui seu email"
                {...register("email")}
              />
            </InputContainer>

            <InputContainer height={38.4} lgHeight={48} error={!!errors.email}>
              <label htmlFor="password">
                Senha {errors.password && <span>- {errors.password.message}</span>}
              </label>

              <input
                id="password"
                placeholder="Digite aqui sua senha"
                type="password"
                {...register("password")}
              />
            </InputContainer>

            <InputContainer height={38.4} lgHeight={48} error={!!errors.email}>
              <label htmlFor="confirmPassword">
                Confirmar senha{" "}
                {errors.confirmPassword &&
                  <span>- {errors.confirmPassword.message}</span>}
              </label>

              <input
                id="confirmPassword"
                placeholder="Digite novamente a senha"
                type="password"
                {...register("confirmPassword")}
              />
            </InputContainer>

            <InputContainer height={38.4} lgHeight={48} error={!!errors.email}>
              <label htmlFor="bio">
                Bio {errors.bio && <span>- {errors.bio.message}</span>}
              </label>

              <input
                id="bio"
                placeholder="Fale sobre você"
                {...register("bio")}
              />
            </InputContainer>

            <InputContainer height={38.4} lgHeight={48} error={!!errors.email}>
              <label htmlFor="contact">
                Contato {errors.contact && <span>- {errors.contact.message}</span>}
              </label>

              <input
                id="contact"
                placeholder="Opção de contato"
                {...register("contact")}
              />
            </InputContainer>

            <InputContainer height={38.4} lgHeight={48}>
              <label htmlFor="module">Módulo</label>

              <select id="module" {...register("module")}>
                <option value="Primeiro módulo (Introdução ao Frontend)">
                  Primeiro módulo
                </option>

                <option value="Segundo módulo (Frontend Avançado)">
                  Segundo módulo
                </option>

                <option value="Terceiro módulo (Introdução ao Backend)">
                  Terceiro módulo
                </option>

                <option value="Quarto módulo (Backend Avançado)">
                  Quarto módulo
                </option>
              </select>
            </InputContainer>

            <StyledButton
              type="submit"
              height={38.4}
              lgHeight={48}
              background="#59323f"
              size={12.8}
              lgSize={16}
              color="#ffffff"
            >
              Cadastrar
            </StyledButton>
          </StyledForm>
        </StyledContainer>
      </main>
    </>
  );
};

export default Register;
