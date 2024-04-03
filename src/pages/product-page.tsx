import { Link, useParams } from "react-router-dom";
import { Products } from "../components/products";
import { Container, ContainerImage, Content } from "./style-product-page";
import { BsArrowLeftCircle } from "react-icons/bs";
import { Navbar } from "../components/head/navbar";
import { dataProducts } from "../components/main-content";

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
            <Container>
                <article key={product.id}>
                    <ContainerImage>
                        <img src={product.image} alt={product.title} />
                    </ContainerImage>

                    <Content>
                        <Link to="/"><BsArrowLeftCircle /> Página Inicial</Link>
                        <h4>{product.title}</h4>
                        <p>R${product.cost}</p>
                        <button>Adicionar ao Carrinho</button>
                    </Content>
                </article>
            </Container>
        </>
    );
};