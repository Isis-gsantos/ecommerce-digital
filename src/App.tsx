import { createGlobalStyle } from 'styled-components';
import { Home } from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductPage } from './pages/product-page';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import { ShoppingCart } from './pages/ShoppingCart';

function App() {

  return (
    <ShoppingCartProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/produto/:category/:id' element={<ProductPage />} />
          <Route path='/carrinho' element={<ShoppingCart />} />
        </Routes>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    font-family: "Poppins", sans-serif;
    text-decoration: none;
    scroll-behavior: smooth;
  }
`;