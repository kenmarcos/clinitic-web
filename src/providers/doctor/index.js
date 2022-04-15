import { createContext, useState, useContext } from "react";
import toast from "react-hot-toast";
import api from "../../services/api";

const DoctorContext = createContext();

export const DoctorProvider = ({ children }) => {
  const [token, setToken] = useState(
    localStorage.getItem("@clinitic:token") || ""
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
        navigate("/dashboard");
        toast.success("Seja bem-vindo! Login feito com sucesso!");
        getLoggedDoctor(data.email);
      })
      .catch((_) => toast.error("E-mail ou senha inválidos."));
  };

  const getLoggedDoctor = (email) => {
    api
      .get(`/doctors/${email}/`)
      .then((res) => {
        localStorage.setItem(
          "@clinitic:loggedDoctor",
          JSON.stringify(res.data)
        );
        setLoggedDoctor(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <DoctorContext.Provider
      value={{ registerNewDoctor, login, token, loggedDoctor }}
    >
      {children}
    </DoctorContext.Provider>
  );
};

export const useDoctor = () => useContext(DoctorContext);
