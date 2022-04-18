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
import { createRef, useEffect, useState } from "react";
import { usePatient } from "../../providers/patient";
import ScheduleForm from "../../components/ScheduleForm";
import PatientForm from "../../components/PatientForm";

const Schedules = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenPatientModal, setIsOpenPatientModal] = useState(false);
  const { appointmentsByDoctorAndIsActive } = useAppointment();
  const { patients } = usePatient();
  const calendarRef = createRef();

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

  useEffect(() => {}, [appointmentsByDoctorAndIsActive]);

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
            ref={calendarRef}
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={appointmentsByDoctorAndIsActive}
            customButtons={{
              dayGridWeek: {
                text: "Semanal",
                click() {
                  const calendar = calendarRef.current;

                  if (calendar) {
                    const calendarApi = calendar.getApi();
                    calendarApi.changeView("dayGridWeek");
                  }
                },
              },
              dayGridMonth: {
                text: "Mensal",
                click() {
                  const calendar = calendarRef.current;

                  if (calendar) {
                    const calendarApi = calendar.getApi();
                    calendarApi.changeView("dayGridMonth");
                  }
                },
              },
            }}
            headerToolbar={{
              left: "title",
              right: "dayGridWeek,dayGridMonth,prev,next",
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
          onBackgroundClick={() => setIsOpenPatientModal(!isOpenPatientModal)}
          onEscapeKeydown={() => setIsOpenPatientModal(!isOpenPatientModal)}
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
