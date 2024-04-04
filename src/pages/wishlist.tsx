import { Link } from 'react-router-dom';
import { useWishlist } from '@context/WishlistContext';
import { dataProducts } from '@components/main-content';
import { ProductsContainer, ProductsContent, ProductExibtion } from './ProductPage-and-shopping-style';
import { BsArrowLeftCircle, BsEmojiFrown } from "react-icons/bs";
import { AddToCartButton } from '@components/add-to-cart-component';

export const Wishlist = () => {
    const { wishlist, removeFromWishlist } = useWishlist();

    return (
        <ProductsContainer>
            <h2>Favoritos</h2>
            <Link to="/" className='return-home'><BsArrowLeftCircle /> Página Inicial</Link>
            
            {wishlist.length === 0 ? (
                <div>
                    Não há produtos nos favoritos <BsEmojiFrown />
                </div>
            ) : (
                <ProductsContent>
                    {wishlist.map((productId) => {
                        const product = dataProducts.flat().find((product) => `${product.id}` === productId);
                        return (
                            <ProductExibtion key={productId}>
                                {product && (
                                    <section>
                                        <div>
                                            <img src={product.image} alt={product.title} />
                                        </div>
                                        <h4>{product.title}</h4>
                                        <p><b>R$ {product.cost}</b></p>
                                        <button onClick={() => removeFromWishlist(productId)}>Remover</button>

                                        <AddToCartButton product={product} />
                                    </section>
                                )}
                            </ProductExibtion>
                        );
                    })}
                </ProductsContent>
            )}
        </ProductsContainer>
    );
};