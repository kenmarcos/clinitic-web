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
import { useDoctor } from "../../providers/doctor";
import IndicatorCard from "../../components/IndicatorCard";
import { weekdays, months } from "../../utils/dates";
import { BsCalendar2Check, BsCalendar2X } from "react-icons/bs";
import { useEffect, useState } from "react";
import { IoAlertCircle } from "react-icons/io5";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    cancelAppointment,
    getAppointmentsByDoctorAndDay,
    dayAppointmentsByDoctor,
  } = useAppointment();

  const { logout } = useDoctor();

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
    cancelAppointment(appointmentId);
    toggleModal();
  };

  useEffect(() => {
    getAppointmentsByDoctorAndDay();
  }, []);

  return (
    <>
      <Header>
        <Button
          onClick={() => navigate("/schedules")}
          className="headerMainBtn"
        >
          Agendamentos
        </Button>
        <LogoutContainer onClick={logout}>
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
          <IoAlertCircle />
          <h3>Tem certeza que quer cancelar esse atendimento?</h3>
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
            {!!dayAppointmentsByDoctor.length ? (
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
            ) : (
              <h2>Não há atendimentos agendados para hoje.</h2>
            )}
          </SchedulesBox>
        </ContentBox>
      </Container>
    </>
  );
};

export default Dashboard;
