import { createGlobalStyle } from 'styled-components';
import { Home } from "./pages/home";

function App() {

  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  )
}

export default App

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    font-family: "Poppins", sans-serif;
  }
`;