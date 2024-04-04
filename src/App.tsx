import { createGlobalStyle } from 'styled-components';
import { Home } from "@pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductPage } from '@pages/product-page';
import { ShoppingCartProvider } from '@context/ShoppingCartContext';
import { ShoppingCart } from '@pages/ShoppingCart';
import { WishlistProvider } from '@context/WishlistContext';
import { Wishlist } from '@pages/wishlist';


function App() {

  return (
    <ShoppingCartProvider>
      <WishlistProvider>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/produto/:id' element={<ProductPage />} />
            <Route path='/carrinho' element={<ShoppingCart />} />
            <Route path='/favoritos' element={<Wishlist />} />
          </Routes>
        </BrowserRouter>
      </WishlistProvider>
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