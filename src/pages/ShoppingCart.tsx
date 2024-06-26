import { useShoppingCart } from '../context/ShoppingCartContext';
import { Link } from 'react-router-dom';
import { dataProducts } from '../components/main-content';
import { BsArrowLeftCircle, BsEmojiFrown } from "react-icons/bs";
import { ProductsContainer, ProductsContent, ProductExibtion } from './ProductPage-and-shopping-style';

export const ShoppingCart = () => {
    const { cartItems } = useShoppingCart();

    const calculateTotalSum = () => {
        let totalSum = 0;
        cartItems.forEach((cartItem) => {
            const product = dataProducts.flat().find((product) => `${product.id}` === cartItem.idCart);
            if (product) {
                totalSum += product.cost * cartItem.quantity;
            }
        });
        return totalSum;
    };

    return (
        <ProductsContainer>
            <h2>Carrinho</h2>
            <Link to="/" className='return-home'><BsArrowLeftCircle /> Página Inicial</Link>
            {cartItems.length === 0 ? (
                <div>
                    <p>Não há produtos no carrinho <BsEmojiFrown /></p>
                </div>
            ) : (
                <>
                    <ProductsContent>
                        {cartItems.map((cartItem) => {
                            const product = dataProducts.flat().find((product) => `${product.id}` === cartItem.idCart);
                            return (
                                <ProductExibtion key={cartItem.idCart}>
                                    {product && (
                                        <>
                                            <div>
                                                <img src={product.image} alt={product.title} />
                                            </div>
                                            <h4>{product.title}</h4>
                                            <p><b>R$ {product.cost}</b></p>
                                            <p><b>Quantidade:</b> {cartItem.quantity}</p>
                                        </>
                                    )}
                                </ProductExibtion>
                            );
                        })}
                    </ProductsContent>
                    <div className='total-cost'>
                        Total: <b>R${calculateTotalSum()}</b>
                    </div>
                    <a href='#' className='checkout'>Finalizar Compra</a>
                </>
            )}
        </ProductsContainer>
    );
};