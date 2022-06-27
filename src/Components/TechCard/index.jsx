import { Card } from "./style";
import {
  InputContainer,
  StyledButton,
  StyledForm,
} from "../../Components/Form/style";
import "../../Pages/Dashboard/style.css";
import api from "../../Services/api";

import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import Modal from "react-modal";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

Modal.setAppElement("#root");

const TechCard = ({ tech }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  const schema = yup.object().shape({
    status: yup.string(),
  });

  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    api
      .put(`/users/techs/${tech.id}`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("kenzieHubToken")}`,
        },
      })
      .then(() => {
        toast.success("Tecnologia editada com sucesso!");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      })
      .catch(() => {
        toast.error("Opa! Algo deu errado");
        setIsOpen(false);
      });
  };

  const deleteTech = () => {
    api
      .delete(`/users/techs/${tech.id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("kenzieHubToken")}`,
        },
      })
      .then(() => {
        toast.success("Tecnologia excluída com sucesso!");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      })
      .catch(() => {
        toast.error("Opa! Algo deu errado");
        setIsOpen(false);
      });
  };

  return (
    <Card onClick={openModal}>
      <h3>{tech.title}</h3>
      <p>{tech.status}</p>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Editar tecnologias"
        className="Modal"
        overlayClassName="Overlay"
      >
        <div className="top">
          <h3>Tecnologia detalhes</h3>

          <button onClick={closeModal}>
            <AiOutlineClose color="#868e96" />
          </button>
        </div>

        <div className="bottom">
          <StyledForm
            width={264.66}
            lgWidth={329.9}
            onSubmit={handleSubmit(onSubmit)}
          >
            <InputContainer height={38.5} lgHeight={48} width={329.9}>
              <label htmlFor="title">Nome do projeto</label>

              <input
                id="title"
                placeholder="Nome da tecnologia"
                value={tech.title}
                disabled
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

            <div className="btnContainer">
              <StyledButton
                type="submit"
                width={163.09}
                lgWidth={204}
                height={38.3}
                lgHeight={48}
                background="#59323f"
                size={12.8}
                lgSize={16}
                color="#ffffff"
              >
                Salvar alterações
              </StyledButton>

              <StyledButton
                onClick={() => deleteTech()}
                width={78.35}
                lgWidth={98}
                height={38.5}
                lgHeight={48}
                background="#868e96"
                size={12.8}
                lgSize={16}
                color="#ffffff"
              >
                Excluir
              </StyledButton>
            </div>
          </StyledForm>
        </div>
      </Modal>
    </Card>
  );
};

export default TechCard;
