import { useState } from 'react';
import { dataPhones, dataHeadphones, dataWatch } from "../products";
import { Container, Content, Products } from "./style";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useWishlist } from "../../context/WishlistContext";
import { AddToCartButton } from '../add-to-cart-component';

export const dataProducts = [dataPhones, dataHeadphones, dataWatch];

export const Main = () => {
    const { addToWishlist, removeFromWishlist } = useWishlist();
    const [wishlist, setWishlist] = useState<string[]>([]);

    const toggleWishlist = (id: string) => {
        if (wishlist.includes(id)) {
            setWishlist(wishlist.filter(item => item !== id));
            removeFromWishlist(id);
        } else {
            setWishlist([...wishlist, id]);
            addToWishlist(id);
        }
    };

    return (
        <>
            <Container>
                <h2>Mais Vendidos</h2>
                <Content id="catalogo">
                    {dataProducts.map((products) => (
                        products.map((product) => {
                            const id = `${product.id}`
                            const isWishlist = wishlist.includes(id);

                            return (
                                <Products key={id}>
                                    <span onClick={() => toggleWishlist(id)}>
                                        {isWishlist ? <BsHeartFill /> : <BsHeart />}
                                    </span>
                                    <Link to={`/produto/${product.id}`} >
                                        <div>
                                            <img src={product.image} alt={product.title} />
                                        </div>
                                        <h4>{product.title}</h4>
                                        <p>R${product.cost}</p>
                                    </Link>

                                    <AddToCartButton product={product} />
                                </Products>
                            );
                        })
                    ))}
                </Content>
            </Container>
        </>
    );
};
