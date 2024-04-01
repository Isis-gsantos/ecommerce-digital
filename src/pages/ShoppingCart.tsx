import { useShoppingCart } from '../context/ShoppingCartContext';
import { Link } from 'react-router-dom';
import { dataProducts } from '../components/main-content';

export const ShoppingCart = () => {
    const { cartItems } = useShoppingCart();

    return (
        <div>
            <h1>Carrinho de Compras</h1>
            {cartItems.length === 0 ? (
                <p>Não há produtos no carrinho.</p>
            ) : (
                <>
                    {cartItems.map((cartItem) => {
                        const product = dataProducts.flat().find((prod) => prod.id === cartItem.id);
                        return (
                            <div key={cartItem.id}>
                                {product && (
                                    <>
                                        <img src={product.image} alt={product.title} />
                                        <h4>{product.title}</h4>
                                        <p>R$ {product.cost}</p>
                                        <p>Quantidade: {cartItem.quantity}</p>
                                        <p>item no carrinho</p>
                                    </>
                                )}
                                <p>item no carrinho</p>
                                <p>Quantidade: {cartItem.quantity}</p>
                            </div>
                        );
                    })}
                    <Link to="/checkout">Finalizar Compra</Link>
                </>
            )}
        </div>
    );
};