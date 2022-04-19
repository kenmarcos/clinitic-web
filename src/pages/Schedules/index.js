import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useAppointment } from "../../providers/appointment";
import {
  Container,
  LogoutContainer,
  CalendarContainer,
  PatientList,
  PatientItems,
  StyledModal,
} from "./styles";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { FiLogOut } from "react-icons/fi";
import { createRef, useEffect, useState } from "react";
import { usePatient } from "../../providers/patient";
import ScheduleForm from "../../components/ScheduleForm";
import PatientForm from "../../components/PatientForm";
import { useDoctor } from "../../providers/doctor";

const Schedules = () => {
  const [isOpenListPatientModal, setIsOpenListPatientModal] = useState(false);
  const [isOpenSchedulePatientModal, setIsOpenSchedulePatientModal] =
    useState(false);
  const [isOpenCreatePatientModal, setIsOpenCreatePatientModal] =
    useState(false);

  const {
    appointmentsByDoctorAndIsActive,
    getAppointmentsByDoctorAndIsActive,
  } = useAppointment();
  const { patients, getPatients } = usePatient();

  const { logout } = useDoctor();

  const calendarRef = createRef();

  const navigate = useNavigate();

  function toggleModal(e) {
    setIsOpenListPatientModal(!isOpenListPatientModal);
  }

  const handleModal = (patientId) => {
    localStorage.setItem("@clinitic:patientId", JSON.stringify(patientId));
    setIsOpenListPatientModal(!isOpenListPatientModal);
    setIsOpenSchedulePatientModal(!isOpenSchedulePatientModal);
  };

  const handlePatientModal = () => {
    setIsOpenListPatientModal(!isOpenListPatientModal);
    setIsOpenCreatePatientModal(!isOpenCreatePatientModal);
  };

  useEffect(() => {
    getAppointmentsByDoctorAndIsActive();
    getPatients();
  }, []);

  return (
    <>
      <Header>
        <Button
          onClick={() => navigate("/dashboard")}
          className="headerMainBtn"
        >
          Dashboard
        </Button>
        <LogoutContainer onClick={logout}>
          <Button className="loginBtn logoutBtn">Logout</Button>
          <FiLogOut />
        </LogoutContainer>
      </Header>
      <Container>
        <CalendarContainer>
          <Button onClick={toggleModal} className="createtBtn listPatientBtn">
            Agendar paciente
          </Button>
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
          isOpen={isOpenListPatientModal}
          onBackgroundClick={toggleModal}
          onEscapeKeydown={toggleModal}
        >
          <div>
            <Button
              onClick={handlePatientModal}
              className="createtBtn listPatientBtn"
            >
              Adicionar paciente
            </Button>
          </div>
          <PatientList>
            {!!patients.length ? (
              patients.map((patient) => (
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
              ))
            ) : (
              <PatientItems>
                <p>Lista de pacientes vazia</p>
              </PatientItems>
            )}
          </PatientList>
        </StyledModal>
        <StyledModal
          isOpen={isOpenSchedulePatientModal}
          onBackgroundClick={() =>
            setIsOpenSchedulePatientModal(!isOpenSchedulePatientModal)
          }
          onEscapeKeydown={() =>
            setIsOpenSchedulePatientModal(!isOpenSchedulePatientModal)
          }
        >
          <ScheduleForm
            setIsOpenSchedulePatientModal={setIsOpenSchedulePatientModal}
            isOpenSchedulePatientModal={isOpenSchedulePatientModal}
          />
        </StyledModal>
        <StyledModal
          isOpen={isOpenCreatePatientModal}
          onBackgroundClick={() =>
            setIsOpenCreatePatientModal(!isOpenCreatePatientModal)
          }
          onEscapeKeydown={() =>
            setIsOpenCreatePatientModal(!isOpenCreatePatientModal)
          }
        >
          <PatientForm
            setIsOpenCreatePatientModal={setIsOpenCreatePatientModal}
            isOpenCreatePatientModal={isOpenCreatePatientModal}
          />
        </StyledModal>
      </Container>
    </>
  );
};

export default Schedules;
