import { createContext, useState, useContext, useEffect } from "react";
import api from "../../services/api";

const PatientContext = createContext();

export const PatientProvider = ({ children }) => {
  const [patients, setPatients] = useState(
    JSON.parse(localStorage.getItem("@clinitic:patients")) || []
  );

  const getPatients = () => {
    api
      .get("/patients/")
      .then((res) => {
        setPatients(res.data);
        localStorage.setItem("@clinitic:patients", JSON.stringify(res.data));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPatients();
  }, []);

  return (
    <PatientContext.Provider value={{ patients }}>
      {children}
    </PatientContext.Provider>
  );
};

export const usePatient = () => useContext(PatientContext);
