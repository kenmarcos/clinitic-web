import Header from "../../components/Header";
import Button from "../../components/Button";
import { FiLogOut } from "react-icons/fi";
import {
  LogoutContainer,
  Container,
  ContentBox,
  CardsBox,
  Title,
  SchedulesBox,
  SchedulesList,
  SchedulesItems,
  StyledModal,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { useAppointment } from "../../providers/appointment";
import IndicatorCard from "../../components/IndicatorCard";
import { weekdays, months } from "../../utils/dates";
import { BsCalendar2Check, BsCalendar2X } from "react-icons/bs";
import { useState } from "react";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    dayAppointments,
    cancelAppointment,
    getAppointments,
    dayAppointmentsByDoctor,
  } = useAppointment();

  const navigate = useNavigate();

  function toggleModal(e) {
    setIsOpen(!isOpen);
  }

  const date = new Date();
  const weekday = weekdays[date.getDay()];
  const day = String(date.getDate()).padStart(2, "0");
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  const handleModal = (appointmentId) => {
    toggleModal();
    localStorage.setItem(
      "@clinitic:appointmentId",
      JSON.stringify(appointmentId)
    );
  };

  const handleCancel = () => {
    const appointmentId = JSON.parse(
      localStorage.getItem("@clinitic:appointmentId")
    );
    const token = JSON.parse(localStorage.getItem("@clinitic:token"));
    cancelAppointment(appointmentId, token);
    getAppointments();
    toggleModal();
  };

  return (
    <>
      <Header>
        <Button
          onClick={() => navigate("/schedules")}
          className="headerMainBtn"
        >
          Agendamentos
        </Button>
        <LogoutContainer onClick={() => navigate("/")}>
          <Button className="loginBtn logoutBtn">Logout</Button>
          <FiLogOut />
        </LogoutContainer>
      </Header>
      <Container>
        <StyledModal
          isOpen={isOpen}
          onBackgroundClick={toggleModal}
          onEscapeKeydown={toggleModal}
        >
          <h3>Quer mesmo cancelar esse atendimento?</h3>
          <div>
            <Button onClick={toggleModal} className="cancelBtn basicBtn">
              Não
            </Button>
            <Button onClick={handleCancel} className="cancelBtn">
              Confirmar
            </Button>
          </div>
        </StyledModal>
        <ContentBox>
          <Title>{`${weekday}, ${day} de ${month} de ${year}`}</Title>
          <CardsBox>
            <IndicatorCard
              indicator={
                dayAppointmentsByDoctor.length -
                dayAppointmentsByDoctor.filter(
                  (appointment) => appointment.isActive === false
                ).length
              }
              icon={BsCalendar2Check}
            >
              Atendimentos
            </IndicatorCard>
            <IndicatorCard
              indicator={
                dayAppointmentsByDoctor.filter(
                  (appointment) => appointment.isActive === false
                ).length
              }
              icon={BsCalendar2X}
              color="red"
            >
              Cancelados
            </IndicatorCard>
          </CardsBox>
        </ContentBox>
        <ContentBox>
          <Title>Agendamentos do dia</Title>
          <SchedulesBox>
            <SchedulesList>
              {dayAppointmentsByDoctor.map((appointment) => (
                <SchedulesItems key={appointment.id}>
                  <h3>{appointment.title}</h3>
                  <span>Paciente: {appointment.patient["name"]}</span>
                  <span>Horário: {appointment.start.slice(-9, -4)}</span>
                  {appointment.isActive ? (
                    <Button
                      onClick={() => handleModal(appointment.id)}
                      className="cancelBtn"
                    >
                      Cancelar
                    </Button>
                  ) : (
                    <small>Cancelado</small>
                  )}
                </SchedulesItems>
              ))}
            </SchedulesList>
          </SchedulesBox>
        </ContentBox>
      </Container>
    </>
  );
};

export default Dashboard;
