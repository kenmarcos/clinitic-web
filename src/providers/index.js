import { DoctorProvider } from "./doctor";
import { AppointmentProvider } from "./appointment";
import { PatientProvider } from "./patient";

const Providers = ({ children }) => {
  return (
    <PatientProvider>
      <AppointmentProvider>
        <DoctorProvider>{children}</DoctorProvider>;
      </AppointmentProvider>
    </PatientProvider>
  );
};

export default Providers;
