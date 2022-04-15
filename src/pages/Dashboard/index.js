import Header from "../../components/Header";
import Button from "../../components/Button";
import { FiLogOut } from "react-icons/fi";
import { LogoutContainer } from "./styles";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header>
        <Button onClick={() => navigate("/schedules")} className="signUpBtn">
          Agendamentos
        </Button>
        <LogoutContainer onClick={() => navigate("/")}>
          <Button className="loginBtn logoutBtn">Logout</Button>
          <FiLogOut />
        </LogoutContainer>
      </Header>
    </>
  );
};

export default Dashboard;
