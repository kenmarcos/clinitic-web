import { createContext, useState, useContext, useEffect } from "react";
import toast from "react-hot-toast";
import api from "../../services/api";
import { useDoctor } from "../doctor";

const AppointmentContext = createContext();

export const AppointmentProvider = ({ children }) => {
  const [dayAppointmentsByDoctor, setDayAppointmentsByDoctor] = useState(
    JSON.parse(localStorage.getItem("@clinitic:dayAppointmentsByDoctor")) || []
  );
  const [appointmentsByDoctor, setAppointmentsByDoctor] = useState(
    JSON.parse(localStorage.getItem("@clinitic:appointmentsByDoctor")) || []
  );
  const [appointmentsByDoctorAndIsActive, setAppointmentsByDoctorAndIsActive] =
    useState(
      JSON.parse(
        localStorage.getItem("@clinitic:appointmentsByDoctorAndIsActive")
      ) || []
    );

  const { token, loggedDoctor } = useDoctor();

  const date = new Date();
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const currentDate = `${year}-${month}-${day}`;

  const getAppointmentsByDoctorAndDay = () => {
    api
      .get(`/appointments/doctors/${loggedDoctor.id}?date=${currentDate}`)
      .then((res) => {
        setDayAppointmentsByDoctor(res.data);
        localStorage.setItem(
          "@clinitic:dayAppointmentsByDoctor",
          JSON.stringify(res.data)
        );
      })
      .catch((err) => console.log(err));
  };

  const getAppointmentsByDoctor = () => {
    api
      .get(`/appointments/doctors/${loggedDoctor.id}/`)
      .then((res) => {
        setAppointmentsByDoctor(res.data);
        localStorage.setItem(
          "@clinitic:appointmentsByDoctor",
          JSON.stringify(res.data)
        );
      })
      .catch((err) => console.log(err));
  };

  const getAppointmentsByDoctorAndIsActive = () => {
    api
      .get(`/appointments/doctors/${loggedDoctor.id}?isActive=true`)
      .then((res) => {
        setAppointmentsByDoctorAndIsActive(res.data);
        localStorage.setItem(
          "@clinitic:appointmentsByDoctorAndIsActive",
          JSON.stringify(res.data)
        );
      })
      .catch((err) => console.log(err));
  };

  const cancelAppointment = (appointmentId) => {
    const data = { isActive: false };
    api
      .patch(`/appointments/${appointmentId}/`, data, {
        headers: { Authorization: `Token ${token}` },
      })
      .then((_) => {
        toast.success("Atendimento cancelado.");
        getAppointmentsByDoctorAndDay();
        getAppointmentsByDoctorAndIsActive();
      })
      .catch((_) => toast.error("Algo deu mal. Tente novamente."));
  };

  const createAppointment = (data, patientId) => {
    api
      .post(`/appointments/patients/${patientId}/`, data, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((_) => {
        toast.success("Agendamento feito com sucesso");
        getAppointmentsByDoctorAndIsActive();
        getAppointmentsByDoctorAndDay();
      })
      .catch((_) => toast.error("Algo deu mal. Tente novamente."));
  };

  return (
    <AppointmentContext.Provider
      value={{
        // dayAppointments,
        // getAppointments,
        cancelAppointment,
        dayAppointmentsByDoctor,
        createAppointment,
        appointmentsByDoctor,
        appointmentsByDoctorAndIsActive,
        getAppointmentsByDoctorAndDay,
        getAppointmentsByDoctorAndIsActive,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};

export const useAppointment = () => useContext(AppointmentContext);
