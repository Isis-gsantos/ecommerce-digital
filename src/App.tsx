import { Head } from "./components/head"
import { createGlobalStyle } from 'styled-components';

function App() {

  return (
    <>
    <GlobalStyle />
      <Head />
    </>
  )
}

export default App

const GlobalStyle = createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    font-family: "Poppins", sans-serif;
  }
`