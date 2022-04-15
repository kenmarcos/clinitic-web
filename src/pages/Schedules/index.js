import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useAppointment } from "../../providers/appointment";
import {
  Container,
  LogoutContainer,
  CalendarContainer,
  StyledModal,
  PatientList,
  PatientItems,
  ScheduleModal,
} from "./styles";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { FiLogOut } from "react-icons/fi";
import { useState } from "react";
import { usePatient } from "../../providers/patient";
import ScheduleForm from "../../components/ScheduleForm";

const Schedules = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { dayAppointmentsByDoctor } = useAppointment();
  const { patients } = usePatient();

  const navigate = useNavigate();

  function toggleModal(e) {
    setIsOpen(!isOpen);
  }

  const handleModal = () => {
    setIsOpen(!isOpen);
    setIsOpenModal(!isOpenModal);
  };

  return (
    <>
      <Header>
        <Button
          onClick={() => navigate("/dashboard")}
          className="headerMainBtn"
        >
          Dashboard
        </Button>
        <LogoutContainer onClick={() => navigate("/")}>
          <Button className="loginBtn logoutBtn">Logout</Button>
          <FiLogOut />
        </LogoutContainer>
      </Header>
      <Container>
        <CalendarContainer>
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={dayAppointmentsByDoctor}
            headerToolbar={{
              left: "title",
              right: "dayGridWeek, dayGridMonth, prev, next",
            }}
          />
        </CalendarContainer>
        <Button onClick={toggleModal}>Agendar paciente</Button>
        <StyledModal
          isOpen={isOpen}
          onBackgroundClick={toggleModal}
          onEscapeKeydown={toggleModal}
        >
          <PatientList>
            {patients?.map((patient) => (
              <PatientItems key={patient.id}>
                <h3>{patient.name}</h3>
                <span>CPF: {patient.cpf}</span>
                <Button onClick={handleModal} className="cancelBtn scheduleBtn">
                  Agendar
                </Button>
              </PatientItems>
            ))}
          </PatientList>
        </StyledModal>
        <ScheduleModal
          isOpen={isOpenModal}
          onBackgroundClick={() => setIsOpenModal(!isOpenModal)}
          onEscapeKeydown={() => setIsOpenModal(!isOpenModal)}
        >
          <ScheduleForm />
        </ScheduleModal>
      </Container>
    </>
  );
};

export default Schedules;
