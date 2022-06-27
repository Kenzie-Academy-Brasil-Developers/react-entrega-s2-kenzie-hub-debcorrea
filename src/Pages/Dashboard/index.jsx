import {
  InputContainer,
  StyledButton,
  StyledForm,
} from "../../Components/Form/style";
import {
  ButtonContainer,
  Divisor,
  GeneralContainer,
  StyledHeader,
  StyledNav,
  TechContainer,
} from "../../Style/global";
import Logo from "../../Assets/Logo.svg";
import api from "../../Services/api";
import TechCard from "../../Components/TechCard";
import "./style.css";

import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

Modal.setAppElement("#root");

const Dashboard = () => {
  const history = useHistory();

  const [user, setUser] = useState({});

  useEffect(() => {
    api
      .get(`/users/${localStorage.getItem("kenzieHubId")}`)
      .then((res) => setUser(res.data));
  }, []);

  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    status: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    api
      .post("/users/techs", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("kenzieHubToken")}`,
        },
      })
      .then(() => {
        toast.success("Tecnologia adicionada com sucesso!");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      })
      .catch(() => {
        toast.error("Você já tem essa tecnologia!");
        setIsOpen(false);
      });
  };

  return (
    <>
      <StyledNav>
        <img src={Logo} alt="Logo da Kenzie Hub em rosa" />

        <ButtonContainer width={55.5} height={32}>
          <StyledButton
            onClick={() => {
              localStorage.clear();
              history.push("/");
            }}
            height={32}
            lgHeight={40.1}
            background="#212529"
            size={12}
            color="#f8f9fa"
          >
            Sair
          </StyledButton>
        </ButtonContainer>
      </StyledNav>

      <StyledHeader>
        <Divisor>
          <div>
            <h1>Olá, {user.name}</h1>

            <p>{user.course_module}</p>
          </div>
        </Divisor>
      </StyledHeader>

      <main>
        <GeneralContainer>
          <h2>Tecnologias</h2>

          <button onClick={openModal}>
            <GoPlus color="white" />
          </button>

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Adicionar tecnologias"
            className="Modal"
            overlayClassName="Overlay"
          >
            <div className="top">
              <h3>Cadastrar Tecnologia</h3>

              <button onClick={closeModal}>
                <AiOutlineClose color="#868e96" />
              </button>
            </div>

            <div className="bottom">
              <StyledForm
                width={264.66}
                lgWidth={369}
                onSubmit={handleSubmit(onSubmit)}
              >
                <InputContainer height={38.5} lgHeight={48}>
                  <label htmlFor="title">
                    Nome {errors.title && <span>- {errors.title.message}</span>}
                  </label>

                  <input
                    id="title"
                    placeholder="Nome da tecnologia"
                    {...register("title")}
                  />
                </InputContainer>

                <InputContainer height={38.5} lgHeight={48}>
                  <label htmlFor="status">Selecionar status</label>

                  <select id="status" {...register("status")}>
                    <option value="Iniciante">Iniciante</option>

                    <option value="Intermediário">Intermediário</option>

                    <option value="Avançado">Avançado</option>
                  </select>
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
                  Cadastrar tecnologia
                </StyledButton>
              </StyledForm>
            </div>
          </Modal>
        </GeneralContainer>

        <TechContainer>
          <ul>
            {user.techs?.map((tech) => (
              <TechCard key={tech.id} tech={tech} />
            ))}
          </ul>
        </TechContainer>
      </main>
    </>
  );
};

export default Dashboard;
