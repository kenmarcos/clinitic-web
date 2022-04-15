import { GlobalStyle } from "./styles/global";
import Router from "./routes";
import { ModalProvider } from "styled-react-modal";
import { Toaster } from "react-hot-toast";
import Providers from "./providers";

function App() {
  return (
    <>
      <GlobalStyle />
      <ModalProvider>
        <Providers>
          <Router />
        </Providers>
      </ModalProvider>
      <Toaster />
    </>
  );
}

export default App;
