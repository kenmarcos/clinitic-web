import { createContext, useState, useContext } from "react";
import toast from "react-hot-toast";
import api from "../../services/api";

const DoctorContext = createContext();

export const DoctorProvider = ({ children }) => {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("@clinitic:token")) || ""
  );
  const [loggedDoctor, setLoggedDoctor] = useState(
    JSON.parse(localStorage.getItem("@clinitic:loggedDoctor")) || {}
  );

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

  const login = (data, navigate) => {
    api
      .post("/login/", data)
      .then((res) => {
        localStorage.clear();
        localStorage.setItem("@clinitic:token", JSON.stringify(res.data.token));
        setToken(res.data.token);
        localStorage.setItem(
          "@clinitic:loggedDoctor",
          JSON.stringify(res.data.doctor)
        );
        setLoggedDoctor(res.data.doctor);
        navigate("/dashboard");

        toast.success("Seja bem-vindo! Login feito com sucesso!");
      })
      .catch((_) => toast.error("E-mail ou senha inválidos."));
  };

  const logout = () => {
    localStorage.removeItem("@clinitic:token");
    localStorage.removeItem("@clinitic:loggedDoctor");
    localStorage.removeItem("@clinitic:dayAppointmentsByDoctor");
    localStorage.removeItem("@clinitic:appointmentsByDoctor");
    localStorage.removeItem("@clinitic:appointmentsByDoctorAndIsActive");
    localStorage.removeItem("@clinitic:patients");

    setToken("");
    setLoggedDoctor({});
  };

  return (
    <DoctorContext.Provider
      value={{ registerNewDoctor, login, token, loggedDoctor, logout }}
    >
      {children}
    </DoctorContext.Provider>
  );
};

export const useDoctor = () => useContext(DoctorContext);
