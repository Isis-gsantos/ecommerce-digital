import { useShoppingCart } from "../../context/ShoppingCartContext";
import { dataPhones, dataHeadphones, dataWatch } from "../products";
import { Container, Content, Products, StyledButtonCart } from "./style";
import { BsHeartFill, BsFillTrash3Fill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const dataProducts = [dataPhones, dataHeadphones, dataWatch];

export const Main = () => {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();

    return (
        <>
            <Container>
                <h2>Mais Vendidos</h2>
                <Content id="catalogo">
                    {dataProducts.map((products, index) => (
                        products.map((product) => {
                            const id = `${index}-${product.id}`
                            const quantity = getItemQuantity(id) 

                            return (
                                <Products key={id}>
                                    <Link to={`/product-page/${index}/${product.id}`} state={{ category: index }}>
                                        <span><BsHeartFill className="icon" /></span>
                                        <div>
                                            <img src={product.image} alt={product.title} />
                                        </div>
                                        <h4>{product.title}</h4>
                                        <p>R${product.cost}</p>
                                    </Link>
                                    <div>
                                        {quantity === 0 ? (
                                            <button onClick={() => increaseCartQuantity(id)}>
                                                Adicionar ao carrinho
                                            </button>
                                        ) : (
                                            <article>
                                                <StyledButtonCart>
                                                    <button onClick={() => increaseCartQuantity(id)}>+</button>
                                                    <p>{quantity}</p>
                                                    <button onClick={() => decreaseCartQuantity(id)}>-</button>
                                                    <button className="removeFromCart" onClick={() => removeFromCart(id)}><BsFillTrash3Fill /></button>
                                                </StyledButtonCart>
                                            </article>
                                        )}
                                    </div>
                                </Products>
                            );
                        })
                    ))}
                </Content>
            </Container>
        </>
    );
};
