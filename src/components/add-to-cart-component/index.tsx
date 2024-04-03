import { useShoppingCart } from "../../context/ShoppingCartContext";
import { BsFillTrash3Fill } from "react-icons/bs";
import { Products } from "../products";
import styled from "styled-components";
import { colors } from "../../variables";

export const AddToCartButton = (product: Products) => {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
    const id = product ? `${product.id}` : ''
    const quantity = getItemQuantity(id)

    return (
        <div>
            {quantity === 0 ? (
                <Button onClick={() => increaseCartQuantity(id)}>
                    Adicionar ao carrinho
                </Button>
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
    )
};

const Button = styled.button`
    border: none;
    background-color: ${colors.darkGrey};
    color: ${colors.white};
    padding: 10px;
    border-radius: 10px;
    font-size: 15px;
    font-weight: 600;
    width: 100%;
    cursor: pointer;
`;

const StyledButtonCart = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;

    button {
        font-size: 16px;
        height: 30px;
        border-radius: 5px;
        display: flex;
        align-items: center;
    }

    .removeFromCart {
            color: red;
            background-color: transparent;
            font-size: 18px;
        }
`;