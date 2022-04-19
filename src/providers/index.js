import { DoctorProvider } from "./doctor";
import { AppointmentProvider } from "./appointment";
import { PatientProvider } from "./patient";

const Providers = ({ children }) => {
  return (
    <DoctorProvider>
      <PatientProvider>
        <AppointmentProvider>{children}</AppointmentProvider>
      </PatientProvider>
    </DoctorProvider>
  );
};

export default Providers;
