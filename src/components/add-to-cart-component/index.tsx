import { useShoppingCart } from "@context/ShoppingCartContext";
import { BsFillTrash3Fill } from "react-icons/bs";
import { Products } from "../products";
import { Button, StyledButtonCart } from "./styled-add-to-cart";

export const AddToCartButton = ({product} : {product: Products}) => {
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