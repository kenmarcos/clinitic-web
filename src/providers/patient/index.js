import { createContext, useState, useContext, useEffect } from "react";
import toast from "react-hot-toast";
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

  const createPatient = (data) => {
    api
      .post("/patients/", data)
      .then((res) => {
        setPatients([...patients, res.data]);
        toast.success("Paciente adicionado com sucesso");
      })
      .catch((_) => toast.error("Algo de mal. Tente novamente."));
  };

  useEffect(() => {
    getPatients();
  }, []);

  return (
    <PatientContext.Provider value={{ patients, createPatient }}>
      {children}
    </PatientContext.Provider>
  );
};

export const usePatient = () => useContext(PatientContext);
