import { createContext, useState, useContext, useEffect } from "react";
import api from "../../services/api";

const AppointmentContext = createContext();

export const AppointmentProvider = ({ children }) => {
  const [dayAppointments, setDayAppointments] = useState(
    JSON.parse(localStorage.getItem("@clinitic:dayAppointments")) || []
  );
  const loggedDoctor =
    JSON.parse(localStorage.getItem("@clinitic:loggedDoctor")) || {};
  const [dayAppointmentsByDoctor, setDayAppointmentsByDoctor] = useState(
    JSON.parse(localStorage.getItem("@clinitic:dayAppointmentsByDoctor")) || []
  );

  const date = new Date();
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const currentDate = `${year}-${month}-${day}`;

  const getAppointments = () => {
    api
      .get(`/appointments?date=${currentDate}`)
      .then((res) => {
        setDayAppointments(res.data);
        localStorage.setItem(
          "@clinitic:dayAppointments",
          JSON.stringify(res.data)
        );
      })
      .catch((err) => console.log(err));
  };

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

  const cancelAppointment = (appointmentId, token) => {
    const data = { isActive: false };
    api
      .patch(`/appointments/${appointmentId}/`, data, {
        headers: { Authorization: `Token ${token}` },
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(`Token ${token}`));
  };

  const createAppointment = (data) => {
    console.log(data);
  };

  useEffect(() => {
    getAppointments();
    getAppointmentsByDoctorAndDay();
  }, []);

  return (
    <AppointmentContext.Provider
      value={{
        dayAppointments,
        getAppointments,
        cancelAppointment,
        dayAppointmentsByDoctor,
        createAppointment,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};

export const useAppointment = () => useContext(AppointmentContext);
