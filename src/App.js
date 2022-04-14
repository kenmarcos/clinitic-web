import { GlobalStyle } from "./styles/global";
import Router from "./routes";
import { ModalProvider } from "styled-react-modal";

function App() {
  return (
    <>
      <GlobalStyle />
      <ModalProvider>
        <Router />
      </ModalProvider>
    </>
  );
}

export default App;
