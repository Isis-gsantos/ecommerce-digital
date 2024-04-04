import { Link, useParams } from "react-router-dom";
import { Products } from "../components/products";
import { ProductPageContainer, ProductPageContainerImage, ProductPageContent } from "./ProductPage-and-shopping-style";
import { BsArrowLeftCircle } from "react-icons/bs";
import { Navbar } from "../components/head/navbar";
import { dataProducts } from "../components/main-content";
import { AddToCartButton } from '../components/add-to-cart-component';

export const ProductPage = () => {
    const { id } = useParams<{ id: string }>();

    let product: Products | undefined;
    dataProducts.forEach((products) => {
        products.forEach((item) => {
            if (item.id === id) {
                product = item;
            }
        });
    });

    if (!product) {
        return (
            <>
                <div>Produto não encontrado</div>
                <Link to="/"><BsArrowLeftCircle /> Página Inicial</Link>
            </>
        );
    }

    return (
        <>
            <div style={{ background: 'linear-gradient(270deg, rgba(101,94,97,1) 0%, rgba(37,36,36,1) 100%)' }}>
                <Navbar />
            </div>
            <ProductPageContainer>
                <article key={product.id}>
                    <ProductPageContainerImage>
                        <img src={product.image} alt={product.title} />
                    </ProductPageContainerImage>

                    <ProductPageContent>
                        <Link to="/"><BsArrowLeftCircle /> Página Inicial</Link>
                        <h4>{product.title}</h4>
                        <p>R${product.cost}</p>
                        
                        <AddToCartButton product={product} />
                    </ProductPageContent>
                </article>
            </ProductPageContainer>
        </>
    );
};