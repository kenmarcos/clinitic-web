import { DoctorProvider } from "./doctor";
import { AppointmentProvider } from "./appointment";

const Providers = ({ children }) => {
  return (
    <AppointmentProvider>
      <DoctorProvider>{children}</DoctorProvider>;
    </AppointmentProvider>
  );
};

export default Providers;
