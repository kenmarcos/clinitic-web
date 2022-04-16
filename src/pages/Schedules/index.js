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
  PatientModal,
} from "./styles";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { FiLogOut } from "react-icons/fi";
import { useState } from "react";
import { usePatient } from "../../providers/patient";
import ScheduleForm from "../../components/ScheduleForm";
import PatientForm from "../../components/PatientForm";

const Schedules = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenPatientModal, setIsOpenPatientModal] = useState(false);
  const { appointmentsByDoctor } = useAppointment();
  const { patients } = usePatient();

  const navigate = useNavigate();

  function toggleModal(e) {
    setIsOpen(!isOpen);
  }

  const handleModal = (patientId) => {
    localStorage.setItem("@clinitic:patientId", JSON.stringify(patientId));
    setIsOpen(!isOpen);
    setIsOpenModal(!isOpenModal);
  };

  const handlePatientModal = () => {
    setIsOpen(!isOpen);
    setIsOpenPatientModal(!isOpenPatientModal);
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
        <Button onClick={toggleModal} className="createtBtn patientBtn">
          Agendar paciente
        </Button>
        <CalendarContainer>
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={appointmentsByDoctor}
            headerToolbar={{
              left: "title",
              right: "dayGridWeek, dayGridMonth, prev, next",
            }}
          />
        </CalendarContainer>
        <StyledModal
          isOpen={isOpen}
          onBackgroundClick={toggleModal}
          onEscapeKeydown={toggleModal}
        >
          <Button
            onClick={handlePatientModal}
            className="createtBtn patientBtn"
          >
            Adicionar Paciente
          </Button>
          <PatientList>
            {patients?.map((patient) => (
              <PatientItems key={patient.id}>
                <h3>{patient.name}</h3>
                <span>CPF: {patient.cpf}</span>
                <Button
                  onClick={() => handleModal(patient.id)}
                  className="cancelBtn scheduleBtn"
                >
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
          <ScheduleForm
            setIsOpenModal={setIsOpenModal}
            isOpenModal={isOpenModal}
          />
        </ScheduleModal>
        <PatientModal
          isOpen={isOpenPatientModal}
          onBackgroundClick={() => setIsOpenModal(!isOpenPatientModal)}
          onEscapeKeydown={() => setIsOpenModal(!isOpenPatientModal)}
        >
          <PatientForm
            setIsOpenPatientModal={setIsOpenPatientModal}
            isOpenPatientModal={isOpenPatientModal}
          />
        </PatientModal>
      </Container>
    </>
  );
};

export default Schedules;
