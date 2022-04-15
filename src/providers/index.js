import { DoctorProvider } from "./doctor";

const Providers = ({ children }) => {
  return <DoctorProvider>{children}</DoctorProvider>;
};

export default Providers;
