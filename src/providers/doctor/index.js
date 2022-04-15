import { createContext, useState, useContext } from "react";
import toast from "react-hot-toast";
import api from "../../services/api";

const DoctorContext = createContext();

export const DoctorProvider = ({ children }) => {
  const registerNewDoctor = (data, navigate) => {
    api
      .post("/doctors/", data)
      .then((_) => {
        toast.success("Parabéns!!! Cadastro feito com sucesso!");
        return navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Algo saiu mal! Tente novamente.");
      });
  };

  return (
    <DoctorContext.Provider value={{ registerNewDoctor }}>
      {children}
    </DoctorContext.Provider>
  );
};

export const useDoctor = () => useContext(DoctorContext);
