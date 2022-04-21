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
  EventModal,
  InputSearch,
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
  const [isOpenEventModal, setIsOpenEventModal] = useState(false);

  const [eventInfo, setEventInfo] = useState({});

  const [inputValue, setInputValue] = useState("");
  const [patientsFound, setPatientsFound] = useState([]);

  const {
    appointmentsByDoctorAndIsActive,
    getAppointmentsByDoctorAndIsActive,
  } = useAppointment();
  const { patients, getPatients } = usePatient();

  const { logout } = useDoctor();

  const calendarRef = createRef();

  const navigate = useNavigate();

  function toggleModal(e) {
    setInputValue("");
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

  const toggleEventModal = (info) => {
    setEventInfo(info.event);
    setIsOpenEventModal(!isOpenEventModal);
  };

  const searchPatients = (inputSearch) => {
    setInputValue(inputSearch);
    setPatientsFound(
      patients.filter((patient) =>
        patient.name.toLowerCase().includes(inputValue.toLowerCase())
      )
    );
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
            locale={"pt"}
            events={appointmentsByDoctorAndIsActive}
            headerToolbar={{
              left: "title",
              right: "dayGridWeek,dayGridMonth,prev,next",
            }}
            buttonText={{
              dayGridWeek: "Semanal",
              dayGridMonth: "Mensal",
            }}
            eventClick={toggleEventModal}
          />
        </CalendarContainer>
        <EventModal
          isOpen={isOpenEventModal}
          onBackgroundClick={toggleEventModal}
          onEscapeKeydown={toggleEventModal}
        >
          <h3>{eventInfo?.title}</h3>
          <h3>
            Horário:
            {` ${String(eventInfo?.start?.getHours()).padStart(
              2,
              "0"
            )}h${String(eventInfo?.start?.getMinutes()).padStart(2, "0")}`}
          </h3>
          <ul>
            <li>
              <p>Pcte: {eventInfo?._def?.extendedProps?.patient.name}</p>
            </li>
            <li>
              <p>CPF: {eventInfo?._def?.extendedProps?.patient.cpf}</p>
            </li>
            <li>
              <p>
                Sexo:
                {eventInfo?._def?.extendedProps?.patient.sex === "M"
                  ? " Masculino"
                  : " Feminino"}
              </p>
            </li>
            <li>
              <p>
                Idade:{" "}
                {new Date().getMonth() <
                  new Date(
                    eventInfo?._def?.extendedProps?.patient.birth_date
                  ).getMonth() ||
                (new Date().getMonth() ===
                  new Date(
                    eventInfo?._def?.extendedProps?.patient.birth_date
                  ).getMonth() &&
                  new Date().getDate() <
                    new Date(
                      eventInfo?._def?.extendedProps?.patient.birth_date
                    ).getDate())
                  ? new Date().getFullYear() -
                    new Date(
                      eventInfo?._def?.extendedProps?.patient.birth_date
                    ).getFullYear() -
                    1 +
                    " anos"
                  : new Date().getFullYear() -
                    new Date(
                      eventInfo?._def?.extendedProps?.patient.birth_date
                    ).getFullYear() +
                    " anos"}
              </p>
            </li>
          </ul>
        </EventModal>
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
            <InputSearch
              type="search"
              placeholder="Pesquisar..."
              value={inputValue}
              onChange={(e) => {
                searchPatients(e.target.value);
              }}
            />
          </div>
          <PatientList>
            {inputValue === "" && !!patients.length ? (
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
            ) : inputValue !== "" ? (
              patientsFound.map((patient) => (
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
