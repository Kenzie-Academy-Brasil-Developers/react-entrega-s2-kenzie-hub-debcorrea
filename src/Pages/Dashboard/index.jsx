import { StyledButton } from "../../Components/Form/style";
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

import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { GoPlus } from "react-icons/go";

const Dashboard = () => {
  const history = useHistory();

  const [user, setUser] = useState({});

  useEffect(() => {
    api
      .get(`/users/${localStorage.getItem("kenzieHubId")}`)
      .then((res) => setUser(res.data));
  }, []);

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

          <button>
            <GoPlus color="white" />
          </button>
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
